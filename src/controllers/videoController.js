import video from "../models/video"; // database model

// const handleSearch = (error, videos) => {
//     console.log("errors", error);
//     console.log("videos", videos);
// };

// export const home = (req, res) => {
//     // {} => search term => 모든 data 형태 검색
//     video.find({}, handleSearch); // callback function - err,document를 수신
//     res.render("home", {pageTitle: "Home", videos= [] });}

export const home = async(req, res) => {
    // await을 사용하면 callback과 달리 database에게 결과값을 받을 때 까지 기다린다.
    const videos = await video.find({}); 
    return res.render("home", {pageTitle: "Home", videos });
};


export const search = (req, res) => {
    res.send("Search");
}

export const uploadVideo = (req, res) => {
    res.send("upload Video");
}

export const watchVideo = (req, res) => {
    const id = req.params.id; // const { id } = req.params
    return res.render("watch", {pageTitle: `Watching`});
}

export const getEdit = (req, res) => {
    const id = req.params.id; // const { id } = req.params
    return res.render("edit", {pageTitle: `Editing`});
}

export const postEdit = (req, res) => {
    const { id } = req.params;
    console.log(req.body); // post request로 보낸 data를 받는다.
    const { title } = req.body; 
    return res.redirect(`/videos/${id}`) // save click 후 redirection
}

export const deleteVideo = (req, res) => {
    res.send("Delete video");
}

export const getUpload = (req, res) => {
    return res.render("upload", {pageTile: "Upload Video"});
};

export const postUpload = (req, res) => {
    const { title } = req.body;
    return res.redirect('/');
}

