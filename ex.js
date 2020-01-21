function whatname(){
alert('こんにちは' + document.getElementById('who').value + 'さん!');}

/*ここからbmi*/ 
function BMI(){
    var w = document.getElementById('weight').value;
    var h = document.getElementById('height').value;
    twice = parseFloat(h)*parseFloat(h);
    Body = parseFloat(w)/parseFloat(twice);
    alert(Body);}
function result(){
    if (Body < 16) {
    alert("痩せすぎ");

    } else if (Body <= 16.99) {
    alert("痩せ");

    } else if (Body <= 18.49) {
    alert("痩せぎみ");

    } else if (Body <= 24.99) {
    alert("普通");

     } else if (Body <= 29.99) {
    alert("前肥満");

    } else if (Body <= 34.99) {
    alert("肥満（１）");

    } else if (Body <= 39.99) {
    alert("肥満（２）");

    } else{
    alert("肥満（３）");
    }
    }