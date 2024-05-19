const express = require('express');
const app = express();
const PORT = 5000; // Allow PORT to be configurable via environment variable
const cors = require('cors');
require("dotenv").config();
require("./DB/cons.js");
const session = require("express-session");
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;
const userdb = require("./model/userSchema.js")

const clientid = process.env.OAUTH_CLIENT_ID;
const clientsecret = process.env.OAUTH_CLIENT_SECRET;



app.use(cors({
  origin:"http://localhost:3000",
  methods:"GET,POST,PUT,DELETE",
  credentials:true
}));
app.use(express.json());
app.use(session({
  secret:"qwerty12345",
  resave:false,
  saveUninitialized:true
}))

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new OAuth2Strategy({
    clientID:clientid,
    clientSecret:clientsecret,
    callbackURL:"/auth/google/callback",
    scope:["profile","email"]
},
async(accessToken,refreshToken,profile,done)=>{
  console.log("profile",profile);
  try {
      let user = await userdb.findOne({googleId:profile.id});

      if(!user){
          user = new userdb({
              googleId:profile.id,
              displayName:profile.displayName,
              email:profile.emails[0].value,
              image:profile.photos[0].value
          });

          await user.save();
      }

      return done(null,user)
  } catch (error) {
      return done(error,null)
  }
}
)
)
passport.serializeUser((user,done)=>{
  done(null,user);
})

passport.deserializeUser((user,done)=>{
  done(null,user);
});
app.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));

app.get("/auth/google/callback",passport.authenticate("google",{
    successRedirect:"http://localhost:3000/dashboard",
    failureRedirect:"http://localhost:3000/login"
}))

app.get("/login/sucess",async(req,res)=>{

    if(req.user){
        res.status(200).json({message:"user Login",user:req.user})
    }else{
        res.status(400).json({message:"Not Authorized"})
    }
})

app.get("/logout",(req,res,next)=>{
    req.logout(function(err){
        if(err){return next(err)}
        res.redirect("http://localhost:3000");
    })
})



// app.get('/', (req, res) => {
//   res.status(200).json("Server is running");
// });


app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
