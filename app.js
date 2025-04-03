let count = 0;
//prikaz countera na UI
document.getElementById("counter").textContent = count;


const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");
const di = document.getElementById("counter");

// counter plus 1
plus.addEventListener("click", function(){
    count++;
    di.textContent = count;
    if(count >= 0){
        counter.style.color = "black";
    }
})

//counter minus 1
minus.addEventListener("click", function(){
    count--;
    di.textContent = count;
    if(count <= -1){
        counter.style.color = "red";
    }

})
// resetiranje countera
reset.addEventListener("click", function(){
    count = 0;
    di.textContent = count;
})

console.log(count)