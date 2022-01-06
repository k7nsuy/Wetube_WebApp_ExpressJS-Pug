export const home = (req, res) => {
    const videos = [
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
        views: 59,
        id: 1
    },
    {
        title: "Third",
        rating: 5,
        comments: 2,
        createdAt: "2 minutes ago",
        views: 59,
        id: 1
    }
    ];
    res.render("home", {pageTitle: "Home", videos });
}

export const search = (req, res) => {
    res.send("Search");
}

export const uploadVideo = (req, res) => {
    res.send("upload Video");
}

export const seeVideo = (req, res) => {
    res.render("watch", {pageTitle: "Watch"});
}

export const editVideo = (req, res) => {
    res.send("Edit video");
}

export const deleteVideo = (req, res) => {
    res.send("Delete video");
}

