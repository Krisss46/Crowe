const resizer = document.getElementById("resizer")
const feed = document.getElementById("feed-side")
const loginPanel = document.getElementById("login-side")
const signupBtn = document.getElementById("signup-btn")
const loginBtn = document.getElementById("login-btn")

// allow resizer to resize both sides of page
resizer.addEventListener("mousedown", () => {
    document.addEventListener("mousemove", resize)
    document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", resize)
    }, { once: true })
})

signupBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    
    await signUp(email, password, (result) => {
        if (result)
            window.location.href = "html/home.html"
        else
            alert("err")// TODO: more descriptive
    })
})

loginBtn.addEventListener("click", async (e) => {
    e.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    
    await login(email, password, (result) => {
        // TODO
    })
})

// Functions //////////////////////////////////////////////////////////////////////////////

/**
 * Allows resizing of resizer
 * @param {*} event 
 */
function resize(event) {
    const viewportX = document.body.clientWidth
    const mouseX = event.clientX

    const deadzone = 250 // cannot resize when less then deadzone value pixels to left/right side of viewport
    if (mouseX > viewportX - deadzone || mouseX < deadzone) return

    // below "(values)" are specific to total padding on both sides of resizer to prevent cursor offsetting from resizer during usage
    feed.style.width = mouseX - (viewportX * 0.06) + "px"
    loginPanel.style.width = viewportX - mouseX - (viewportX * 0.02) + "px"
}

/**
 * allows a new user to sign up to platform
 * @param {string} email 
 * @param {string} password 
 * @callback > bool - was call successful? 
 */
async function signUp(email, password, callback){
    try{
        const response = await fetch("/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        })

        const data = await response.json()
        if (data.success){
            console.log("New account created!")
            callback(true)
        }else{
            console.log("Couldn't create account ==> ", data.error)
            callback(false)
        }
    }catch (error){
        console.error("Server err ==> ", error);
    }
}

/**
 * allows a new user to sign up to platform
 * @param {string} email 
 * @param {string} password 
 * @callback > bool - was call successful? 
 */
async function login(email, password, callback){
    try{
        const response = await fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        })

        const data = await response.json()
        if (data.success){
            console.log("Account logged in!")
            callback(true)
        }else{
            console.log("Couldn't log account ==> ", data.error)
            callback(false)
        }
    }catch (error){
        console.error("Server err ==> ", error);
    }
}