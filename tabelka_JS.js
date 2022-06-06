
class szczyt {
    constructor(_nazwa, wysokosc, pasmo) {
        this._nazwa = _nazwa;
		this.wysokosc = wysokosc;
        this.pasmo = pasmo;

    }
}
const tab_szczytow = new Array();

tab_szczytow[0] =
	new szczyt("Rysy", 2499, "Tatry");
tab_szczytow[1] =
	new szczyt("Babia G\u00f3ra", 1725, "Beskid &#379;ywiecki", );
tab_szczytow[2] =
	new szczyt("\u015Anie&#380ka", 1602, "Karkonosze",);
tab_szczytow[3] =
	new szczyt("\u015Anie&#380;nik", 1425, "Masyw \u015Anie&#380;nika",);
tab_szczytow[4] =
	new szczyt("Tarnica", 1346, "Bieszczady",);
tab_szczytow[5] =
	new szczyt("Turbacz", 1310, "Gorce",);
tab_szczytow[6] =
	new szczyt("Radziejowa", 1262, "Beskid S\u0105decki",);
tab_szczytow[7] =
	new szczyt("Skrzyczne", 1257, "Beskid \u015Al\u0105ski",);
tab_szczytow[8] =
	new szczyt("Mogielica", 1171, "Beskid Wyspowy",);
tab_szczytow[9] =
	new szczyt("Wysoka Kopa", 1126, "G\u00f3ry Izerskie",);
tab_szczytow[10] =
	new szczyt("Rudawiec", 1112, "G\u00f3ry Bialskie",);
tab_szczytow[11] =
	new szczyt("Orlica", 1084, "G\u00f3ry Orlickie",);
tab_szczytow[12] =
	new szczyt("Wysoka", 1050, "Pieniny",);
tab_szczytow[13] =
	new szczyt("Wielka Sowa", 1015, "G\u00f3ry Sowie",);
tab_szczytow[14] =
	new szczyt("Lackowa", 997, "Beskid Niski",);
tab_szczytow[15] =
	new szczyt("Kowad\u0142o", 989, "G\u00f3ry Z\u0142ote",);
tab_szczytow[16] =
	new szczyt("Jagodna", 977, "G\u00f3ry Bystrzyckie",);
tab_szczytow[17] =
	new szczyt("Skalnik", 945, "Rudawy Janowickie",);
tab_szczytow[18] =
	new szczyt("Walig\u00f3ra", 936, "G\u00f3ry Kamienne",);
tab_szczytow[19] =
	new szczyt("Czupel", 933, "Beskid Ma\u0142y",);
tab_szczytow[20] =
	new szczyt("Szczeliniec Wielki", 919, "G\u00f3ry Sto\u0142owe",);
tab_szczytow[21] =
	new szczyt("Lubomir", 904, "Beskid Makowski",);
tab_szczytow[22] =
	new szczyt("Biskupia Kopa", 889, "G\u00f3ry Opawskie",);
tab_szczytow[23] =
	new szczyt("Che\u0142miec", 851, "G\u00f3ry Wa\u0142brzyskie",);
tab_szczytow[24] =
	new szczyt("K\u0142odzka G\u00f3ra", 765, "G\u00f3ry Bardzkie",);
tab_szczytow[25] =
	new szczyt("Skopiec", 724, "G\u00f3ry Kaczawskie",);
tab_szczytow[26] =
	new szczyt("\u015Al\u0119&#380;a", 718, "Masyw \u015Al\u0119&#380;y",);
tab_szczytow[27] =
	new szczyt("\u0141ysica", 612, "G\u00f3ry \u015Awi\u0119tokrzyskie",);


function wyswietlTab(tablica) {
	let txt = "";
	for (var i = 0; i < tablica.length; i++) {
		txt += "<tr>";
		txt += "<td>" + i + "</td>";
		txt += "<td>" + tablica[i]._nazwa + "</td>";
		txt += "<td >" + tablica[i].wysokosc + "</td>";
		txt += "<td>" + tablica[i].pasmo + "</td>";
		//txt += "<td><a href=mailto:" + tablica[i].mail + ">" + tablica[i].mail + "</a></td>";
		txt += "</tr>";
	}

	let element_tBody = document.getElementById("daneP");
	element_tBody.innerHTML = txt;
}
