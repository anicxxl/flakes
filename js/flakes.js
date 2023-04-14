'use strict';

//массив с возможными вариантами осадков
const flakesTypeArray = ['snow', 'rain'];

//получаем ширину экрана юзера
let innerWidth = window.innerWidth;

//получаем объект flakes из дом дерева
const flakes = document.querySelector('.flakes');

//объект для управления
const flakesController = {
	/**
 * @description Отвечает за кол-во снежинок на экране , после которых закончится генерация новых
 * @type {number}
 */
	totalFlakes: 700,
	/**
	 * @description Отвечает за максимальный размер снежинки в пикселях
	 * @type {number}
	 */
	flakesSizeMax: 4,
	/**
 * @description Отвечает за скорость падения снежинки в секундах
 * @type {number}
 */
	flakesFallSpeed: 3,
	/**
 * @description Отвечает за тип осадков . Варианты : snow , rain
 * @type {String}
 */
	flakesType: flakesTypeArray[0],
}

//если разрешение экрана будет меняться , обновляем данные в переменной
function checkInnerWidth() {
	innerWidth = window.innerWidth;
}
window.addEventListener('resize', checkInnerWidth);

//функция random
function random(maxValue) {
	let number = Math.ceil(Math.random() * maxValue);
	return number;
}

//Функция которая будет выбрасывать ошибку
function snowErrorMessage(message) {
	const errorMessage = document.createElement('p');
	errorMessage.style.fontSize = '36px';
	errorMessage.style.color = 'red';
	errorMessage.innerText = message;
	flakes.append(errorMessage);
}

//функция , которая создаёт осадки
function createFlake(flakesType) {
	//получаем координату для позиции по X
	let flakePositionX = Math.ceil(Math.random() * innerWidth);

	//получаем размер осадков
	let flakeSize = Math.ceil(Math.random() * flakesController.flakesSizeMax);

	//проверка , если переданный flakesType есть в возможных вариантах то создаётся элемент
	if (flakesTypeArray.indexOf(flakesType) !== -1) {
		//создаём элемент осадка
		const flake = document.createElement('div');
		//даём нужный ей класс
		flake.setAttribute('class', `flake ${flakesType}flake`);
		//вызываем функцию , которая даст стили для осадков
		addFlakeStyles(flake, flakePositionX, flakeSize);
		//добавляем осадок в конец flakes
		flakes.append(flake);

		//удаляем осадок как только он упал
		setInterval(() => {
			flake.remove();
		}, flakesController.flakesFallSpeed * 1000 - 200);
	} else {
		snowErrorMessage(`Неверно указан тип осадков . Возможные варианты : ${flakesTypeArray.join(', ')}`);
		clearInterval(createFlakesIntervalID);
	}

	//выводим общее кол-во осадков в консоль
	let flakesCount = document.querySelectorAll('.flake');
	console.log(`На странице всего ${flakesCount.length} осадков`);
}

//функция , которая будет выдавать стили осадкам
function addFlakeStyles(flake, flakePositionX, flakeSize) {
	//даём стили для позиционирования осадка
	flake.style.left = `${flakePositionX}px`;
	//даём стили для размера осадка
	flake.style.width = `${flakeSize}px`;
	flake.style.height = `${flakeSize}px`;

	if (flakesController.flakesType == 'rain') {
		flake.style.height = `${flakeSize * 4}px`;
	}

	//добавляем стили для анимации падения осадка
	flake.style.animation = `flakeFall ${flakesController.flakesFallSpeed}s ease-in-out`;
}

//каждые 10ms мы будем добавлять осадки
const createFlakesIntervalID = setInterval(() => {
	// узнаём общее кол-во осадков
	var flakesTotalValue = document.getElementsByClassName("flake");

	//проверяем , если осадков больше чем задано в flakesController.totalFlakes , то прекращаем создавать новые
	if (flakesTotalValue.length > flakesController.totalFlakes) {
		return;
	}

	createFlake(flakesController.flakesType);
}, 10);