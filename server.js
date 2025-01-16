import express from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql2/promise';
import cors from 'cors';

dotenv.config();

const app = express();
const port = 3000;
app.use(express.static('dist'));
app.use(cors());
app.use(express.json());

// lh:3-/로 접속 시 응답할 핸들러(엔드포인트)
app.get('/', (_, response) => {
  response.sendFile('index.html');
});

let db;
const connectDB = async () => {
  try {
    db = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log('MySQL 연결 성공');
  } catch (err) {
    console.error('MySQL 연결 오류:', err);
  }
};
connectDB();

// 점수 저장 API
app.post('/result', async (req, res) => {
  const { nickname, score } = req.body;

  console.log(req.body, nickname);
  if (!nickname || typeof score !== 'number') {
    console.error('❌ 데이터 유효성 검사 실패:', req.body);
    return res.status(400).send('Invalid data');
  }

  try {
    const [result] = await db.execute(
      'INSERT INTO score (nickname, score) VALUES (?, ?)',
      [nickname, score]
    );
    console.log('✅ 데이터베이스 저장 성공:', result);
    return res.status(200).json({
      success: true,
      message: '데이터 전송 성공',
      insertedId: result.insertId,
    });
  } catch (err) {
    console.error('❌ 데이터베이스 오류:', err);
    return res.status(500).json({
      success: false,
      message: '데이터 전송 실패',
      error: err.message,
    });
  }
});

app.get('/rank', async (req, res) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = 10;
  const offset = (page - 1) * limit;

  try {
    console.log('쿼리 실행:', { limit, offset });

    const [rows] = await db.execute(`
          SELECT nickname, score 
          FROM score 
          ORDER BY score DESC 
          LIMIT ${limit} OFFSET ${offset}
      `);

    const [countRows] = await db.execute('SELECT COUNT(*) as total FROM score');
    const totalItems = countRows[0].total;
    const totalPages = Math.ceil(totalItems / limit);

    res.status(200).json({
      success: true,
      message: '데이터 불러오기 성공',
      data: rows,
      totalItems,
      totalPages,
      currentPage: page,
    });
  } catch (err) {
    console.error('❌ 데이터베이스 오류:', err.message);
    res.status(500).json({
      success: false,
      message: '데이터베이스 오류 발생',
      error: err.message,
    });
  }
});

app.listen(port, () =>
  console.log(
    `http://127.0.0.1:${port}/ 서버 프로세스가 3000번 포트에서 실행 중입니다.`
  )
);
