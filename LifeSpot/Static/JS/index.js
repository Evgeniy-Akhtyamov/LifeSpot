
// создадим объект Map для хранения сессии
let session = new Map();

function filterContent() {
	
	// Получим все контейнеры с видео
	let elements = document.getElementsByClassName('video-container');
	for (let i = 0; i < elements.length; i++) {

		let videoText = elements[i].getElementsByClassName('video-title')[0].innerText;

		if (!videoText.toLowerCase().includes(inputParseFunction() /*Захват переменной теперь происходит с помощью замыкания*/ )) {
			elements[i].style.display = 'none';
		} else {
			elements[i].style.display = 'inline-block';
		}
	}		
}

function handleSession() {

	// Сохраним время начала сессии
	session.set("startDate", new Date().toLocaleString());

	// Сохраним UserAgent
	session.set("userAgent", window.navigator.userAgent);
	
	//return session;
}

function checkAge() {

	// Запросим возраст пользователя и тоже сохраним
	session.set("age", prompt("Пожалуйста, введите ваш возраст?"));

	// Проверка на возраст и сохранение сессии
	if (session.get("age") >= 18) {
		alert("Приветствуем на LifeSpot! " + '\n' + "Текущее время: " + new Date().toLocaleString());
	}
	else {
		alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
		window.location.href = "http://www.google.com"
	}	
}

let sessionLog = function logSession() {
	// Вывод в консоль
	for (let result of session) {
		console.log(result)
	}
}