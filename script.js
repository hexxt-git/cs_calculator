let clicky = document.getElementById('clicky')
setInterval(()=>{
    if(clicky.innerHTML == "_") clicky.innerHTML = " "
    else clicky.innerHTML = "_"
},600)

let html_container = document.getElementById('container')
let global_int = 0
let bases = [
    {
        name: 'binary',
        int: 2,
        get_string: () => {
            let text = digits_to_text(base_convert(int_to_digits(global_int), 10, 2))
            console.log('base 2 set', text)
            return text
        }
    },
    {
        name: 'octal',
        int: 8,
        get_string: () => {
            let text = digits_to_text(base_convert(int_to_digits(global_int), 10, 8))
            console.log('base 8 set', text)
            return text
        }
    },
    {
        name: 'decimal',
        int: 10,
        get_string: () => {
            let text = digits_to_text(base_convert(int_to_digits(global_int), 10, 10))
            console.log('base 10 set', text)
            return text
        }
    },
    {
        name: 'hexadecimal',
        int: 16,
        get_string: () => {
            let text = digits_to_text(base_convert(int_to_digits(global_int), 10, 16))
            console.log('base 16 set', text)
            return text
        }
    },
    {
        name: 'gray_code',
        int: 0,
        get_string: () => {
            let text = digits_to_text(binary_to_gray(base_convert(int_to_digits(global_int), 10, 2)))
            console.log('gray code set', text)
            return text
        }
    }
]

html_container.innerHTML = ''
for(let base of bases){
    let child_html = `
        <div class="slot" id="${base.name}_div">
            <div>${base.name}${base.int != 0 ? ' - base_'+base.int : ''}:</div>
            <input type="text" value="${base.get_string()}" id="${base.name}_input" data-int="${base.int}"></input>
        </div>
    `
    html_container.innerHTML += child_html
}

function update_html(skip){
    for(let base of bases){
        if(base.name+'_input' == skip) continue
        document.getElementById(base.name+'_input').value = base.get_string()
        if(base.int >= 2) document.getElementById(base.name+'_input').addEventListener('input', (event)=>{
            let input = event.target.value
            let b = parseInt(event.target.getAttribute('data-int'))
            // todo : add error handeling here
            console.log('input:', input, 'base', b)
            global_int = to_decimal_int(text_to_digits(input), b)
            console.log('global int set', global_int)
            console.log('--html called--')
            update_html(event.target.id)
        })
    }
    console.log('--html updated--')
    console.log('')
}

update_html(0)
