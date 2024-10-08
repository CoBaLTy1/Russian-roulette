const gun = document.querySelector('.gun');
const spin_cylinder = document.querySelector('.button2');
const shoot_opponent = document.querySelector('.button3');
const yourself = document.querySelector('.button1');
let gamestate = 1;
let display = document.querySelector('.center_display');
let cylinder = 0;
const playagain = document.querySelector('.play_again')

function turnswitcher() {
    if (player1 === true) {
        player1 = false
        player2 = true
        console.log("Player 2's turn")
        yourself.style.gridColumn = '15/18'
        yourself.style.gridRow = '12/14'
        shoot_opponent.style.gridColumn = '3/6'
        shoot_opponent.style.gridRow = '12/14'

    }
    else if (player2 === true) {
        player2 = false
        player1 = true
        console.log("player 1's turn")
        yourself.style.gridColumn = '3/6'
        yourself.style.gridRow = '12/14'
        shoot_opponent.style.gridColumn = '15/18'
        shoot_opponent.style.gridRow = '12/14'
    }
}

function spin_the_cylinder() {
    cylinder_bullet = Math.floor(Math.random() * 6) + 1;
    console.log(cylinder_bullet)
    const spin_it_text = "Player 1 decided to spin the cylinder"
    changeText(spin_it_text)
}

function hidebuttons() {
    spin_cylinder.style.display = 'none';
    shoot_opponent.style.display = 'none';
    yourself.style.display = 'none';
    shoot_opponent1.style.display = 'none';
    yourself1.style.display = 'none';
}


function shoot_op_failed() {
    const shoot_opponent_failed_text = "Player 1 decided to shoot opponent, the gun did not go off";
    changeText1(shoot_opponent_failed_text, "22px");
}

function gunwentoff() {
    const gunwentofftext1 = "The gun went off, player 1 loses";
    changeText(gunwentofftext1, "40px");
}

function triggertyping_begin() {
    const begintext = "Gun loaded, pick a target player 1";
    changeText(begintext, "35px");
}

function shoot_op_win() {
    const shoot_op_winner = "Player 1 decided to shoot opponent, the gun went off, player 1 wins";
    changeText(shoot_op_winner, "20px");
}

function showbuttons() {
    spin_cylinder.style.display = 'block';
    shoot_opponent.style.display = 'block';
    yourself.style.display = 'block';
}

function showbuttons1() {
    spin_cylinder.style.display = 'block';
    shoot_opponent1.style.display = 'block';
    yourself1.style.display = 'block';
}

function showbutton1() {
    yourself.style.display = 'block'
}

// Update the existing changeText function to use the new typing effect and font size
function changeText(newText, fontSize = '30px') { // Added fontSize parameter
    display.style.fontSize = fontSize; // Set the font size
    changeTextWithTypingEffect(newText);
}

function changeText1(newText, fontSize = '30px') { // Added fontSize parameter
    display.style.fontSize = fontSize; // Set the font size
    changeTextWithTypingEffect1(newText);
}

let endhide = 0


function changeTextWithTypingEffect(newText,) {
    hidebuttons(); // Hide buttons at the start
    display.textContent = ''; // Clear existing text
    let index = 0;

    const typingInterval = setInterval(() => {
        if (index < newText.length) {
            display.textContent += newText.charAt(index);
            index++;
        } else {
            clearInterval(typingInterval); // Stop the typing effect
            if (endhide === 1) {
                playagain.style.display = 'block'; // Hide play again button
                hidebuttons()
            }
            else {
                showbuttons()
            }
        }
    }, 25); // Adjust typing speed here (100ms per character)
}

function changeTextWithTypingEffect1(newText,) {
    hidebuttons()
    display.textContent = ''; // Clear existing text
    let index = 0;

    const typingInterval = setInterval(() => {
        if (index < newText.length) {
            display.textContent += newText.charAt(index);
            index++;
        } else {
            clearInterval(typingInterval); // Stop the typing effect
            if (endhide == 1) {
                playagain.style.display = 'block'
                hidebuttons()

            }

                if (endhide == 0) {
                
                showbutton1()
            }

        }
    }, 25); // Adjust typing speed here (100ms per character)


}

