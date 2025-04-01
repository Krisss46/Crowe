/**
 * @author Kurisu
 * @file home.js
 * @create date 2025-3-28
 * 
 * @file local script for home page
 * @description general usage of platform within main/home page
 */

// Elements /////////////////////////////////
const resizer1 = document.getElementById("resizer1")
const resizer2 = document.getElementById("resizer2")
const secNavigation = document.getElementById("section-navigation")
const secMain = document.getElementById("section-main")
const secChat = document.getElementById("section-chat")

// Event Listeners //////////////////////////


// Functions ////////////////////////////////


/////////////////////////////////////////////

/* Notes
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }
  

var res1 = 25
var cent = 50
var res2 = 25

function resize(event, NO){
    const viewportX = window.innerWidth
    const mouseX = event.clientX

    const deadzone = 350 // deadzone size from left/right side of viewport
    console.log("mouseX ==> " + mouseX)
    if(mouseX < deadzone || mouseX > window.innerWidth - deadzone) return

    // >>  below "(viewportX * value)" is offset correction as padding will offset cursor from resizer during usage
    if (NO == 1){
        var playgroundSpace = 100 - res2
        
        var ratio = clamp(mouseX/(viewportX*(100-res2)), 0 , 100-res2)
        console.log(ratio)

        res1 = playgroundSpace * ratio
        cent = playgroundSpace - res1

        secNavigation.style.flexGrow = res1
        secMain.style.flexGrow = cent
    }else{
        //TODO
    }

    
}
resizer1.addEventListener("mousedown", () => {
    document.addEventListener("mousemove", (event) => resize(event, 1))
    document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", (event) => resize(event, 1))
    }, { once: true })
})
resizer2.addEventListener("mousedown", () => {
    document.addEventListener("mousemove", resize(2))
    document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", resize(2))
    }, { once: true })
})

*/