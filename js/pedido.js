export default class Pedido {

	constructor(Formdata) {
		this._data = this.getData(Formdata); // recupera dados do formulário

		// distribui dados do formulário
		this.mais_sabor = this._data.mais_sabor;
		this.metade1 = this._data.metade1;
		this.metade2 = this._data.metade2;
		this.nome = this._data.nome;
		this.pagamento = this._data.pagamento;
		this.sabor_inteiro = this._data.sabor_inteiro;
		this.telefone = this._data.telefone;

		this._apiWhats = 'https://api.whatsapp.com/send'; // Api WhatsApp
		this.texto = this.getText(); // retorna texto codificado
		this._url = `${this._apiWhats}?phone=55${this.telefone}&text=${this.texto}`;

		this.sendMessage(this._url);
		Object.freeze(this);
	}

	// função que converte form data, obtido através do serialize, em um objeto/json 
	getData(form) {
	    let unindexed_array = form.serializeArray();
	    let indexed_array = {};

	    $.map(unindexed_array, function(n, i){
	        indexed_array[n['name']] = n['value'];
	    });

	    return indexed_array;
	}

	getText() {
		/**
		*
		* Aqui deverá ser montada a estrutura do texto que será enviado ao restaurante/pizzaria.
		*
		*/
		let text = 'Texto genérico com acentuação!';
		return encodeURIComponent(text); // retorna texto já codificado para url
	}


	sendMessage(url) {
		window.open(url,'_blank');
	}

	/**
	* Getter's and Setter's
	*/

	get apiWhats(){
		return this._apiWhats;
	}

	set apiWhats(url){
		this._apiWhats = url;
	}

	get url(){
		return this._url;
	}

}