# Client Data Collector

This project collects data from clients who click on a link and stores it in a separate folder for each client.

## How to run

1. **Install dependencies:**

   ```bash
   npm install express
   ```

2. **Start the server:**

   ```bash
   node server.js
   ```

3. **Open the link in your browser:**

   [http://localhost:3000](http://localhost:3000)

## How it works

- When a client opens the link, they will see a "Happy Independence Day" message.
- In the background, the client's browser will send a POST request to the server with the client's data.
- The server will create a new folder for the client in the `client_data` directory.
- The client's data will be saved in a file called `client_info.txt` inside the client's folder.
