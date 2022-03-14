/*PERMITE SOLO LETRAS*/
function restringirCaracterNombre(e){
	var tecla = (document.all) ? e.keyCode : e.which;
	return ( tecla==0 || tecla==8 || tecla==9 || tecla==11 || tecla==32 || tecla==45 || tecla==46 || (tecla>=65 && tecla<=90) || (tecla>=97 && tecla<=122) || tecla==127 || tecla==209 || tecla==241 ||
		tecla==130 || tecla==144 || tecla==160 || tecla==161 || tecla==162 || tecla==163 || tecla==181 || tecla==214 || tecla==224 || tecla==233);
}


function restringirCaracterCorreo(e){
	var tecla = (document.all) ? e.keyCode : e.which;
	return ( tecla==0 || tecla==8 || tecla==9 || tecla==11 || (tecla>=48 && tecla<=57) || (tecla>=65 && tecla<=90) || (tecla>=97 && tecla<=122) || tecla==127 ||
		tecla==45 || tecla==46 || tecla==64 || tecla==95);
}



function validaTextoBusqueda(e) {
    var k;
    document.all ? k = e.keyCode : k = e.which;
    return ((k>47 && k<58) || (k>96 && k<123) || (k>64 && k<91) || k==95 || k==45 || k==58 || k==46 || k==44 || k==59 || k==40 || k==41 || k==193 || k==201 || k==205 || k==211 || k==218 || k==225 || k==233 || k==237 || k==243 || k==250|| k==209 || k==241 || k==0 || k==8 || k==32  || k==42);
}


function validaNormas(e){
	var valor=document.getElementById('formBusqueda:buDerechoInternoInput').value;
	var k;
    document.all ? k = e.keyCode : k = e.which;
    if(k==8 || k==0){
	    return true;
	}else{
		if(valor.length<100){
			return validaTextoBusqueda(e);
    	}else{
	    	return false;
	    }
	}
}


function validaPretension(e){
	var valor=document.getElementById('formBusqueda:buPretensionInput').value;
	var k;
    document.all ? k = e.keyCode : k = e.which;
    if(k==8 || k==0){
	    return true;
	}else{
		if(valor.length<100){
			return validaTextoBusqueda(e);
    	}else{
	    	return false;
	    }
	}
}

function validaPalabraClave(e){
	var valor=document.getElementById('formBusqueda:buPalabraClaveInput').value;
	var k;
    document.all ? k = e.keyCode : k = e.which;
    if(k==8 || k==0){
	    return true;
	}else{
		//alert('antes del if....');
		//alert('la longitud --->' + valor.length);
		if(valor.length<100){
			//alert('la longitud es menor de 5, caracter--->' + k);
			return validaTextoBusqueda(e);
    	}else{
    		//alert('la longitud es mayor de 5, ya no debe permitir ingresar caracteres');
			return false;
	    }
	}
}

