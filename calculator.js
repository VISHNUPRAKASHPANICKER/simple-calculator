// 1. display number or operators inside the input box when we click on it

function display(num){
    result.value += num
}

// 2.to clear all values inside text box
function clearAll(){
    result.value = ""
}

// 3.expression evaluation
function output(){
    result.value = eval(result.value)
}

// 4.remove last
function removeLast(){
    result.value = result.value.slice(0,-1)
}