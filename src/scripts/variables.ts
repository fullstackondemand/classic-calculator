const _number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '00'];
const _operator = ['+', '-', '/', '*', '%'];

const _operation = [
    { value: _number, funcs: (textContent: string) => _numberFuncs(textContent) },
    { value: _operator, funcs: (textContent: string) => _operatorFuncs(textContent) },
    { value: ['.'], funcs: (textContent: string) => _pointFuncs(textContent) },
    { value: ['Backspace', 'DE'], funcs: () => _backspaceFuncs() },
    { value: ['Delete', 'C'], funcs: () => _clearFuncs() },
    { value: ["=", "Enter"], funcs: () => _equalFuncs() }
]