function validaNroExpediente(e) {
    var k;
    document.all ? k = e.keyCode : k = e.which;
    return ((k>47 && k<58) || k==45 || k==8 || k==0);
}
var DBL_PATTERN=/^[0-9\d\.]*$/;
var INT_PATTERN=/^[0-9\d]*$/;
var DATE_PATTERN=/^\d{0,2}\/?\d{0,2}\/?\d{0,4}$/;
var ALFA_PATTERN=/^[a-zA-Z0-9\s_-]*$/;/*/^[\s\w\.\,\/\-`��]*$/;*/
var CODE_PATTERN=/^[a-zA-Z0-9@$&_-]*$/;
var LETTER_PATTERN=/^[a-zA-Z\s������������'��&�_-]*$/;
var MAIL_PATTERN= /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@+([_a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]{2,200}\.[a-zA-Z]{2,6}$/;
var URL_PATTERN= /^http::\/\/(www\.)?(\w)+\.(\w){2,}\/\.*$/;
function validKey(e, format, Object, MaxLen, control) {
	var ret = false;
	var ev = window.event || e;
	var key = (document.all) ? ev.keyCode : ev.which;
	var k = String.fromCharCode(key);
	//if(key != 16 && key != 17) alert("key="+key+" k="+k+" test="+format.test(k));
	//if(key == 0 || key == 8) {
	/*if(key == 8 || key == 9 || key == 46) {//return true;
		ret = true;
	} else */
	if(key==13 && control!=null && MaxLen==0) {
		document.getElementById(control).click();
	} else {
		if(MaxLen > 0) {
			ret = Object.value.length <= MaxLen;
			if(Object.value.length > MaxLen) {
				Object.value = Object.value.substring(0, MaxLen);
				if(control!=null) document.getElementById(control).innerHTML = Object.value.length+" de "+MaxLen+" caracters.";
			}
			if(ret) {
				if(control!=null) {
					if(Object.value.length>0 && (key == 8 || key == 46)) document.getElementById(control).innerHTML = (Object.value.length-1)+" de "+MaxLen+" caracters.";
					else document.getElementById(control).innerHTML = (Object.value.length+1)+" de "+MaxLen+" caracters.";
				}
				if(format != null) ret = format.test(k);
			}
		} else {
			if(format != null) ret = format.test(k);
			else ret = true;
		}
	}
	return ret;
}
function validateDate(control,message){
	var strDate = document.getElementById(control).value;
	var isdate = true;
	var date= new String(strDate);
	//var realDate= new Date();
	var year= new String(date.substring(date.lastIndexOf("/")+1,date.length));
	var month= new String(date.substring(date.indexOf("/")+1,date.lastIndexOf("/")));
	var day= new String(date.substring(0,date.indexOf("/")));
	if ((strDate.charAt(2) != "/") && (strDate.charAt(5) != "/")){
		//jalert("fecha inv�lida: " + strDate,null);
		document.getElementById(message).innerHTML = "fecha inválida: " + strDate;
		isdate = false;
	}
	else if (isNaN(year) || year.length<4 || parseFloat(year)<1900){
		//jalert("A�o inv�lido: " + strDate,null);
		document.getElementById(message).innerHTML = "Año inválido: " + strDate;
		isdate = false;
	}
	else if (isNaN(month) || parseFloat(month)<1 || parseFloat(month)>12){
		//jalert("Mes inv�lido: " + strDate,null);
		document.getElementById(message).innerHTML = "Mes inválido: " + strDate;
		isdate = false;
	}
	else if (isNaN(day) || parseInt(day, 10)<1 || parseInt(day, 10)>31){
		//jalert("D�a inv�lido: " + strDate,null);
		document.getElementById(message).innerHTML = "Día inválido: " + strDate;
		isdate = false;
	}
	else if(month == 2){ 
		if(isLeap(year)){
			if(parseInt(day) > 29) {
				//jalert("D�a inv�lido: " + strDate,null);
				document.getElementById(message).innerHTML = "Día inválido: " + strDate;
				isdate = false;
			}
		} else {
			if(parseInt(day) > 28){
				//jalert("D�a inv�lido: " + strDate,null);
				document.getElementById(message).innerHTML = "Día inválido: " + strDate;
				isdate = false;
			}
		}
	}
	else if (month==4 || month==6 || month==9 || month==11 || month==2) {
		if (day>30) {
			//jalert("D�a inv�lido: " + strDate,null);
			document.getElementById(message).innerHTML = "Día inválido: " + strDate;
			isdate = false;
		}
	}
	return isdate;
}
//Valida si es aÃƒÂ±o bisiesto
function isLeap(year){
	var leap;
	if(parseInt(year)%4==0){
		if(parseInt(year)%100==0){
			if(parseInt(year)%400==0) leap=true;
			else leap=false;
		}
		else leap=true;
	}
	else leap=false;
	return leap;
}
/*function validKeyDown(e,Object,MaxLen,control) {
	var ev = window.event || e;
	var key = (document.all) ? ev.keyCode : ev.which;
	//if(key != 16 && key != 17)
	//if(key != 16 && key != 17) alert("key="+key+" k="+k);
	//if(Object.value.length > MaxLen) Object.value = Object.value.substring(0, MaxLen);
	if(key == 8 || key == 46) {
		if(control!=null) document.getElementById(control).innerHTML = (Object.value.length-2)+" de "+MaxLen+" caracters.";
	}
	return true;
}*/
var curDt = new Date();
function disablementFunction(day){
	//if (day.isWeekend) return false;
	if (curDt==undefined){
		curDt = day.date.getDate();
	}
	curDt.setHours(0, 0, 0, 0);
	if ((curDt.getTime() - day.date.getTime()) <= 0) return true;
	else return false;
}
function disabledClassesProv(day){
	if ((curDt.getTime() - day.date.getTime()) >= 0) return 'rf-cal-boundary-day';
	var res = '';
	//if (day.isWeekend) res+='weekendBold ';
	//if (day.day%3==0) res+='everyThirdDay';
	return res;
}
/*function MaxLength(Object, MaxLen, e) {
	var key = (document.all) ? e.keyCode : e.which;
	if(key == 8 || key == 9 || key == 46 || (key>=37 && key <=40)) return true;
	return (Object.value.length < MaxLen);
			
}*/
//window.onbeforeunload=function(){
/*function HandleOnClose() {
	var answer = confirm("�Est�s seguro que deseas abandonar Jurisprudencia Sistematizada?\nHaga clic en Aceptar para continuar o en Cancelar\npara permanecer en Jurisprudencia Sistematizada.");
	if(answer == true) onlogout();
}*/