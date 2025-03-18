/*
*   Firebase configurations and libraries
*   
*   For quick and easy access
*   Used to make calls to server
*   Refer to notes below for functional list
*   
*   !!!FIREBASECONFIG CREDENTIALS MUST BE KEPT HIDDEN AND INACCESSIBLE FROM THE PUBLIC AND CLIENT-SIDE!!!
*/

// hide api from client-side and secure api endpoints
const app = require("express")()
const dotenv = require("dotenv").config({ path: "../.env" })
const admin = require("firebase-admin")
admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT))
})
console.log("yay")
// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
}
// run npm dotenv and create .env file at /root
// add .env to .gitignore and copy the below with your own firebase api when creating your own project 
// 
// FIREBASE_API_KEY=AIzaSy********* 
// FIREBASE_AUTH_DOMAIN=*******.firebaseapp.com  
// FIREBASE_PROJECT_ID=********  
// FIREBASE_STORAGE_BUCKET=**********.appspot.com  
// FIREBASE_MESSAGING_SENDER_ID=*********  
// FIREBASE_APP_ID=1:519626195234:web:************  
// FIREBASE_MEASUREMENT_ID=**********

// Initialize Firebase
app.use(express.json())
const auth = admin.auth()

// Library
//////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Creates and enables current users session
 * @param {Object} req fetch data from client
 * @param {Object} res respond to client
 */
async function signUp(req, res){
    try{
        const user = await admin.auth().createUser({
            email: req.body.email,
            password: req.body.password,
        })
        res.json({ success: true, uid: user.uid })
    }catch (error){
        res.status(400).json({ error: error.message })
    }
}

/**
 * Logs current users session
 * @param {Object} req fetch data from client
 * @param {Object} res respond to client
 */
async function login(req, res){
    try{
        await signInWithEmailAndPassword(auth, email, password)
        res.json({ success: true })
    }catch (error){
        res.status(400).json({ error: error.message })
    }
}

/**
 * Extracts current users information, returns NULL if no information found, callbacks availabe instead of returns
 * @returns {string} > string - extracted information ==> {email}
 */
async function getCredentials(callback){
    const authentication = auth.currentUser

    // fail if auth cant be extracted
    if (!authentication){
        console.log("server.js > getCredentials() => authentication NULL")
        callback(null)
        return
    }

    const email = authentication.email
    
    callback(email)
    return {email}
}
// Expose endpoints as API routes and open port ////////////////////////////////////////////////////////////////////////////////////////////////////
app.post("/signup", signUp)
app.post("/login", login)

app.listen(3000, () => console.log("Listening on 3000"))

/* Notes

a lot of shit to be fixed bro


*/