function changeTextWithTypingEffect2(newText,) {
    hidebuttons(); // Hide buttons at the start
    display.textContent = ''; // Clear existing text
    let index = 0;

    const typingInterval = setInterval(() => {
        if (index < newText.length) {
            display.textContent += newText.charAt(index);
            index++;
        } else {
            clearInterval(typingInterval); // Stop the typing effect
            if (endhide === 1) {
                playagain.style.display = 'block'; // Hide play again button
                hidebuttons()
            }
            else {
                showbuttons()
            }
        }
    }, 25); // Adjust typing speed here (100ms per character)
}

// Initialize display and cylinder bullet

let cylinder_bullet = Math.floor(Math.random() * 6) + 1;
console.log(cylinder_bullet)
triggertyping_begin();


function handlePlayerTurn() {
    if (player1 === true) {
        console.log("Player 1's turn");

        // Call player 1's shoot function or handle their actions here
    } else if (player2 === true) {
        console.log("Player 2's turn");
        
        // Call player 2's shoot function or handle their actions here
    }
}

let player1 = true;
handlePlayerTurn()
let player2 = false;


function resetgame() { // Move resetgame to global scope
    gamestate = 1;
    console.log("Game has been reset");
    endhide = 0
    // Optionally, you can also reset other variables if needed
    cylinder = 0; // Reset cylinder
    cylinder_bullet = Math.floor(Math.random() * 6) + 1;
    console.log(cylinder_bullet)
    playagain.style.display = 'none'; // Hide play again button
    triggertyping_begin();
}

let secondshot = 0




if (player1 === true) {

function shoot() {
    if (gamestate == 1) { // Only allow shooting if the game is active
        cylinder += 1;
        if (cylinder > 6) {
            cylinder = 1; // Reset cylinder if it exceeds 6
        }

        if (cylinder == cylinder_bullet) {
            gunwentoff();
            gamestate = 0;
            endhide = 1;
        } else {
            if (secondshot == 1) { // Check if secondshot is 1 before switching players
                turnswitcher()
            }
            const newText = 'The gun did not go off';
            changeText(newText, "45px"); // Use the new changeText function
            secondshot = 0; // Reset secondshot after handling
        }

        console.log(cylinder);
    }

    // Reset player states


}
}
// Call the function to handle the next player's turn

function shoot_op() {
    if (gamestate == 1) {
        gun.style.transform = 'scaleX(-1)';
        cylinder += 1;
        if (cylinder > 6) {
            cylinder = 1; // Reset cylinder if it exceeds 6
        }
    }

    if (cylinder == cylinder_bullet) {
        gamestate = 0;
        endhide = 1;
        shoot_op_win();
        hidebuttons(); // Hide buttons after winning
    } else {
        shoot_op_failed();
        secondshot = 1; // Set secondshot to 1 to indicate Player 1's turn is over
    }

    console.log(cylinder);
}
// Check player states
if (player2 === true) {




    
    function shoot_op_failed1() {
        const shoot_opponent_failed_text = "Player 2 decided to shoot opponent, the gun did not go off";
        changeText1(shoot_opponent_failed_text, "22px");
    }
    
    function gunwentoff1() {
        const gunwentofftext1 = "The gun went off, player 2 loses";
        changeText(gunwentofftext1, "40px");
    }


    function shoot() {
        if (gamestate == 1) { // Only allow shooting if the game is active
            cylinder += 1;
            if (cylinder > 6) {
                cylinder = 1; // Reset cylinder if it exceeds 6
            }
    
            spin_cylinder.style.display = 'block';
            shoot_opponent.style.display = 'block';
    
            if (cylinder == cylinder_bullet) {
                gunwentoff();
                hide2buttons(); // Hide buttons after shooting
                gamestate = 0;
                endhide = 1
                if (gamestate == 0) {
    
                
                }
            } else {
                const newText = 'The gun did not go off';
                changeText(newText, "45px"); // Use the new changeText function
            }
    
            console.log(cylinder);
        }
    
        // Reset player states
    

    }
    
    function shoot_op() {
        if (gamestate == 1) {
            gun.style.transform = 'scaleX(-1)';
            cylinder += 1;
            if (cylinder > 6) {
                cylinder = 1; // Reset cylinder if it exceeds 6
            }
        }
    
    
    
        if (cylinder == cylinder_bullet) {
            gamestate = 0;
            endhide = 1;
            shoot_op_win()
            hidebuttons(); // Hide buttons after winning
    
            playagain.style.display = 'block'
            
        } else {
            shoot_op_failed();
        }
    
        console.log(cylinder);
    
    }


}
