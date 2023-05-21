const { validateEmail, validateLength, validateUsername } = require( "../helpers/validation" );
const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.register = async(req, res) => {
    try{
        const{
            first_name,
            last_name,
            username,
            email,
            password,
            bYear,
            bMonth,
            bDay,
            gender,
        }= req.body;

        if (!validateEmail(email)) {
            return res.status(400).json({
              message: "invalid email address",
            });
            }
            const check = await User.findOne({ email });
        if (check) {
            return res.status(400).json({
                message: "The email address already exists, try again with a different email address.",
            });
            }
            if(!validateLength(first_name, 3, 30)) {
                return res.status(400).json({
                  message: "first name must contain 3-30 characters.",
                });
              }
              if(!validateLength(last_name, 3, 30)) {
                return res.status(400).json({
                  message: "last name must contain 3-30 characters.",
                });
              }
              if(!validateLength(password, 6, 40)) {
                return res.status(400).json({
                  message: "password must contain 6-40 characters.",
                });
              }
              const cryptedPassword = await bcrypt.hash(password,12);

            let tempUsername = first_name+last_name;
            let newUsername = await validateUsername(tempUsername);
            
        const user = await new User({
            first_name,
            last_name,
            email,
            username: newUsername,
            password: cryptedPassword,
            bYear,
            bMonth,
            bDay,
            gender,
        }).save();
        res.json(user);
        }catch(err){
        res.status(500).json({message:err.message});
    }
    
    };