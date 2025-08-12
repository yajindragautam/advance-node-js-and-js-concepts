# 📦 Backend with Node.js  
![Node.js Logo](https://nodejs.org/static/images/logo.svg)

---

## **Section 1: Introduction to Backend and Node.js**  

### **Prerequisites**  
- Basic understanding of programming  
- Familiarity with JavaScript  

### **Topics Covered**  
- What is Backend & Client-Server Architecture?  
- CLI vs GUI  
- What is Node.js and What Is It Used For?  
- Installing Node.js  
- Running Our First Node.js Code  
- Why We Need Node.js and How It Differs From JavaScript in the Browser  
- A Brief History of Node.js  

---

## **Section 2: Basics of Terminal**  

### **Introduction to Terminal and Shell**  
- Basic Shell Commands: `echo`, `pwd`, `whoami`  
- Navigating the File System: `cd`  
- Listing Directory Contents: `ls`  
- Creating, Copying, Moving, and Deleting Files & Directories:  
  - `touch`, `mkdir`, `cp`, `mv`, `rm`, `rmdir`  
- Viewing & Editing Files: `cat`, `nano`, `vim`  
- What is the Prompt in Terminal?  
- Configuring Terminal Using `.bashrc`  
- Using Aliases for Command Shortcuts (`alias`)  

---

## **Section 3: Basics of OS**  

### **Core Concepts**  
- CPU, Processor, and Core Explained  
- OS and Kernel Overview  
- What is a Process?  
- Threads, Concurrency, and Parallelism  
- Can a Process Exist Without a Thread?  
- Debugging Worker Threads  

### **System Variables and File Handling**  
- Environment Variables: Setting & Using Them  
- Installing Windows Subsystem for Linux (WSL)  
- Understanding the Path System: Windows vs. Linux  
- Executable Files Explained  
- Managing File Permissions  
- How Commands Get Executed  

### **Node.js & OS Interaction**  
- Important Methods & Properties of the `process` Object  

---

## **Section 4: Fundamentals of Node.js**  

### **Modules in Node.js**  
- Introduction to CommonJS Module System  
- `module.exports` vs `exports`  
- The `module` Object  
- Module Wrapper Function  
- Creating a Custom `require` Function  
- ES6 Modules  
- Accessing `__filename` & `__dirname` in ES6 Modules  
- Why Different Module Systems Exist  
- CommonJS vs ES6 Modules  

### **Working with NPM**  
- Different Types of Modules  
- NPM & NPM Modules  
- Creating & Publishing NPM Modules  
- Understanding `package.json` in Depth  
- What is a Shebang?  
- Library vs CLI Packages, Local vs Global Packages  
- How `npx` Works and What It Is  

### **File System (FS) Module**  
- Introduction to the FS Module  
- Word Counter CLI Project  
- Writing to a File in Node.js  
- File Operations: Rename, Delete, Move, Copy, and More  

# Backend with Node.js

## Section 1: Introduction to Backend and Node.js

### Prerequisites
- **JavaScript:** Solid understanding of JavaScript (ES6+) is essential, since Node.js uses JS for server-side programming.
- **Web Fundamentals:** Familiarity with HTTP, REST APIs, and client-server architecture helps in building web backends.
- **Command Line:** Comfort with a terminal/shell (Linux, macOS, or Windows) is important for running Node commands and managing projects.
- **Development Tools:** A code editor or IDE (e.g. VSCode) and Git can be useful for Node development.
- **Basic Networking:** Understanding of networking concepts (like ports and IPs) is helpful for writing servers.

### What Is Backend & Client-Server Architecture?
The backend (or server-side) is the part of an application that runs on servers, handling data, business logic, and database interactions, unseen by the end user. In software terms, the frontend is the user interface, while the backend processes requests and manages data \"behind the scenes\".

For example, when you submit a form on a website, the backend handles storing that data. Client-server architecture is a design where clients (like web browsers or mobile apps) send requests to a server, which processes them and sends back responses. Clients are user-facing interfaces; the server is a powerful machine providing resources or services.

For instance, a Node.js backend might expose a REST API: the client sends HTTP requests, and Node.js (running on a server) responds with data. In summary, the backend typically implements a client-server model where clients consume services provided by the server.

### CLI vs GUI
A CLI (Command-Line Interface) is a text-based interface where users type commands. It is flexible and often faster for experienced users. The shell (like bash or PowerShell) reads your typed commands (e.g. `ls`, `cd`, `node app.js`) and executes them.

CLIs generally use fewer resources and allow scripting (automating commands). A GUI (Graphical User Interface) uses windows, icons, and buttons (e.g. a desktop application or web interface). GUIs are intuitive for beginners but tend to consume more resources. For example, VSCode is a GUI, while its integrated terminal is a CLI.

Differences: CLIs require memorizing commands (but are quicker once learned), whereas GUIs are easier for visual interaction. In Node development, the CLI is often used to run servers (e.g. `node server.js`) or package managers (`npm install`), whereas GUIs (browsers, editors) are used for design and editing.

### What Is Node.js and What Is It Used For?
Node.js is an open-source, cross-platform JavaScript runtime environment that allows executing JavaScript code outside of a web browser. Built on Chrome’s V8 engine, Node.js lets developers write server-side applications in JavaScript.

Unlike browser JS, Node.js has access to the file system, network, and operating system features. Node.js is commonly used to build web servers, APIs, and networked applications. For example, you can write an HTTP server that listens on a port and responds to requests. Its strengths lie in I/O-intensive tasks and real-time apps (like chat servers) because of its event-driven, non-blocking I/O model.

**Example: a basic HTTP server in Node.js**

```js
const http = require('http');
http.createServer((req, res) => {
  res.end('Hello, World!');
}).listen(3000, () => {
  console.log('Server listening on http://localhost:3000');
});
```

### Installing Node.js
Download Node.js from https://nodejs.org or use a package manager (nvm for Linux/macOS, Chocolatey for Windows, etc.). Install the LTS (Long-Term Support) version unless you need the latest features. The Node.js installer includes npm (Node’s package manager).

For example:
- On Windows/macOS: run the downloaded installer.
- On Linux: use distribution packages or NodeSource (e.g., `curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -` then `sudo apt-get install -y nodejs`).

After installation, verify by running:

```bash
node -v   # shows Node.js version
npm -v    # shows npm version
```

This ensures Node.js and npm are properly installed.

### Running Our First Node.js Code
Create a file named `hello.js` with:

```js
console.log("Hello, world!");
```

Then run it in the terminal:

```bash
node hello.js
```

This will execute the code and print `Hello, world!` to the console. You can also launch an interactive REPL by just typing `node` and then enter JavaScript commands.

### Why Do We Need Node.js and How Is It Different From JavaScript in the Browser?
Node.js allows JavaScript to run on the server or command line, whereas browser JavaScript runs only in the browser environment.

Key differences:
- **Environment:** Browser JS cannot access the server’s filesystem or network sockets directly, but Node.js can (via modules like `fs`, `net`, etc.).
- **I/O Model:** Node.js uses an event-driven, non-blocking I/O model suitable for handling many simultaneous connections efficiently. Browser JS is single-threaded and primarily used for UI events.
- **Use Cases:** Node.js is often used for backend services, CLI tools, and real-time apps. Browser JS is for front-end interactivity (DOM manipulation, user interface).

In short, Node.js extends JavaScript’s reach beyond browsers, enabling unified full-stack development and efficient server-side processing.

### A Brief History of Node.js
Node.js was created by Ryan Dahl in 2009, inspired by the need for efficient, event-driven servers. Early milestones:

- **2009:** First release of Node.js (v0.x) combining V8, an event loop, and a JS API.
- **2010:** npm (Node Package Manager) was released to manage modules.
- **2011:** Official Windows support arrived.
- **2014-2015:** The community split (io.js fork) over governance; it re-merged into Node.js in 2015.
- **2019:** The Node.js Foundation merged with JS Foundation into the OpenJS Foundation.

Since then, Node.js has continued evolving under the OpenJS Foundation, with regular releases and updated ECMAScript features.

---

## Section 2: Basics of Terminal

### Introduction to Terminal and Shell
A terminal (or console) is a text-based interface for interacting with the operating system. In modern systems, it's often a terminal emulator program (like xterm or PowerShell). A shell (e.g. bash, zsh, or cmd.exe) runs within the terminal; it reads your commands and executes them. In essence, the shell is the command-line interpreter, and the terminal is the environment that displays the prompt and output. For example, typing `ls` in a bash shell lists files in the terminal. The shell prompt (often `$` or `%`) indicates it's ready for input.

### Basic Shell Commands (echo, pwd, whoami)
- `echo [text]`: Prints the given text or variables to the terminal.

  Example:
  ```bash
  echo "Hello, Terminal!"
  # Output: Hello, Terminal!
  ```

- `pwd`: Stands for "print working directory". It outputs the current directory path.

  Example:
  ```bash
  pwd
  # Output: /home/user/projects
  ```

- `whoami`: Displays the current logged-in username.

  Example:
  ```bash
  whoami
  # Output: johndoe
  ```

### Navigating the File System (cd)
Use `cd <directory>` to change directories. For example, `cd projects` moves into the `projects/` folder in the current directory. Use `cd ..` to go up one level, or `cd` (with no arguments) to go to your home directory. After changing directory, `pwd` will show the new path.

### Listing Directory Contents (ls)
The `ls` command lists files and folders in the current directory. By default it shows names; with flags:
- `ls -l` shows details (permissions, size, date).
- `ls -a` includes hidden files (those starting with `.`).

Example:
```bash
ls -l
# Output might show file permissions and sizes
```

### Creating, Copying, Moving, and Deleting Files and Directories
- **Create File (`touch`)**: `touch filename.txt` creates an empty file (or updates its timestamp).
- **Make Directory (`mkdir`)**: `mkdir new_folder` creates a directory named `new_folder`.
- **Copy (`cp`)**: `cp source.txt dest.txt` copies a file. Use `cp -r src_dir dest_dir` to copy directories.
- **Move/Rename (`mv`)**: `mv oldname.txt newname.txt` renames or moves the file.
- **Delete File (`rm`)**: `rm file.txt` deletes a file. Be careful, as this is permanent.
- **Remove Directory (`rmdir`)**: `rmdir folder_name` removes an empty directory. To remove a non-empty directory, use `rm -r folder_name`.

Example usage:
```bash
touch file1.txt       # create file1
mkdir folder         # create folder
cp file1.txt folder/ # copy file1 into folder
mv file1.txt file2.txt  # rename file1 to file2
rm file2.txt         # delete file2
```

### Viewing and Editing Files with Commands (cat, nano, vim)
- `cat filename`: Shows file contents in the terminal.
- `nano filename`: Opens the file in the Nano text editor (simple CLI editor).
- `vim filename`: Opens the file in Vim (a powerful CLI editor).

Use `cat` for quick viewing; use `nano` or `vim` for editing. For example, `nano app.js` lets you edit the file and save changes.

### What Is the Prompt in Terminal?
The prompt is the text displayed by the shell indicating it’s ready for a command. For example, a common bash prompt looks like:

```
user@hostname:~/projects $
```

It often includes the username, host, and current directory, ending in `$` (or `#` for root). The prompt can be customized, but by default it appears whenever the shell awaits your input.

### Configuring Our Terminal Using .bashrc
The `~/.bashrc` file is a shell script that runs whenever a new bash shell session starts. You can add custom commands here to configure your environment. For example, setting environment variables (`export VAR=value`), defining aliases, or tweaking the prompt. After editing `~/.bashrc`, you can apply changes with `source ~/.bashrc`. This file makes your customizations persistent across sessions.

### Using Aliases for Command Shortcuts (`alias`)
An alias defines a shortcut for a longer command. For example:

```bash
alias ll='ls -la'
alias gs='git status'
```

After adding these, typing `ll` runs `ls -la`. Aliases are often placed in `~/.bashrc` or similar so they load every session.

---

## Section 3: Basics of OS

### What Is CPU, Processor, and Core?
A CPU (Central Processing Unit), or processor, is the computer’s brain—it executes instructions from software. Modern CPUs often have multiple cores, meaning independent processing units on the same chip. Each core can handle its own task. For example, a 4-core CPU can do four tasks truly in parallel.

### What Is OS and Kernel?
An Operating System (OS) is software that manages hardware resources and provides services to applications. The kernel is the core component of an OS. It interacts directly with hardware (CPU, memory, I/O devices) and provides low-level services (process scheduling, memory management, hardware access). The OS uses the kernel to interface with hardware; everything else (like user interfaces and utilities) runs on top of it.

### What Is a Process?
A process is a running instance of a program. When you execute a program (e.g., `node server.js`), the OS creates a process with its own memory space and resources. Processes are isolated from each other for safety. Each process may contain one or more threads.

### What Is Thread, Concurrency, and Parallelism?
- **Thread:** A sequence of executable instructions within a process. Threads within the same process share the process’s memory but run independently.
- **Concurrency:** Multiple tasks are in progress at the same time (or appear to be through time-sharing). On a single-core CPU, the OS may rapidly switch between threads, giving the illusion of simultaneous execution.
- **Parallelism:** Multiple tasks literally run at the same time on different CPU cores.

### Can a Process Exist Without a Thread?
In practical terms, no. A process without any threads cannot execute code at all. When a process is created, the OS always creates at least one initial thread (the “main” thread).

### Debugging Worker Threads
In Node.js (v10.5+), worker threads can be debugged via the same inspector protocol as the main thread. Modern debuggers (like Chrome DevTools or VSCode’s Node debugger) can attach to worker threads. For example, using `node --inspect` on the main process, you can see and control execution in spawned workers.

### What Is an Environment Variable?
An environment variable is a named value in the environment in which processes run. It can influence program behavior. For example, `NODE_ENV=production` might tell a Node app to run in production mode. Environment variables are part of the process’s environment and can be accessed in Node via `process.env`.

### Setting and Using Environment Variables
- **Linux/macOS (bash):** Use `export`, e.g. `export MY_VAR=somevalue`. To see it, `echo $MY_VAR`. To make it permanent, add it to `~/.bashrc` or `~/.profile`.
- **Windows (CMD):** Use `set`, e.g. `set MY_VAR=somevalue`. In PowerShell, `$Env:MY_VAR = \"somevalue\"`.

In Node.js code, you can read environment variables via `process.env.MY_VAR`:

```js
console.log(process.env.PATH);
```

### Installing Windows Subsystem for Linux (WSL)
WSL lets you run a Linux environment on Windows. To install WSL on Windows 10/11 (with recent updates), open PowerShell as Administrator and run:

```powershell
wsl --install
```

This will enable WSL and install a default Linux distribution (often Ubuntu). After rebooting, you can launch a Linux shell on Windows. WSL provides a familiar Linux terminal for Node.js development on Windows.

### Understanding the PATH System: Windows vs. Linux
The PATH is an environment variable listing directories where the OS looks for executable files. When you type a command, the shell searches these directories in order. On Linux/macOS, directories in PATH are separated by colons (`:`). On Windows, the separator is a semicolon (`;`).

### What Are Executable Files?
An executable file contains code that the OS can run. On Windows, executables are typically `.exe`, `.bat`, or `.cmd`. On Unix-like systems, executability is determined by file permission bits: if a file has the executable bit (`chmod +x`), the shell can run it. In Node.js, a script is executable if it has a shebang (`#!/usr/bin/env node`) and execute permission on Unix.

### Managing File Permissions
In Unix/Linux, each file has permissions for owner, group, and others, each with read (`r`), write (`w`), and execute (`x`) bits. `ls -l` shows them (e.g. `-rwxr-xr-x`). You modify permissions with the `chmod` command. For example, `chmod u+x file.sh` adds execute permission for the owner.

### How Commands Get Executed
When you enter a command (e.g. `node`), the shell determines how to execute it:
1. **Built-in:** The shell checks if it’s a shell builtin command.
2. **PATH lookup:** If not, it searches each directory in the PATH environment variable for an executable file with that name.
3. **Execute:** Once found, the shell forks a new process and executes the program in that process.

If the command is in the current directory and `.` is not in PATH, you must prefix `./` (e.g. `./script`) to tell the shell to look there.

### Important Methods and Properties of The Process Object
Useful Node.js `process` object properties and methods:
- `process.argv` — array of command-line arguments.
- `process.env` — environment variables object.
- `process.pid` — process ID.
- `process.platform` — OS platform string ('win32', 'linux', 'darwin', etc.).
- `process.version` — Node.js version string.
- `process.exit([code])` — ends the process with an exit code.
- `process.cwd()` — current working directory.
- `process.chdir(dir)` — change current working directory.
- `process.kill(pid, signal)` — send a signal to a PID.
- Event handlers: `process.on('exit', ...)`, `process.on('uncaughtException', ...)`.

These methods and properties allow Node scripts to inspect and control the execution environment.

---

## Section 4: Fundamentals of Node.js

### Module System in Node.js
Node.js uses a modular system to organize code. By default, it uses the CommonJS module system, where each file is treated as a module. You load modules with `require()` and export with `module.exports` (or `exports`). Node also supports ES6 Modules (ESM) using `import` and `export`. You can enable ESM by using `.mjs` file extensions or setting `\"type\": \"module\"` in `package.json`.

### Introduction to CommonJS Module System
In CommonJS, each module has an `exports` object and a `module` object. You populate `module.exports` (or `exports`) with what you want to export.

**Example:**
```js
// util.js
exports.add = (a, b) => a + b;

// app.js
const util = require('./util');
console.log(util.add(2,3)); // 5
```

Node treats `.js` files as CommonJS modules by default. One important detail: Node effectively wraps your code in a function that provides `exports`, `require`, `module`, `__filename`, and `__dirname` local to that module.

### module.exports vs exports
Inside a CommonJS module, `module.exports` is the actual object returned by `require()`. The shorthand `exports` is initially the same object (i.e. `exports === module.exports`). You can add properties to either. Important: If you assign a new value to `module.exports`, that replaces what will be returned. If you instead assign to `exports` directly, it breaks the link.

Examples:
```js
// Works:
module.exports = function() { /* a function */ };

// Also works:
exports.foo = 'bar';

// Wrong way:
exports = function() { /* ... */ }  // this does NOT change module.exports
```

### module Object
Within a module file, `module` is an object representing the current module. Key properties include `module.exports`, `module.filename`, `module.loaded`, and `module.children`.

### Module Wrapper Function
Node wraps each module’s code in a function wrapper. This keeps variables declared in the module scoped to that module and provides module-specific variables like `exports`, `require`, `module`, `__filename`, and `__dirname`.

### Custom Require Function
Node’s default `require` resolves modules using its built-in algorithm. It is possible to create a custom require (e.g. using `module.createRequire`), but that’s advanced. In most cases you simply use the standard `require` or `import`.

### ES6 Modules
ES6 Modules use `import` and `export`. To use them in Node, either set `\"type\": \"module\"` in `package.json` or use `.mjs` files.

**Example:**
```js
// math.mjs (ESM)
export function add(a, b) { return a + b; }

// app.mjs
import { add } from './math.mjs'; 
console.log(add(2,3)); // 5
```

Note: in ES modules `__filename` and `__dirname` are not available; instead use `import.meta.url`.

### Accessing filename and dirname in ES6 Modules
```js
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
```

### Why Different Module Systems?
CommonJS was created for Node to allow synchronous loading on the server. ES Modules were introduced as a standard (ES6) for both browsers and servers. Node supports both to maintain compatibility: CommonJS by default, and ES Modules starting in Node v13+.

### Difference Between CommonJS and ES6 Modules
- **Syntax:** CommonJS uses `require()` and `module.exports`; ES6 modules use `import` and `export`.
- **Loading:** CommonJS loads modules synchronously. ES6 modules support asynchronous loading and must use static import statements (though dynamic `import()` is available).
- **Usage in Node:** Historically, `.js` files were CommonJS, and `.mjs` (`"type":"module"`) for ESM.

### Different Types of Modules
- **Core (Built-in) Modules:** Provided by Node (no install needed), e.g. `fs`, `path`, `http`.
- **Local Modules:** Your own files. You require them by relative path (e.g. `require('./utils')`).
- **Third-Party (npm) Modules:** Installed via `npm install` into `node_modules`.

### NPM and NPM Modules
`npm` (Node Package Manager) is Node’s default package manager and registry. Using the npm CLI, developers can install packages (`npm install`), publish their own, and manage dependencies. `package.json` and lockfiles track dependencies.

### Creating and Publishing NPM Modules
To create a new package, run `npm init` (or `npm init -y`). This generates `package.json` with fields like `name`, `version`, `main`, etc. To publish your package to npm, use `npm publish` (you need an npm account and must run `npm login` first).

### Understanding package.json File in Depth
`package.json` is the manifest for a Node.js project. Key parts include:
- **Metadata:** `name`, `version`, `description`, `keywords`, `author`, `license`.
- **Entry Points:** `main`, `type`, `bin`.
- **Scripts:** `scripts` defines shortcuts (e.g. `start`, `test`).
- **Dependencies:** `dependencies`, `devDependencies`, `peerDependencies`, `optionalDependencies`.
- **Engines:** (optional) specify supported Node versions.

**Example scripts**
```json
\"scripts\": {
  \"start\": \"node index.js\",
  \"test\": \"mocha\"
}
```

### What is Shebang?
A shebang (`#!`) is the first line in a script that tells the OS which interpreter to use. For Node.js scripts, the common shebang is:

```bash
#!/usr/bin/env node
```

This lets you run a script directly on Unix-like systems when it has execute permission.

### Library vs CLI Packages and Local vs Global Packages
- **Library Packages:** Modules meant to be required or imported in code (e.g. utility libraries).
- **CLI Packages:** Tools that are executed from the command line. They usually have a `bin` field in `package.json`.
- **Local vs Global (npm):** Local packages are installed in a project (`node_modules`). Global packages (`npm install -g`) are installed system-wide and their executables are put on your PATH.

### How npx Works
`npx` is a package runner that comes with npm (v5.2+). It allows you to execute Node packages without installing them permanently. Example:

```bash
npx create-react-app myapp
```

### Introduction to fs Module
The built-in `fs` module in Node provides functions to interact with the file system. Examples:
- Read files: `fs.readFile(path, callback)` or `fs.promises.readFile`.
- Write files: `fs.writeFile(path, data, callback)` or `fs.promises.writeFile`.
- Rename: `fs.rename(oldPath, newPath, callback)`.
- Delete: `fs.unlink(path, callback)` for files.
- Copy: `fs.copyFile(src, dest, callback)`.

**Example:**
```js
const fs = require('fs');
fs.readFile('notes.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### Word Counter CLI Project
Practice project: Write a Word Counter CLI that:
1. Reads a filename from `process.argv`.
2. Uses `fs.readFile` or `fs.promises.readFile` to get text.
3. Splits text into words (e.g. `.split(/\\s+/)`).
4. Counts words and prints the result.

Add a shebang (`#!/usr/bin/env node`) and make it executable to run directly.

### Writing to a File Using Node.js
```js
const fs = require('fs');
const data = \"Hello Node.js!\";
fs.writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('File written successfully');
});
```

### Node.js File Operations: Rename, Delete, Move, Copy & More
Node’s `fs` provides many operations such as `fs.rename`, `fs.unlink`, `fs.rm`, `fs.copyFile`, `fs.mkdir`, `fs.chmod`, and `fs.stat`.

Example of rename with error handling:
```js
fs.unlink('oldPath.txt', err => {
  if (err) console.error('Delete error:', err);
  else {
    fs.rename('temp.txt', 'oldPath.txt', err2 => {
      if (err2) console.error('Rename error:', err2);
      else console.log('File moved successfully');
    });
  }
});
```

These functions perform asynchronous file operations. Their synchronous counterparts end with `Sync` (e.g., `fs.renameSync`) which block execution until done. Use asynchronous versions for best performance in a Node app.

---

*Sources and further reading: official Node.js docs and reputable tutorials.*
