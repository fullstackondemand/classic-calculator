// Operator Function
const _operatorFuncs = (textContent: string) => {
    const { _currentInput, _currentOutput } = _checkIOClass();
    operator = textContent === "%" ? "*" : "";
    isPoint = true;

    if (_currentInput && _currentOutput) {
        _currentInput.classList.remove("currentInput");
        _currentOutput.classList.replace("currentOutput", "currentInput");
        let { _currentInput: currentInput } = _checkIOClass();
        currentInput ? currentInput.innerHTML += textContent : "";
    }
    else if (_currentInput) {
        let lastIndex: string = _currentInput.textContent?.slice(-1) ?? "*";
        if ((lastIndex === "%" && textContent !== '%') || (_currentInput.textContent !== '0' && !_includes(_operator, lastIndex))) {
            _currentInput.innerHTML += textContent;
        }
    }
}
