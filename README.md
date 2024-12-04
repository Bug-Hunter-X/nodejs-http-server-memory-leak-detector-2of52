# Node.js HTTP Server Memory Leak

This repository demonstrates a common but easily overlooked error in Node.js HTTP servers: forgetting to call `res.end()` in the response handler.  This can lead to memory leaks, especially under heavy load.

## The Bug
The `bug.js` file contains a simple HTTP server that omits the crucial `res.end()` call.  This prevents the server from closing the response and frees up resources.  Over time, this can lead to significant memory consumption.

## The Solution
The `bugSolution.js` file provides the corrected code.  By adding `res.end()`, the server properly closes the response, releasing resources and preventing memory leaks.

## How to Reproduce
1. Clone this repository.
2. Run `node bug.js`.
3. Send multiple requests to the server (e.g., using a tool like `ab` or `wrk`).
4. Monitor the server's memory usage.  You'll likely see a steady increase in memory consumption.
5. Repeat steps 2-4 with `node bugSolution.js`.  The memory usage should remain stable.

This example highlights the importance of meticulous coding practices to prevent memory leaks in Node.js applications.