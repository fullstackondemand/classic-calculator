const _inputbox = document.querySelector('.inputBox');
const _operatorVal: Array<string> = ['+', '-', '/', '*', '%'];


// Create New Element 
const _createNewElement = (className: string, textContent: string) => {
    let div = document.createElement('div');
    div.className = className;
    div.innerHTML = textContent ?? '0';
    return div;
}


// Press Number Button Key
document.querySelectorAll('.number').forEach(button => {
    button.addEventListener('click', () => {
        let buttonText: string | null = button.textContent;
        const _currentInput = document.querySelector('.currentInput');
        const _currentOutput = document.querySelector('.currentOutput');

        if (_currentInput && _currentOutput) {
            _currentInput.className = "";
            _currentOutput.className = "";
            let currentInput = _createNewElement('currentInput', buttonText ?? "0");
            _inputbox?.appendChild(currentInput);
        }
        else if (_currentInput) {
            if (_currentInput.textContent == '0') {
                _currentInput.textContent = buttonText;
            }
            else {
                _currentInput.innerHTML += buttonText;
            }
        }
    });
});


// Press Operator Button Key
document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        let buttonText: string | null = button.textContent;
        const _currentInput = document.querySelector('.currentInput');
        const _currentOutput = document.querySelector('.currentOutput');

        if (_currentInput && _currentOutput) {
            _currentInput.className = "";
            _currentOutput.className = "currentInput";
            let currentInput = document.querySelector('.currentInput');
            if (currentInput) {
                currentInput.innerHTML += buttonText;
            }
        }
        else if (_currentInput) {
            let inputVal: string = _currentInput.textContent?.slice(-1) ?? "*";
            if (_currentInput.textContent != '0' && _operatorVal.indexOf(inputVal) == -1) {
                _currentInput.innerHTML += buttonText;
            }
        }
    });
});


// Press Equal Button Key
document.querySelector('.equal')?.addEventListener('click', () => {
    const _currentOutput = document.querySelector('.currentOutput');
    const _currentInput = document.querySelector('.currentInput');
    let inputVal: string = _currentInput?.textContent?.slice(-1) ?? "*";
    let execute = false;

    _operatorVal.forEach((operator) => {
        if (_currentInput?.textContent?.indexOf(operator) != -1) {
            execute = true;
        }
    });

    if (_operatorVal.indexOf(inputVal) == -1 && execute) {
        if (_currentOutput) {
            _currentOutput.textContent = eval(_currentInput?.textContent ?? "0");
        }
        else {
            let currentOutput = _createNewElement('currentOutput', eval(_currentInput?.textContent ?? "0"));
            _inputbox?.appendChild(currentOutput);
        }
    }
});


// Press Clear Button Key
document.querySelector('.clear')?.addEventListener('click', () => {
    if (_inputbox) {
        _inputbox.innerHTML = "";
        let currentInput = _createNewElement('currentInput', "0");
        _inputbox?.appendChild(currentInput);
    }
});


// Press Backspace Button Key
document.querySelector('.backspace')?.addEventListener('click', () => {
    let _lastChild = _inputbox?.lastElementChild?.className;
    const _currentOutput = document.querySelector('.currentOutput');
    const _currentInput = document.querySelector('.currentInput');

    if (_currentInput && _lastChild == "currentInput") {
        if (_currentInput?.textContent && _currentInput?.textContent.length == 1) {
            _currentInput.innerHTML = '0';
        }
        else if (_currentInput?.textContent != '0') {
            let input = _currentInput?.textContent?.slice(0, -1) ?? "0";
            _currentInput.innerHTML = input;
        }
    }
    else if (_lastChild == "currentOutput") {
        _currentOutput?.remove();
    }
    else {
        _lastChild = "currentInput";
    }
});


// Press Double Zero Button Key
const _zero = document.querySelector('.zero');
_zero?.addEventListener('click', () => {
    let buttonText: string | null = _zero.textContent;
    const _currentInput = document.querySelector('.currentInput');
    const _currentOutput = document.querySelector('.currentOutput');

    if (_currentInput && _currentOutput) {
        _currentInput.className = "";
        _currentOutput.className = "";
        let currentInput = _createNewElement('currentInput', "0");
        if (_currentInput.textContent != '0') {
            _currentInput.innerHTML += buttonText;
        }
        _inputbox?.appendChild(currentInput);
    }
    else if (_currentInput) {
        if (_currentInput.textContent != '0') {
            _currentInput.innerHTML += buttonText;
        }
    }
});
