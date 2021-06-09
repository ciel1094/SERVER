import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";

const PORT = 3001;
const app = express();

app.use(helmet());
app.use(morgan(`dev`));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "/assets")));
app.get("/", (req, res) =>{
    res.render("main");
});

app.listen(PORT, () =>{
    console.log(`${PORT} SERVER START!`);
});