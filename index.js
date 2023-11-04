let buttons = ['btn1', 'btn2', 'btn3', 'btn4', 'btn5', 'btn6', 'btn7', 'btn8' ,'btn9'];
var le = buttons.length;
let xwin = 'XXX';
let owin = 'OOO';
let possibleowin = "OO";
let possiblexwin = "XX";
let turn = 'player1';
let questions = ["How often (in minutes) should you check on a sleeping child or infant?", 
"Which of the following is not a good way to prevent temper tantrums?<br>A.Force the child to do something<br>B.Clearly and calmy state the rules<br>C.Do not show favoritism towards a sibling<br>D.Offer the children 2 viable options",
"What can you do to be ready for sudden weather events?<br>A.Make sure to know where flashlights and batteries are<br>B.Stay out of shelter out in the open",
"How long (in seconds) should you scrub when washing your hands?",
"When should you give a child medicine?<br>A.Whenever you want<br>B.When the child asks for it<br>C.When instructed by the parents<br>D.Before going outside",
"Where should poisonous materials be kept?<br>A.In sight<br>B.In reach of the child<br>C.In an open cabinet or drawer<br>D.None of the above",
"True or false: Keep children away from windows and doors when there is high wind.",
"When should you intervene in a conflict between siblings or children?<br>A.When no one is getting hurt<br>B.When there is a risk of a child getting injured<br>C.Whenever you want<br>D.All of the above",
"When can you give a child a bath?<br>A.With the parents approval<br>B.If you know how<br>C.If you are comfortable with doing so<br>D.All of the above",
"How can you prevent falls when using a high chair?<br>A.Secure the child with the safety straps on the chair<br>B.Do not position high chairs next to anything the child could push off of<br>C.Both A and C<br>D.None of the above"];
let answers=["15","A", "A", "20", "C", "D", "TRUE", "B", "D", "C"];
let currentquestion=NaN;
document.getElementById('playerturn').innerHTML = "X's turn!";
document.getElementById('playerturn').style.color = "red";
const checktie = () => {
  let numero = 0;
  for (var i = 0; i < le; i++){
    if (document.getElementById(buttons[i]).innerHTML === 'X' || document.getElementById(buttons[i]).innerHTML === 'O')
      numero++;
  }
  return numero;
};
const aler = (x, btn1, btn2, btn3) => {
  if (x==='t'){
    document.getElementById('playerturn').innerHTML = "Tie!";
    document.getElementById('playerturn').style.color = "purple";
    for (var iii = 0; iii < le; iii++) {
      document.getElementById(buttons[iii]).style.color = "purple";
      document.getElementById(buttons[iii]).disabled = true;
    }
  }
	else if (x === 'x'){
    document.getElementById('playerturn').innerHTML = "X wins!";
    document.getElementById('playerturn').style.color = "red";
    for (var i = 0; i < le; i++) {
      document.getElementById(buttons[i]).disabled = true;
      document.getElementById(buttons[i]).innerHTML === "X" && (buttons[i]===btn1 || buttons[i]===btn2 || buttons[i]===btn3)? document.getElementById(buttons[i]).style.textDecoration = "line-through":document.getElementById(buttons[i]).style.color = "gray";
    }
	}
	else {
    document.getElementById('playerturn').innerHTML = "O wins!";
    document.getElementById('playerturn').style.color = "blue";
    for (var ii = 0; ii < le; ii++) {
      document.getElementById(buttons[ii]).disabled = true;
      document.getElementById(buttons[ii]).innerHTML === "O" && (buttons[ii]===btn1 || buttons[ii]===btn2 || buttons[ii]===btn3)? document.getElementById(buttons[ii]).style.textDecoration = "line-through":document.getElementById(buttons[ii]).style.color = "gray";
    }
	}
};
const checkwin = () => {
  btn1t = document.getElementById('btn1').innerHTML;
  btn2t = document.getElementById('btn2').innerHTML;
  btn3t = document.getElementById('btn3').innerHTML;
  btn4t = document.getElementById('btn4').innerHTML;
  btn5t = document.getElementById('btn5').innerHTML;
  btn6t = document.getElementById('btn6').innerHTML;
  btn7t = document.getElementById('btn7').innerHTML;
  btn8t = document.getElementById('btn8').innerHTML;
  btn9t = document.getElementById('btn9').innerHTML;
  
  if (btn1t+btn2t+btn3t === xwin){
    aler('x', 'btn1', 'btn2', 'btn3');
  }else if (btn4t+btn5t+btn6t === xwin){aler('x', 'btn4', 'btn5', 'btn6');}
  else if (btn7t + btn8t + btn9t === xwin){aler('x', 'btn7', 'btn8', 'btn9');}
  else if (btn1t + btn4t + btn7t === xwin) {aler('x', 'btn1', 'btn4', 'btn7');} 
  else if (btn2t + btn5t + btn8t === xwin) {
    aler('x', 'btn2', 'btn5', 'btn8');
  } else if (btn3t + btn6t + btn9t === xwin) {
    aler('x', 'btn3', 'btn6', 'btn9');
  } else if (btn1t + btn5t + btn9t === xwin) {
    aler('x', 'btn1', 'btn5', 'btn9');
  } else if (btn3t + btn5t + btn7t === xwin) {
    aler('x', 'btn3', 'btn5', 'btn7');
  }
  //o
  else if (btn1t+btn2t+btn3t === owin){aler('o', 'btn1', 'btn2', 'btn3');}
  else if (btn4t+btn5t+btn6t === owin){aler('o', 'btn4', 'btn5', 'btn6');}
  else if (btn7t + btn8t + btn9t === owin){aler('o', 'btn7', 'btn8', 'btn9')}
  else if (btn1t + btn4t + btn7t === owin) {aler('o', 'btn1', 'btn4', 'btn7');}
  else if (btn2t + btn5t + btn8t === owin) {aler('o', 'btn2', 'btn5', 'btn8');} 
  else if (btn3t + btn6t + btn9t === owin) {aler('o', 'btn3', 'btn6', 'btn9');} 
  else if (btn1t + btn5t + btn9t === owin) {aler('o', 'btn1', 'btn5', 'btn9');} 
  else if (btn3t + btn5t + btn7t === owin) {aler('o', 'btn3', 'btn5', 'btn7');}
  //tie
  else if (checktie() === 9) {aler('t');}
};
const aiturn = () => {
    btn1t = document.getElementById('btn1').innerHTML;
  btn2t = document.getElementById('btn2').innerHTML;
  btn3t = document.getElementById('btn3').innerHTML;
  btn4t = document.getElementById('btn4').innerHTML;
  btn5t = document.getElementById('btn5').innerHTML;
  btn6t = document.getElementById('btn6').innerHTML;
  btn7t = document.getElementById('btn7').innerHTML;
  btn8t = document.getElementById('btn8').innerHTML;
  btn9t = document.getElementById('btn9').innerHTML;
  if (btn1t+btn2t === "OO" && btn3t ==="?"){
    document.getElementById('btn3').innerHTML = 'O';
    turn = 'player1';
  }
    else if (btn4t+btn5t === "OO"&& btn6t ==="?"){
    document.getElementById('btn6').innerHTML = 'O';
    turn = 'player1';
  }
    else if (btn7t+btn8t === "OO"&& btn9t ==="?"){
    document.getElementById('btn9').innerHTML = 'O';
    turn = 'player1';
  }
    else if (btn1t+btn4t === "OO"&& btn7t ==="?"){
    document.getElementById('btn7').innerHTML = 'O';
    turn = 'player1';
  }
    else if (btn2t+btn5t === "OO"&& btn8t ==="?"){
    document.getElementById('btn8').innerHTML = 'O';
    turn = 'player1';
  }
    else if (btn3t+btn6t === "OO"&& btn9t ==="?"){
    document.getElementById('btn9').innerHTML = 'O';
    turn = 'player1';
  }
    else if (btn3t+btn2t === "OO"&& btn1t ==="?"){
    document.getElementById('btn1').innerHTML = 'O';
    turn = 'player1';
  }
    else if (btn6t+btn5t === "OO"&& btn4t ==="?"){
    document.getElementById('btn4').innerHTML = 'O';
    turn = 'player1';
  }
    else if (btn9t+btn8t === "OO"&& btn7t ==="?"){
    document.getElementById('btn7').innerHTML = 'O';
    turn = 'player1';
  }
    else if (btn7t+btn4t === "OO"&& btn1t ==="?"){
    document.getElementById('btn1').innerHTML = 'O';
    turn = 'player1';
  }
    else if (btn8t+btn5t === "OO"&& btn2t ==="?"){
    document.getElementById('btn2').innerHTML = 'O';
    turn = 'player1';
  }
    else if (btn9t+btn6t === "OO"&& btn3t ==="?"){
    document.getElementById('btn3').innerHTML = 'O';
    turn = 'player1';
  }
    else if (btn1t+btn5t === "OO"&& btn9t ==="?"){
    document.getElementById('btn9').innerHTML = 'O';
    turn = 'player1';
  }
    else if (btn9t+btn5t === "OO"&& btn1t ==="?"){
    document.getElementById('btn1').innerHTML = 'O';
    turn = 'player1';
  }
    else if (btn3t+btn5t === "OO"&& btn7t ==="?"){
    document.getElementById('btn7').innerHTML = 'O';
    turn = 'player1';
  }  else if (btn7t+btn5t === "OO"&& btn3t ==="?"){
    document.getElementById('btn3').innerHTML = 'O';
    turn = 'player1';
  }
  //oreuigiuerhgiuerh
    if (btn1t+btn2t === "XX" && btn3t ==="?"){
    document.getElementById('btn3').innerHTML = 'O';
    turn = 'player1';
  }
    else if (btn4t+btn5t === "XX"&& btn6t ==="?"){
    document.getElementById('btn6').innerHTML = 'O';
    turn = 'player1';
  }
    else if (btn7t+btn8t === "XX"&& btn9t ==="?"){
    document.getElementById('btn9').innerHTML = 'O';
    turn = 'player1';
  }
    else if (btn1t+btn4t === "XX"&& btn7t ==="?"){
    document.getElementById('btn7').innerHTML = 'O';
    turn = 'player1';
  }
    else if (btn2t+btn5t === "XX"&& btn8t ==="?"){
    document.getElementById('btn8').innerHTML = 'O';
    turn = 'player1';
  }
    else if (btn3t+btn6t === "XX"&& btn9t ==="?"){
    document.getElementById('btn9').innerHTML = 'O';
    turn = 'player1';
  }
    else if (btn3t+btn2t === "XX"&& btn1t ==="?"){
    document.getElementById('btn1').innerHTML = 'O';
    turn = 'player1';
  }
    else if (btn6t+btn5t === "XX"&& btn4t ==="?"){
    document.getElementById('btn4').innerHTML = 'O';
    turn = 'player1';
  }
    else if (btn9t+btn8t === "XX"&& btn7t ==="?"){
    document.getElementById('btn7').innerHTML = 'O';
    turn = 'player1';
  }
    else if (btn7t+btn4t === "XX"&& btn1t ==="?"){
    document.getElementById('btn1').innerHTML = 'O';
    turn = 'player1';
  }
    else if (btn8t+btn5t === "XX"&& btn2t ==="?"){
    document.getElementById('btn2').innerHTML = 'O';
    turn = 'player1';
  }
    else if (btn9t+btn6t === "XX"&& btn3t ==="?"){
    document.getElementById('btn3').innerHTML = 'O';
    turn = 'player1';
  }
    else if (btn1t+btn5t === "XX"&& btn9t ==="?"){
    document.getElementById('btn9').innerHTML = 'O';
    turn = 'player1';
  }
    else if (btn9t+btn5t === "XX"&& btn1t ==="?"){
    document.getElementById('btn1').innerHTML = 'O';
    turn = 'player1';
  }
    else if (btn3t+btn5t === "XX"&& btn7t ==="?"){
    document.getElementById('btn7').innerHTML = 'O';
    turn = 'player1';
  }  else if (btn7t+btn5t === "XX"&& btn3t ==="?"){
    document.getElementById('btn3').innerHTML = 'O';
    turn = 'player1';
  }
  else if (document.getElementById('btn5').innerHTML === '?'){
    document.getElementById('btn5').innerHTML = 'O';
    turn = 'player1';
  }else if (document.getElementById('btn1').innerHTML === '?'){
    document.getElementById('btn1').innerHTML = 'O';
    document.getElementById('playerturn').innerHTML = "X's turn!";
    turn = 'player1';
  }
  else if (document.getElementById('btn3').innerHTML === '?'){
    document.getElementById('btn3').innerHTML = 'O';
    document.getElementById('playerturn').innerHTML = "X's turn!";
    turn = 'player1';
  }
  else if (document.getElementById('btn7').innerHTML === '?'){
    document.getElementById('btn7').innerHTML = 'O';
    document.getElementById('playerturn').innerHTML = "X's turn!";
    turn = 'player1';
  }
  else if (document.getElementById('btn9').innerHTML === '?'){
    document.getElementById('btn9').innerHTML = 'O';
    document.getElementById('playerturn').innerHTML = "X's turn!";
    turn = 'player1';
  } else if (btn2t === '?'){
    document.getElementById('btn2').innerHTML = 'O';
    document.getElementById('playerturn').innerHTML = "X's turn!";
    turn = 'player1';
  }
  else if (btn4t === '?'){
    document.getElementById('btn4').innerHTML = 'O';
    document.getElementById('playerturn').innerHTML = "X's turn!";
    turn = 'player1';
  }
  else if (btn6t === '?'){
    document.getElementById('btn6').innerHTML = 'O';
    document.getElementById('playerturn').innerHTML = "X's turn!";
    turn = 'player1';
  }
  else if (btn8t === '?'){
    document.getElementById('btn8').innerHTML = 'O';
    document.getElementById('playerturn').innerHTML = "X's turn!";
    turn = 'player1';
  }
};
//document.getElementById('togglee').style.visibility = 'hidden';
//document.getElementById('togglee').style.visibility = 'visible';
const choosequest = () => {
    var item = questions[Math.floor(Math.random()*questions.length)];
    document.getElementById("question").innerHTML = item;
    currentquestion = questions.indexOf(item);
};
const cl = (btn) => {
  btn.innerHTML = "X";
  btn.style.color='red';
  document.getElementById('playerturn').innerHTML = "O's turn!";
  document.getElementById('playerturn').style.color = "blue";
  aiturn();
  checkwin();
  document.getElementById("btn1").disabled = true;
  document.getElementById("btn2").disabled = true;
  document.getElementById("btn3").disabled = true;
  document.getElementById("btn4").disabled = true;
  document.getElementById("btn5").disabled = true;
  document.getElementById("btn6").disabled = true;
  document.getElementById("btn7").disabled = true;
  document.getElementById("btn8").disabled = true;
  document.getElementById("btn9").disabled = true;
  document.getElementById("Hello").value = "";
  document.getElementById('Hello').style.visibility = 'visible';
  document.getElementById('question').style.visibility = 'visible';
  document.getElementById('submit').style.visibility = 'visible';
  document.getElementById('correctanswer').style.visibility = 'visible';
  choosequest();

};
const submit = (btn) => {
  if (document.getElementById("Hello").value === answers[currentquestion]){
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn3").disabled = false;
    document.getElementById("btn4").disabled = false;
    document.getElementById("btn5").disabled = false;
    document.getElementById("btn6").disabled = false;
    document.getElementById("btn7").disabled = false;
    document.getElementById("btn8").disabled = false;
    document.getElementById("btn9").disabled = false;
    for (let i=0;i<buttons.length;i++){
        if (document.getElementById(buttons[i]).innerHTML === "O" || document.getElementById(buttons[i]).innerHTML === "X"){
            document.getElementById(buttons[i]).disabled = true;
        }
    }
    document.getElementById('Hello').style.visibility = 'hidden';
    document.getElementById('question').style.visibility = 'hidden';
    document.getElementById('submit').style.visibility = 'hidden';
    //document.getElementById('correctanswer').style.visibility = 'hidden';
    document.getElementById("correctanswer").innerHTML = "Correct!";
    questions.splice(currentquestion, 1);
    answers.splice(currentquestion, 1);
    document.getElementById('playerturn').innerHTML = "X's turn!";
    document.getElementById('playerturn').style.color = "red";
  }else{
    aiturn();
    checkwin();
    document.getElementById("correctanswer").innerHTML = "Incorrect, it was "+answers[currentquestion];
    questions.splice(currentquestion, 1);
    answers.splice(currentquestion, 1);
    choosequest();
  }
};
const resetboard = () => {
  for (var i = 0; i < le; i++) {
    document.getElementById(buttons[i]).innerHTML = "?";
    document.getElementById(buttons[i]).style.color = "black";
    turn = 'player1';
    document.getElementById(buttons[i]).style.textDecoration = "None";
    document.getElementById(buttons[i]).disabled = false;
    document.getElementById('playerturn').innerHTML = "X's turn!";
    document.getElementById('playerturn').style.color = "red";
  }
  document.getElementById("question").innerHTML = "none";
  currentquestion = NaN;
  document.getElementById("Hello").value = "";
  document.getElementById("correctanswer").innerHTML = "";
  document.getElementById('Hello').style.visibility = 'hidden';
  document.getElementById('question').style.visibility = 'hidden';
  document.getElementById('submit').style.visibility = 'hidden';
  document.getElementById('correctanswer').style.visibility = 'hidden';
};