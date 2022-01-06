export const join = (req, res) => {
    res.send("Join");
}

export const login = (req, res) => {
    res.send("Login");
}

export const logoutUser = (req, res) => {
    console.log("s");
    res.send("Log out");
}

export const seeUser = (req, res) => {
    res.send("See user");
}

export const editUser = (req, res) => {
    res.send("Edit user");
}

export const deleteUser = (req, res) => {
    res.send("Delete user");
}



