const express = require("express");


const app = express();

app.get("/", (req, res)=> {
res.sendFile("index.html", {root: __dirname})
})

app.get("/styles.css", (req, res)=> {
    res.sendFile("styles.css", {root: __dirname})
    })


app.listen(3000, () => {
    console.log("hosted on port 3000")
}
);

