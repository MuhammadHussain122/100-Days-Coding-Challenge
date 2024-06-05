**Basics of Authentication**
`Authentication` is the process of verifying identity. It's not limited to individuals and can include various methods beyond usernames and passwords.
`Examples` include server authentication via TLS and server-to-server communication checks.

**Authentication Factors:**

- `Knowledge Factor:` Includes usernames, passwords, security codes, and questions.
- `Possession Factor:` Involves hard tokens (physical devices) and soft tokens (e.g., OTPs).
- `Qualities Factor:` Biometric authentication like facial, or voice recognition.

**Multifactor Authentication (MFA)** uses multiple factors from different categories for enhanced security.
`For instance`, combining a password (knowledge) with an OTP sent to a phone (possession) constitutes MFA.

`Two-Factor Authentication (2FA)` is a subset of MFA, specifically using two different factors.

**Authentication vs. Authorization:**

- `Authentication` is the process of verifying the identity of a user or system. It confirms that the user is who they claim to be. The HTTP response status code `401 (Unauthorized)` indicates that the request has not been applied because it lacks valid authentication credentials for the target resource.

- `Authorization`, on the other hand, occurs after authentication and involves checking whether an authenticated user has permission to access a specific resource or perform a particular action. The HTTP response status code `403 (Forbidden)` indicates that the server understood the request but refuses to authorize it. This status is typically used when the server does not wish to reveal exactly why the request has been refused, or when no other response is applicable.
  In summary, authentication verifies identity, while authorization checks permissions based on that verified identity.

**Authentication Strategies:**
`Basics of Authentication:`
It is the process of verifying the identity of a user or entity before granting access to resources.
It typically involves three steps:
identification, authentication, and authorization.
`Session-Based Authentication:`
This stateful method uses server-stored sessions to recognize authenticated users across requests. A session ID is generated upon successful login and sent to the client, which is then used for subsequent requests.

`Token-Based Authentication:`
A stateless protocol where a server generates a token after verifying a user’s identity. The token is then used for accessing the website or app without needing to re-enter credentials.

`JWT (JSON Web Token) Authentication:`
A compact, URL-safe method of representing claims securely between two parties. It is often used for authorization and information exchange, with the token including claims about the user.

`OAuth (Open Authorization):`
An open standard for access delegation, allowing users to grant third-party applications access to their information on other websites without sharing passwords.
`Single Sign-On (SSO):`
An authentication scheme that allows users to log in with a single ID to access multiple related but independent software systems without re-entering authentication factors.

**HTTP Basic Authentication**
`Basic Authentication` is a part of the HTTP protocol defined in RFC7617, supported natively by browsers. It's different from standard username and password authentication.

**How Basic Authentication Works:**

1. `Initial Request:` The browser sends a request without an Authorization header.
2. `Server Response:` The server responds with a 401 Unauthorized status and a WWW-Authenticate header, prompting the browser for credentials.
3. `Browser Prompt:` The browser displays a popup for the user to enter credentials.
4. `Credentials Submission:` The user enters credentials, which the browser encodes in base64 and sends back in the Authorization header.
5. `Server Verification:` The server decodes the credentials, verifies them, and if correct, grants access.

**Realm**: An additional parameter that groups pages sharing the same credentials, aiding in credential caching by the browser.

**Implementation in Node.js**:

- An express server uses a middleware for Basic Authentication.
- The middleware decodes the Authorization header and verifies the username and password.
- If authentication fails, the server prompts again with the WWW-Authenticate header.

This process ensures that only authorized users can access protected resources.

In the context of Node.js and Express, middleware refers to functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. These functions can execute code, make changes to the request and response objects, end the request-response cycle, or call the next middleware function in the stack. If a middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function; otherwise, the request will be left hanging.

```TypeScript
const express = require('express');
const app = express();
// Middleware for Basic Authentication
const basicAuthMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    res.setHeader('WWW-Authenticate', 'Basic');
    return res.status(401).send('Authentication required.');
  }

  // Decode the Authorization header (Basic base64(username:password))
  const base64Credentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');

  // Verify the username and password
  if (username === 'correctUsername' && password === 'correctPassword') {
    next(); // Proceed to the next middleware if authentication is successful
  } else {
    res.setHeader('WWW-Authenticate', 'Basic');
    res.status(401).send('Invalid username or password.');
  }
};

// Use the middleware for Basic Authentication
app.use(basicAuthMiddleware);

```
