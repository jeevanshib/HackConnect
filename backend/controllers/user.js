const User = require("../models/user");

exports.register = async(req, res) => {
    const{
        first_name,
        last_name,
        username,
        email,
        password,
        bYear,
        bDate,
        gender
    }= req.body;
    const user = new User({
        first_name,
        last_name,
        username,
        email,
        password,
        bYear,
        bDate,
        gender
    }).save();
    res.json(user);
};
