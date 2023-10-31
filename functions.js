all_digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ."

let pr = 8 // precision

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
function fraction_to_decimal_int(digits, base){
    if(typeof(digits) != 'object') return 0
    let decimal = 0
    for(let i in digits){
        decimal += digits[i] * base ** (-i-1)
    }
    //console.log('decimal success', decimal)
    return Math.floor(decimal * 10**pr) / 10**pr
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

function int_to_base_n(int, base){
    // natural part
    old_div = Math.floor(int)
    let new_digits = []
    let i = 0
    while(old_div > 0 && i < 64){
        i++
        let remainder = old_div % base
        let div = (old_div - remainder) / base
        old_div = div
        new_digits.push(remainder)
    }
    let fraction = int - Math.floor(int)
    fraction = Math.round(fraction * 10**pr) / 10**pr
    if(fraction != 0) new_digits.unshift(36)
    let fraction_digits = []
    let j = 0
    while(fraction > 0 && j < 6){
        fraction *= base
        fraction_digits.unshift(Math.floor(fraction))
        fraction -= Math.floor(fraction)
        j++
    }
    new_digits.unshift(...fraction_digits)
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

function decimal_to_bcd(digits){ // binary coded decimal
    let new_digits = []
    for(let i = 0 ; i < digits.length ; i++){
        let digit = base_convert([digits[i]], 10, 2)
        digit = [
            digit[0] || 0,
            digit[1] || 0,
            digit[2] || 0,
            digit[3] || 0,
        ]
        new_digits.push(...digit)
    }
    let text = digits_to_text(new_digits)
    console.log('decimal to binary coded decimal success', text)
    return new_digits
}
function bcd_to_decimal(digits){
    let new_digits = []
    for(let i = 0 ; i < digits.length ; i += 4){
        let digit = [digits[i+3], digits[i+2], digits[i+1], digits[i+0]]
        digit = base_convert(digit, 2, 10)
        if(digit.length == 0) digit = [0]
        new_digits.unshift(...digit)
    }
    let text = digits_to_text(new_digits)
    console.log('binary coded decimal to decimal success', text)
    return new_digits
}