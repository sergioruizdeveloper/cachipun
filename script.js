let jugadasTotales = 3;
let ganadasUsuario = 0;
let ganadasMaquina = 0;
let empatadas = 0;

function elegirJugada(opcionUsuario) {
	
	let opcionAleatoria = opcionPC();
	evaluaPartida(opcionUsuario,opcionAleatoria);

	jugadasTotales--;

	if(jugadasTotales==0){

		// Obtener los botones por su nombre
		var botones = document.getElementsByName("boton");

		// Deshabilitar los botones
		for (var i = 0; i < botones.length; i++) {
			botones[i].disabled = true;
		}
		
		console.log("Fin del juego");
/* 		console.log("empatadas : "+empatadas);
		console.log("ganadasUsuario : "+ganadasUsuario);
		console.log("ganadasMaquina : "+ganadasMaquina); */

		if(empatadas===3 || ganadasUsuario===ganadasMaquina){
			console.log("Empate");
		}else if (ganadasMaquina>ganadasUsuario){
			console.log("Ganó la Máquina")
		}else{
			console.log("Ganaste");
		}
	}

}

function opcionPC(){

	let numero = Math.floor(Math.random() * 3) + 1;

	switch (numero) {
        case 1:
            opcion = "piedra";
            break;
        case 2:
            opcion = "papel";
            break;
        case 3:
            opcion = "tijera";
            break;
    }

	return opcion;
}

function evaluaPartida(opcionUsuario, opcionMaquina){

	if(opcionUsuario === opcionMaquina){
		console.log("empate: "+opcionUsuario+"="+opcionMaquina);
		empatadas++;
	}
	else if((opcionUsuario === "piedra" && opcionMaquina === "tijera") || (opcionUsuario === "tijera" && opcionMaquina === "papel") || (opcionUsuario === "papel" && opcionMaquina === "piedra"))
	{
		console.log("Gana Usuario : "+opcionUsuario+">"+opcionMaquina);
		ganadasUsuario++;
	}else{
		console.log("Gana Computador : "+opcionUsuario+"<"+opcionMaquina);
		ganadasMaquina++;
	}

}

function resetJuego(){
	// Obtener los botones por su nombre
	/*var botones = document.getElementsByName("boton");

	// Deshabilitar los botones
	for (var i = 0; i < botones.length; i++) {
		botones[i].disabled = false;
	}

	let ganadasUsuario = 0;
	let ganadasMaquina = 0;
	let empatadas = 0;
	let jugadasTotales = 3;*/
	location.reload();
}