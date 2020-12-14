const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const PORT = 4000;
const router = require("express").Router();
mongoose.set('useCreateIndex', true);
const saltRounds = 10;
const validation = require("./validation");
var verifytoken = require("./validate-token");
const passport = require("passport");


const jwt = require('jsonwebtoken');
const crudRoutes = express.Router();

let Crud = require('./crud.model');
const User = require('./user');

const bcrypt = require('bcryptjs');

require("dotenv").config();
const { loginValidation } = require("./validation");






app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://gayath:admin@cluster0.cxze7.mongodb.net/Products?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

crudRoutes.route('/').get((req, res) => {
    Crud.find((err, results) => {
        if (err) console.log(err);
        else res.json(results);
    });
});

crudRoutes.route('/:id').get((req, res) => {
    let id = req.params.id;
    Crud.findById(id, (err, result) => {
        if (err) console.log(err);
        else res.json(result);
    });
});

crudRoutes.route('/add').post((req, res) => {
    let list = new Crud(req.body);
    list.save().then(list => {
        res.status(200).json({'list': 'Product added successfully'});
    }).catch(err => {
        res.status(400).send('oktaClient');
    });
});

app.use(cookieParser());

crudRoutes.route('/update/:id').post((req, res) => {
    Crud.findById(req.params.id, (err, data) => {
        if (!data) res.status(404).send("Product is not found");
        else {
            data.product_name = req.body.product_name;
            data.product_brand = req.body.product_brand;
            data.product_category = req.body.product_category;
            data.product_price = req.body.product_price;
           

            data.save().then(data => {
                res.json('Data product is updated!');
            }).catch(err => {
                res.status(400).send("Update isn't possible");
            });
        }
    });
});

crudRoutes.route('/delete/:id').delete((req, res) => {
    Crud.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) return res.status(500).send("There was a problem deleting the product.");
        res.status(200).send(`product ${data.product_name} was deleted`);
    })
});
app.use('/all_product', crudRoutes);

app.listen(PORT, () => {
    console.log("Server is running on PORT: " + PORT);
})



router.route('/register').post((req, res) => {

    
  var user = req.body;
      var email = req.body.email;
      
      var password = req.body.password;

      var salt =  bcrypt.genSaltSync(saltRounds);
  var passwordHash = bcrypt.hashSync(password, salt);

      User.findOne({email:user.email}, function (err, existingUser){
          if(existingUser == null){

     
              var newUser = new User({
            
                  email: email,
                  
                  password: passwordHash,});
          
                  
                  newUser.save()
                  .then(user => {
                    res.status(201);
                    res.send(user);
                  });
                  
                  
          }else{
           // console.log("There is a user already") //Prints out in the node console
         // throw new Error("This email is already registered") //Does not sent this message to the broswer
              res.status(404).send("An account with this email already exists.");
              
      
          }
      }); 

});

       





// login route
/*router.post("/login", async (req, res) => {
    // validate the user
    const { error } = loginValidation(req.body);
    // throw validation errors
    if (error) return res.status(401).json({ error:   error.details[0].message });
    const user = await User.findOne({ email: req.body.email });
    // throw error when email is wrong
    if (!user) return res.status(401).json({ error: "Email is wrong" });
    // check for password correctness
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword)
    return res.status(401).json({ error: "Password is wrong" });
     // create token
  const token = jwt.sign(
    // payload data
    {
      email: user.email,
      id: user._id,
    },
    process.env.JWT_SECRET
    
  );
  res.send(token)
  res.header("auth-token", token).json({
    error: null,
    data: {
      token,
    },
        
    
    
  });
});*/

/*router.post('/login', (req, res) => {
    const user =  User.findOne({ email: req.body.email });
      
        if (user) {
          if (bcrypt.compare(req.body.password, user.password)) {
            const token = jwt.sign(  {
                email: req.body.email,
                id: user._id,
              
            },
            process.env.JWT_SECRET
            );
            res.send(token)
          }
        } else {
          res.status(400).json({ error: 'User does not exist' })
        }
    
      
  })
  

router.get('/home', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.JWT_SECRET)
  
    User.findOne({
      where: {
        id: decoded._id
      }
    })
      .then(user => {
        if (user) {
          res.json(user)
        } else {
          res.send('User does not exist')
        }
      })
      .catch(err => {
        res.send('error: ' + err)
      })
  })*/

  router.post("/login",(req,res) => {

    const email = req.body.email;
    const password = req.body.password;
   
    //Find user by Email
    User.findOne({email}).then(user=>{
        if(!user){
            return res.status(404).json({ emailnotfound: "Email not found" });
        }

    // Check password
    bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
            // Create JWT Payload
            const payload = {
                id: user.id,
                email: user.email
            };

            // Sign token
            jwt.sign(
                payload,
                process.env.JWT_SECRET,
                {
                 expiresIn: 31556926 
                },
                
        
                (err, token) => {
                  //window.localStorage.setItem(token, payload);
                res.json({
                    success: true,
                    token: "Bearer " + token
                });
                localStorage.setItem('jwt', jwt)
                res.cookie('token', token, { httpOnly: true })
            .sendStatus(200)
                }
            );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
});

router.get('/Dashboard', verifytoken, function(req, res) {
  res.send('Welcome');
});
router.get('/checkToken', verifytoken, function(req, res) {
  res.sendStatus(200);
});


  app.use('/api', router);
  


