export const home = (req, res) => {
    res.render("home", {pageTitle: "home"});
}

export const search = (req, res) => {
    res.send("Search");
}

export const uploadVideo = (req, res) => {
    res.send("upload Video");
}

export const seeVideo = (req, res) => {
    res.render("watch", {pageTitle: "watch"});
}

export const editVideo = (req, res) => {
    res.send("Edit video");
}

export const deleteVideo = (req, res) => {
    res.send("Delete video");
}

