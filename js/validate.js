function validatetest(){
	var _option = document.getElementsByTagName('input');
	var checkanswer = [1,6];
	
	for(var pointer = 0; pointer < _option.length; pointer++){
		for(var i = 0; i < checkanswer.length; i++){
			if(pointer == checkanswer[i] ){
				if(_option[pointer].checked){
					//calculate the total correct answer
					if (localStorage.Synonymtest1correct) {
						localStorage.Synonymtest1correct = Number(localStorage.Synonymtest1correct)+1;
					} else {
						localStorage.Synonymtest1correct = 1;
					}
				}else{
					//calculate the total Wrong answer
					if (localStorage.Synonymtest1wrong) {
						localStorage.Synonymtest1wrong = Number(localStorage.Synonymtest1wrong)+1;
					} else {
						localStorage.Synonymtest1wrong = 1;
					}
					localStorage.Synonymtest1correct = 0;
				}
			}
		}
			
		
	}
	if(localStorage.Synonymtest1correct && localStorage.Synonymtest1wrong  ){
		document.getElementById('Synonymtest1totalitem').innerHTML = localStorage.Synonymtest1totalitem;
		document.getElementById('sysnonymstest1correct').innerHTML = localStorage.Synonymtest1correct ;
		document.getElementById('sysnonymstest1wrong').innerHTML = localStorage.Synonymtest1wrong;
		document.getElementById('sysnonymstest1percentage').innerHTML = (parseInt(localStorage.Synonymtest1correct)/parseInt(localStorage.Synonymtest1totalitem)) * 100 + '%';
		//document.write(localStorage.Synonymtest1correct);
	}else{
		document.write('0');
	}
	
	
}


function hide(){
	for(var i = 2; i <= 10; i++){
		$('#'+i).hide();
	}
	$('#test1result').hide();
	
	
}