//Verifica palidrome
function verifyWord (_word){

	var word = replaceSpecialChars(_word);

	if (word == null){
		return false;
	}
    else if (word == word.split('').reverse().join('')) {
		return true;
	}

	return false;
}

//retira acentos e caracteres especiais
function replaceSpecialChars(str)
{
	if (str == null || str.trim() == "")
		return null;
	
	var r=str.toLowerCase();
	r = r.replace(new RegExp("\\s", 'g'),"");
	r = r.replace(new RegExp("[àáâãäå]", 'g'),"a");
	r = r.replace(new RegExp("æ", 'g'),"ae");
	r = r.replace(new RegExp("ç", 'g'),"c");
	r = r.replace(new RegExp("[èéêë]", 'g'),"e");
	r = r.replace(new RegExp("[ìíîï]", 'g'),"i");
	r = r.replace(new RegExp("ñ", 'g'),"n");                            
	r = r.replace(new RegExp("[òóôõö]", 'g'),"o");
	r = r.replace(new RegExp("œ", 'g'),"oe");
	r = r.replace(new RegExp("[ùúûü]", 'g'),"u");
	r = r.replace(new RegExp("[ýÿ]", 'g'),"y");
	r = r.replace(new RegExp("\\W", 'g'),"");
	return r;
}

module.exports = {
	verifyWord : verifyWord,
};