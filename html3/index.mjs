// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import express from "express";
import bodyParser from "body-parser";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
const __dirname = new URL('.', import.meta.url).pathname;
app.use(express.static("C:/Users/udayr/OneDrive/Desktop/html3"));
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApLnpei72ahyswU7jE9XaYWNKWW0n0p70",
  authDomain: "pethub-aa5e3.firebaseapp.com",
  projectId: "pethub-aa5e3",
  storageBucket: "pethub-aa5e3.appspot.com",
  messagingSenderId: "282688659360",
  appId: "1:282688659360:web:1e07dc9b61a45c4ccf8ec5"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
const auth = getAuth();



app.get("/",function(req,res){
  res.sendFile("C:/Users/udayr/OneDrive/Desktop/html3/loginform.html");
})
app.get("/signup",function(req,res){
  res.sendFile("C:/Users/udayr/OneDrive/Desktop/html3/registration.html");
})
app.get("/services",function(req,res){
  res.sendFile("C:/Users/udayr/OneDrive/Desktop/html3/services.html");
})
// Login
app.post("/",function(req,res){
  var email = req.body.email;
  var password = req.body.password;
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    app.get("/home",function(req,res){
      res.sendFile("C:/Users/udayr/OneDrive/Desktop/html3/new.html");
    })

    return res.redirect("/home");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
})
// Sign Up
app.post("/signup",function(req,res){
  var email = req.body.email;
  var password = req.body.password;
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    app.get("/home",function(req,res){
      res.sendFile("C:/Users/udayr/OneDrive/Desktop/html3/new.html");
    })
    return res.redirect("/home");

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });
})
app.listen("3000",function(){
  console.log("server is running on port 3000");
})