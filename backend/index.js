import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const port = 8800;

app.post("/submitform", (req, res) => {
    console.log("Endpoint reached");
    const data = req.body;
    try {
        console.log(data);
        return req.body && res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ message: "Could not post data" });
    }
});


app.listen(port, () => {
    console.log(`Server started at ${port}`);
});