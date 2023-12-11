// Backspace Function 
const _backspaceFuncs = () => {
    let _lastChild: string = _inputbox?.lastElementChild?.className ?? "";
    const { _currentInput, _currentOutput } = _checkIOClass();

    if (_currentInput && _lastChild === "currentInput") {
        if (_currentInput?.textContent && _currentInput?.textContent.length == 1) {
            _currentInput.innerHTML = '0';
        }
        else if (_currentInput?.textContent !== '0') {
            let input = _currentInput?.textContent?.slice(0, -1) ?? "0";
            _currentInput.innerHTML = input;
        }
    }
    else {
        _lastChild == "currentOutput" ? _currentOutput?.remove() : _lastChild = "currentInput";
    }
}


// Clear Function
const _clearFuncs = () => {
    if (_inputbox && _inputbox.innerHTML !== undefined) {
        _inputbox.innerHTML = "";
        _createNewElement();
    }
}


// Point Function
const _pointFuncs = (textContent: string) => {
    const { _currentInput, _currentOutput } = _checkIOClass();
    const lastChar = _currentInput?.textContent?.slice(-1) ?? "*";

    if (_currentInput && _currentOutput) {
        _currentInput.classList.remove('currentInput');
        _currentOutput.classList.remove('currentOutput');
        _createNewElement(undefined, "0.");
    }
    else if (_currentInput) {
        if (!_includes(_number, lastChar) && lastChar !== ".") {
            _currentInput.innerHTML += _currentInput.textContent == '0' ? "." : "0.";
        }
        else if (isPoint) {
            _currentInput.innerHTML += textContent;
        }
        isPoint = false;
    }
}


// Equal Function
const _equalFuncs = () => {
    isPoint = true;
    const { _currentInput, _currentOutput } = _checkIOClass();
    let currentInput = _currentInput?.textContent?.replace("%", `/100${operator}`) ?? "0";
    const lastChar = currentInput?.slice(-1) ?? "*";

    if (!_includes(_operator, lastChar) && _operator.filter(items => _includes(currentInput, items))) {
        _currentOutput ? _currentOutput.textContent = eval(currentInput) : _createNewElement('currentOutput', eval(currentInput));
    }
}
