let player = {                          
    name: "Per",
    chips: 145
}
let cards = []
let sum =0
let hasBlackjack=false
let isAlive=false
let message = " "

let messageEL = document.getElementById("message_el")
let sumEl=document.querySelector("#sum_el")
let cardsEl=document.querySelector("#cards_el")

//using an object to store player details
let playerEl=document.getElementById("player_el")
playerEl.textContent= player.name + ": $" + player.chips

//having the name startGame for all doesn't make sense so we use the function startGame to call rendergame() which will be used severaltimes later...so that it semantically adds up (also we don't wanna change html - onclick "starGame()")
function startGame(){            
                     
    isAlive=true
    let firstCard= getRandom()
    let secondCard=getRandom()

    cards=[firstCard,secondCard]
    sum=firstCard + secondCard   

    renderGame()
}

function getRandom(){
    let randomNumber = Math.floor(Math.random() * 13) + 1

    if(randomNumber==1)                     //because ACE has value 11 (actually 1 or 11- modify later)
        return 11

    else if(randomNumber>10)     // KQJ has value 10
        return 10

    else
        return randomNumber
}

function renderGame(){

        cardsEl.textContent= "Cards: "    //imp to keep this default value. Try what happens if we don't have it.

        for(let i=0; i<cards.length; i++){

            cardsEl.textContent+= cards[i] + " "
        }

        sumEl.textContent= "Sum: " + sum

        if(sum<=20){
        message = "Do you want to draw a new card?"
        }

        else if(sum===21){
            message= "You've got BlackJack!"
            hasBlackjack=true
        }

        else
        {
            message="You're out of the game"
            isAlive=false
        }

        messageEL.textContent=message
}

function newCard()
{
    if(isAlive===true && hasBlackjack===false)
    {    
        let card = getRandom()
        cards.push(card)         //pushing card in to the array 

        sum+=card

        renderGame()
    }
}
