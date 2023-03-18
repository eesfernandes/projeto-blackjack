console.log(`!--- Boas vindas ao jogo de BlackJack! ---!`);

let msg;

let iniciarPartida = confirm(`Quer iniciar uma nova partida? `);

if(iniciarPartida === true){
   let cartaUsuario1 = comprarCarta();
   let cartaUsuario2 = comprarCarta();
   let resultadoUsuario = cartaUsuario1.valor + cartaUsuario2.valor;
   msg = `Cartas Do Usuário: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - Total De Pontos: ${resultadoUsuario}`;
   console.log(msg);

   let cartaComputador1 = comprarCarta();
   let cartaComputador2 = comprarCarta();
   let resultadoComputador = cartaComputador1.valor + cartaComputador2.valor;
   msg = `Cartas Do Computador: ${cartaComputador1.texto} ${cartaComputador2.texto} - Total De Pontos: ${resultadoComputador}`;
   console.log(msg);

   if(resultadoUsuario > resultadoComputador && resultadoUsuario <= 21){
      msg = `Usuário Venceu!`;
      console.log(msg);
   }else if(resultadoUsuario > resultadoComputador && resultadoUsuario > 21){
      msg = `Usuário Perdeu!`;
      console.log(msg)
   }else if(resultadoComputador > resultadoUsuario && resultadoComputador <= 21){
      msg = `Computador Venceu!`;
      console.log(msg)
   }else if(resultadoComputador > resultadoUsuario && resultadoComputador > 21){
      msg = `Computador Perdeu!`;
      console.log(msg)
   }else{
      msg = `Houve Empate!`;
      console.log(msg)
   }

}else{
   msg = `Jogo Encerrado!`
   console.log(msg)
}