**Setup Instructions:**

1. Install pm2: `npm i -g pm2`
2. Ensure it restarts on startup: `pm2 startup`
3. Install certificates: `chmod +x generate-certs.sh && ./generate-certs.sh`
4. Add redirect: `chmod +x setup-complete-redirect.sh && ./setup-complete-redirect.sh`
5. Start the server with pm2: `sudo pm2 start https-redirect-server.js --name safari-search-redirect` (Or start the server once: `sudo pm2 node https-redirect-server.js`)
6. In Safari, you may need to accept the self-signed certificate when it first redirects
