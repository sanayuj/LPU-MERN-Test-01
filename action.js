function random(){
    let emojies=["😀","😃","😁","✋","☕️","⏰","🤓","🥲","📖","🔥","🫙","😶‍🌫️","😶","🫶","👨‍⚕️","👀"]
    let length=emojies.length
    
    let result=""
    let randomValue=Math.floor(Math.random()*emojies.length)
    let picker=document.getElementsByClassName("emoji_display")[0]
    
    result=emojies[randomValue]
    picker.textContent=result
    console.log(result);
    
    
}


let btn=document.getElementById("submit")
btn.addEventListener("click",()=>{
random()
})

