const mdLinks = require('../src/mdlinks.js');
const readFile = require('../src/readFile.js');
const validate = require('../src/validate.js');

const arrayReadFileResult = [
  {
    path: 'test/teste.md',
    text: 'Casas Bahia',
    href: 'https://www.casasbahia.com.br/'
  },
  {
    path: 'test/teste.md',
    text: 'Amazon',
    href: 'https://www.amazon.com.br/'
  },
  {
    path: 'test/teste.md',
    text: 'Americanas',
    href: 'https://www.americanas.com.br/'
  }
];

const arrayResultValidate = [
  {
    path: './test/teste.md',
    text: 'Casas Bahia',
    href: 'https://www.casasbahia.com.br/',
    status: 'OK - 200'
  },
  {
    path: './test/teste.md',
    text: 'Amazon',
    href: 'https://www.amazon.com.br/',
    status: 'OK - 200'
  },
  {
    path: './test/teste.md',
    text: 'Americanas',
    href: 'https://www.americanas.com.br/',
    status: 'OK - 200'
  }
];


test('deve retornar o array formatado com os links', (res) => {
  readFile('test/teste.md').then((result) => {
    expect(result).toEqual(arrayReadFileResult);
    res();
  });
});

it("deve retornar o array de urls validado", (res) => {
  //console.log(mdLinks('test/teste.md', ['--validate']));
  validate(arrayReadFileResult).then((result) => {
    console.log(result);
    res();
  })
  //return expect(validate(arrayReadFileResult)).resolves.toEqual(arrayResultValidate);
});

/*it("deve retornar o resultado da quantidade de links e a quantidade de unicos", () => {
  return expect(mdLinks("./test/test.md", ['--stats'])).resolves.toEqual({
    Unique: 3, All: 3
  });
});

it("deve retornar o resultado da quantidade de links, a quantidade de unicos e a quantidade de links inexistentes", () => {
  return expect(mdLinks("./test/test.md", ['--stats', '--validate'])).resolves.toEqual({
    Unique: 3, All: 3, Broken: 0
  });
});*/


