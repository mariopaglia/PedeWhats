/**
 * Verifica se a pizza tem mais de um sabor, se sim, esconde outros campos, se não, libera os campos de "metade 1" e "metade 2"
 */

$(document).ready(function () {
    $('[name="pagamento"]').first().prop('checked', true);
    $('#dados-cdc').hide();
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

    var lenghtValidator = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    maskOptions = {
        onKeyPress: function(val, e, field, options) {
            field.mask(lenghtValidator.apply({}, arguments), options);
        }
    };

    /**
     * Realiza a máscara no campo "telefone da pizzaria"
     */

    $('#telefone').mask('00000000000');
    $('#cdc').mask('0000.0000.0000.0000');
    $('#cdc-expiration').mask('99/99',{placeholder:"mm/yy"});
    $('#cdc-cvv').mask('999');

    $('input[type=radio][name=pagamento]').change(function (event) {
        if(event.target.value === 'cdc') {
            $('#dados-cdc').show();
        } else {
            $('#dados-cdc').hide();
        }
    });
});
