This is a simple way to setup network-level redirect from duckduckgo.com to letmeprompt.com. You can use the same principle to use any custom search-engine.

I accomplish this by doing a network-level redirect by having a proxy server always on on 443.

You'll get a one-time warning for the certificate, but after that, you have instant redirects, which feels way more convenient than other ways

**Setup Instructions:**

1. Install pm2: `npm i -g pm2`
2. Add redirect: `chmod +x setup-complete-redirect.sh && ./setup-complete-redirect.sh`
3. Install certificates: `chmod +x generate-certs.sh && ./generate-certs.sh`
4. Start the server with pm2: `sudo pm2 start https-redirect-server.js --name safari-search-redirect` (Or start the server once: `sudo node https-redirect-server.js`)
5. Ensure it restarts on startup: `pm2 startup`
6. In Safari, you may need to accept the self-signed certificate when it first redirects
7. Ensure 'search engine' setting in Safari is set to duckduckgo
