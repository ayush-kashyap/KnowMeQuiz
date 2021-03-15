var user ="";
document.getElementById("go").addEventListener("click", btn);
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
var preans1="";
var preans2="";
var preans3="";
var preans4="";
var userans1="";
var userans2="";
var userans3="";
var userans4="";
var score=0;

document.getElementById("btn1").addEventListener("click", btn1);
document.getElementById("btn2").addEventListener("click", btn2);
document.getElementById("btn3").addEventListener("click", btn3);
document.getElementById("btn4").addEventListener("click", btn4);
function btn1(){
    preans1="ayush";
    document.getElementById("q1").style.display="none";
    document.getElementById("q2").style.display="flex";
    userans1 = document.getElementById("ques1").value.toLowerCase();
    if(userans1==preans1){
        score+=2.5;
    }
}
function btn2(){
    preans2="iron man";
    document.getElementById("q2").style.display="none";
    document.getElementById("q3").style.display="flex";
    userans2 = document.getElementById("ques2").value.toLowerCase();
    if(userans2==preans2){
        score+=2.5;
    }
}
function btn3(){
    preans3="coding";
    document.getElementById("q3").style.display="none";
    document.getElementById("q4").style.display="flex";
    userans3 = document.getElementById("ques3").value.toLowerCase();
    if(userans3==preans3){
        score+=2.5;
    }
}
function btn4(){
    preans4="allahabad university";
    document.getElementById("q4").style.display="none";
    document.getElementById("result").style.display="flex";
    userans4 = document.getElementById("ques4").value;
    if(userans4==preans4){
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
function showAns(){
    document.getElementById("result").style.display="none";
    document.getElementById("show").style.display="block";
    document.getElementById("ans1").innerText="Your answer : "+userans1;
    document.getElementById("ans2").innerText="Your answer : "+userans2;
    document.getElementById("ans3").innerText="Your answer : "+userans3;
    document.getElementById("ans4").innerText="Your answer : "+userans4;

}