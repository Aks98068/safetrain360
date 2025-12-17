const express = require('express');
const path = require('path');
const https = require("https");
const fs = require("fs");   

const app = express();
const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Route for the hazard page
app.get("/hazard", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "hazard.html"));
});

// Route for the handling page
app.get("/handling", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "handling.html"));
});

// Route for the result page
app.get("/result", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "result.html"));
});
// Route for the module page
app.get("/module", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "modules.html"));
});
app.get("/scene", (req,res)=> {
    res.sendFile(path.join(__dirname, "public", "scene.html"))
})

// HTTPS configuration (replace with your actual key and certificate paths)
const privateKey = fs.readFileSync(
    path.join(__dirname, "cert", "key.pem"),
    "utf8",
);
const certificate = fs.readFileSync(
    path.join(__dirname, "cert", "cert.pem"),
    "utf8",
);

const credentials = {
    key: privateKey,
    cert: certificate,
};

// Create HTTPS server
const httpsServer = https.createServer(credentials, app);

httpsServer.listen(PORT, "10.10.148.238", () => {
    console.log(`SafeTrain360 server running on https://10.10.148.238:${PORT}`);
});
