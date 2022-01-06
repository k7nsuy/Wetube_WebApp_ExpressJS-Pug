// babel을 이용해 express를 다음과 같은 형식으로 불러올 수 있다.
import express from "express"; // bring express module

// const express = require("express"); => babel을 사용하기 전 
import morgan from "morgan";

// import Routers from others
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const PORT = 4002;

const app = express(); // create app
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () => {
    console.log(`✅ Server listening on port http://localhost:${PORT}💥`);
};

app.listen(PORT, handleListening); // 외부 접속(http request)을 서버에서 listen

// // "sh -c 'lsof -i :${PORT:-4002} -t | xargs kill'"