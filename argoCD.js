const express = require("express");
const app = express();
const cors = require("cors");

// Middleware
app.use(cors());
app.use(express.json()); // req.body

app.get("/private-key", async (req, res) => {
    try {
        const privateKey = process.env.PRIVATE_KEY;
        if (!privateKey) {
            return res.status(404).json({ error: "Private key not found" });
        }
        
        res.json({ privateKey });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(5000, () => {
    console.log("Server has started on port 5000");
});
