function toggleLoginForm() {
    var overplay = document.getElementById("test")
    var loginForm = document.getElementById("loginForm");
    if (loginForm.style.display === "block") {
        loginForm.style.display = "none";
        document.body.style.backgroundColor = "white";
        overplay.style.zIndex = "-999";
        overplay.style.backgroundColor = "white";
    } else {
        loginForm.style.display = "block";

        overplay.style.zIndex = "2";
        overplay.style.position = "fixed";
        overplay.style.backgroundColor = "hsla(0, 0%, 0%, 0.4)";
        overplay.style.width = "100%";
        overplay.style.height = "100%";
  
    }
}


function Resform() {
    var resForm = document.getElementById("resForm");
    var overplay = document.getElementById("test")
    if (resForm.style.display === "block") {
        resForm.style.display = "none";
        document.body.style.backgroundColor = "white";
        overplay.style.zIndex = "-999";
        overplay.style.backgroundColor = "white";

    } else {
        resForm.style.display = "block";
        overplay.style.zIndex = "2";
        overplay.style.position = "fixed";
        overplay.style.backgroundColor = "hsla(0, 0%, 0%, 0.4)";
        overplay.style.width = "100%";
        overplay.style.height = "100%";
        
    }
}

function fromRes(){
    var resForm = document.getElementById("resForm");
    var loginForm = document.getElementById("loginForm");
    var overplay = document.getElementById("test")
    if (loginForm.style.display === "none") {
        
        document.body.style.backgroundColor = "white";
        overplay.style.zIndex = "-999";
        overplay.style.backgroundColor = "white";

    } else {
        resForm.style.display = "none";
        loginForm.style.display = "block";

        overplay.style.zIndex = "2";
        overplay.style.position = "fixed";
        overplay.style.backgroundColor = "hsla(0, 0%, 0%, 0.4)";
        overplay.style.width = "100%";
        overplay.style.height = "100%";
    }

}







function cancel(){
    var resForm = document.getElementById("resForm");
    var loginForm = document.getElementById("loginForm");
    var overplay = document.getElementById("test")
    if (loginForm.style.display === "block") {
        resForm.style.display = "none";
        loginForm.style.display = "none";
        overplay.style.zIndex = "-999";
        overplay.style.backgroundColor = "white";
    } else {
        resForm.style.display = "none";
        loginForm.style.display = "none";
        overplay.style.zIndex = "-999";
        overplay.style.backgroundColor = "white";

    }
}

function binhhoa() {
    var button = document.getElementById("button-den");
    var button1 = document.getElementById("button-binhhoa");
    var button2 = document.getElementById("button-binhtra");
    var button3 = document.getElementById("button-tuong");
    var button4 = document.getElementById("button-khay");


    var binhhoa = document.getElementById("sp-binhhoa");
    var binhtra = document.getElementById("sp-binhtra");
    var den = document.getElementById("sp-den");
    var tuong = document.getElementById("sp-tuong");
    var khay = document.getElementById("sp-khay");
    var spright = document.getElementById("spright");
    if(binhhoa.style.display === "block"){
        binhhoa.style.display = "none";
        binhtra.style.display = "none";
        den.style.display = "none";
        tuong.style.display = "none";
        khay.style.display = "none";
        spright.style.display = "flex"; 


        button.style.backgroundColor = "white";
        button1.style.backgroundColor = "white";
        button2.style.backgroundColor = "white";
        button3.style.backgroundColor = "white";
        button4.style.backgroundColor = "white";
    }

    else{
        binhhoa.style.display = "block"; 
        spright.style.display = "none"; 
        
        binhtra.style.display = "none";
        den.style.display = "none";
        tuong.style.display = "none";
        khay.style.display = "none";

        button.style.backgroundColor = "white";
        button1.style.backgroundColor = "rgb(213, 175, 118)";
        button2.style.backgroundColor = "white";
        button3.style.backgroundColor = "white";
        button4.style.backgroundColor = "white";
    }
}

