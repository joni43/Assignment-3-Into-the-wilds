# jl224dq-examination-3

As a complement to your code you should provide a assignment report. You do this by answering these below questions in your repositories README.

	•	What is the address to your application?
	Adress: https://139.59.166.193/issues



	•	Describe what you have done to make your application secure, both in code and when configuring your application server

In my code: 
Im using Crypto which is built in module in node.js. The module provides an cryptographic functionality called HMAC. Which i create for my secret password.
One aspect of MAC is that it is impossible to produce a secret key without knowing the secret key, which i called GITHUB_PASSWORD. The idea is to hash a message and key together which makes it almost impossible to find out the key. But because of length extension attacj, HMAC are more complicated
HMAC - BESKRIV LITE VAD HMAC ÄR OCH VAD DET GÖR.


	•	Describe the following parts, how you are using them and what their purpose is

	◦	Reversed proxy

    - A proxy server acts as a middle computer that exists between users computer and a host computer. It can be used to log traffic and block access to the website. Also used as speed up normal internet usages as users don't need to retrieve all information from the internet without information stored on the proxy server.

Client connect to accepts web traffic requests from a client in the local network and then proxies them to servers on the internet.

I used a reversed proxy (Nginx) for my deployment to Digital Ocean. Nginx is handing all the request to static files and taking care of encryption and decryption needed for running HTTPS.

A reversed proxy is a server that often sits behind a firewall in private network and redirects clients request to correct backend server. its protect the server by handling incoming request and respond.

You can use revers proxy for many reasons, Load balancing , Web acceleration, Security and anonymity.







	◦	Process manager

	Im using PM2 as a process manager for nodeJS application.

	◦	TLS certificates
	-	SSL / TLS is a technique used to encrypt traffic between the web server and the client browser. It is used when sensitive data is sent between site and the client. It is common to encrypt the connection at checkout in an online store when the user sends personal information. With an encrypted connection, no third party can spy on the one sent. It has become increasingly popular to encrypt all traffic sent between the visitor's computer and the web server, not just that which is extra sensitive. You can se if connection is encrypt if HTTPS instead of just http then the connection is encrypted
	SSL encryption takes the load off my web server and boosting the performance.


	◦	Environment variables



	•	What differs in your application when running it in development from running it in production?


	•	Which extra modules did you use in the assignment? Motivate the use of them and how you have make sure that they are secure enough for production


	•	Have you implemented any extra features (see below)? If so, describe them.

	No

	◦	If you are aiming for a higher grade here is also the chance to motivate it