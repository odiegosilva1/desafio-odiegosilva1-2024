class RecintosZoo {
  constructor() {
    this.recintos = [
      {
        numero: 1,
        bioma: "savana",
        tamanho: 10,
        animaisExistentes: [
          { especie: "MACACO", quantidade: 3, carnivoro: false },
        ],
      },
      { numero: 2, bioma: "floresta", tamanho: 5, animaisExistentes: [] },
      {
        numero: 3,
        bioma: "savana e rio",
        tamanho: 7,
        animaisExistentes: [
          { especie: "GAZELA", quantidade: 1, carnivoro: false },
        ],
      },
      { numero: 4, bioma: "rio", tamanho: 8, animaisExistentes: [] },
      {
        numero: 5,
        bioma: "savana",
        tamanho: 9,
        animaisExistentes: [
          { especie: "LEAO", quantidade: 1, carnivoro: true },
        ],
      },
    ];

    this.animais = {
      LEAO: { tamanho: 3, bioma: ["savana"], carnivoro: true },
      LEOPARDO: { tamanho: 2, bioma: ["savana"], carnivoro: true },
      CROCODILO: { tamanho: 3, bioma: ["rio"], carnivoro: true },
      MACACO: { tamanho: 1, bioma: ["savana", "floresta"], carnivoro: false },
      GAZELA: { tamanho: 2, bioma: ["savana"], carnivoro: false },
      HIPOPOTAMO: { tamanho: 4, bioma: ["savana", "rio"], carnivoro: false },
    };
  }

  analisaRecintos(animal, quantidade) {
    if (!this.animais[animal]) {
      return { erro: "Animal inválido" };
    }

    if (quantidade <= 0) {
      return { erro: "Quantidade inválida" };
    }

    const { tamanho, bioma, carnivoro } = this.animais[animal];
    let recintosViaveis = [];

    for (const recinto of this.recintos) {
      const espacoOcupadoExistente = recinto.animaisExistentes.reduce(
        (total, animal) =>
          total + animal.quantidade * this.animais[animal.especie].tamanho,
        0
      );
      const espacoLivre = recinto.tamanho - espacoOcupadoExistente;

      const jaTemCarnivoro = recinto.animaisExistentes.some(
        (a) => this.animais[a.especie].carnivoro
      );
      const outrosAnimais = recinto.animaisExistentes.length > 0;

      const biomaAdequado =
        bioma.includes(recinto.bioma) || recinto.bioma.includes(bioma[0]);

      if (
        espacoLivre >= tamanho * quantidade + (outrosAnimais ? 1 : 0) &&
        biomaAdequado &&
        (!carnivoro ||
          recinto.animaisExistentes.length === 0 ||
          (jaTemCarnivoro &&
            recinto.animaisExistentes[0].especie === animal)) &&
        (!carnivoro ||
          !outrosAnimais ||
          recinto.animaisExistentes[0].especie === animal)
      ) {
        recintosViaveis.push(
          `Recinto ${recinto.numero} (espaço livre: ${
            espacoLivre - tamanho * quantidade
          } total: ${recinto.tamanho})`
        );
      }
    }

    if (recintosViaveis.length === 0) {
      return { erro: "Não há recinto viável" };
    }

    return { recintosViaveis };
  }
}

export { RecintosZoo as RecintosZoo };
