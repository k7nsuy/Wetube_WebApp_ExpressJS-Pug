import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/wetube", {
    useNewUrlParser: true,
    useUnifiedTopology: true });

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log("❌ DB Error", error);

// on => event를 여러번 발생 시킬 수 있다.
db.on("error", handleError);
// event를 한번만 발생 시킴
db.once("open", handleOpen);
