const functions = require("firebase-functions")

exports.test = functions.https.onRequest((req, res) => {
    console.log("yay")
    res.send("hello")
})

exports.hello = functions.https.onCall((data, context) => {
    return "finally did it"
})