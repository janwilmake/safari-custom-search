#!/bin/bash

# Generate self-signed SSL certificate
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes -subj "/C=US/ST=State/L=City/O=Organization/OU=OrgUnit/CN=duckduckgo.com"

echo "SSL certificates generated (key.pem and cert.pem)"
echo "You may need to accept the self-signed certificate in Safari"