function czas() {
	const obiektCzas = new Date();
	let godzina = obiektCzas.getHours();
	let minuta = obiektCzas.getMinutes();
	let sekunda = obiektCzas.getSeconds();
	let wartosc_czasu =  (godzina > 12) ? godzina - 12 : godzina;
	if (wartosc_czasu == 0) wartosc_czasu = 12;
	wartosc_czasu += ((minuta < 10) ? ":0" : ":") + minuta;
	wartosc_czasu += ((sekunda < 10) ? ":0" : ":") + sekunda;
	wartosc_czasu += (godzina > 12) ? "PM" : "AM";

	let elementCzas = document.getElementById("zegar");
	elementCzas.value = wartosc_czasu;
	setTimeout(czas, 1000);

}
/*function data() {
	const obiektData = new Date();
	let dzien = obiektData.getDate();
	let miesiac = obiektData.getMonth();
	let rok = obiektData.getFullYear();
	let wartosc_daty = (godzina > 12) ? godzina - 12 : godzina;
	

	let elementData = document.getElementById("dzien");
	elementData.value = wartosc_czasu;
	setTimeout(czas, 1000);

}*/
function data() {
    const obiektData = new Date();
    let dzien = obiektData.getDate();
    let miesiac = obiektData.getMonth();
    let rok = obiektData.getFullYear();
    let wartosc_daty = (dzien < 10) ? "" + dzien : "" + dzien;
    wartosc_daty += (miesiac < 10) ? ".0" + (miesiac + 1) : "." + (miesiac + 1);
    wartosc_daty += "." + rok;
    let elementData = document.getElementById("kalendarz");
    elementData.value = wartosc_daty;
    setTimeout(data, 1);
}




//instr warunkowa
//if (true) { }
// else { }
//operator warunkowy
// (warunek)? true : false

var second = 0;
var mili = 0;
var timerID = null;

function TimerTick() {
    if (mili >= 9) {
        mili = 0; second += 1;
    }
    else {
        mili += 1;
    }
    var timerElem = document.getElementById("myTimer");
    timerElem.value = second + '.' + mili;
}

function startTimer() {
    //uruchamian funkcjê cyklicznie co zadan¹ liczbê milisekund do u¿ycia funkcji clearInterval
    //lub zamkniêcia strony
    timerID = setInterval(TimerTick, 100, null);
}

function stopTimer() {
    if (timerID != null)
        clearInterval(timerID);
}
