all_digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"


function int_to_digits(int){
    let text = ''+int
    return text.split("").map((a)=>{
        return all_digits.search(a.toUpperCase())
    }).reverse()
}
function text_to_digits(text){
    return text.split("").map((a)=>{
        return all_digits.search(a.toUpperCase())
    }).reverse()
}
function digits_to_text(digits){
    if(digits.length == 0) return "0"
    let text = digits.map((a)=>{return all_digits[a]}).join("")
    return text
}
function to_decimal(digits, base){
    if(typeof(digits) != 'object') return 0
    let decimal = 0
    for(let i in digits){
        decimal += digits[i] * base ** i
    }
    return decimal
}
function base_convert(digits, base1, base2){
    let old_div = to_decimal(digits, base1)
    let new_digits = []
    let i = 0
    while(old_div > 0 && i < 64){
        i++
        let remainder = old_div % base2
        let div = (old_div - remainder) / base2
        old_div = div
        new_digits.push(remainder)
    }
    return new_digits.reverse()
}