let clicky = document.getElementById('clicky')
setInterval(()=>{
    if(clicky.innerHTML == "_") clicky.innerHTML = " "
    else clicky.innerHTML = "_"
},600)