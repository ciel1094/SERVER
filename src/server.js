import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";

const PORT = 3002;
const app = express();

app.use(helmet());
app.use(morgan(`dev`));
app.set("view engine", "pug");
app.get("/", (req, res) =>{
    res.render("main");
});
app.use(express.static(path.join(__dirname, "/assets")));

app.get("/page1", (req, res) => {
    const id = req.query.id;
    const pass = req.query.pass;

    if (pass === "ssanas1093") {
        res.render("page1", { recieveData : id });
    } else {
       res.render("main", { recieveData : "존재하지 않는 아이디 or 아이디나 비밀번호가 틀립니다."});
    };
});

app.listen(PORT, () =>{
    console.log(`${PORT} SERVER START!`);
});