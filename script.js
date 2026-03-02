// Зміна теми
const themeSwitcher = document.getElementById("theme-switcher")
const body = document.body


let savedTheme = localStorage.getItem("theme")


if (savedTheme === "light"){
    body.classList.add("light-theme")
}

themeSwitcher.addEventListener("click", function(){
   
    body.classList.toggle("light-theme")
    
    
    if(body.classList.contains("light-theme")){
        localStorage.setItem("theme", "light")
    } else{
        localStorage.setItem("theme", "dark")
    }
})


const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const genBtn = document.getElementById('gen-btn')
const passElLeft = document.getElementById('pass-el-left')
const passElRight = document.getElementById('pass-el-right')
const passLengthEl = document.getElementById('pass-length-el')

passLengthEl.addEventListener("input", () => lengthControl())

genBtn.addEventListener("click", () => {
    renderPassword(passElLeft)
    renderPassword(passElRight)
})



function renderPassword(targetEl) {

    // Перевірка на те чи введене число більше за 6
    // Якщо так то встановлюємо 6
    if (passLengthEl.value < 6) {
        passLengthEl.value = 6
    }

    // Записуємо довжину пароля з поля вводу у змінну length
    const length = Number(passLengthEl.value)

    // Створюємо порожню змінну pass в яку ми будемо записувати символи для пароля
    let pass = ""

    // Цикл який буде генерувати пароль
    for (let i = 0; i < length; i++) {
        // Генеруємо випадкове число
        let randNum = Math.floor(Math.random() * characters.length)
        // Додаємо символ до пароля
        pass += characters[randNum]
    }

    targetEl.textContent = pass
}


function lengthControl() {
    let length = Number(passLengthEl.value)

    if (length > 32) {
        passLengthEl.value = 32
    } else if (length < 0) {
        passLengthEl.value = 0
    }
}