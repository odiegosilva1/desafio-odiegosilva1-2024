# Zoo Habitat Finder

## Descrição

Este projeto resolve o problema de encontrar recintos adequados para animais em um zoológico, levando em consideração as características dos recintos, os animais já presentes e as regras de convivência entre as espécies.

## Funcionalidades

- Analisa os recintos disponíveis no zoológico para alocar novos animais.
- Verifica se o bioma e o espaço disponível são adequados.
- Garante que carnívoros não convivam com herbívoros, exceto em casos específicos.
- Retorna uma lista de recintos viáveis ou mensagens de erro, conforme necessário.

## Estrutura

O projeto contém dois arquivos principais:

- **recintos-zoo.js**: Contém a classe `RecintosZoo` que realiza a análise dos recintos.
- **recintos-zoo.test.js**: Contém os testes unitários para garantir que o código funcione conforme esperado.

## Requisitos

- Node.js
- Jest para testes

Os testes verificarão vários cenários, como:

- Validação de animais inválidos.
- Validação de quantidades inválidas.
- Encontrar recintos adequados para diferentes animais.

## Uso

Para usar a função de análise dos recintos, importe a classe `RecintosZoo` e chame o método `analisaRecintos()` com os parâmetros corretos.

```javascript
import { RecintosZoo } from "./src/recintos-zoo.js";

const zoo = new RecintosZoo();
const resultado = zoo.analisaRecintos("MACACO", 2);
console.log(resultado);
```

## Exemplo de Entrada e Saída

Entrada:

```javascript
const resultado = zoo.analisaRecintos("MACACO", 2);
```

Saída esperada:

```json
{
  "recintosViaveis": [
    "Recinto 1 (espaço livre: 5 total: 10)",
    "Recinto 2 (espaço livre: 3 total: 5)",
    "Recinto 3 (espaço livre: 2 total: 7)"
  ]
}
```

## Erros Possíveis

- `"Animal inválido"`: Se o animal informado não existe no zoológico.
- `"Quantidade inválida"`: Se a quantidade de animais for zero ou negativa.
- `"Não há recinto viável"`: Se não há recintos disponíveis para o animal informado.

## Contribuindo

Sinta-se à vontade para abrir issues e pull requests.
