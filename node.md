# 📦 Node Interview questions  
# NodeJS Interview Questions & Answers — 2025

**NodeJS** is one of the most popular runtime environments, known for its efficiency, scalability, and ability to handle asynchronous operations. Built on Chrome’s V8 JavaScript engine, NodeJS executes JavaScript outside a browser and is used by companies like LinkedIn, Netflix, Walmart, Uber, PayPal, NASA, and many more.

This guide contains **60+ NodeJS interview questions and answers (2025)** aimed at freshers and experienced developers (3, 5, 8 years). It covers core NodeJS concepts, asynchronous programming, event-driven architecture, error handling, design patterns, and more to help you prepare for interviews.

---

## Table of Contents
1. Freshers — Basic Questions
2. Intermediate — 2+ Years
3. Experienced — 5+ Years
4. Appendix & Notes

---

## Freshers — Basic Questions

In this section we cover questions suitable for freshers.

### 1. What is NodeJS?
NodeJS is an open-source, cross-platform JavaScript runtime environment used for executing JavaScript code outside the browser. It is built on Google Chrome's V8 engine.

**Key features:**
- Single-threaded
- Non-blocking, asynchronous I/O
- Cross-platform
- Fast execution (V8 engine)
- Real-time data handling

---

### 2. What is NPM?
**NPM** (Node Package Manager) is the package manager for NodeJS. It manages dependencies via `package.json`, and provides a CLI for commands like `npm install`, `npm update`, `npm uninstall`.

---

### 3. Why is NodeJS single-threaded?
NodeJS uses a single-threaded event loop model to simplify development and efficiently handle many concurrent I/O-bound requests using non-blocking calls.

---

### 4. If NodeJS is single-threaded, how does it handle concurrency?
Node delegates I/O tasks to the system kernel (or thread pool for some operations). The event loop continues processing other tasks; when I/O completes, callbacks are queued and executed—allowing concurrency without blocking the main thread.

---

### 5. Why prefer NodeJS over Java/PHP?
- Fast I/O performance
- Huge npm ecosystem
- Great for real-time apps (chat, streaming)
- Unified JavaScript full-stack development
- Easier for front-end JS developers to adopt

---

### 6. Synchronous vs Asynchronous

| Synchronous Functions | Asynchronous Functions |
|---|---|
| Blocks execution until the task completes. | Does not block execution; allows other tasks to run concurrently. |
| Executes tasks sequentially. | Initiates tasks and proceeds while waiting for completion. |
| Returns result immediately after completion. | Returns via callback/promise/async-await when done. |
| Errors caught with try/catch easily. | Error handling uses callbacks/promises/async-await. |
| Good for simple sequential flows. | Ideal for I/O-bound, network, or parallel tasks. |

---

### 7. What are modules in NodeJS?
A module is a reusable block of code (file or folder) that encapsulates related functionality. Examples: `http`, `fs`, `path`, `os`.

---

### 8. What does `require` do?
`require()` imports built-in, local, or third-party modules into a file.

```js
const http = require('http');
```

---

### 9. What is middleware?
Middleware are functions that run between request and response — commonly used in frameworks (e.g., Express) to process requests, authentication, validation, etc.

---

### 10. How does NodeJS handle concurrency after being single-threaded?
(duplicate of Q4) Node uses event-driven, non-blocking I/O with the event loop and underlying OS kernels to manage concurrency.

---

### 11. What is control flow in NodeJS?
Control flow is the execution order of statements, including handling async operations, callbacks, and error propagation to maintain predictable program behavior.

---

### 12. What is the event loop?
The event loop listens for events and callbacks and executes them sequentially, enabling asynchronous behavior in a single-threaded runtime.

---

### 13. What is the typical control flow execution order?
1. Execution and queue handling
2. Collection and storage of data
3. Handling concurrency
4. Executing the next lines of code

---

### 14. Main disadvantages of NodeJS
- Single-threaded nature can limit CPU-bound work
- Ecosystem/compatibility can change rapidly
- Some libraries favor NoSQL; relational DB tooling historically varied

