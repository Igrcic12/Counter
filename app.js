let count = 0;

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");
const di = document.getElementById("counter");

plus.addEventListener("click", function(){
    count++;
    di.textContent = count;
    if(count > 0){
        counter.style.color = "black";
    }
    else{
        counter.style.color = "red";
    }
})

minus.addEventListener("click", function(){
    count--;
    di.textContent = count;
    if(count < 0){
        counter.style.color = "red";
    }
    else{
        counter.style.color = "black";
    }
})

reset.addEventListener("click", function(){
    count = 0;
    di.textContent = count;
})

console.log(count)