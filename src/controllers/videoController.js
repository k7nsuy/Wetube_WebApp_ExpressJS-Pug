let videos = [
    {
        title: "First",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 1
    },
    {
        title: "Second",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 1,
        id: 2
    },
    {
        title: "Third",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 3
    }
    ];

export const home = (req, res) => {
    res.render("home", {pageTitle: "Home", videos });
}

export const search = (req, res) => {
    res.send("Search");
}

export const uploadVideo = (req, res) => {
    res.send("upload Video");
}

export const watchVideo = (req, res) => {
    const id = req.params.id; // const { id } = req.params
    const video = videos[id - 1];
    return res.render("watch", {pageTitle: `Watching ${video.title}`, video});
}

export const getEdit = (req, res) => {
    const id = req.params.id; // const { id } = req.params
    const video = videos[id - 1];
    return res.render("edit", {pageTitle: `Editing: ${video.title}`, video});
}

export const postEdit = (req, res) => {
    const { id } = req.params;
    console.log(req.body); // post request로 보낸 data를 받는다.
    const { title } = req.body; 
    videos[0].title = title;
    return res.redirect(`/videos/${id}`) // save click 후 redirection
}

export const deleteVideo = (req, res) => {
    res.send("Delete video");
}

