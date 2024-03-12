function submitFunc(){
    return false;
}

let top_left_Radius = document.getElementById('tlr');
let top_right_Radius = document.getElementById('trr');
let bottom_left_Radius = document.getElementById('blr');
let bottom_right_Radius = document.getElementById('brr');
let inputArr = [top_left_Radius, top_right_Radius,
                bottom_left_Radius, bottom_right_Radius];

let newCss = document.getElementById("output");
let output = newCss.innerHTML;


inputArr.forEach(input => {
    input.addEventListener("input", function(e){
        output="";
        makeChanges(input);
    })
});

function makeChanges(input){
    let box = document.getElementById("box");
    let inputValue = input.value;
    if(input === top_left_Radius){
        let unit = document.getElementById("tl-unit").value;
        box.style.borderTopLeftRadius = inputValue + unit;
    }
    else if(input === top_right_Radius){
        let unit = document.getElementById("tr-unit").value;
        box.style.borderTopRightRadius = inputValue + unit;
    }
    else if(input === bottom_left_Radius){
        let unit = document.getElementById("bl-unit").value;
        box.style.borderBottomLeftRadius = inputValue + unit;
    }
    else if(input === bottom_right_Radius){
        let unit = document.getElementById("br-unit").value;
        box.style.borderBottomRightRadius = inputValue + unit;
    }
    
    showCSS();
}

function showCSS(){
    let needCopy = false;
    if(top_left_Radius.value > 0){
        let inputValue = top_left_Radius.value;
        let unit = document.getElementById("tl-unit").value;
        output+=("border-top-left-radius:"+inputValue + unit + `;<br>`);
        needCopy = true;
    }
    if(top_right_Radius.value > 0){
        let inputValue = top_right_Radius.value;
        let unit = document.getElementById("tr-unit").value;
        output+=("border-top-right-radius:"+inputValue + unit + ";<br>");
        needCopy = true;
    }
    if(bottom_left_Radius.value > 0){
        let inputValue = bottom_left_Radius.value;
        let unit = document.getElementById("bl-unit").value;
        output+=("border-bottom-left-radius:"+inputValue + unit + ";<br>");
        needCopy = true;
    }
    if(bottom_right_Radius.value > 0){
        let inputValue = bottom_right_Radius.value;
        let unit = document.getElementById("br-unit").value;
        output+=("border-bottom-right-radius:"+inputValue + unit + ";<br>");
        needCopy = true;
    }
    newCss.innerHTML = output;
    if(needCopy){
        document.getElementById('copy-btn').style.display = "block";
        document.getElementById('css-header').style.display = "block";
    }
    else{
        document.getElementById('copy-btn').style.display = "none";
        document.getElementById('css-header').style.display = "none";
    }
    console.log(newCss);
}

function copyFunc(){
    let n = output.length;
    if(n == 0) return;
    let copyText = ``;
    for(let i = 0; i < n; i++){
        if(output[i] == '<'){
            copyText+='\n';
            i+=3;
        }
        else copyText+=output[i];
    }
    navigator.clipboard.writeText(copyText);
    alert("Copied text");
}