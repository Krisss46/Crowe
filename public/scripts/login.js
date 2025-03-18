/**
 * @author Kurisu
 * @file login.js
 * @create date 2025-3-18
 * 
 * @file local script for login page
 * @description allows user to sign up, sign in or browse as guest
 */

// Elements /////////////////////////////////
const resizer = document.getElementById("resizer")
const feedSide = document.getElementById("feed-side")
const loginSide = document.getElementById("login-side")
const branding = document.getElementById("branding")
const loginSideReservedSpace = document.getElementById("login-side-reserved-space")
const signupBtn = document.getElementById("signup-btn")
const loginBtn = document.getElementById("login-btn")
const email = document.getElementById("email")
const password = document.getElementById("password")
const form = document.getElementsByName("form")[0]

// Event Listeners //////////////////////////

/**
 * Resize event
 * - Resizes half-feed/login-side
 */
resizer.addEventListener("mousedown", () => {
    document.addEventListener("mousemove", resize)
    document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", resize)
    }, { once: true })
})

/**
 * Sign up event
 * - Creates user account
 * - Logs user
 * - Redirects to home page
 */
signupBtn.addEventListener("click", async (e) => {
    e.preventDefault()

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then(() => {
        console.log("New account created")

        firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then(() => {
            window.location.href = "/html/home.html"
        })
    })
    .catch((error) => {
        console.log("server err ==> ", error)
    })
})

/**
 * Login event
 * - Logs user
 * - Redirects to home page
 */
loginBtn.addEventListener("click", async (e) => {
    e.preventDefault()

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
    .then(() => {
        console.log("User logged")
        window.location.href = "/html/home.html"
    })
    .catch((error) => {
        console.log("server err ==> ", error)
    })
})

// Functions ////////////////////////////////

/**
 * Enables resizer verticle bar to resize the feed and login sides
 * @param {*} event
 */
function resize(event){
    const viewportX = window.innerWidth
    const mouseX = event.clientX

    const deadzone = 350 // deadzone size from left/right side of viewport
    if(mouseX < deadzone || mouseX > window.innerWidth - deadzone) return

    // below "(viewportX * value)" is offset correction as padding will offset cursor from resizer during usage
    feedSide.style.width = mouseX - (viewportX * 0.06) + "px"
    loginSide.style.width = viewportX - mouseX - (viewportX * 0.04)  + "px"

    
}

//////////////////////////////////////////////

/* Notes



*/