function den() {
    var button = document.getElementById("button-den");
    var button1 = document.getElementById("button-binhhoa");
    var button2 = document.getElementById("button-binhtra");
    var button3 = document.getElementById("button-tuong");
    var button4 = document.getElementById("button-khay");


    var binhhoa = document.getElementById("sp-binhhoa");
    var binhtra = document.getElementById("sp-binhtra");
    var den = document.getElementById("sp-den");
    var tuong = document.getElementById("sp-tuong");
    var khay = document.getElementById("sp-khay");
    var spright = document.getElementById("spright");
    if(den.style.display === "block"){
        binhhoa.style.display = "none";
        binhtra.style.display = "none";
        den.style.display = "none";
        tuong.style.display = "none";
        khay.style.display = "none";
        spright.style.display = "flex"; 

        button.style.backgroundColor = "white";
        button1.style.backgroundColor = "white";
        button2.style.backgroundColor = "white";
        button3.style.backgroundColor = "white";
        button4.style.backgroundColor = "white";

    }

    else{
        binhhoa.style.display = "none"; 
        spright.style.display = "none"; 
        
        binhtra.style.display = "none";
        den.style.display = "block";
        tuong.style.display = "none";
        khay.style.display = "none";

        button1.style.backgroundColor = "white";
        button.style.backgroundColor = "rgb(213, 175, 118)";
        button2.style.backgroundColor = "white";
        button3.style.backgroundColor = "white";
        button4.style.backgroundColor = "white";
    }
}



function binhtra() {
    var button = document.getElementById("button-den");
    var button1 = document.getElementById("button-binhhoa");
    var button2 = document.getElementById("button-binhtra");
    var button3 = document.getElementById("button-tuong");
    var button4 = document.getElementById("button-khay");


    var binhhoa = document.getElementById("sp-binhhoa");
    var binhtra = document.getElementById("sp-binhtra");
    var den = document.getElementById("sp-den");
    var tuong = document.getElementById("sp-tuong");
    var khay = document.getElementById("sp-khay");
    var spright = document.getElementById("spright");
    if(binhtra.style.display === "block"){
        binhhoa.style.display = "none";
        binhtra.style.display = "none";
        den.style.display = "none";
        tuong.style.display = "none";
        khay.style.display = "none";
        spright.style.display = "flex"; 

        button.style.backgroundColor = "white";
        button1.style.backgroundColor = "white";
        button2.style.backgroundColor = "white";
        button3.style.backgroundColor = "white";
        button4.style.backgroundColor = "white";

    }

    else{
        binhhoa.style.display = "none"; 
        spright.style.display = "none"; 
        
        binhtra.style.display = "block";
        den.style.display = "none";
        tuong.style.display = "none";
        khay.style.display = "none";

        button1.style.backgroundColor = "white";
        button2.style.backgroundColor = "rgb(213, 175, 118)";
        button.style.backgroundColor = "white";
        button3.style.backgroundColor = "white";
        button4.style.backgroundColor = "white";
    }
}

function tuong() {
    var button = document.getElementById("button-den");
    var button1 = document.getElementById("button-binhhoa");
    var button2 = document.getElementById("button-binhtra");
    var button3 = document.getElementById("button-tuong");
    var button4 = document.getElementById("button-khay");


    var binhhoa = document.getElementById("sp-binhhoa");
    var binhtra = document.getElementById("sp-binhtra");
    var den = document.getElementById("sp-den");
    var tuong = document.getElementById("sp-tuong");
    var khay = document.getElementById("sp-khay");
    var spright = document.getElementById("spright");
    if(tuong.style.display === "block"){
        binhhoa.style.display = "none";
        binhtra.style.display = "none";
        den.style.display = "none";
        tuong.style.display = "none";
        khay.style.display = "none";
        spright.style.display = "flex"; 

        button.style.backgroundColor = "white";
        button1.style.backgroundColor = "white";
        button2.style.backgroundColor = "white";
        button3.style.backgroundColor = "white";
        button4.style.backgroundColor = "white";

    }

    else{
        binhhoa.style.display = "none"; 
        spright.style.display = "none"; 
        
        binhtra.style.display = "none";
        den.style.display = "none";
        tuong.style.display = "block";
        khay.style.display = "none";

        button1.style.backgroundColor = "white";
        button3.style.backgroundColor = "rgb(213, 175, 118)";
        button.style.backgroundColor = "white";
        button2.style.backgroundColor = "white";
        button4.style.backgroundColor = "white";
    }
}


