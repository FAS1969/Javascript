function dateCalc() {

	var oneday = 1000 * 60 * 60 * 24;
	var oneweek = oneday * 7;

	var D1 = getFieldFloatValue('D1');
	var M1 = getFieldFloatValue('M1');
	var Y1 = getFieldFloatValue('Y1');

	var D2 = getFieldFloatValue('D2');
	var M2 = getFieldFloatValue('M2');
	var Y2 = getFieldFloatValue('Y2');

	var Y = document.getElementById('Y');
	var M = document.getElementById('M');
	var D = document.getElementById('D');
	var SS = document.getElementById('SS');
	var DD = document.getElementById('DD');
	var MIN = document.getElementById('MIN');
	var HH = document.getElementById('HH');
	var DD = document.getElementById('DD');
	var WW = document.getElementById('WW');
	var DD = document.getElementById('DD');
	var YY = document.getElementById('YY');

	var X1 = new Date (Y1,M1-1,D1);
	var X2 = new Date (Y2,M2-1,D2);
	
//	var N = ((X2.getTime() - X1.getTime()) / oneweek);
// solve the years 0-99AC problem
	if (getFieldFloatValue('Y1')<100) YY1 = X1.getFullYear() - 1900;
		else YY1 = X1.getFullYear();
	if (getFieldFloatValue('Y2')<100) YY2 = X2.getFullYear() - 1900;
		else YY2 = X2.getFullYear();

// calculate difference in years, months and days
// years,...
	var A = YY2-YY1;
	var B = new Date (Y1+A,M1-1,D1);
	var C = new Date (Y2,X2.getMonth(),0);
	var F = new Date (Y2,M2-1,0);

if (C.getDate()-X1.getDate() < 0) Z = 0;
else Z = C.getDate()-X1.getDate();
	
	if (X2.getTime() < X1.getTime()) {
	Y.value = "-";
	M.value = "-";
	D.value = "-";
	SS.value = "-";
	MIN.value = "-";
	HH.value = "-";
	DD.value = "-";
	WW.value = "-";
	MM.value = "-";
	YY.value = "-";
	}
	else {
	if (X2.getTime() < B.getTime()) Y.value = A-1;
	else Y.value = A;

// months,...
	var Mx = X2.getMonth() - X1.getMonth()
    + (12 * A);

	if (X2.getDate() < X1.getDate()){
    Mx--;
	}

	if 	(X2.getMonth() - X1.getMonth() + (12 * A)>11) M.value = Mx - Y.value * 12;
	else M.value = Mx;

// and days.
	if (X2.getDate() >= X1.getDate()) D.value = X2.getDate() - X1.getDate();	
	else  D.value = (X2.getTime() - F.getTime()) / (oneday) + Z;

// 86,400,000 (24×60×60×10×10×10) milliseconds — one day
// 31,556,908,800 (86,400,000×365.242) milliseconds — one year

// Calculate time differences

	SS.value = (X2.getTime() - X1.getTime())/1000;
	MIN.value = (X2.getTime() - X1.getTime())/(1000*60);
	HH.value = (X2.getTime() - X1.getTime())/(1000*60*60);
	DD.value = round((X2.getTime() - X1.getTime())/oneday,0);
	WW.value = round((X2.getTime() - X1.getTime())/oneweek,2);
	MM.value = X2.getMonth() - X1.getMonth() + (12 * A);
	if (X2.getDate() < X1.getDate()){
    MM.value--;}
	if (X2.getTime() < B.getTime()) YY.value = A-1;
	else YY.value = A;
	}
}
function getFieldFloatValue(fieldId) {
    return parseFloat(document.getElementById(fieldId).value.replace("\,","."));
}
function round(n,dig)
{
	X = n * Math.pow(10,dig);
	X = Math.round(X);
	return X / Math.pow(10,dig);
}
function resetValues(form)
{
  for(var i = 0; i < form.elements.length; i++) {
  if(form.elements[i].type == "text") { form.elements[i].value = "";}
  }
}