const gun = document.querySelector('.gun');
const spin_cylinder = document.querySelector('.button2');
const shoot_opponent = document.querySelector('.button3');
const yourself = document.querySelector('.button1');
let gamestate = 1;
let display = document.querySelector('.center_display');
let cylinder = 0;
const playagain = document.querySelector('.play_again')


let firstanimation = true
gun.style.transform = 'rotate(270deg)';



zoomInTop(gun);

function flipAnimation(target) {
    anime({
      targets: target,
      scaleX: [-1, 1],
      duration: 1000,
      easing: 'easeInOutQuad'
    });
  }
  
  function rotateAndFlipAnimation(target) {
    anime({
      targets: target,
      rotate: [270, 360],
      scaleX: [1, -1],
      duration: 1000,
      easing: 'easeInOutQuad',
      // Perform rotation first, then flip
      delay: anime.stagger(500)
    });
  }

function nextturn() {
    if (player1 === true) {
        const nextturn_text = "The gun did not go off player 2's turn"
        changeText(nextturn_text, "30px");
    }
    else if (player2 === true) {
        const nextturn_text = "The gun did not go off player 1's turn"
        changeText(nextturn_text, "30px");
    }
}
function shootfail() {
    if (player1 === true) {
        const shoot_fail_text = "the gun did not go off"
        changeText(shoot_fail_text, "30px");
    }
    else if (player2 === true) {
        const shoot_fail_text = "the gun did not go off" 
        changeText(shoot_fail_text, "30px");
    }
}

let spinque = false 
function turnswitcher() {
    if (player1 === true) {
        player1 = false
        player2 = true
        console.log("Player 2's turn")
        yourself.style.gridColumn = '15/18'
        yourself.style.gridRow = '12/14'
        shoot_opponent.style.gridColumn = '3/6'
        shoot_opponent.style.gridRow = '12/14'
        spinque = true

 

    }
    else if (player2 === true) {
        player2 = false
        player1 = true
        console.log("player 1's turn")
        yourself.style.gridColumn = '3/6'
        yourself.style.gridRow = '12/14'
        shoot_opponent.style.gridColumn = '15/18'
        shoot_opponent.style.gridRow = '12/14'
        spinque = true
        gun.style.gridColumn = '8/11'


    }
}

    let spincylinderdone = false

function spin_the_cylinder() {
    spincylinderdone = true
    cylinder_bullet = Math.floor(Math.random() * 6) + 1;
    console.log(cylinder_bullet)
    if (player1 === true) {
    const spin_it_text = "Player 1 decided to spin the cylinder"
    changeText(spin_it_text)
    }
    else if (player2 === true) {
    const spin_it_text = "Player 2 decided to spin the cylinder"
    changeText(spin_it_text)
    }
 
}

 function hidebuttons() {
    spin_cylinder.style.display = 'none';
    shoot_opponent.style.display = 'none';
    yourself.style.display = 'none';
}


function shoot_op_failed() {
    if (player1 === true) {
    const shoot_opponent_failed_text = "Player 1 decided to shoot opponent, the gun did not go off";
    changeText1(shoot_opponent_failed_text, "22px");
    }
    if (player2 === true) {
    const shoot_opponent_failed_text = "Player 2 decided to shoot opponent, the gun did not go off";
    changeText1(shoot_opponent_failed_text, "22px");
    }

}

function gunwentoff() {
    if (player1 === true) {
    const gunwentofftext1 = "The gun went off, player 1 loses";
    changeText(gunwentofftext1, "40px");
    }

    if (player2 === true) {
    const gunwentofftext2 = "The gun went off, player 2 loses";
    changeText(gunwentofftext2, "40px");
}
}

function triggertyping_begin() {
    const begintext = "Gun loaded, player 1 pick a target";
    changeText(begintext, "35px");
}

function shoot_op_win() {
    if (player1 === true) {
    const shoot_op_winner = "Player 1 decided to shoot opponent, the gun went off, player 1 wins";
    changeText(shoot_op_winner, "20px");
    }

    if (player2 === true) {
    const shoot_op_winner = "Player 2 decided to shoot opponent, the gun went off, player 2 wins";
    changeText(shoot_op_winner, "20px");
    
}
}

function showbuttons() {
    spin_cylinder.style.display = 'block';
    shoot_opponent.style.display = 'block';
    yourself.style.display = 'block';
}

function showbuttons1() {
    spin_cylinder.style.display = 'block';
    yourself1.style.display = 'block';
}

function showbutton1() {
    yourself.style.display = 'block'
}

