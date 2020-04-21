const corPadraoFundoSvgCounter = '#2f3676';
const corErroFundoSvgCounter = '#C5CFD6';

const corPadraoFundoInputCounter = '#DDE3E9';
const corErroFundoInputCounter = '#F59393';
const bordaPadraoInputCounter = '1px solid #2F3676';
const bordaErroInputCounter = '1px solid #F33232';



function somarContador() {
    alterarCssInputContador();
    
    let contador = document.getElementById('contador').value;

    if (contador == '') {
        document.getElementById('contador').value = 1;
    } else {
        if (parseInt(contador) === 0) {
            document.getElementById('btn-sub').style.fill = corPadraoFundoSvgCounter;
        }
        document.getElementById('contador').value = parseInt(contador) + 1;
    }
}

function subtrairContador() {
    let contador = document.getElementById('contador').value;
    
    if (contador == '') {
        alterarCssInputContador('error');
        document.getElementById('contador').value = 0;
        return;
    }
    
    if (parseInt(contador) === 0) {
        alterarCssInputContador('error');
    } else {
        document.getElementById('contador').value = parseInt(contador) - 1;
    }
}

/*
**
a variável option deverá ser enviada como string contendo "error" caso queira 
que o input se comporte em um cenpário de erro.
Caso contrário é só não passar parametro nenhum.
**
*/ 
function alterarCssInputContador(option) {
    if (option == 'error') {
        document.getElementById('contador').style.backgroundColor = corErroFundoInputCounter;
        document.getElementById('contador').style.border = bordaErroInputCounter;
        document.getElementById('btn-sub').style.fill = corErroFundoSvgCounter;
    } else {
        document.getElementById('contador').style.backgroundColor = corPadraoFundoInputCounter;
        document.getElementById('contador').style.border = bordaPadraoInputCounter;
    }
}