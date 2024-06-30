function comprar() {
	let ingresso = listaIngressos.value;
	let quantidade = document.getElementById('qtd').value;

	let qtdIngressos = parseInt(
		document.getElementById(`qtd-${ingresso}`).innerText
	);

	if (quantidade <= qtdIngressos) {
		document.getElementById(`qtd-${ingresso}`).innerText =
			qtdIngressos - quantidade;
	} else {
		alert('Quantidade de ingressos insuficiente!');
	}

	return;
}
