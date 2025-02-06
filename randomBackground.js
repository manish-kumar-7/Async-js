const randomColor=function (){
    const hex="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
return color;   
}
let set
let s=document.querySelector('#start')
let st=document.querySelector('#stop')
let changeColor=function (){
    function setcolor2  (){
    document.body.style.backgroundColor=randomColor()
    }
    if(!set){
    set=setInterval(setcolor2,2000)
    }
}
let stopChangeColor=function (){
    clearInterval(set)
    set=null;
}
s.addEventListener("click",changeColor)
st.addEventListener("click",stopChangeColor)
