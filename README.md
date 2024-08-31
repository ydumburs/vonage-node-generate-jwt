Overview
======================
This code creates a simple HTTP server using Express that listens on port 3000. It reads a private key from a file and sets up an endpoint (/generate-jwt) that generates a [JSON Web Token (JWT)](https://developer.vonage.com/en/getting-started/concepts/authentication#json-web-tokens) using the [Vonage JWT library](https://github.com/Vonage/vonage-node-sdk/tree/3.x/packages/jwt) whenever a GET request is made to this endpoint. If successful, it returns the generated JWT as JSON; otherwise, it returns an error message.

How to Use
======================
1. Install the dependencies:  
```npm install express @vonage/server-sdk```
2. Add your application id on `generate-jwt.js`
3. Place your private key file on the same directory and set the key path on `generate-jwt.js`
4. Run the Node.js script:  
```node generate-jwt.js```
