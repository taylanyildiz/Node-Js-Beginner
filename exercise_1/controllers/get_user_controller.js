

const getUserController = (req, res) => {
    let users = { users: [] };
    let user = { user: {} };

    let allUser = req.body.users;

    for (let index = 0; index < allUser.length; index++) {
        let u = allUser[index];
        user.user = {'name':u.name,'last_name':u.last_name,'age':u.age};
        let subIndex = users.users.indexOf(user.user.name && user.user.age && user.user.last_name);
        if(subIndex == -1){
            users.users.push(user.user);
        }

    }
    res.status(200).json(users);
}


module.exports = { getUserController };