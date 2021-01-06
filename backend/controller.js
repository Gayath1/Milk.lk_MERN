const bcrypt = require("bcryptjs");
const User = require("./user"); // User model
const jwt = require('jsonwebtoken')

const isAuth = (req,res,next) => {
  const sessUser = req.session.user;
  if(sessUser) {
      next();
  }
  else {
      const err = res.status(401).json("You Need to Be Logged in to do this. Access Denied ")
      return err;
  }
};




const loginUser = ("/login", (req, res) => {
  const { email, password } = req.body;

  // basic validation
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  //check for existing user
  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: "User does not exist" });

    // Validate password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        // Create JWT Payload
        const payload = {
            id: user.id,
            email: user.email
        };

        // Sign token
        var token =jwt.sign(
            payload,
            process.env.JWT_SECRET,
            {
             expiresIn: 31556926 
            })}
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

     

      const sessUser = { id: user.id, name: user.name, email: user.email };
      const session = req.sessionID;
      req.session.user = sessUser; // Auto saves session data in mongo store

      res.json({ msg: " Logged In Successfully", sessUser,token ,session }); // sends cookie with sessionID automatically in response
    });
  });
});



const logoutUser = ("/logout", (req, res) => {
  
  req.session.destroy((err) => {
    //delete session data from store, using sessionID in cookie
    if (err) throw err;
    res.clearCookie('session-id'); // clears cookie containing expired sessionID
    res.send("Logged out successfully");
  });
});


const authChecker =("/authchecker", (req, res) => {
 
  const sessUser = req.session.user;
  
  
  if (sessUser) {
    return res.status(200).json({ msg: " Authenticated Successfully", sessUser });
  } else {
    return res.status(401).json({ msg: "Unauthorized" });
  }
});



module.exports = {loginUser, logoutUser, authChecker, isAuth}
