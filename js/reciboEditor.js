



// botões trilho passos
	var passo1 = document.getElementById('passo1');
	var passo2 = document.getElementById('passo2');
	var passo3 = document.getElementById('passo3');

	var passo1Checkpoint = true;
	var passo2Checkpoint = false;
	var passo3Checkpoint = false;


	var passo1stepItens = passo1.children.item(0);
	var passo1Border = passo1stepItens.children.item(0);
	var passo1Number = passo1stepItens.children.item(1);
	var passo1LineAfter = passo1stepItens.children.item(3);

	var passo2stepItens = passo2.children.item(0);
	var passo2LineBefore = passo2stepItens.children.item(0);
	var passo2Border = passo2stepItens.children.item(1);
	var passo2Number = passo2stepItens.children.item(2);
	var passo2LineAfter = passo2stepItens.children.item(4);

	var passo3stepItens = passo3.children.item(0);
	var passo3LineBefore = passo3stepItens.children.item(0);
	var passo3Border = passo3stepItens.children.item(1);
	var passo3Number = passo3stepItens.children.item(2);
	var passo3LineAfter = passo3stepItens.children.item(4);



	passo1.onclick = function() {
		passo1stepItens.classList.remove('step-before');
		passo1stepItens.classList.remove('step-after-pass');
		passo1stepItens.classList.remove('step-select');
		passo1stepItens.classList.add('step-select');

		passo2stepItens.classList.remove('step-before');
		passo2stepItens.classList.remove('step-select');
		passo2stepItens.classList.remove('step-after-pass');
		passo2stepItens.classList.add('step-after-pass');

		passo3stepItens.classList.remove('step-before');
		passo3stepItens.classList.remove('step-select');
		passo3stepItens.classList.remove('step-after-pass');
		passo3stepItens.classList.add('step-after-pass');

		passo1Checkpoint = true;
		passo2Checkpoint = false;
		passo3Checkpoint = false;
	}


	passo2.onclick = function() {
		passo1stepItens.classList.remove('step-before');
		passo1stepItens.classList.remove('step-after-pass');
		passo1stepItens.classList.remove('step-select');
		passo1stepItens.classList.add('step-before');

		passo2stepItens.classList.remove('step-before');
		passo2stepItens.classList.remove('step-select');
		passo2stepItens.classList.remove('step-after-pass');
		passo2stepItens.classList.add('step-select');

		passo3stepItens.classList.remove('step-before');
		passo3stepItens.classList.remove('step-select');
		passo3stepItens.classList.remove('step-after-pass');
		passo3stepItens.classList.add('step-after-pass');



		passo1Checkpoint = false;
		passo2Checkpoint = true;
		passo3Checkpoint = false;

	}


	passo3.onclick = function() {
		passo1stepItens.classList.remove('step-before');
		passo1stepItens.classList.remove('step-after-pass');
		passo1stepItens.classList.remove('step-select');
		passo1stepItens.classList.add('step-before');

		passo2stepItens.classList.remove('step-before');
		passo2stepItens.classList.remove('step-select');
		passo2stepItens.classList.remove('step-after-pass');
		passo2stepItens.classList.add('step-before');

		passo3stepItens.classList.remove('step-before');
		passo3stepItens.classList.remove('step-select');
		passo3stepItens.classList.remove('step-after-pass');
		passo3stepItens.classList.add('step-select');


		passo1Checkpoint = false;
		passo2Checkpoint = false;
		passo3Checkpoint = true;

	}



// final botões trilho passos
document.querySelector('.helpDialogBoxWrapper').style.display = 'none';
document.querySelector('.EnviarCopiaTesteWrapper').style.display = 'none';
document.querySelector('.CopiaTesteConfirmadoWrapper').style.display = 'none';



// abrir help
document.querySelector('#helpSvgIcon').addEventListener('click', function() {
	document.querySelector('.helpDialogBoxWrapper').style.display = 'flex';
	document.querySelector('.helpDialogBoxWrapper').style.opacity = '1';
});



// fechar help
document.querySelector('.fecharHelpDialogSvg').addEventListener('click', function() {
	document.querySelector('.helpDialogBoxWrapper').style.opacity = '0';
	document.querySelector('.helpDialogBoxWrapper').style.display = 'none';
});



// abrir janela enviar copia teste
document.querySelector('.copiaTesteCorrigirBtn').addEventListener('click', function() {
	document.querySelector('.EnviarCopiaTesteWrapper').style.display = 'flex';
});



// fechar janela enviar copia teste
document.querySelector('.fecharCopiaTesteDialogSvg').addEventListener('click', function() {
	document.querySelector('.EnviarCopiaTesteWrapper').style.display = 'none';
});



// fechar cofirmação de copia teste enviada
document.querySelector('.fecharCopiaTesteConfirmadoSvg').addEventListener('click', function() {
	document.querySelector('.CopiaTesteConfirmadoWrapper').style.display = 'none';
});



// abrir cofirmação de copia teste enviada
document.querySelector('.copiaTesteBtn').addEventListener('click', function() {
	document.querySelector('.CopiaTesteConfirmadoWrapper').style.display = 'flex';
	document.querySelector('.EnviarCopiaTesteWrapper').style.display = 'none';
});