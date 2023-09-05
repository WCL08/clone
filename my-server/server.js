const express = require('express');
const app = express();
const port = 4000;

// 미들웨어 설정 (CORS 및 JSON 파싱)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 라우트 설정
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
