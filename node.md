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

# Creating the comprehensive README.md with detailed answers and full code implementations
content = """# Node.js Interview Deep-Dive (2025)

A compact but thorough set of answers and ready-to-run code snippets for senior Node.js interviews.  
Use this as a study sheet and a reference.

---

## Table of Contents

- [Core Concepts](#core-concepts)
  - [How does the event loop work in Node.js, and how is it different from the browser?](#how-does-the-event-loop-work-in-nodejs-and-how-is-it-different-from-the-browser)
  - [Difference between `process.nextTick`, `setImmediate`, and `setTimeout`](#difference-between-processnexttick-setimmediate-and-settimeout)
  - [What are worker threads, and when would you use them?](#what-are-worker-threads-and-when-would-you-use-them)
  - [How does Node.js handle asynchronous operations under the hood?](#how-does-nodejs-handle-asynchronous-operations-under-the-hood)
  - [Explain how garbage collection works in Node.js](#explain-how-garbage-collection-works-in-nodejs)
  - [How do streams work in Node.js, and when would you use them?](#how-do-streams-work-in-nodejs-and-when-would-you-use-them)
  - [What is the purpose of the `cluster` module, and how does it handle scaling?](#what-is-the-purpose-of-the-cluster-module-and-how-does-it-handle-scaling)
- [Performance & Optimization](#performance--optimization)
  - [How would you handle a memory leak in a Node.js application?](#how-would-you-handle-a-memory-leak-in-a-nodejs-application)
  - [How do you optimize a high-throughput API built with Node.js?](#how-do-you-optimize-a-high-throughput-api-built-with-nodejs)
  - [Trade-offs: child processes vs. worker threads vs. clustering](#trade-offs-child-processes-vs-worker-threads-vs-clustering)
  - [How would you monitor and profile a Node.js application in production?](#how-would-you-monitor-and-profile-a-nodejs-application-in-production)
  - [Ways to prevent blocking the event loop](#ways-to-prevent-blocking-the-event-loop)
- [Security](#security)
  - [How do you prevent prototype pollution in a Node.js application?](#how-do-you-prevent-prototype-pollution-in-a-nodejs-application)
  - [What security risks does `eval()` pose in a Node.js app?](#what-security-risks-does-eval-pose-in-a-nodejs-app)
  - [How do you handle JWT authentication securely in a Node.js backend?](#how-do-you-handle-jwt-authentication-securely-in-a-nodejs-backend)
  - [How does CSRF protection work in an API, and do you need it in a RESTful service?](#how-does-csrf-protection-work-in-an-api-and-do-you-need-it-in-a-restful-service)
  - [Best practices for handling sensitive data (env variables, secrets)](#best-practices-for-handling-sensitive-data-env-variables-secrets)
- [Code Challenges](#code-challenges)
  - [1) Implement a custom Promise class from scratch](#1-implement-a-custom-promise-class-from-scratch)
  - [2) Write a function that limits concurrent async tasks](#2-write-a-function-that-limits-concurrent-async-tasks)
  - [3) Build a simple rate limiter middleware in Express](#3-build-a-simple-rate-limiter-middleware-in-express)
  - [4) Implement an LRU cache in JavaScript](#4-implement-an-lru-cache-in-javascript)
  - [5) Create an async queue with a concurrency limit](#5-create-an-async-queue-with-a-concurrency-limit)

---

## Core Concepts

### How does the event loop work in Node.js, and how is it different from the browser?

**Node.js** uses **libuv** for its event loop and thread pool. Each tick processes phases in order:  
1. **Timers** (`setTimeout`, `setInterval`)  
2. **Pending Callbacks** (some I/O callbacks)  
3. **Idle/Prepare** (internal)  
4. **Poll** (I/O polling; executes I/O callbacks)  
5. **Check** (`setImmediate`)  
6. **Close Callbacks** (e.g., `socket.on('close')`)

**Differences vs Browser**  
- **Timers semantics**: Node.js phases (`timers`, `check`) matter; browsers don’t expose phases.  
- **APIs**: Node has `process.nextTick` and `setImmediate`; browsers don’t (except IE legacy for `setImmediate`).  
- **I/O**: Node delegates I/O to libuv & OS; browsers delegate to the browser’s event loop & Web APIs.  
- **Thread pool**: Node has a libuv thread pool (default size 4) for filesystem, DNS, crypto, zlib, etc.; browsers have different models (Web Workers, async XHR/fetch).  
- **Environment**: Node has no DOM; the browser integrates rendering/layout tasks with its loop.

**Mental model**: CPU-bound work should be chunked or offloaded; I/O-bound work scales naturally via non-blocking callbacks.

---

### Difference between `process.nextTick`, `setImmediate`, and `setTimeout`

- `process.nextTick(fn)`: Schedules **before** the event loop continues to the next phase—runs **after the current stack** but **before** I/O/timers. Useful for post-microtask continuations. **Overuse can starve** the loop.
- `setImmediate(fn)`: Scheduled for the **check** phase, i.e., **after** the current poll phase completes. Good for yielding back to I/O and then continuing.
- `setTimeout(fn, 0)`: Enqueues in **timers** for the next tick **after at least 1ms** (clamped). Timing relative to `setImmediate` depends on where they were called (inside I/O callback, `setImmediate` often fires first).

**Rules of thumb**:  
- Need to run *immediately* after current call stack? **`nextTick`**.  
- Need to continue *after I/O callbacks*? **`setImmediate`**.  
- Need a *scheduled delay*? **`setTimeout`**.

---

### What are worker threads, and when would you use them?

**Worker Threads** allow running JS in parallel threads that share memory via **`SharedArrayBuffer`** and transfer structured data. Use when you have **CPU-bound tasks** (parsing, compression, image/video processing, crypto, ML inference) that would otherwise block the main event loop. Not needed for I/O-bound work (the loop already shines there). Prefer a worker **pool** for many small CPU tasks.

---

### How does Node.js handle asynchronous operations under the hood?

- **libuv** manages the **event loop** and a **thread pool** for expensive or blocking operations (fs, DNS, crypto).
- **Non-blocking sockets** drive network I/O; readiness events enqueue callbacks into phases.
- **Promises/async–await** are built on top of **microtasks** (the “promise jobs” queue), which run **between** macrotask phases. In Node, microtasks flush after each callback before moving to the next phase.

---

### Explain how garbage collection works in Node.js

Node uses **V8**’s GC: **generational, mark-and-sweep**, **incremental**, and **concurrent** collectors.  
- **Young generation (nursery)**: Most objects die young; collected frequently (Scavenge / Minor GC).  
- **Old generation**: Promoted survivors; collected less often (Mark-Sweep-Compact), usually concurrently/incrementally to reduce pauses.  
- **Keys to memory health**: Avoid accidental globals, remove references (arrays/maps/closures) so objects become unreachable, use **WeakMap/WeakRef** for caches, and monitor with heap snapshots and `--max-old-space-size` if needed.

---

### How do streams work in Node.js, and when would you use them?

Streams process data **piece-by-piece** instead of buffering entire payloads. Types:  
- **Readable** (`fs.createReadStream`)  
- **Writable** (`fs.createWriteStream`)  
- **Duplex** (both)  
- **Transform** (modify data on the fly, e.g., `zlib.createGzip()`)

Use streams for **large files**, **piping** between sources/sinks (e.g., file → gzip → HTTP), **backpressure** handling (`stream.pipe()` manages `.pause()`/`.resume()` for you).

---

### What is the purpose of the `cluster` module, and how does it handle scaling?

`cluster` enables **multi-process** scaling by forking the current process into a **master/primary** and **workers** (one per CPU core, typically). Each worker has its own event loop. The primary can **round-robin** incoming connections to workers. This improves throughput on multi-core machines and isolates crashes to a single worker. Use a **process manager** (PM2/systemd/containers) to manage restarts and zero-downtime deploys.

---

## Performance & Optimization

### How would you handle a memory leak in a Node.js application?

1. **Detect**: Monitor RSS/heap usage (process metrics, APM, `process.memoryUsage()`).  
2. **Capture**: Take **heap snapshots** (Chrome DevTools, `node --inspect`) at intervals and compare growth.  
3. **Find Roots**: Look for growing arrays/maps/singletons/event listeners; check **listener leaks** (`EventEmitter.setMaxListeners`, `leak detection`).  
4. **Fix**: Remove references, `off()` listeners, close timers/intervals, use `WeakMap` for caches, ensure pools are drained.  
5. **Guard**: Add **integration tests** for teardown, memory budget alerts, and restart policies for protection.

---

### How do you optimize a high-throughput API built with Node.js?

- **I/O**: Use HTTP/1.1 keep-alive, HTTP/2 where possible, connection pooling for DBs.  
- **Serialization**: Prefer **fast JSON** paths; consider schema validators (Ajv) and avoid heavy transforms in hot paths.  
- **Concurrency**: Use a **worker pool** for CPU-bound work; otherwise keep route handlers thin.  
- **Caching**: Multi-layer (CDN → reverse proxy → app cache → DB cache). Use **ETag**, **Cache-Control**.  
- **DB**: Indexes, prepared statements, batch/pipe, avoid N+1.  
- **Node flags**: Tune `UV_THREADPOOL_SIZE` for I/O-heavy crypto/fs; use clustering/containers to scale horizontally.  
- **Observability**: P99 latency SLOs, flamegraphs, and load tests to validate changes.

---

### Trade-offs: child processes vs. worker threads vs. clustering

| Option | Isolation | Shared Memory | Best for | Overhead | Notes |
|---|---|---|---|---|---|
| **Child Process** (`child_process.fork/spawn`) | High (separate process) | No (IPC only) | External cmds, isolation, reliability | Higher (IPC, serialization) | Use for running other binaries or fully isolating failures |
| **Worker Threads** (`worker_threads`) | Medium (same process) | Yes (`SharedArrayBuffer`) | CPU-bound JS/TS tasks | Lower | Great for parallel CPU work; beware of memory leaks affecting whole process |
| **Cluster** (`cluster`) | High (per worker process) | No (IPC) | Multi-core HTTP scaling | Medium | Each worker has its own loop; combine with a load balancer |

---

### How would you monitor and profile a Node.js application in production?

- **Metrics**: Expose Prometheus metrics or StatsD; track CPU, RSS/heap, loop delay (e.g., `event-loop-lag`), GC pauses, RPS, P95/P99 latency, errors.  
- **Tracing**: OpenTelemetry traces across services (HTTP, DB).  
- **Logs**: Structured JSON logs (pino/winston) with correlation IDs.  
- **Profiling**: CPU profiles & heap snapshots via `--inspect`, `clinic flame`, `0x`, or APMs (Datadog, New Relic).  
- **SLOs**: Dashboards + alerts (burn rates, anomaly detection).

---

### Ways to prevent blocking the event loop

- Avoid synchronous fs/crypto/zlib in hot paths.  
- Chunk long CPU tasks; use **workers** for heavy CPU.  
- Stream large payloads; avoid large JSON stringify/parse loops.  
- Use `setImmediate`/`await Promise.resolve()` to yield in long loops.  
- Watch the **event loop delay** and treat regressions as incidents.

---

## Security

### How do you prevent prototype pollution in a Node.js application?

- **Sanitize deep merges**: Reject keys like `__proto__`, `prototype`, `constructor` when merging/parsing objects.  
- Use safe utilities or configure libraries (e.g., `qs`, `lodash`) with protections.  
- Freeze config objects; use `Object.create(null)` for maps.  
- Validate inputs with a schema (Ajv) and **disallow additionalProperties** where possible.  
- Keep dependencies updated; run `npm audit`/Snyk.

---

### What security risks does `eval()` pose in a Node.js app?

- **RCE (Remote Code Execution)** if user-controlled input reaches `eval`/`Function`/`vm` unsafely.  
- **Privilege escalation**: Access to `process`, `fs`, network.  
- **Performance**: Disables some V8 optimizations; JIT warmup cost.  
**Avoid** `eval`; if you must, strictly sandbox with `vm` in a separate process with locked-down context—still risky.

---

### How do you handle JWT authentication securely in a Node.js backend?

- Use **asymmetric keys (RS256/ES256)** or secure HS256 secrets. Rotate keys.  
- Validate **issuer, audience, expiry (exp), not-before (nbf)**; reject **none** alg.  
- Store tokens in **HTTP-only, Secure, SameSite cookies** for browsers; set short-lived access tokens + refresh tokens with rotation.  
- Scope claims minimally; avoid putting PII/secrets in JWTs.  
- Clock skew tolerance; handle logout/blacklist when needed.

---

### How does CSRF protection work in an API, and do you need it in a RESTful service?

- CSRF exploits **implicit credentials** (cookies). Protection options: **SameSite=Lax/Strict**, CSRF tokens (synchronizer/double-submit), and **CORS** rules.  
- **Pure token-based APIs** that don’t rely on cookies (e.g., Authorization header with Bearer tokens) are generally **not CSRF-prone**. If you use cookies, **enable CSRF protections**.

---

### Best practices for handling sensitive data (env variables, secrets)

- Load secrets from a **secrets manager** (Vault, AWS/GCP/Azure) or encrypted env files; never commit.  
- Limit blast radius with **least privilege** IAM and network policies.  
- Rotate regularly; audit access.  
- Encrypt **in transit** (TLS) and **at rest**.  
- Use **runtime config** injection; avoid baking secrets into images.

---

## Code Challenges

> All snippets are dependency-light and runnable on Node 18+. You can paste each into a file to test.

### 1) Implement a custom Promise class from scratch

```js
// custom-promise.js
class MyPromise {
  static PENDING = 'pending';
  static FULFILLED = 'fulfilled';
  static REJECTED = 'rejected';

  constructor(executor) {
    this.state = MyPromise.PENDING;
    this.value = undefined;
    this.handlers = [];
    this.catchers = [];
    this.finalizers = [];

    const resolve = (val) => {
      queueMicrotask(() => {
        if (this.state !== MyPromise.PENDING) return;
        if (val === this) return reject(new TypeError('Chaining cycle'));
        try {
          if (val && (typeof val === 'object' || typeof val === 'function')) {
            const then = val.then;
            if (typeof then === 'function') {
              return then.call(val, resolve, reject);
            }
          }
        } catch (e) { return reject(e); }
        this.state = MyPromise.FULFILLED;
        this.value = val;
        this.handlers.forEach(h => h(val));
        this.finalizers.forEach(f => f());
        this.handlers = this.catchers = this.finalizers = null;
      });
    };

    const reject = (reason) => {
      queueMicrotask(() => {
        if (this.state !== MyPromise.PENDING) return;
        this.state = MyPromise.REJECTED;
        this.value = reason;
        if (this.catchers.length === 0) {
          // Optional: emulate unhandledrejection (left silent here)
        }
        this.catchers.forEach(c => c(reason));
        this.finalizers.forEach(f => f());
        this.handlers = this.catchers = this.finalizers = null;
      });
    };

    try {
      executor(resolve, reject);
    } catch (e) {
      reject(e);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const wrappedFulfilled = (val) => {
        try {
          resolve(typeof onFulfilled === 'function' ? onFulfilled(val) : val);
        } catch (e) { reject(e); }
      };
      const wrappedRejected = (err) => {
        try {
          if (typeof onRejected === 'function') {
            resolve(onRejected(err));
          } else {
            reject(err);
          }
        } catch (e) { reject(e); }
      };

      if (this.state === MyPromise.FULFILLED) {
        queueMicrotask(() => wrappedFulfilled(this.value));
      } else if (this.state === MyPromise.REJECTED) {
        queueMicrotask(() => wrappedRejected(this.value));
      } else {
        this.handlers.push(wrappedFulfilled);
        this.catchers.push(wrappedRejected);
      }
    });
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  finally(cb) {
    return this.then(
      (v) => MyPromise.resolve(cb()).then(() => v),
      (e) => MyPromise.resolve(cb()).then(() => { throw e; })
    );
  }

  // Statics
  static resolve(v) { return new MyPromise((res) => res(v)); }
  static reject(e) { return new MyPromise((_, rej) => rej(e)); }
  static all(iter) {
    return new MyPromise((resolve, reject) => {
      const arr = Array.from(iter);
      const out = new Array(arr.length);
      let remaining = arr.length;
      if (remaining === 0) return resolve([]);
      arr.forEach((p, i) => MyPromise.resolve(p).then(
        v => { out[i] = v; if (--remaining === 0) resolve(out); },
        reject
      ));
    });
  }
}

// Example:
// MyPromise.resolve(1).then(x => x + 1).then(console.log);
module.exports = MyPromise;

