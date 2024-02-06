function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  const randomInt = getRandomInt(1, 10); // Exemplo: número entre 1 (incluindo) e 100 (excluindo)
  console.log(randomInt);