// Number Function
const _numberFuncs = (textContent: string) => {
    const { _currentInput, _currentOutput } = _checkIOClass();
    let zero = ["00", "0"];

    if (_currentInput && _currentOutput) {
        textContent = _includes(zero, textContent) ? "0" : textContent;
        _currentInput.classList.remove('currentInput');
        _currentOutput.classList.remove('currentOutput');
        _createNewElement(undefined, textContent);
    }
    else if (_currentInput) {
        textContent = _includes(zero, textContent) && _currentInput?.textContent === "0" ? "0" : textContent;
        _currentInput.textContent !== "0" ? _currentInput.textContent += textContent : _currentInput.textContent = textContent;
    }
}