// Includes Function
const _includes = (arr: Array<string> | string, str: string) => arr.indexOf(str) >= 0 ? true : false;


// Create New Element 
const _createNewElement = (className: "currentInput" | "currentOutput" = "currentInput", textContent: string = "0") => {
    let div = document.createElement('div');
    div.className = className;
    div.innerHTML = textContent;
    _inputbox?.appendChild(div);
}


// Check currentInput and currentOutput Class 
const _checkIOClass = () => {
    const _currentInput = document.querySelector('.currentInput');
    const _currentOutput = document.querySelector('.currentOutput');
    return { _currentInput, _currentOutput }
}
