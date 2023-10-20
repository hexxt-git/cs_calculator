all_digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

function int_to_digits(int){
    let text = String(int)
    return text_to_digits(text)
}

function text_to_digits(text){
    return text.split("").map((a)=>{
        return all_digits.search(a.toUpperCase())
    }).reverse()
}

function digits_to_text(digits){
    if(digits.length == 0) return "0"
    let text = digits.map((a)=>{return all_digits[a]}).reverse().join("")
    return text
}

function to_decimal_int(digits, base){
    if(typeof(digits) != 'object') return 0
    let decimal = 0
    for(let i in digits){
        decimal += digits[i] * base ** i
    }
    //console.log('decimal success', decimal)
    return decimal
}

function base_convert(digits, base1, base2){
    let old_div = to_decimal_int(digits, base1)
    let new_digits = []
    let i = 0
    while(old_div > 0 && i < 64){
        i++
        let remainder = old_div % base2
        let div = (old_div - remainder) / base2
        old_div = div
        new_digits.push(remainder)
    }
    console.log('base', base2, 'success', new_digits)
    return new_digits
}

function binary_to_gray(digits){
    let new_digits = []
    for(let i = 0 ; i < digits.length ; i++){
        if(digits[i] == digits[i+1]) new_digits.push(0)
        else new_digits.push(1)
    }
    let text = digits_to_text(new_digits)
    console.log('binary to gray success', text)
    return new_digits
}
function gray_to_binary(digits){
    let new_digits = []
    for(let i = 0 ; i < digits.length ; i++){
        if(digits[i] == digits[i+1]) new_digits.push(0)
        else new_digits.push(1)
    }
    let text = digits_to_text(new_digits)
    console.log('gray to binary success', text)
    return new_digits
}