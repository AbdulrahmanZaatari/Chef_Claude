const express = require("express");
const { HfInference } = require("@huggingface/inference");
require("dotenv").config();
const cors = require("cors"); // Import cors

const app = express();
const port = 3001;
const hf = new HfInference(process.env.HF_ACCESS_TOKEN);

app.use(cors()); // Enable CORS for all routes

app.use(express.json());

app.post("/generateRecipe", async (req, res) => {
    const { ingredientsArr } = req.body;
    const ingredientsString = ingredientsArr.join(", ");

    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                {
                    role: "system",
                    content: `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.`,
                },
                {
                    role: "user",
                    content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
                },
            ],
            max_tokens: 1024,
        });

        res.json({ recipe: response.choices[0].message.content });
    } catch (err) {
        console.error("Error fetching recipe from Mistral:", err.message);
        res.status(500).json({ error: "Sorry, I couldn't generate a recipe at this time." });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});