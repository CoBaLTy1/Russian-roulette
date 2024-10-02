let display = document.querySelector('.center_display')
let cylinder_bullet = Math.floor(Math.random() * 7);
display.textContent = 'Gun loaded, pick a target player 1'

const gun = document.querySelector('.gun')
const spin_cylinder = document.querySelector('.button2')
const shoot_opponent = document.querySelector('.button3')
const yourself = document.querySelector('.button1')

let cylinder = 0
let gamestate = 1
let player1 = true
let player2 = false
let onebutton = 0

if (player1 === true) {

function shoot() {
    if (gamestate == 1) { // Only allow shooting if the game is active
        cylinder += 1
        if (cylinder == cylinder_bullet) {
            display.textContent = "The gun went off, player 1 loses!"
            gamestate = 0
            if (gamestate == 0) {
                spin_cylinder.style.display = 'none'
                shoot_opponent.style.display = 'none'
                yourself.style.display = 'none'
            
}

        } else if (cylinder > 6) {
            cylinder = 1
        }
        console.log(cylinder)
        player1 = false
        player2 = true
    }
}


function shoot_op() {
    gun.style.transform = 'scaleX(-1)'
    cylinder += 1
    spin_cylinder.style.display = 'none'
    shoot_opponent.style.display = 'none'

    if (cylinder == cylinder_bullet) {
        display.textContent = "The gun went off, player 1 wins!"
        gamestate = 0
        if (gamestate == 0) {
            spin_cylinder.style.display = 'none'
            shoot_opponent.style.display = 'none'
            yourself.style.display = 'none'
    }
} else if (cylinder > 6) {
    cylinder = 1
}
console.log(cylinder)
onebutton = 1

}

function refresh() {
    spin_cylinder.style.display = 'block'
    shoot_opponent.style.display = 'block'
    if (onebutton == 1) {
        player1 = false
        player2 = true
    }

}
}





if (player2 === true) {
    function shoot() {
        if (gamestate == 1) { // Only allow shooting if the game is active
            cylinder += 1
            if (cylinder == cylinder_bullet) {
                display.textContent = "The gun went off, player 1 loses!"
                gamestate = 0
                if (gamestate == 0) {
                    spin_cylinder.style.display = 'none'
                    shoot_opponent.style.display = 'none'
                    yourself.style.display = 'none'
                
    }
    
            } else if (cylinder > 6) {
                cylinder = 1
            }
            console.log(cylinder)
        }
    }
    
    
    function shoot_op() {
        gun.style.transform = 'scaleX(-1)'
        cylinder += 1
        spin_cylinder.style.display = 'none'
        shoot_opponent.style.display = 'none'
    
        if (cylinder == cylinder_bullet) {
            display.textContent = "The gun went off, player 1 wins!"
            gamestate = 0
            if (gamestate == 0) {
                spin_cylinder.style.display = 'none'
                shoot_opponent.style.display = 'none'
                yourself.style.display = 'none'
        }
    } else if (cylinder > 6) {
        cylinder = 1
    }
    console.log(cylinder)
    
    }
    
    function refresh() {
        spin_cylinder.style.display = 'block'
        shoot_opponent.style.display = 'block'

    }
    }

