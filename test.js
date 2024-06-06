const holaMundo = require('./holaMundo');

test('debería retornar ¡Hola, Mundo!', () => {
    expect(holaMundo()).toBe('¡Hola, Mundo!');
});