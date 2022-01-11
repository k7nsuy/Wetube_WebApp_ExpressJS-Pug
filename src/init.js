// mongoose와 연결한 db.js file import
import "./db";
// model import
import "./models/video";
import app from "./server";

// port
const PORT = 60000;

const handleListening = () => {
    console.log(`✅ Server listening on port http://localhost:${PORT}💥`);
};
// handListening => callback function
app.listen(PORT, handleListening); // 외부 접속(http request)을 서버에서 listen



