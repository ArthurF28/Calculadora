function insertToDisplay(data){ // inserir o que está sendo clicado no display da calculadora //
    document.querySelector('#display').value += data
}

function clean(){ // limpar tudo que está no display //
    document.querySelector('#display').value = ''
}

function back(){ // apagar o último número do display //
    const display = document.querySelector('#display')
    display.value = display.value.slice(0, -1)
}

function result(){ // calcular o resultado e inserir automaticamente no display //
    const display = document.querySelector('#display')
    try {
        display.value = eval(display.value)
    } catch {
        display.value = 'Erro' //caso não haja um cálculo possível, mostra o alerta de erro no display //
    }
}