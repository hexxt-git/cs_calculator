all_digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"

class number{
    constructor(digits, base){
        this.error = false

        if(typeof(digits) != "string" || typeof(base) != "number") this.error = true
        this.digits = digits.split("").map((a)=>{
            if(all_digits.search(a.toUpperCase()) == -1) this.error = true
            return all_digits.search(a.toUpperCase())
        }).reverse();
        for(let i in this.digits){
            if(this.digits[i] >= base){
                this.digits = [0]
                this.error = true
                break
            }
        }

        if(base < 2) this.error = true
        this.base = base;
    }
    get_string(){
        if(this.digits.length == 0) return "0"
        let string = this.digits.map((a)=>{return all_digits[a]}).reverse().join("")
        return string
    }
    get_decimal_int(){
        let decimal = 0
        for(let i in this.digits){
            decimal += this.digits[i] * this.base ** i
        }
        return decimal
    }
    convert_base(new_base){
        let old_div = this.get_decimal_int()
        let new_digits = []
        let i = 0
        while(old_div > 0 && i < 64){
            i++
            let remainder = old_div % new_base
            let div = (old_div - remainder) / new_base
            old_div = div
            new_digits.push(remainder)
        }

        this.base = new_base
        this.digits = new_digits
        return this
    }
}

