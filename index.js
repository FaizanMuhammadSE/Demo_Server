import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
	res.send("I will test servers");
});

app.get("/login", (req, res) => {
	res.send("This is login Page");
});

app.get("/signup", (req, res) => {
	res.send("This is signup Page");
});

app.get("/json", (req, res) => {
	res.json({ name: "Faizan Muhammad", semester: "8th Semester" });
});

app.use("/static", express.static("src"));

app.listen(port, () => {
	console.log(`Example app listening on port http://localhost:${port}`);
});
