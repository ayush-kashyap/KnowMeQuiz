var user ="";
function btn(){
    user=document.getElementById("name").value;
    if (user!="") {
        document.getElementById("q1").style.display="flex";
    document.getElementById("hid").style.display="none";
    }
    else{
        document.getElementById("error").style.display="block";
    }
}
var score=0;

document.getElementById("btn1").addEventListener("click", btn1);
document.getElementById("btn2").addEventListener("click", btn2);
document.getElementById("btn3").addEventListener("click", btn3);
document.getElementById("btn4").addEventListener("click", btn4);
function btn1(){
    let preans="golu";
    document.getElementById("q1").style.display="none";
    document.getElementById("q2").style.display="flex";
    let ansuser = document.getElementById("ques1").value.toLowerCase();
    if(ansuser==preans){
        score+=2.5;
    }
}
function btn2(){
    let preans="iron man";
    document.getElementById("q2").style.display="none";
    document.getElementById("q3").style.display="flex";
    let ansuser = document.getElementById("ques2").value.toLowerCase();
    if(ansuser==preans){
        score+=2.5;
    }
}
function btn3(){
    let preans="coding";
    document.getElementById("q3").style.display="none";
    document.getElementById("q4").style.display="flex";
    let ansuser = document.getElementById("ques3").value.toLowerCase();
    if(ansuser==preans){
        score+=2.5;
    }
}
function btn4(){
    let preans="7850890531";
    document.getElementById("q4").style.display="none";
    document.getElementById("result").style.display="flex";
    let ansuser = document.getElementById("ques4").value;
    if(ansuser==preans){
        score+=2.5;
    }
    if (score>=5) {
        document.getElementById("win").innerText="You won!";
        document.getElementById("ans").innerText="Congratulations "+user+" your score is "+score;
    }else{
        document.getElementById("win").innerText="You lost!";
        document.getElementById("ans").innerText="Sorry "+user+" your score is "+score;
    }
}