$('#Start-Game').on('click',function(){
    //document.write("You Clicked Me!");
   //$('#subwrapper').remove();
   for(var i=0;i<questions.length;i++) {
       $('#subwrapper').append('<h2>'+questions[i].question+'<h2')
       for(var j=0;j<questions[i].answers.length;j++){
           $("#subwrapper").append("<input type = 'radio' name ='question-"+i+" 'value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
       }
   }
})


var questions = [
     {
    question:"The 45th president of the U.S is a female",
    answers:["True","False"],
    correctAnswer:"False"
},{
   question:'Africa is a country ?',
   answers:["True","False"],
   correctAnswer:"False"
},{
   question:"A car has 4 wheels",
   answers:["True","False"],
   correctAnswer:"True"
}, {
   question:"There are 6 squares in a cube",
   answers:["True","False"],
   correctAnswer:"True"
}, {
   question:"A circumference in the middle of a circle",
   answers:["True","False"],
   correctAnswer:"False"
} , {
   question:"There are two right angles in a right angle triangle",
   answers:["True","False"],
   correctAnswer:"False"
}, {
   question:"A harvested apple tree produces about 220 lb. (100 kg) of apples yearly.",
   answers:["True","False"],
   correctAnswer:"False"
}, {
   question:"Tomatoes were introduced in Italy by Marco Polo after he took a trip to China.",
   answers:["True","False"],
   correctAnswer:"False"
}, {
   question:"The Irish Great Famine was caused by a wheat parasite.",
   answers:["True","False"],
   correctAnswer:"False"
}, {
   question:"For a long time, milk was a luxury.",
   answers:["True","False"],
   correctAnswer:"True"
},{
   question:"People drink more coffee per capita in France than in any other country.",
   answers:["True","False"],
   correctAnswer:"False"
}];

var MagTrivia = {
    correct: 0,
   inCorrect: 0,
   counter:120,
   countdown: function (){
       game.counter--;
       $('#counter').html(game.counter);
           if(game.counter<=0) {
               console.log("Time is up!");
               game.done();
           }
   },
   start:function(){
       timer = setInterval(game.countdown,1000);
       $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
       $('#start').remove();
       for(var i=0;i<questions.length;i++) {
           $('#subwrapper').append('<h2>'+questions+'<h2')
           for(var j=0;j<questions[i].answers.length;j++){
               $("#subwrapper").append("<input type = 'radio' name ='question-"+i+" 'value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])
           }
   }
},
   done:function(){

       $.each($('input:checked'),function(i){
        //    console.log($(this).val())
        //    console.log(questions[i].correctAnswer)
           if ($(this).val()==questions[i].correctAnswer) {
               console.log("ist his true?");
               MagTrivia.correct++;
           } else 
            MagTrivia.inCorrect++;
           })

        return { correct: MagTrivia.correct, incorrect: MagTrivia.inCorrect};
       }
   }
   $('#Submit').on('click',function(){
console.log(MagTrivia.done());

       
   })
    