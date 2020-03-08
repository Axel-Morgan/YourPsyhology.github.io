$(function(){
	 $('.menu').click(function(event){
		 $('.sidebar_container').toggleClass('sidebar_on');
		 $('.dark').toggleClass('darkness');
		 $('html, body').toggleClass('main_hidden');
	 });
});

$(function(){
	 $('#button_test').click(function(event){
		 var score_1 = 0, score_2 = 0, score_3 = 0;
		 var i_1 = 0, i_2 = 0, i_3 = 0;
		 var answer = $("section#finish_test p");
		 console.log(answer);
		 
		 score_1 = parseInt($('input[name="q_1_1"]:checked').val())+
		           parseInt($('input[name="q_1_2"]:checked').val())+
				   parseInt($('input[name="q_1_3"]:checked').val())+
				   parseInt($('input[name="q_1_4"]:checked').val())+
				   parseInt($('input[name="q_1_5"]:checked').val());
				 
		 score_2 = parseInt($('input[name="q_2_1"]:checked').val())+
				   parseInt($('input[name="q_2_2"]:checked').val())+
				   parseInt($('input[name="q_2_3"]:checked').val())+
				   parseInt($('input[name="q_2_4"]:checked').val())+
				   parseInt($('input[name="q_2_5"]:checked').val());
				 
		 score_3 = parseInt($('input[name="q_3_1"]:checked').val())+	
                   parseInt($('input[name="q_3_2"]:checked').val())+
                   parseInt($('input[name="q_3_3"]:checked').val())+
                   parseInt($('input[name="q_3_4"]:checked').val())+	
                   parseInt($('input[name="q_3_5"]:checked').val());
				 
		 if (score_1 == 0){i_1 = 1}
		 else if (score_1 > 0 && score_1 < 6) {i_1 = 2;}
		 else if (score_1 > 5 && score_1 < 11) {i_1 = 3;}
		 else if (score_1 > 10 && score_1 < 16){i_1 = 4;}
		 else {i_1 = -1;}
		 
		 if (score_2 == 0){i_2 = 5;}
		 else if (score_2 > 0 && score_2 < 6) {i_2 = 6;}
		 else if (score_2 > 5 && score_2 < 11) {i_2 = 7;}
		 else if (score_2 > 10 && score_2 < 16){i_2 = 8;}
		 else {i_2 = -1;}
		 
		 if (score_3 == 0){i_3 = 9;}
		 else if (score_3 > 0 && score_3 < 6) {i_3 = 10;}
		 else if (score_3 > 5 && score_3 < 11) {i_3 = 11;}
		 else if (score_3 > 10 && score_3 < 16){i_3 = 12;}
		 else {i_3 = -1;}
	     
		 if ((i_1 < 0) || (i_2 < 0) || (i_3 < 0)){alert("Вы не все отметили, пожалуйста, вернитесь и перепроверьте тест:");}
		 else{
		 
		     document.getElementById('finish_test').style.display = 'block';
		 
		     for (let i=0; i<13; i++){
			     if ((i == i_1) || (i == i_2) || (i == i_3) || (i == 0)){answer[i].style.display = 'block';}
			     else {answer[i].style.display = 'none';}
			 }	 
	     }	
	 });	 
});