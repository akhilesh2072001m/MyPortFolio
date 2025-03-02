let userScore = 0;
let compScore = 0;




const choiceAll = document.querySelectorAll(".choice");

choiceAll.forEach((Uchoice) =>{

Uchoice.addEventListener("click",()=>{

    const userchoice = Uchoice.getAttribute("id");
    console.log(userchoice);
    
});
});