---

### 15. What is REPL?
REPL = Read, Evaluate, Print, Loop — an interactive shell for evaluating JavaScript expressions in Node.

---

### 16. How to import a module?
Use `require()` (CommonJS) or `import` (ESM). Example (CommonJS):

```js
const express = require('express');
```

---

### 17. Difference: NodeJS vs Angular

| NodeJS | Angular |
|---|---|
| Server-side runtime | Front-end framework |
| JavaScript runtime | TypeScript framework (primarily) |
| Handles server requests/responses | Builds client-side UIs |
| Non-blocking I/O model | Optimized for SPA performance |

---

### 18. What is `package.json`?
A manifest file containing project metadata, dependencies, scripts, and config.

**Example**
```json
{
  "name": "app",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": { "start": "node index.js" },
  "dependencies": { "express": "^4.21.2" }
}
```

---

### 19. Create a simple HTTP server

```js
const http = require('http');
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});
server.listen(3000, () => console.log('Server running at http://localhost:3000/'));
```

---

### 20. Commonly used libraries
- **Express.js** — web framework
- **Mongoose** — MongoDB ODM

---

### 21. Promises
Promises represent eventual completion/failure of async operations and help avoid callback hell.

---

### 22–23. Install/update/delete dependencies & import external libraries
Use `npm install`, `npm update`, `npm uninstall`. Import with `require()`:

```js
const express = require('express');
```

---

## Intermediate — (2+ years)

### 24. Event-driven programming
Programs react to events via callbacks (handlers) and an event loop that dispatches events to handlers.

---

### 25. Buffer
`Buffer` handles raw binary data. It represents fixed-size byte sequences.

---

### 26. Streams
Streams handle data in chunks. Types:
- Readable (e.g., `fs.createReadStream()`)
- Writable (e.g., `fs.createWriteStream()`)
- Duplex (read + write)
- Transform (duplex + transform)

---

### 27. Crypto module
Used for hashing, encryption, decryption, signing — built on OpenSSL primitives.

---

### 28. Callback hell
Deeply nested callbacks leading to unreadable code. Solutions: promises, async/await, generators.

---

### 29. Timers module
Global timers include `setTimeout`, `setImmediate`, `setInterval`.

**Examples**
```js
setTimeout(() => console.log('timeout'), 1000);
setImmediate(() => console.log('immediate'));
setInterval(() => console.log('interval'), 2000);
```

---

### 30. `setImmediate()` vs `process.nextTick()`

| setImmediate() | process.nextTick() |
|---|---|
| Executes after current event loop phase (check phase). | Executes immediately after current operation, before I/O/timers. |
| Runs after I/O events and before timers. | Runs before any I/O events or timers in current phase. |
| Less likely to cause stack overflow. | Can cause stack overflow if overused. |

---

### 31. HTTP request methods
GET, POST, PUT, PATCH, DELETE

---

### 32. `spawn()` vs `fork()`

| spawn() | fork() |
|---|---|
| Launches a new process with given command. | Spawns Node.js child process with IPC support. |
| Returns `ChildProcess` for interaction. | Returns `ChildProcess` with built-in IPC channel. |

Examples:
```js
spawn('ls', ['-lh']);
fork('child.js');
```

---

### 33. Passport module
Passport is an authentication middleware for Node/Express with many strategies (local, OAuth, JWT).

---

### 34. `fork` in NodeJS
`fork()` creates child processes (workers) to utilize multi-core systems; each child runs its own Node instance.

---

### 35. Three methods to avoid callback hell
- Promises
- Async/Await
- Generators

---

### 36. What is `body-parser`?
Middleware to parse incoming request bodies (JSON, URL-encoded). In modern Express, `express.json()` and `express.urlencoded()` are built-in.

---

### 37. What is CORS?
Cross-Origin Resource Sharing — browser mechanism controlling resource access from different origins. Use the `cors` npm package to configure allowed origins.

---

