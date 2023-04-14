# 🌨 FLAKES || ОПАДИ || ОСАДКИ ❄
Create different flakes in page 

# INSTALL & INITIALIZE || ЗАВАНТАЖЕННЯ & ІНІЦІАЛІЗАЦІЯ || УСТАНОВКА & ИНИЦИАЛИЗАЦИЯ

1. EN

To install - just download and connect these files : flakes.css & flakes.js
To make the precipitation appear on the page, you need to create :

\<div class="flakes">\</div>

2. UA

Щоб встановити - достатньо завантажити та підключити ці файли : flakes.css та flakes.js
Щоб опади з'явилися на сторінці, потрібно створити :

\<div class="flakes">\</div>

3. RU

Чтобы установить - достаточно скачать и подключить : flakes.css и flakes.js
Чтобы осадки появились на странице , нужно создать :

\<div class="flakes">\</div>

# MANAGEMENT || КЕРУВАННЯ || УПРАВЛЕНИЕ

1. EN
There is a flakesController object, which you can use to manipulate precipitation parameters.

flakesController.totalFlakes = 700; //If there will be a long time of falling precipitation, this parameter will limit the number of precipitation on the screen to 700<br>
flakesController.flakesSizeMax = 5; //When creating flakes, the size of each one will be chosen randomly. This parameter defines the maximum size of flakes in pixels. <br>
flakesController.flakesFallSpeed = 6; //This parameter is responsible for the speed of precipitation falling in seconds.<br>
flakesController.flakesType = 'snow'; //Responsible for the type of precipitation. Options: rain , snow <br>

2. UA
Існує об’єкт flakesController, за допомогою якого можна маніпулювати параметрами опадів.

flakesController.totalFlakes = 700; //Якщо час випадання опадiв буде дуже значним, цей параметр обмежить кількість опадів на екрані до 700 <br>
flakesController.flakesSizeMax = 5; //Під час створення опадiв розмір кожного вибирається випадковим чином. Цей параметр визначає максимальний розмір опадiв у пікселях. <br>
flakesController.flakesFallSpeed = 6; //Цей параметр відповідає за швидкість випадання опадів у секундах. <br>
flakesController.flakesType = 'snow'; //Відповідає за вид опадів. Варіанти: rain , snow <br>

3. RU
Есть объект flakesController , через обращение к которому вы можете манипулировать параметрами осадков .

flakesController.totalFlakes = 700; //Если будет долгое время падения осадков - этот параметр ограничит одновременное кол-во осадков на экране до 700 <br>
flakesController.flakesSizeMax = 5; //При создании осадков размер каждого будет выбран рандомно . Этот параметр отвечает за максимальный размер осадков в пикселях <br> 
flakesController.flakesFallSpeed = 6; //Отвечает за скорость падения осадков в секундах <br>
flakesController.flakesType = 'snow'; //Отвечает за тип осадков . Варианты : rain , snow <br>
