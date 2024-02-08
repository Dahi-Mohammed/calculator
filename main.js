let valuOne = document.querySelector(".value-1");
let valuTwo = document.querySelector(".value-2");
let attr    = document.querySelector(".attr");
let result  = document.querySelector(".result");
let btns    = document.querySelectorAll(".btns span");
let backDeletNum = ""
let calcoulaterData = ['',''];


btns.forEach(num => {
    num.addEventListener("click", () => {
        if(attr.textContent.length == "0"){
            if(num.getAttribute("data") != "*" && num.getAttribute("data") != "+" && num.getAttribute("data") != "-" && num.getAttribute("data") != "=" && num.getAttribute("data") != "%" && num.getAttribute("data") != null && num.getAttribute("data") != "/"){
                valuOne.textContent += num.getAttribute("data");
                calcoulaterData[0] += num.getAttribute("data");
            }       
        }else {
            if(num.getAttribute("data") != "*" && num.getAttribute("data") != "+" && num.getAttribute("data") != "-" && num.getAttribute("data") != "=" && num.getAttribute("data") != "%" && num.getAttribute("data") != null && num.getAttribute("data") != "/"){
                valuTwo.textContent += num.getAttribute("data");
                calcoulaterData[1] += num.getAttribute("data");
            }
        }
    })
})



document.getElementById("calc").addEventListener("click", () => {
    if(valuOne.textContent.length != 0){
        attr.textContent = "x";
    }
})


document.getElementById("subtract").addEventListener("click", () => {
    if(valuOne.textContent.length != 0){
        attr.textContent = "-";
    }
})

document.getElementById("portion").addEventListener("click", () => {
    if(valuOne.textContent.length != 0){
        attr.textContent = "÷";
    }
})

document.getElementById("plus").addEventListener("click", () => {
    if(valuOne.textContent.length != 0){
        attr.textContent = "+";
    }
})


document.getElementById("ec").addEventListener("click", () => {
    if(valuOne.textContent.length != 0 && valuTwo.textContent.length != 0){
        calcoulaterData.reduce((num1,num2) => {
            if(attr.textContent === "x"){
                result.textContent = +num1 * +num2;
            }else if (attr.textContent === "-"){
                result.textContent = +num1 - +num2;
            }else if (attr.textContent === "÷"){
                result.textContent = +num1 / +num2;
            }else if (attr.textContent === "+"){
                result.textContent = +num1 + +num2;
            }
        })
    }
})



document.getElementById("delete").addEventListener("click", () => {
    if(attr.textContent.length == 0 && valuOne.textContent.length != 0){
        backDeletNum += valuOne.textContent[valuOne.textContent.length - 1];
        valuOne.textContent = valuOne.textContent.slice(0 , -1);
    }else {      
        if(valuTwo.textContent.length != 0){
            backDeletNum += valuTwo.textContent[valuTwo.textContent.length - 1];
            valuTwo.textContent = valuTwo.textContent.slice(0 , -1);
        }
    }
})


document.getElementById("back").addEventListener("click", () => {
    if(attr.textContent.length == 0 && backDeletNum.length != 0){
        valuOne.textContent = valuOne.textContent + backDeletNum[backDeletNum.length - 1];
        backDeletNum = backDeletNum.slice(0, backDeletNum.length - 1);
    }else {
        if(backDeletNum.length != 0){
            valuTwo.textContent = valuTwo.textContent + backDeletNum[backDeletNum.length - 1];
            backDeletNum = backDeletNum.slice(0, backDeletNum.length - 1);
        }
    }
})


document.getElementById("new").addEventListener("click", () => {
    location.reload();
})

