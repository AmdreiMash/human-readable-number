function convertingNumbers(x){
	switch (x){
		case 0:
			return 'zero';
		case 1 || 01:
			return 'one';
		case 2 || 02:
			return 'two';
		case 3 || 03:
			return 'three';
		case 4 || 04:
			return 'four';
		case 5 || 05:
			return 'five';
		case 6 || 06:
			return 'six';
		case 7 || 07:
			return 'seven';
		case 8 || 08:
			return 'eight';
		case 9 || 09:
			return 'nine';
		case 10:
			return 'ten';
		case 11:
			return 'eleven';
		case 12:
			return 'twelve';
		case 13:
			return 'thirteen';
		case 14:
			return 'fourteen';
		case 15:
			return 'fifteen';
		case 16:
			return 'sixteen';
		case 17:
			return 'seventeen';
		case 18:
			return 'eighteen';
		case 19:
			return 'nineteen';
	}
}

	function convertingTens(x){
		switch(x){
		case 2:
			return 'twenty';
		case 3:
			return 'thirty';
		case 4:
			return 'forty';
		case 5:
			return 'fifty';
		case 6:
			return 'sixty';
		case 7:
			return 'seventy';
		case 8:
			return 'eighty';
		case 9:
			return 'ninety';
	}
}

function support(number){
	str ='';
	if (number == 00){
		return '';
	}
	else if (number < 20) {
		str = convertingNumbers(number)
	} else if (number % 10 !=0 && number < 100){
		str = convertingTens(+String(number)[0]) + ' ' + convertingNumbers( +String(number)[String(number).length -1])
	}  else if (number % 10 ===0 && number < 100){
		str = convertingTens(+String(number)[0])
	} 
	return str;
}

module.exports = function toReadable (number){
	str ='';
	if (number <20) {
		str = convertingNumbers(number)
	} else if (number % 10 !=0 && number < 100){
		str = convertingTens(+String(number)[0]) + ' ' + convertingNumbers(+String(number)[String(number).length -1])
	}  else if (number % 10 ===0 && number < 100){
		str = convertingTens(+String(number)[0])
	} else{
		str = convertingNumbers(+String(number)[0])  + ' hundred ' + support(+String(number).slice(1, ));
	}
	return str.trimEnd();
}