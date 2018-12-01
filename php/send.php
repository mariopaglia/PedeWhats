<?php

//carregar os dados
$nome_cliente = $_POST['nome'];
$telefone_cliente = $_POST['telefone'];

 

if($_POST['mais-sabor'] == 'sim'){
	$pizza_sabor = $_POST['metade1'];
	$pizza_sabor2 = $_POST['metade2'];

	$texto_cliente =$nome_cliente.' Pediu duas metades de '.$pizza_sabor.' e '.$pizza_sabor2;
}else{
	$sabor_inteiro = $_POST['sabor-inteiro'];
	$texto_cliente = $nome_cliente.' pediu uma pizza de '.$sabor_inteiro;
}





header('Location: https://api.whatsapp.com/send?phone='.$telefone_cliente.'&text='.$texto_cliente);



?>
