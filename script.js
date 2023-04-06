const calculatorScreen = document.querySelector('.calculatorScreen')

const updateScreen = (button) => {
    calculatorScreen.value = button
}

const buttons = document.querySelectorAll(".button")

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        updateScreen(event.target.value)
    })
})

let prevButton =''
let calculationOperator =''
let currentButton ='0'

const inputButton = (button) => {
    if (currentButton === '0'){
        currentButton = button
    }else {
        currentButton += button
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        inputButton(event.target.value)
        updateScreen(currentButton)
    })
})

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value)
        updateScreen(calculationOperator)
    })
})

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevButton = currentButton
    }
    
    calculationOperator = operator
    currentButton = '0'
}


const calculate = () => {
    let result = ''
    switch(calculationOperator){
        case '+':
            result = parseFloat(prevButton) + parseFloat(currentButton)
            break;
        case '-':
            result = parseFloat(prevButton) - parseFloat(currentButton)
            break;
        case '*':
            result = parseFloat(prevButton) * parseFloat(currentButton)
            break;
        case '/':
            result = parseFloat(prevButton) / parseFloat(currentButton)
            break;
        default:
            return;
    }
    currentButton = result
    calculationOperator = ''
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    calculate()
    updateScreen(currentButton)
})

const clearAll = () => {
    prevButton = currentButton
    calculationOperator = ''
    currentButton = '0'
}

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener('click', () => {
    clearAll()
    updateScreen(currentButton)
})

inputDecimal = (dot) => {
    if (currentButton.includes('.')){
        return
    } currentButton += dot 
}

const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentButton)
})

const percentage = document.querySelector('.percentage')

percentage.addEventListener('click', () => {
    calculatePercentage()
})
const calculatePercentage =() => {
    let result = parseFloat(currentButton);
    updateScreen((result)/(100))
}
