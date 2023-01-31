let markBtn = document.getElementsByClassName("btn");
let liActive = document.getElementsByClassName("read");
let numOfnot = document.getElementById("noti-number");
console.log(liActive.length);
console.log(liActive);
markBtn[0].addEventListener("click",()=>{
    for(let i=0;i<liActive.length;i++){
        console.log(liActive[i]);
        liActive[i].classList.remove("unread"); 
    }
    numOfnot.innerText="0";
});