import Magician from '../Magician';

test('Проверка создания персонажа Magician', () => {
  const magician = new Magician('Vasya', 70);
  expect(magician).toHaveProperty('name', 'Vasya');
  expect(magician).toHaveProperty('type', 'Magician');
  expect(magician).toHaveProperty('attack', 70);
  expect(magician).toHaveProperty('stoned', false);
});

test('Проверка get/set stoned', () => {
  const magician = new Magician('Vasya', 70);
  magician.stoned = true;
  expect(magician.stoned).toBeTruthy();
  magician.stoned = false;
  expect(magician.stoned).toBeFalsy();
});

test('Проверка get attack', () => {
  const magician = new Magician('Vasya', 70);
  magician.distance = 2;
  expect(magician.attack).toBe(63);
  magician.distance = 5;
  expect(magician.attack).toBe(37);
  magician.stoned = true;
  expect(magician.attack).toBe(14);
  magician.distance = 11;
  expect(magician.attack).toBe(0);
});

test('Проверка set attack', () => {
  const magician = new Magician('Vasya', 70);
  magician.attack = 200;
  expect(magician.attack).toBe(200);
});
