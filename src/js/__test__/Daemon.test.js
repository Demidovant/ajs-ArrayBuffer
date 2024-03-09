// const Daemon = require('../Daemon');
import Daemon from '../Daemon';

test('Проверка создания персонажа Daemon', () => {
  const daemon = new Daemon('Dima', 100);
  expect(daemon).toHaveProperty('name', 'Dima');
  expect(daemon).toHaveProperty('type', 'Daemon');
  expect(daemon).toHaveProperty('attack', 100);
  expect(daemon).toHaveProperty('stoned', false);
});

test('Проверка get/set stoned', () => {
  const daemon = new Daemon('Dima', 100);
  daemon.stoned = true;
  expect(daemon.stoned).toBeTruthy();
  daemon.stoned = false;
  expect(daemon.stoned).toBeFalsy();
});

test('Проверка get attack', () => {
  const daemon = new Daemon('Dima', 100);
  daemon.distance = 1;
  expect(daemon.attack).toBe(100);
  daemon.distance = 5;
  expect(daemon.attack).toBe(60);
  daemon.stoned = true;
  expect(daemon.attack).toBe(27);
  daemon.distance = 11;
  expect(daemon.attack).toBe(0);
});

test('Проверка set attack', () => {
  const daemon = new Daemon('Dima', 100);
  daemon.attack = 150;
  expect(daemon.attack).toBe(150);
});
