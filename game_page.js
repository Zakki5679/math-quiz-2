player1_name=localStorage.getItem("player1");
player2_name=localStorage.getItem("player2");
player1_score=0;
player2_score=0;
Question_turn= player1_name;
Answer_Turn= player2_name;

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player1_score").innerHTML=player1_score;


document.getElementById("player2_name").innerHTML=player2_name+" : ";
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;


function send(){
get_word=document.getElementById("Word").value; 
Word=get_word.toUpperCase();
char1=Word.charAt(1);
var mid=Math.floor(Word.length/2);
char2=Word.charAt(mid);
char3=Word.charAt(Word.length-1);
remove1=Word.replace(char1,"_");
remove2=remove1.replace(char2,"_");
final_word=remove2.replace(char3,"_");
question_word="<h4 id='word_display'>Q. "+final_word+"</h4>";
input_box="<br>Answer : <input type='text' id='input_check_box'>";
check_button="<br> <br> <button onclick='check()' class='btn btn-success'> Check </button>";
row=question_word+input_box+check_button;
document.getElementById("output").innerHTML=row;
}
function check(){
var Get_Answer=document.getElementById("input_check_box").value;
var Answer=Get_Answer.toUpperCase();
if(Word==Answer){
if(Answer_Turn==player1_name){
player1_score=player1_score+1;
document.getElementById("player1_score").innerHTML=player1_score;
} 
else{
player2_score=player2_score+1;
document.getElementById("player2_score").innerHTML=player2_score;
}
}
else{if(Answer_Turn==player2_name){
    player1_score=player1_score+1;
    document.getElementById("player1_score").innerHTML=player1_score;
    } 
    else{
    player2_score=player2_score+1;
    document.getElementById("player2_score").innerHTML=player2_score;
    }

}
if(Question_turn==player1_name){
Question_turn=player2_name;
Answer_Turn=player1_name;
document.getElementById("player_question").innerHTML="Question Turn - "+Question_turn;
document.getElementById("player_answer").innerHTML="Answer Turn - "+Answer_Turn;
}
else{
Question_turn=player1_name;
Answer_Turn =player2_name;
document.getElementById("player_question").innerHTML="Question Turn - "+Question_turn;
document.getElementById("player_answer").innerHTML="Answer Turn - "+Answer_Turn;
}
document.getElementById("output").innerHTML="";
}