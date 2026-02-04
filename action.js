function random(){
    let emojies=["😀","😃","😁","✋","☕️","⏰","🤓","🥲","📖","🔥","🫙","😶‍🌫️","😶","🫶","👨‍⚕️","👀"]
    let length=emojies.length
    
    let result=""
    let randomValue=Math.floor(Math.random()*emojies.length)
    let picker=document.getElementsByClassName("emoji_display")
    picker.textContent=emojies[randomValue]
    
}



random()