function updateDateTime() {
    const dataAtual = new Date();

    let day = dataAtual.getDate()
    let month = dataAtual.getMonth() + 1
    let year = dataAtual.getFullYear()
    let hours = dataAtual.getHours()
    let minutes = dataAtual.getMinutes()
    let seconds = dataAtual.getSeconds()

    let dataAtualFormat = day + "/" + month + "/" + year + " " + hours + ":" + minutes + ":" + seconds;

    document.getElementById("currDateTime").innerHTML = dataAtualFormat;
  }

  // Chama a função inicialmente para exibir o horário na carga da página
  updateDateTime();

  // Atualiza o horário a cada segundo (1000 milissegundos)
  setInterval(updateDateTime, 1000);