### 38. TLS module
`tls` provides TLS/SSL sockets for secure network communication (built on OpenSSL).

---

### 39. Can you access DOM in Node?
No — Node is server-side and cannot access the browser DOM. Use tools like `jsdom` if you need DOM-like APIs server-side.

---

### 40. How to manage packages?
Use npm (or alternatives like yarn, pnpm). Manage dependencies via `package.json` and lockfiles.

---

### 41. Purpose of `NODE_ENV`
Indicates runtime environment (`development`, `production`, `test`) to change behavior (logging, optimizations, configs).

---

### 42. Test pyramid
- Unit tests (base) — fast, many
- Integration tests — middle
- End-to-end tests — few, slow

---

## Experienced — (5+ years)

### 43. What is piping?
Connecting streams so the output of one becomes the input of another, e.g., `readStream.pipe(writeStream)`.

---

### 44. What is a cluster?
Cluster module allows creating child processes (workers) to utilize multiple CPU cores while maintaining a single master process.

---

### 45. Cluster methods
`fork()`, `isMaster` / `isWorker`, `process` (worker), `send()`, `kill()` — used to manage workers and IPC.

---

### 46. Session management
Use `express-session` and a session store (Redis, MongoDB) to persist sessions server-side; cookies typically store only a session ID.

---

### 47. Types of API functions
- Asynchronous, non-blocking functions (I/O)
- Synchronous, blocking functions (CPU-heavy)

---

### 48. Authentication & Authorization
Use strategies like Passport, JWT, OAuth. Authentication verifies identity; authorization controls access to resources.

---

### 49. File upload packages
**Multer** is widely used to handle multipart/form-data for file uploads in Express.

---

### 50. NodeJS vs Server-side languages (e.g., Python)

| NodeJS | Python / other server languages |
|---|---|
| Runtime environment for JS, event-driven, non-blocking | General-purpose language, often synchronous by default (async libraries exist) |
| Excellent for I/O-bound tasks | Often better for CPU-bound or heavy data tasks (ML, scientific) |

---

### 51. Connect NodeJS to MongoDB
Using Mongoose:
```js
const mongoose = require('mongoose');
mongoose.connect('DATABASE_URL', { useNewUrlParser: true, useUnifiedTopology: true });
```

---

### 52. Read command line arguments
Use `process.argv`:
```js
// index.js
console.log(process.argv);
// run: node index.js arg1 arg2
```

---

### 53. Redis module
Redis is an in-memory store used as cache, db, or message broker. It integrates well with Node to improve performance (session store, caching).

---

### 54. What is WebSocket?
A protocol for full-duplex communication over a single TCP connection, enabling real-time two-way communication between client and server.

---

### 55. `util` module & other core modules
`util` provides utility functions. Other core modules include `os`, `path`, `dns`, `net` and more for system and network tasks.

---

### 56. Handling environment variables
Use `process.env` and packages like `dotenv` (`npm install dotenv`) to load `.env` files in development.

---

### 57. DNS module
Use the `dns` module for name resolution and DNS lookups.

---

### 58. `setImmediate()` vs `setTimeout()`

| setImmediate() | setTimeout() |
|---|---|
| Executes callback after current event loop phase (check phase). | Executes callback after a specified delay. |
| No timer; immediate scheduling after current phase. | Uses timer queue with min delay (≥1ms). |

---

### 59. Why V8 engine?
V8 is fast (JIT compilation to machine code), cross-platform, and powers Chrome — providing high-performance JS execution.

---

### 60. What is EventEmitter?
`EventEmitter` (from `events` module) allows objects to emit and listen for events via `.emit()`, `.on()`, `.once()`.

**Example**
```js
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('greet', name => console.log(`Hi ${name}`));
emitter.emit('greet', 'Alice');
```

---

## Appendix & Notes
- Use this file as a study guide — practice writing code for streams, buffers, cluster/child processes, and patterns like async/await and error handling.
- Expand each question into small coding exercises to internalize concepts.

---

*Prepared for: NodeJS interview practice — 2025*
