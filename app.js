let table = document.querySelector(".table");
let arr = [];
for(let i= 0;i<10;i++){
    const tr = document.createElement("tr");
    for(let j = 0; j<10;j++){
        const td = document.createElement("td");
        tr.appendChild(td);
    }
    
    table.appendChild(tr);
    arr.push(Math.floor(Math.random() *99));
}

const elements = document.querySelectorAll("td");
elements.forEach((element,index)=>{
    element.addEventListener('click',function(){
        arr.forEach(son =>{
            if(son === index){
                element.classList.add("green");
            } 
            else{
                element.classList.add("red")
            }
        })
    })
});
const modal = document.querySelector(".time");
const modalBtn = document.querySelector("button");
function modalOpen() {
   modal.classList.add('active')
}

modalBtn.addEventListener('click', ()=> {
    location.reload()
})

setTimeout(modalOpen, 1000*30);