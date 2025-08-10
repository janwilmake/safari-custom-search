const https = require("https");
const http = require("http");
const fs = require("fs");
const url = require("url");

// Create a self-signed certificate for HTTPS
// You can generate this with: openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes
const options = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
};

const handleRequest = (req, res) => {
  const parsedUrl = url.parse(req.url, true);

  console.log(`Intercepted request to: ${req.headers.host}${req.url}`);

  // Handle DuckDuckGo search requests
  if (parsedUrl.pathname === "/" && parsedUrl.query.q) {
    const query = parsedUrl.query.q;
    const redirectUrl = `https://letmeprompt.com/?q=${encodeURIComponent(
      query
    )}`;

    console.log(`Redirecting search "${query}" to LetMePrompt`);

    res.writeHead(302, {
      Location: redirectUrl,
      "Access-Control-Allow-Origin": "*",
    });
    res.end();
    return;
  }

  // For any other request, return a simple page
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <html>
      <body>
        <h1>Search Redirect Active</h1>
        <p>DuckDuckGo searches are being redirected to LetMePrompt</p>
        <p>Try searching something in Safari's address bar</p>
      </body>
    </html>
  `);
};

// Create HTTPS server on port 443 (requires sudo)
const httpsServer = https.createServer(options, handleRequest);

// Also create HTTP server on port 80 for fallback
const httpServer = http.createServer(handleRequest);

httpsServer.listen(443, () => {
  console.log("HTTPS redirect server running on port 443");
});

httpServer.listen(80, () => {
  console.log("HTTP redirect server running on port 80");
  console.log(
    "Make sure to update your hosts file to point duckduckgo.com to 127.0.0.1"
  );
});