function khay() {
    var button = document.getElementById("button-den");
    var button1 = document.getElementById("button-binhhoa");
    var button2 = document.getElementById("button-binhtra");
    var button3 = document.getElementById("button-tuong");
    var button4 = document.getElementById("button-khay");


    var binhhoa = document.getElementById("sp-binhhoa");
    var binhtra = document.getElementById("sp-binhtra");
    var den = document.getElementById("sp-den");
    var tuong = document.getElementById("sp-tuong");
    var khay = document.getElementById("sp-khay");
    var spright = document.getElementById("spright");
    if(khay.style.display === "block"){
        binhhoa.style.display = "none";
        binhtra.style.display = "none";
        den.style.display = "none";
        tuong.style.display = "none";
        khay.style.display = "none";
        spright.style.display = "flex"; 

        button.style.backgroundColor = "white";
        button1.style.backgroundColor = "white";
        button2.style.backgroundColor = "white";
        button3.style.backgroundColor = "white";
        button4.style.backgroundColor = "white";

    }

    else{
        binhhoa.style.display = "none"; 
        spright.style.display = "none"; 
        
        binhtra.style.display = "none";
        den.style.display = "none";
        tuong.style.display = "none";
        khay.style.display = "block";

        button1.style.backgroundColor = "white";
        button4.style.backgroundColor = "rgb(213, 175, 118)";
        button.style.backgroundColor = "white";
        button2.style.backgroundColor = "white";
        button3.style.backgroundColor = "white";
    }
}



var element_vol = document.getElementById("volume");
var vol = element_vol.value;
console.log(vol)


var render = (vol) => {
    element_vol.value = vol;
}


var plus = () =>{
    vol++;
    render(vol);
}
var minus = () =>{
    if (vol > 0) {
        vol--;
        render(vol);
    }
    
}

function change(){
    var mini = document.getElementById('mini-img');
    var mini1 = document.getElementById('mini-img1');
    var mini2 = document.getElementById('mini-img2');
    var mini3 = document.getElementById('mini-img3');
    var mini4 = document.getElementById('mini-img4');
    mini1.style.display = "none";
    mini.style.display = "block"; 
    mini2.style.display = "none"; 
    mini3.style.display = "none"; 
    mini4.style.display = "none"; 

}



function change1(){
    var mini = document.getElementById('mini-img');
    var mini1 = document.getElementById('mini-img1');
    var mini2 = document.getElementById('mini-img2');
    var mini3 = document.getElementById('mini-img3');
    var mini4 = document.getElementById('mini-img4');
    mini1.style.display = "block";
    mini.style.display = "none"; 
    mini2.style.display = "none"; 
    mini3.style.display = "none"; 
    mini4.style.display = "none"; 

}



function change2(){
    var mini = document.getElementById('mini-img');
    var mini1 = document.getElementById('mini-img1');
    var mini2 = document.getElementById('mini-img2');
    var mini3 = document.getElementById('mini-img3');
    var mini4 = document.getElementById('mini-img4');
    mini1.style.display = "none";
    mini.style.display = "none"; 
    mini2.style.display = "block"; 
    mini3.style.display = "none"; 
    mini4.style.display = "none"; 

}

function change3(){
    var mini = document.getElementById('mini-img');
    var mini1 = document.getElementById('mini-img1');
    var mini2 = document.getElementById('mini-img2');
    var mini3 = document.getElementById('mini-img3');
    var mini4 = document.getElementById('mini-img4');
    mini1.style.display = "none";
    mini.style.display = "none"; 
    mini2.style.display = "none"; 
    mini3.style.display = "block"; 
    mini4.style.display = "none"; 

}

function change4(){
    var mini = document.getElementById('mini-img');
    var mini1 = document.getElementById('mini-img1');
    var mini2 = document.getElementById('mini-img2');
    var mini3 = document.getElementById('mini-img3');
    var mini4 = document.getElementById('mini-img4');
    mini1.style.display = "none";
    mini.style.display = "none"; 
    mini2.style.display = "none"; 
    mini3.style.display = "none"; 
    mini4.style.display = "block"; 

}
