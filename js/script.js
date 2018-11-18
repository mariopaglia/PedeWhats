/**
 * Verifica se a pizza tem mais de um sabor, se sim, esconde outros campos, se não, libera os campos de "metade 1" e "metade 2"
 */

$(document).ready(function () {
    $('#metade1, #metade2').hide();
    $('input[type=radio][name=mais-sabor]').change(function () {
        if (this.value == 'sim') {
            $('#sabor-inteiro-label, #sabor-inteiro').hide();
            $('#metade1, #metade2').show();
        } else if (this.value == 'não') {
            $("#metade1, #metade2").hide();
            $('#sabor-inteiro-label, #sabor-inteiro').show();
        }
    });
});

/**
 * Realiza a máscara no campo "telefone da pizzaria"
 */

$('#telefone').mask('00000000000');