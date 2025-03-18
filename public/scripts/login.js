const resizer = document.getElementById("resizer")
const feedSide = document.getElementById("feed-side")
const loginSide = document.getElementById("login-side")

resizer.addEventListener("mousedown", () => {
    document.addEventListener("mousemove", resize)
    document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", resize)
    }, { once: true })
})

// Functions ////////////////////////////////
function resize(event){
    const viewportX = window.innerWidth
    const mouseX = event.clientX

    const deadzone = 250
    if(mouseX < deadzone || mouseX > window.innerWidth - deadzone) return

    feedSide.style.width = mouseX - (viewportX * 0.06) + "px"
    loginSide.style.width = viewportX - mouseX - (viewportX * 0.04)  + "px"
}

