#!/bin/bash

# Backup hosts file
sudo cp /etc/hosts /etc/hosts.backup

# Add both HTTP and HTTPS redirects
echo "127.0.0.1 duckduckgo.com" | sudo tee -a /etc/hosts
echo "127.0.0.1 www.duckduckgo.com" | sudo tee -a /etc/hosts
