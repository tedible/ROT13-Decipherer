// set a string containing all alphabetical characters

function rot13(str){
    let a_to_z = "abcdefghijklmnopqrstuvwxyz".toUpperCase()
    let symbols = " 1234567890!?."

    let decoded = ""

    for (let i = 0; i < str.length; i++){
        let index = 0
        for (let j = 0; j<symbols.length; j++){
            if (str[i] == symbols[j]){
                decoded += symbols[j]
            }
        }
        for (let j = 0; j < a_to_z.length; j++){
            if (str[i] == a_to_z[j]) {
                index = j + 13
                if (index>25){
                    index -= 26
                }
                decoded += a_to_z[index]
            }
        
        }
    }
    return decoded
}
let a_to_z = "abcdefghijklmnopqrstuvwxyz".toUpperCase()
let symbols = " 1234567890!?"


let uncoded = "SERR CVMMN!"
let coded = ""

for (let i = 0; i < uncoded.length; i++){
    let index = 0
    for (let j = 0; j<symbols.length; j++){
        if (uncoded[i] == symbols[j]){
            coded += symbols[j]
        }
    }
    for (let j = 0; j < a_to_z.length; j++){
        if (uncoded[i] == a_to_z[j]) {
            index = j + 13
            if (index>25){
                index -= 26
            }
            coded += a_to_z[index]
        }
        
    }
}

let test1 = "SERR PBQR PNZC"
let test2 = "SERR YBIR?"

console.log(rot13(test1))
console.log(rot13(test2))