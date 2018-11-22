<!DOCTYPE html>
<html>
	<body class="main-cadastrar">

		<div style="margin-top: 10px;" class="container-fluid">

			<h1><i class="fas fa-users"></i>  Cadastro de Usuario</h1>
			<div id="divMensagem"></div>
			<div class="container">
				<form id="formCadastroUsuario" class="form-cadastrar">
					<div class="row">
						<div class="form-group col-xs-6 col-lg-6">
							<label for="inputEmail"><i class="fas fa-envelope"></i>  Email</label>
							<input type="email" class="form-control" id="inputEmail" name="inputEmail" aria-describedby="emailHelp" placeholder="Informe o email">
						</div>
						<div class="form-group col-xs-6 col-lg-6">
							<label for="inputNome"><i class="fas fa-user-alt"></i>  Nome</label>
							<input type="text" class="form-control" id="inputNome" name="inputNome" aria-describedby="nomeHelp" placeholder="Informe o nome completo">
						</div>
					</div>
					<div class="row">
						<div class="form-group col-xs-4 col-lg-4">
							<label for="inputSenha"><i class="fas fa-unlock"></i>  Senha</label>
							<input type="password" class="form-control" id="inputSenha" name="inputSenha" placeholder="Informe uma senha">
							</div>
						<div class="form-group col-xs-4 col-lg-4">
							<label for="inputCpf"><i class="fas fa-id-card"></i>  CPF</label>
							<input type="text" class="form-control" id="inputCpf" name="inputCpf" aria-describedby="CpfHelp" placeholder="Informe o CPF">
						</div>
						<div class="form-group col-xs-4 col-lg-4">
							<label for="inputCpf"><i class="fas fa-braille"></i>  Tipo do usuário</label>
							<select class="form-control" id="selectTipo" name="selectTipo" aria-describedby="tipoHelp">
								<option value="A">Aluno</option>
								<option value="P">Professor</option>
								<option value="C">Comunidade</option>
							</select>
						</div
					</div>
					<div class="btn-principal">
						<button class="form-control btn-cadastrar-livro" type="submit"><i class="fas fa-plus-square"></i>  Cadastrar</button>
					</div>
				</form>
			</div>

		</div>

		

	</body>
</html>