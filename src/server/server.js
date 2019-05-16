import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../components/App";

const server = express();
const port = process.env.PORT || 8080;

server.use(express.static("dist"));

server.get("/", (req, res) => {
  const initialMarkup = ReactDOMServer.renderToString(<App />);

  res.send(`
    <html>
      <head>
        <title>Sample React SSR App</title>
      </head>
      <body>
        <div id="app-container">${initialMarkup}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `);
});

server.listen(port, () => console.log(`Server is running on port ${port}...`));