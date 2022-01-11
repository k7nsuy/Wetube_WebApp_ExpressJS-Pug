import mongoose from "mongoose"; // model을 사용하기 위해서 mongoose 필요

// schema 작성
const videoSchema = new mongoose.Schema({
    title: String,
    description: String,
    createdAt: Date,
    hashTags: [{type: String}],
    meta: {
        views: Number,
        rating: Number,
    }
});

// 작성한 schema를 기반으로 모델 생성
const video = mongoose.model("video", videoSchema);
export default video; // model export