const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");
require("dotenv").config();

const app = express();
const PORT = 3000;

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        status: "online",
        message: "HSM AI Server is running."
    });
});

app.post("/api/chat", async (req, res) => {
    try {
        const message = req.body.message;

        if (typeof message !== "string" || !message.trim()) {
            return res.status(400).json({
                error: "Please enter a message."
            });
        }

        const response = await client.responses.create({
            model: "gpt-5.6-luna",
            instructions:
                "You are HSM AI, the helpful, calm and intelligent assistant of Hyper Sonic Mind. Respond clearly and professionally.",
            input: message.trim()
        });

        res.json({
            reply: response.output_text
        });

    } catch (error) {
        console.error("AI Error:", error.message);

        res.status(500).json({
            error: "Unable to get an AI response. Please try again."
        });
    }
});

app.listen(PORT, () => {
    console.log(`HSM AI Server running at http://localhost:${PORT}`);
});