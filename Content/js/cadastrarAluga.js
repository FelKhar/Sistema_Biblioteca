$( document ).ready(function() {
	// Variável para guardar o request
	var request;

	// Bind da função de submit do nosso formulário
	$("#formCadastroAluga").submit(function(event){

		//Não deixa que o POST default seja acionado
		event.preventDefault();

		//Cancelando qualquer request pendente
		if (request) {
			request.abort();
		}
		
		//Limpo as mensagens
		$("#divMensagem").empty();
		
		//variáveis locais
		var $form = $(this);

		//Vamos selecionar e armazenar todos os cmapos do formulário para operações com eles
		var $inputs = $form.find("input, select, button, textarea");

		//Vamos serializar o formulário
		var serializedData = $form.serialize();
		serializedData+="&operacao=AdicionarAluga"

		//Vamos desabilitar os inputs durante a requisição para não deicar mandar várias seguidas
		// OBS: N[os desabilitamos os campos depois de serializar os dados
		$inputs.prop("disabled", true);

		//Vamos mandar a requisição
		request = $.ajax({
			url: "controller/AlugaController.php",
			type: "post",
			data: serializedData
		});

		// Callback para ser chamado quando ocorre o sucesso
		request.done(function (response, textStatus, jqXHR){
			console.log("OK, funcionou!");
			var response = $.parseJSON(response);
			if (!response.success) { //Se deu alguma mensagem de erro
				if (response.erros.email) {
					$('#divMensagem').append('<div class="alert alert-danger" role="alert">' + response.erros.email+ '</div>')
					.fadeIn(1000).html();
				}
				if (response.erros.senha) {
					$('#divMensagem').append('<div class="alert alert-danger" role="alert">' + response.erros.senha + '</div>')
					.fadeIn(1000).html();
				}
				if (response.erros.livro) {
					$('#divMensagem').append('<div class="alert alert-danger" role="alert">' + response.erros.livro + '</div>')
					.fadeIn(1000).html();
				}			
			}
			else {
					$('#divMensagem').append('<div class="alert alert-success" role="alert">' + response.posted + '</div>')
					.fadeIn(1000).html();
					redirect("index.php?page=Lista");
			}
		});

		// Callback para ser chamado em caso de falha
		request.fail(function (jqXHR, textStatus, errorThrown){
			$('#divMensagem').append('<div class="alert alert-danger" role="alert">Erro ao enviar os dados</div>')
					.fadeIn(1000).html();
		});

		// Callback que será chamado sempre depois da requisição (mesmo que ocorra falaha ou sucesso)
		request.always(function () {
			//Habilitamos os campos
			$inputs.prop("disabled", false);
		});

	});
});