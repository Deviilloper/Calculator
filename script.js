const input = document.getElementById("number-input");
function handleClickButton(el){
    const current_inputValue = input.value;
    input.value = current_inputValue + el.innerText;
}
function reset(){
    input.value = "";
}
function compute(){
    const result = eval(input.value);
    input.value = `${result}`;
}