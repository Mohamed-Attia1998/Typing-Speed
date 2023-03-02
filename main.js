let words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Github",
    "Twitter",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"

]
// Setting level
let lvls = {
    "Easy":5 ,
    "Normal":3 , 
    "Hard":2
};
//Default Level
let defaultLevelName = "Easy"
let defaultSeconds = lvls[defaultLevelName]

//Catch Selectors
let staerButton = document.querySelector(".start")
let lvlNameSpan = document.querySelector(".message .lvl")
let SecondSpan = document.querySelector(".message .seconds")
let theWord = document.querySelector(".the-word")
let upcomingWords = document.querySelector(".upcoming-words")
let input = document.querySelector(".input")
let timeLeftSpan = document.querySelector(".time span")
let scoreGot = document.querySelector(".score .got")
let scoreTotal = document.querySelector(".score .total")
let finishMesaage = document.querySelector(".finish")

//setting level Name + seconds + score
lvlNameSpan.innerHTML=defaultLevelName
SecondSpan.innerHTML=defaultSeconds
timeLeftSpan.innerHTML=defaultSeconds
scoreTotal.innerHTML=words.length

//Disable Paste Event
input.onpaste=function(){
    return false;
}

//Start Game 
staerButton.onclick = function(){
    this.remove()
    input.focus()
    //Generate Word Function
    generateWord()
}

function generateWord(){
    //Get Random Word from Array
    let randomWord = words[Math.floor(Math.random() * words.length)]
    //Get Index of word
    let indexWord = words.indexOf(randomWord)
    //Remove Word From Array
    words.splice(indexWord,1)
    //Show the random word
    theWord.innerHTML = randomWord
    //Empty Upcoming Words
    upcomingWords.innerHTML = "";
    //Generate Words
    for(let i=0;i<words.length;i++){
        //Create Document Div
        let div = document.createElement("div")
        let txt = document.createTextNode(words[i])
        div.appendChild(txt)
        //Append div into upcomingword
        upcomingWords.appendChild(div)
    }
    //call start play function
    startPlay()
}
function startPlay(){
    timeLeftSpan.innerHTML=defaultSeconds
    let start = setInterval(()=>{
        timeLeftSpan.innerHTML--
        if(timeLeftSpan.innerHTML==="0"){
            clearInterval(start)
            //compare Word
            if(theWord.innerHTML.toLowerCase() === input.value.toLowerCase()){
                //Empty input value
                input.value="";
                //increase score
                scoreGot.innerHTML++
                if(words.length > 0){
                    generateWord()
                }else{
                    let span = document.createElement("span")
                    span.className="good"
                    let spanText = document.createTextNode("Congratz")
                    span.appendChild(spanText)
                    finishMesaage.appendChild(span)
                    //remove upcoming box
                    upcomingWords.remove()
                }
            }else{
                let span = document.createElement("span")
                span.className="bad"
                let spanText = document.createTextNode("Game Over")
                span.appendChild(spanText)
                finishMesaage.appendChild(span)
            }
        }
    },1200)
}