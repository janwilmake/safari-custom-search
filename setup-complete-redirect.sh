#!/bin/bash

# Backup hosts file
sudo cp /etc/hosts /etc/hosts.backup

# Add both HTTP and HTTPS redirects
echo "127.0.0.1 duckduckgo.com" | sudo tee -a /etc/hosts
echo "127.0.0.1 www.duckduckgo.com" | sudo tee -a /etc/hosts

echo "Hosts file updated."
echo ""
echo "Setup complete! Now run:"
echo "1. chmod +x generate-certs.sh && ./generate-certs.sh"
echo "2. sudo node https-redirect-server.js"
echo ""
echo "Note: You'll need to run with sudo to bind to ports 80 and 443"