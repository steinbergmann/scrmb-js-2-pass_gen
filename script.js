const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?","/"];

let genBtn = document.getElementById('gen-btn')
let passElLeft = document.getElementById('pass-el-left')
let passElRight = document.getElementById('pass-el-right')


function randomPassGen() {

    passElLeft.innerText = ""
    passElRight.innerText = ""

    for (let i = 0; i < 15; i++) {
        let randNum = Math.floor(Math.random() * characters.length)
        passElLeft.textContent += characters[randNum]
    }

    for (let i = 0; i < 15; i++) {
        let randNum = Math.floor(Math.random() * characters.length)
        passElRight.textContent += characters[randNum]
    }

}