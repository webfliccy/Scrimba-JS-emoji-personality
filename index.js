const myEmojis = []
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")


renderBtns()

function renderBtns() { 
   //Only show 1 button if emoji array is empty
    if(myEmojis.length < 1) {
        console.log("here")
        document.getElementById("buttons-wrapper").innerHTML = `<button id="add-btn">Add</button>`
        const addBtn = document.getElementById("add-btn")
        addBtn.addEventListener("click", function(){
            updateEmojis("push")
        })
    //Display buttons and add event listeners
    } else {
        document.getElementById("buttons-wrapper").innerHTML = `
        <button id="push-btn">Add to end</button>
            <button id="unshift-btn">Add to beginning</button>
        <br/>
            <button id="pop-btn">Remove from end</button>
            <button id="shift-btn">Remove from beginning</button>`
                
    }
}


function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        emojiContainer.innerHTML += `<span>${myEmojis[i]}</span>`
    }
}

function updateEmojis(action) {
    if (emojiInput.value) {
        if (action === "push") {
            myEmojis.push(emojiInput.value)    
        } else {
            myEmojis.unshift(emojiInput.value)
        }
        emojiInput.value = ""
        renderEmojis()
        renderBtns()
        checkBtns()
        
    }
}

//Add event listeners to buttons if exist
function checkBtns() {
    
    if(myEmojis.length > 0) { 
        
    const pushBtn = document.getElementById("push-btn")
    const unshiftBtn = document.getElementById("unshift-btn")
    const popBtn = document.getElementById("pop-btn")
    const shiftBtn = document.getElementById("shift-btn")
        
     pushBtn.addEventListener("click", function(){
         
            updateEmojis("push")
            renderBtns()
            checkBtns()
        })

        unshiftBtn.addEventListener("click", function(){
            updateEmojis("unshift")
            renderBtns()
            checkBtns()
        })

        popBtn.addEventListener("click", function() {
            myEmojis.pop()
            renderEmojis()
            renderBtns()
            checkBtns()
        })

        shiftBtn.addEventListener("click", function() {
            myEmojis.shift()
            renderEmojis()
            renderBtns()
            checkBtns()
        })
    }
}