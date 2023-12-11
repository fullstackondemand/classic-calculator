const _inputbox = document.querySelector('.inputBox');
let isPoint = true;
let operator = "";


// Press Key Interaction
document.querySelector('body')?.addEventListener('keydown', e => {
    let textContent = e.key;
    let operations = _operation.filter(items => _includes(items.value, textContent));
    operations?.forEach(operation => operation.funcs(textContent));
})


// Click Button 
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        let textContent = button.textContent ?? "0";
        let operations = _operation.filter(items => _includes(items.value, textContent));
        operations?.forEach(operation => operation.funcs(textContent));
    })
})
