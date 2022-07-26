const ecran=document.getElementById("ecran")
 const nums=document.getElementsByClassName("num") 
const parent= document.querySelector('total');
const clear=document.getElementById("c")
const clear_elem=document.getElementById("ce")
const sept=document.getElementById("n7")
// const opr=document.getElementsByClassName("math");
const division=document.getElementById("division")
const multiplication=document.getElementById("mul")
const somme=document.getElementById("plus")
const soustraction=document.getElementById("moins")
const equality=document.getElementById("eg")

var op=""
var x=6

console.log(nums)



// nums.forEach(element => {
//     element.addEventListener('click', () => {
//         alert('I am clicked')
//     })
// });

// sept.addEventListener('click',function()
// {
//     ecran.textContent="7"
// }


// )
for(let i=0; i<nums.length; i++){
    
    nums[i].addEventListener('click', () =>{

        ecran.textContent =ecran.textContent.substring(
         (ecran.innerText[0]==0)?1:0,ecran.textContent.length)+ nums[i].innerText;
        
         somme.disabled=false
         division.disabled=false
         soustraction.disabled=false
         multiplication.disabled=false
        })
}
clear.addEventListener('click',function(){
    ecran.textContent="0"

}

)
clear_elem.addEventListener('click',function(){
    ecran.textContent=ecran.textContent.substring(0,ecran.textContent.length-1)
})
// somme.addEventListener('click',function()
// {op='+';
// x=Number(ecran.innerText);

//  ecran.textContent=ecran.innerText+"+";
// return x;



//  })



//     equality.addEventListener('click',function()
//     {if (op=='+')
//      { var ch=ecran.textContent.substring(indexOf('+'),ecran.textContent.length)
//         ecran.innerText=x+number(ch)
        

//     }}
//     )
division.addEventListener('click',function()

{ 
    
    debut()
    op='/';
    One_OP()

    
    return op;
}
)
multiplication.addEventListener('click',function()
{
    

    debut()
    op='*'
    One_OP()

    return op;
}
)
somme.addEventListener('click',function()
{
    debut()

    op='+'
    One_OP()

    return op;
}
)
soustraction.addEventListener('click',function()
  {     debut()

//if (ecran.innerText.substring(ecran.innerText.length-1,ecran.innerText.length)=="-")
//       {ecran.textContent=ecran.innerText}
//  else{
//     ecran.textContent=ecran.innerText+"-"}
    op='-'
    One_OP()

    return op;
}
)
equality.addEventListener('click',function()
{
   switch(op)
   {
    case "+":
        var t=(ecran.innerText).split(op);
        ecran.textContent=Number(t[0])+Number(t[1]);

    break;
    case "/":
        var t=(ecran.innerText).split(op);
        ecran.textContent=Number(t[0])/ Number(t[1]);

    break;
    case "*":
        var t=(ecran.innerText).split(op);
        ecran.textContent=Number(t[0])* Number(t[1]);

    break;

    case "-":
        var t=(ecran.innerText).split(op);
        ecran.textContent=Number(t[0])- Number(t[1]);

    break;
   
    default:
        ecran.textContent='0'



   }
}
)
function One_OP(){
    if (ecran.innerText[ecran.innerText.length-1]==op)
    {
        somme.disabled=true;
        soustraction.disabled=true;
        division.disabled=true;
        multiplication.disabled=true;
    }
    else{    ecran.textContent=ecran.innerText+op
}
}
function debut(){
    
    if(!nums.includes(ecran.innerText[0]))
    {ecran.innerText=ecran.innertext}

}



