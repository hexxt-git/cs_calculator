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
            return digits_to_text(base_convert(int_to_digits(global_int), 10, 2))
        }
    },
    {
        name: 'octal',
        int: 8,
        get_string: () => {
            return digits_to_text(base_convert(int_to_digits(global_int), 10, 8))
        }
    },
    {
        name: 'decimal',
        int: 10,
        get_string: () => {
            return digits_to_text(base_convert(int_to_digits(global_int), 10, 10))
        }
    },
    {
        name: 'hexadecimal',
        int: 16,
        get_string: () => {
            return digits_to_text(base_convert(int_to_digits(global_int), 10, 16))
        }
    },
    /*{
        name: 'gray_code',
        int: 0,
        get_string: () => {
            return 0
        }
    }*/
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
        document.getElementById(base.name+'_input').value = base.get_string()

        if(base.int != 0) document.getElementById(base.name+'_input').addEventListener('input', (event)=>{
            let input = event.target.value
            let b = parseInt(event.target.getAttribute('data-int'))
            global_int = to_decimal(text_to_digits(input), b)

            update_html(event.target)
        })
    }
}

update_html(0)
