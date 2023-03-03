var express = require("express");
const ytdl = require("ytdl-core");
var app = express();

app.get("/", function (req, res) {
  const { url } = req.query;

  const date = Date.now();
  res.header(
    "Content-Disposition",
    `attachmentt; filename="video_${date}.mp4"`
  );
  // return ytdl(url).pipe(res);

  return ytdl(url, {
    format: "mp4",
    itag: 136,
  }).pipe(res);
});

app.listen(3000, () => {
  console.log("Servidor rodando!");
});

// /?url=
