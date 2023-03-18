// Array criado para receber as primeiras cartas do usuário aleatóriamente.
let usuario = [];
usuario.push(comprarCarta());
usuario.push(comprarCarta());

let valorCartaUsuario = 0;
let TextoCartaUsuario = [];
// For para iterar dentro de usuário, somar os valores e mostrar os naipes.
for(let iUsuario = 0; iUsuario < usuario.length; iUsuario = iUsuario + 1){

  valorCartaUsuario = valorCartaUsuario + usuario[iUsuario].valor;
  TextoCartaUsuario.push(usuario[iUsuario].texto)
  
}
// Array criado para receber as primeiras cartas do computador aleatóriamente.
let computador = [];
computador.push(comprarCarta());
computador.push(comprarCarta());

let valorCartaComputador = 0;
let textoCartaComputador = [];
// For para iterar dentro de computador, somar os valores e mostrar os naipes.
for(let iComputador = 0; iComputador < computador.length; iComputador = iComputador + 1){

  valorCartaComputador = valorCartaComputador + computador[iComputador].valor;
  textoCartaComputador.push(computador[iComputador].texto)
}
// Pergunta se o usuário quer iniciar a partida, em caso de negativo o programa encerra!
let iniciarJogo = confirm(`Bem-vindo ao jogo BlackJack!
Quer iniciar uma nova partida?`);

if(iniciarJogo === true){

  let msg;
  // Enquanto verificaCarta for falso, verifica-se o usuário e computador somam 22 pontos, em caso de positivo os arrays são zerados.
  let verificaCarta = false;
  while(verificaCarta === false){

    if(usuario[0].valor === 11 && usuario[1].valor === 11 || computador[0].valor === 11 && computador[1].valor === 11){

      usuario = [];
      computador = [];

    }else{

      verificaCarta = true

    }
  }
  // Nessa parte, é feita a confirmação se o usuário deseja comprar mais carta.
  let comprar = true;

  while(comprar === true){

    if(valorCartaUsuario > 21){

      comprar = false;
      
    }else{

      let confirmarCompra = confirm(`Suas cartas: ${TextoCartaUsuario.join(' ')}
Carta revelada do computador: ${computador[0].texto}
Quer comprar mais carta?`);
      
      if(confirmarCompra === true){

        usuario.push(comprarCarta());
        valorCartaUsuario = valorCartaUsuario + usuario[usuario.length - 1].valor;
        TextoCartaUsuario.push(usuario[usuario.length - 1].texto);

      }else{

        comprar = false

      }

    }
  }
  // Faz-se a verificação de que ganhou de quem e mostra o resultado.
  if(valorCartaUsuario > valorCartaComputador && valorCartaUsuario <= 21){

    msg = `Cartas do usuário: ${TextoCartaUsuario.join(' ')} - ${valorCartaUsuario} Pontos
Cartas do computador: ${textoCartaComputador.join(' ')} - ${valorCartaComputador} Pontos
Usuário venceu!`
    alert(msg);

  }else if(valorCartaUsuario > valorCartaComputador && valorCartaUsuario > 21){

    msg = `Cartas do usuário: ${TextoCartaUsuario.join(' ')} - ${valorCartaUsuario} Pontos
Cartas do computador: ${textoCartaComputador.join(' ')} - ${valorCartaComputador} Pontos
Usuário perdeu!`
    alert(msg);

  }else if(valorCartaComputador > valorCartaUsuario && valorCartaComputador <= 21){

    msg = `Cartas do usuário: ${TextoCartaUsuario.join(' ')} - ${valorCartaUsuario} Pontos
Cartas do computador: ${textoCartaComputador.join(' ')} - ${valorCartaComputador} Pontos
Computador venceu!`
    alert(msg);

  }else if(valorCartaComputador > valorCartaUsuario && valorCartaComputador > 21){

    msg = `Cartas do usuário: ${TextoCartaUsuario.join(' ')} - ${valorCartaUsuario} Pontos
Cartas do computador: ${textoCartaComputador.join(' ')} - ${valorCartaComputador} Pontos
Computador perdeu!`
    alert(msg);

  }else{

    msg = `Cartas do usuário: ${TextoCartaUsuario.join(' ')} - ${valorCartaUsuario} Pontos
Cartas do computador: ${textoCartaComputador.join(' ')} - ${valorCartaComputador} Pontos
Houve Um Empate!`
    alert(msg);

  }

}else{
  msg = `Jogo encerrado!`;
  alert(msg);
}