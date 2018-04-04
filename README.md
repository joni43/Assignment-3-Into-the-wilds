# jl224dq-examination-3

## As a complement to your code you should provide a assignment report. You do this by answering these below questions in your repositories README.

## What is the address to your application?
Adress: https://139.59.166.193/issues



## Describe what you have done to make your application secure, both in code and when configuring your application server



I'm using Crypto which is built in module in node.js. The module provides a cryptographic functionality called HMAC.
It is used to validate the integrity of a message. It hashes the message but also has a secret which is also hashed. So the secret is like a second validation.

I also avoiding to write, innerHTML for my js code due innerHTML normally causes an XSS vulnerability. For this im instead using createElement instead.


## Describe the following parts, how you are using them and what their purpose is

### Reversed proxy
A proxy server acts as a middle computer that exists between users computer and a host computer.It can be used to log traffic and block access to the website. Also used as speed up normal internet usages as users don't need to retrieve all information from the internet without information stored on the proxy server.

Client connect to accepts web traffic requests from a client in the local network and then proxies them to servers on the internet.

I used a reversed proxy (Nginx) for my deployment to Digital Ocean. Nginx is handing all the request to static files and taking care of encryption and decryption needed for running HTTPS.

A reversed proxy is a server that often sits behind a firewall in private network and redirects clients request to correct backend server. its protect the server by handling incoming request and respond.

You can use a reverse proxy for many reasons as Load balancing, Web acceleration, Security, and anonymity.



### Process manager
 Imagine restarting the app every time something happens, or if the application crashes without you even knowing it.I'm using PM2 as a process manager for nodeJS application to handle this, it allowing me to keep applications alive forever,
 reloading applications without downtime and facilitating common system admin tasks
 .It manages my application states, so I can start, stop, restart and delete processes. Greatness with Pm2 is it offers many features. If my application crash, it will restart and keep a log of unhandled exceptions.


### TLS certificates
SSL / TLS is a technique used to encrypt traffic between the web server and the client browser. It is used when sensitive data is sent between the site and the client. It is common to encrypt the connection at checkout in an online store when the user sends personal information. With an encrypted connection, no third party can spy on the one sent. It has become increasingly popular to encrypt all traffic sent between the visitor's computer and the web server, not just that which is extra sensitive. You can see if the connection is encrypted if HTTPS instead of just HTTP then the connection is encrypted
SSL encryption takes the load off my web server and boosting the performance


### Environment variables

I have a dotEnv file where I store my password and secret, which makes the dotENV not visible in my repo in Github. Environment variables are so that secret information stays secret. .  

###	What differs in your application when running it in development from running it in production?

In development is the environment which developers works on and in production is where I providing to the customers. It is always preferred to publish the application on development when creating an application to test it and check for errors and other important stuff (like safety) before publishing it in production because then clients, where you don't have any control or information about, can access and use the application. Which you want, but you don't want to client to use an unfinished product.

### Which extra modules did you use in the assignment? Motivate the use of them and how you have make sure that they are secure enough for production.

I have not use any extra modules, not more than what is needed and necessary for finish the examination.

### Have you implemented any extra features (see below)? If so, describe them.

No
### If you are aiming for a higher grade here is also the chance to motivate it