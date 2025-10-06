let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];

   atletas.forEach(function(atleta){

        let notasOrdenadas = atleta.notas.sort((a,b) => a-b);
        let notasComputadas = notasOrdenadas.slice(1, 4);
        let notasSomadas = notasComputadas.reduce((total, nota) => total+nota, 0);
        let media = notasSomadas/notasComputadas.length;

        console.log("\n");
        console.log(atleta.nome);
        console.log(`Notas Obtidas: ${notasOrdenadas}`);
        console.log(`Média Válida: ${media}`);

   });

