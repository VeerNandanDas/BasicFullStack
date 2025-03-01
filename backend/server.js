const express = require('express');
const app = express();



app.get("/api/jokes", (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "Why did the scarecrow win an award?",
            content: "Because he was outstanding in his field!"
        },
        {
            id: 2,
            title: "What do you call fake spaghetti?",
            content: "An impasta!"
        },
        {
            id: 3,
            title: "Why don’t skeletons fight each other?",
            content: "They don’t have the guts."
        },
        {
            id: 4,
            title: "What do you call cheese that isn't yours?",
            content: "Nacho cheese!"
        },
        {
            id: 5,
            title: "Why was the math book sad?",
            content: "It had too many problems."
        }
    ];
    res.json(jokes);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
