// db-server/server.js
const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3003; // 任意のポート番号

// CORS設定
app.use(cors({
  origin: 'http://localhost:3000', // APIサーバーのオリジン（適宜変更）
  methods: ['GET'], // 許可するHTTPメソッド
}));

app.get('/read-json/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = `./data/${filename}.json`; // JSONファイルの保存場所

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      try {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
      } catch (err) {
        console.error(err);
        res.status(500).send('Invalid JSON format');
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Database server listening at http://localhost:${port}`);
});