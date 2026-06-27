require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const githubRoutes = require("./routes/githubRoutes");

app.use("/api", githubRoutes);

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found"
    });
});

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server Running on ${PORT}`);
});