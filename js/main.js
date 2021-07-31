const rates = {};
const elementUSD = document.querySelector('[data-value="USD"]')
const elementEUR = document.querySelector('[data-value="EUR"]')
const elementGBP = document.querySelector('[data-value="GBP"]')


getCurrencies();

/*Загрузка данных с ЦБ*/
async function getCurrencies () {
	const inform = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
	const data = await inform.json();
	const result = await data;

	rates.USD = result.Valute.USD;
	rates.EUR = result.Valute.EUR;
	rates.GBP = result.Valute.GBP;

	console.log(rates)

	elementUSD.textContent = rates.USD.Value;
	elementEUR.textContent = rates.EUR.Value;
	elementGBP.textContent = rates.GBP.Value;

};
 

const input = document.querySelector('#input');
const result = document.querySelector('#result');
const select = document.querySelector('#select');

/*Отлавливание событий*/
input.oninput = convertMoney;
select.oninput = convertMoney;

/*Функция конвертации*/
function convertMoney() {
	result.value = (parseFloat(input.value) / rates[select.value].Value).toFixed(2);
}


