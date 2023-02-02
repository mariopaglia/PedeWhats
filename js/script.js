/**
* Importa função para "pegar" dados do formulário após envio
*/
import Pedido from './pedido.js';


/**
 * Verifica se a pizza tem mais de um sabor, se sim, esconde outros campos, se não, libera os campos de "metade 1" e "metade 2"
 */

$(document).ready(function () {
    $('[name="pagamento"]').first().prop('checked', true);
    
    $('#metade1-label, #metade2-label, #metade2, #metade1').hide();
    $('input[type=radio][name=mais-sabor]').change(function () {
        if (this.value == 'sim') {
			$('#sabor-inteiro-label, #sabor-inteiro').hide();
			$('#metade1-label, #metade2-label, #metade2, #metade1').show();
        } else if (this.value == 'não') {
            $("#metade1-label, #metade2-label, #metade1 , #metade2").hide();
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
	$('#telefone').mask('(00) 00000 - 0000');

    
	
	/**
	* Pegar Pedidos 
	*/
	function getPedidos (){
		let nome = document.getElementById("nome").value;
		let telefone = document.getElementById("telefone").value;
		let saborInteiro = document.getElementById("sabor-inteiro").value;
		let metade1 = document.getElementById("metade1").value;
		let metade2 = document.getElementById("metade2").value;
		let formaPagPegar = document.getElementsByClassName("form-check-input");
		let formaPag;
			if(formaPagPegar[2].checked){
				formaPag = document.getElementsByClassName("form-check-label")[2].innerText;
			} else if(formaPagPegar[3].checked){
				formaPag = document.getElementsByClassName("form-check-label")[3].innerText;
			} else if(formaPagPegar[4].checked){
				formaPag = document.getElementsByClassName("form-check-label")[4].innerText;
			} 
		let detalhes ;
		if(metade1 != ""){
			
			detalhes = "Confirmação de Dados:\n"+"Nome = " + nome + "\n" + "Telefone = " + telefone + "\n" + "Sabor da Pizza Metade1= "+ metade1 +"\n" + "Sabor da Pizza Metade2= "+ metade2 +"\n" + "Forma de Pagamento = "+ formaPag;	
		} else {
			detalhes = "Confirmação de Dados:\n"+"Nome = " + nome + "\n" + "Telefone = " + telefone + "\n" + "Sabor da Pizza = "+ saborInteiro + "\n" +"Forma de Pagamento = "+ formaPag;	
			
		} 
		
		
		 let confirmacao = confirm(detalhes);
		 if(confirmacao){
			 alert("Pedido Enviado")
		 } else{
			 alert("Pedido Cancelado")
		 }
		
	}
	document.getElementById("btn").onclick = function(e){
		getPedidos();
	}
});

/**
*   Eventos do formulário
*/

$('#formularioPedirWhats').on('submit', function(e){
    e.preventDefault(); // previne comportamento padrão fo form
    let pedido = new Pedido($(this)); // Instancia a classe Pedido
    /**
    * Todo o processo do pedidos é efetuado no momento que instaciamos a classe. (possível melhoria)
    */
});