function showbuttonsspin() {
    yourself.style.display = 'block'
    shoot_opponent.style.display = 'block'
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

                // ...
                if (endhide === 1) {
                    playagain.style.display = 'block';
                    hidebuttons(); // Hide all buttons, including "Yourself" and "Shoot Opponent"
                } else if (spincylinderdone === true) {
                    showbuttonsspin();
                    if (spinque === true) {
                        showbuttons();
                        spinque = false;
                    }
                } else if (spinque === true) {
                    showbuttons();
                    spinque = false;
                } else {
                    showbuttons();
                }
                // ...

        }

    }, 25); // Adjust typing speed here (100ms per character)
}




function changeTextWithTypingEffect1(newText) {
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

function changeTextWithTypingEffect1(newText1) {
    hidebuttons()
    display.textContent = ''; // Clear existing text
    let index = 0;

    const typingInterval = setInterval(() => {
        if (index < newText1.length) {
            display.textContent += newText1.charAt(index);
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
    player1 = true;
    player2 = false;
    spincylinderdone = false;
    gamestate = 1;
    console.log("Game has been reset");
    endhide = 0;
    // Optionally, you can also reset other variables if needed
    cylinder = 0; // Reset cylinder
    cylinder_bullet = Math.floor(Math.random() * 6) + 1;
    console.log(cylinder_bullet);
    playagain.style.display = 'none'; // Hide play again button
    spinque = true;
    spin_cylinder.style.display = 'block';
    triggertyping_begin();
    yourself.style.gridColumn = '3/6';
    yourself.style.gridRow = '12/14';
    shoot_opponent.style.gridColumn = '15/18';
    shoot_opponent.style.gridRow = '12/14';
    gun.style.gridColumn = '8/11';

    gun.style.transform = 'rotate(270deg)';



    zoomInTop(gun)

}


let secondshot = 0




if (player1 === true) {

function shoot() {
    if (gamestate == 1) { // Only allow shooting if the game is active
        cylinder += 1;
        if (firstanimation === true) {
            rotateAndFlipAnimation(gun)
        }

        if (cylinder > 6) {
            cylinder = 1; // Reset cylinder if it exceeds 6
        }


        if (cylinder == cylinder_bullet) {
            gunwentoff();
            gamestate = 0;
            endhide = 1;
        } else if (secondshot == 1) { // Check if secondshot is 1 before switching players
                nextturn()
                turnswitcher()

               



                secondshot = 0;
        }

            
            else {
                shootfail();

            }

        }

        console.log(cylinder);
    }

    // Reset player states


}

// Call the function to handle the next player's turn

function shoot_op() {
    if (gamestate == 1) {
        cylinder += 1;

        if (cylinder > 6) {
            cylinder = 1; // Reset cylinder if it exceeds 6
        }
    }

    if (cylinder == cylinder_bullet) {
        gamestate = 0;
        endhide = 1;
        shoot_op_win();

    } else {
        shoot_op_failed();
        secondshot = 1; // Set secondshot to 1 to indicate Player 1's turn is over
    }

    console.log(cylinder);
}



// Check player states
if (player2 === true) {



    


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

                gamestate = 0;
                endhide = 1
            } else if (secondshot == 1) { // Check if secondshot is 1 before switching players
                    nextturn()
                    turnswitcher()
                    secondshot = 0; // Reset secondshot after handling
                }
                else {
                    shootfail();
                }


    
            console.log(cylinder);
        }
    
        // Reset player states
    

    }
    
    function shoot_op() {
        if (gamestate == 1) {
            cylinder += 1;
            if (cylinder > 6) {
                cylinder = 1; // Reset cylinder if it exceeds 6
            }
        }
    
    
    
        if (cylinder == cylinder_bullet) {
            gamestate = 0;
            endhide = 1;
            shoot_op_win()

    
            playagain.style.display = 'block'
            
        } else {
            shoot_op_failed();
            secondshot = 1; // Set secondshot to 1 to indicate Player 1's turn is over
        }
    
        console.log(cylinder);

    }


}

function zoomInTop(element) {
    let scale = 10;
    let opacity = 0;
    const duration = 500; // Animation duration in milliseconds
    const startTime = performance.now();

    function animate(time) {
        gun.style.transform = 'rotate(270deg)';
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1); // Ensure progress does not exceed 1

        // Update scale and opacity based on progress
        scale = 10 - (9 * progress); // Scale from 10 to 1
        opacity = progress; // Opacity from 0 to 1

        // Apply the transformations
        element.style.transform = `scale(${scale}) translateY(-50%) rotate(270deg)`; // Added rotation
        element.style.opacity = opacity;

        if (progress < 1) {
            requestAnimationFrame(animate); // Continue the animation
        }
    }

    requestAnimationFrame(animate); // Start the animation
}






