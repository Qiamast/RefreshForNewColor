// select main random color container from DOM
let colorContainer = document.querySelector(".Random-Color")
// Add onload event on window for call function every tab loading time
window.addEventListener("load", () => {
  // call function
  GenerateRandomColor()
})
// add key press (down) event to DOM for every press space or enter
// get new random color an page
document.body.addEventListener("keydown", (event) => {
  // if user press space or enter key on keyboard generate new color 
  if (event.code === "Space" || event.code === 'Enter') {
    GenerateRandomColor()
  }
})
// if user double click on the window generate new color
document.body.addEventListener("dblclick", GenerateRandomColor)
//interval to generate new random color every 10 second
setInterval(GenerateRandomColor, 10000)
// this function generate new random color and add in DOM
function GenerateRandomColor() {
  // define main rgb color code part 
  let red = Math.floor(Math.random()*255)
  let green = Math.floor(Math.random()*255)
  let blue = Math.floor(Math.random() * 255)
  // color code generated by random number in range 255
  let colorCode = `rgb(${red}, ${green}, ${blue})`
  // change random color container background color with new color
  colorContainer.style.backgroundColor = colorCode
  // add new color code in inner text of color container
  colorContainer.innerHTML = colorCode
}

// “Simplicity is the ultimate sophistication.” — Leonardo da Vinci
// @Qiamast









