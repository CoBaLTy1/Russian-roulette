let display = document.querySelector('.center_display')
let cylinder_bullet = Math.floor(Math.random() * 6) + 1;
display.textContent = 'Gun loaded, pick a target player 1'

const gun = document.querySelector('.gun')
spin_cylinder = document.querySelector('.button2')
shoot_opponent = document.querySelector('.button3')
const yourself = document.querySelector('.button1')

let cylinder = 0
let gamestate = 1
//let player1 = true
//let player2 = false


//if (player1 === true) {
//    console.log('player1')
    function shoot() {
        if (gamestate == 1) { // Only allow shooting if the game is active
            cylinder += 1
                if (cylinder > 6) {
            cylinder = 1
        }
            spin_cylinder.style.display = 'block'
            shoot_opponent.style.display = 'block'
            if (cylinder == cylinder_bullet) {
                display.textContent = "The gun went off, player 1 loses!"
                
              
                shoot_opponent.style.display = 'none';
                yourself.style.display = 'none';
                spin_cylinder.style.display = 'none';

                gamestate = 0;
            }


            console.log(cylinder);

        }
        // Reset cylinder if it exceeds 6

        player1 = false
        player2 = true
    }
    
    
    function shoot_op() {
        if (gamestate == 1) {
            gun.style.transform = 'scaleX(-1)' 
            cylinder += 1
                    if (cylinder > 6) {
                    cylinder = 1
                    }
            }

   

        spin_cylinder.style.display = 'none'
        shoot_opponent.style.display = 'none'
    
        if (cylinder == cylinder_bullet) {
            display.textContent = "The gun went off, player 1 wins!"

            spin_cylinder.style.display = 'none'
            shoot_opponent.style.display = 'none'
            yourself.style.display = 'none'

            gamestate = 0
        }

    console.log(cylinder)
    refresh()
    
    }

    function refresh() {
        spin_cylinder.style.display = 'none'
        shoot_opponent.style.display = 'none'
        player1 = false
        player2 = true

    }












if (player2 === true) {

    console.log('player2')
}


if (gamestate == 0) {
    spin_cylinder.style.display = 'none'
    shoot_opponent.style.display = 'none'
    yourself.style.display = 'none'
}
