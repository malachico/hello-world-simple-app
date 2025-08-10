# Hello World Simple Application

This is a simple client-server "Hello World" application demonstrating basic communication between a client-side HTML page and a Node.js backend.

## Architecture

*   **Frontend (client.html):** A simple HTML page with JavaScript that fetches a "Hello World" message from the Node.js server.
*   **Backend (server.js):** A Node.js server that exposes a `/hello` endpoint, returning a JSON "Hello World" message.

## How to Run

### Prerequisites

*   Node.js installed on your machine.

### Steps

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone https://github.com/your-username/hello-world-simple-app.git
    cd hello-world-simple-app
    ```
    (Note: Replace `your-username` with the actual GitHub username.)

2.  **Start the Backend Server:**
    Navigate to the project root and run the Node.js server:
    ```bash
    node server.js
    ```
    The server will start on `http://localhost:3000`.

3.  **Open the Frontend Client:**
    Open the `client.html` file in your web browser. You can typically do this by navigating to the file path in your browser or by using a local server extension (e.g., Live Server for VS Code).

4.  **Interact:**
    Click the "Get Message from Server" button on the `client.html` page to fetch and display the message from the Node.js server.

## Files

*   `server.js`: The Node.js server application.
*   `client.html`: The frontend HTML client.
*   `README.md`: This file, providing project information.
