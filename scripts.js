// INPUT SIZE
const inputSize = document.querySelector('#input-size')
const showSize = document.querySelector('#show-size')
// INPUT FONT
const selectFont = document.querySelector('#select-font')
const showFont = document.querySelector('#show-font')
// INPUT COLOR
const inputColor = document.querySelector('#input-color')
const showColor = document.querySelector('#show-color')
// INPUT BACKGROUND COLOR
const inputBgColor = document.querySelector('#input-bg-color')
const showBgColor = document.querySelector('#show-bg-color')
//DISPLAY
const display = document.querySelector('#display')
const enterText = document.querySelector('#enter-text')

//EVENT LISTENERS
inputSize.addEventListener('input', handleInput)
selectFont.addEventListener('input', handleInput)
inputColor.addEventListener('input', handleInput)
inputBgColor.addEventListener('input', handleInput)
enterText.addEventListener('input', handleInput)

function handleInput() {
    //Show Font Size
	const fontSize = parseInt(inputSize.value)
    display.style.fontSize = fontSize + 'px'
    console.log(fontSize)
    showSize.innerHTML = fontSize
    
    //Show Font Style
    const fontStyle = selectFont.value
    display.style['font-family'] = fontStyle
    console.log(fontStyle)
    showFont.innerHTML = fontStyle

    //Show Font Color
    const fontColor = inputColor.value
    display.style.color = fontColor
    console.log(fontColor)
    showColor.innerHTML = fontColor

    //Show Font Background Color
    const bgColor = inputBgColor.value
    display.style.backgroundColor = bgColor
    console.log(bgColor)
    showBgColor.innerHTML = bgColor

    //set the text of the #display element 
    //to the text that is entered into the textarea #enter-text
    const text = enterText.value
    display.innerHTML = text
}

handleInput()