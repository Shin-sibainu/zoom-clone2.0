const express = require("express");
const app = express();
const server = require("http").Server(app);
const { v4: uuidv4 } = require("uuid");
const io = require("socket.io")(server);

app.set("view engine", "ejs");
app.use(express.static("public"));

//自動的にパスが/2023u4jr0j0jfに変わる。👇のルーティングに移動
app.get("/", (req, res) => {
  res.redirect(`/${uuidv4()}`);
});

//room.ejsにレンダリングする。
app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
  //console.log(req.params.room);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("サーバーを起動しました");
});
