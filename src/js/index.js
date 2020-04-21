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
        document.getElementById('btn-sub').style.fill = corPadraoFundoSvgCounter;
    } else {
        if ((parseInt(contador) === 0) || (contador === '')) {
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

function alterarCssCheckBox(labels) {
    for (const l of labels) {
        l.style.color = '#F59393';
        let [b] = l.getElementsByTagName('span');  
        b.style.backgroundColor = '#F59393';
    }
}

window.onload = function() {
    document.getElementById('form-stickers').onsubmit= function(e){
        e.preventDefault();
        
        const form = document.getElementById('form-stickers');
        
        const tiposStickers = form.getElementsByClassName('checkbox-square');
        
        if (!validarTiposStickers(tiposStickers)) {
            
            const labels = document.getElementsByClassName('container-checkbox');
            alterarCssCheckBox(labels);

            alert('Escolha pelo menos um tipo de sticker.');
            
            return;
        }
        
        let [contador] = form.getElementsByClassName('input-quantity');

        if (parseInt(contador.value) <= 0 || contador.value == '') {
            alterarCssInputContador('error');
            alert('Adicione pelo menos uma unidade de sticker.');
            return;
        }
        
        let [obs] = form.getElementsByClassName('section-textarea');
        
        if (obs.value == '') {
            alert('Por favor, adicione uma observação.');
            return;
        }

        document.getElementById('label-confirm-form').textContent = 'Formulário enviado com sucesso!';

        

        



    }
}

function validarTiposStickers(tipos) {

    let aux = 0;
    for (let t of tipos) {
        if (t.checked) {
            aux++;
        }
    }
    
    return aux > 0 ? true : false;
}

function validarQuantidadeStickers(contador) {

    let aux = 0;
    for (let tipo of tipos) {
        if (tipo.checked) {
            aux++;
        }
    }
    
    return aux > 0 ? true : false;
}

