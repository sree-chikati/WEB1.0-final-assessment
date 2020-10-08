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

//STRETCH GOALS: 
// INPUT STYLE
const selectStyle = document.querySelector('#select-style')
const showStyle = document.querySelector('#show-style')
// INPUT WEIGHT
const selectWeight = document.querySelector('#select-weight')
const showWeight = document.querySelector('#show-weight')
//INPUT LETTER SPACING
const inputSpace = document.querySelector('#input-space')
const showSpace = document.querySelector('#show-space')
//INPUT PADDING
const inputPadding = document.querySelector('#input-padding')
const showPadding = document.querySelector('#show-padding')

//EVENT LISTENERS
inputSize.addEventListener('input', handleInput)
selectFont.addEventListener('input', handleInput)
inputColor.addEventListener('input', handleInput)
inputBgColor.addEventListener('input', handleInput)
enterText.addEventListener('input', handleInput)
inputSpace.addEventListener('input', handleInput)
inputPadding.addEventListener('input', handleInput)
selectWeight.addEventListener('input', handleInput)
selectStyle.addEventListener('input', handleInput)

function handleInput() {
    //Show Font Size
	const fontSize = parseInt(inputSize.value)
    display.style.fontSize = fontSize + 'px'
    console.log(fontSize)
    showSize.innerHTML = fontSize
    
    //Show Font Family
    const fontFamily = selectFont.value
    display.style['font-family'] = fontFamily
    console.log(fontFamily)
    showFont.innerHTML = fontFamily

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

    //STRRTCH GOAL: Show Font Style
    const font_style = selectStyle.value
    display.style.fontStyle= font_style
    console.log(font_style)
    showStyle.innerHTML = font_style

    //STRRTCH GOAL: Show Font Weight
    const font_weight = selectWeight.value
    display.style.fontWeight= font_weight
    console.log(font_weight)
    showWeight.innerHTML = font_weight

    //STRRTCH GOAL: Show Letter Spacing
    const letter_space = inputSpace.value
    display.style.letterSpacing = letter_space + 'px'
    console.log(letter_space)
    showSpace.innerHTML = letter_space

    //STRRTCH GOAL: Show Text Padding
    const text_padding = inputPadding.value
    display.style.padding = text_padding + 'px'
    console.log(text_padding)
    showPadding.innerHTML = text_padding

    //set the text of the #display element 
    //to the text that is entered into the textarea #enter-text
    const text = enterText.value
    display.innerHTML = text
}

handleInput()