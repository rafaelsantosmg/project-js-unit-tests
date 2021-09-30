const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(typeof productDetails('Alcool gel', 'Máscara')).toBe('object');
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails('Alcool gel', 'Máscara').length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const productObj = Object.entries(productDetails('Alcool gel', 'Máscara'));
    expect(typeof productObj[0] && typeof productObj[1]).toBe('object')
    const product = Object.values(productDetails('Alcool gel', 'Máscara'));
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(product[0].name !== product[1].name).toBeTruthy()
    for (let index = 0; index < product.length; index += 1) {
      const productLength = product[index].details.productId.length;
      // Teste se os dois productIds terminam com 123.
      expect(product[index].details.productId.substring(productLength - 3)).toBe('123')
    }
  });
});
