addEventListener("DOMContentLoaded",()=>{
    // const num = document.getElementById("#calc-display")
    const display = document.getElementById("display")
    const tecNum = [...document.querySelectorAll(".num")]
    const resultado = document.getElementById("teclaIgual")
    const tecOp = [...document.querySelectorAll(".op")]
    let verificarTecla = ""
    
    let sinal = false
    display.innerHTML = "0"
    tecOp.forEach((el) => {
        el.addEventListener("click",(evt)=>{
            if(evt.target.innerHTML == "C"){
                display.innerHTML = "0"
                console.log("Entrou!!")
            }else if(sinal == false){
                if(evt.target.innerHTML == "x"){
                    display.innerHTML += "*"
                    sinal = true
                }else{
                    sinal = true
                    display.innerHTML += evt.target.innerHTML
                }
                console.log(`O sinal == ${sinal}`)
            }
        })
    })
    tecNum.forEach((el) => {
        el.addEventListener("click",(evt)=>{
            if (display.innerHTML == "0") {
                display.innerHTML = ""
                display.innerHTML = evt.target.innerHTML
            }else{
                if (display.innerHTML != "0") {
                    display.innerHTML += evt.target.innerHTML
                    sinal = false
                }
            }
            if(sinal == true) {
                display.innerHTML += evt.target.innerHTML
    
                sinal = false
            }
            // display.innerHTML = evt.target.innerHTML
        })
    
    });
    
    resultado.addEventListener("click",(evt)=>{
        display.innerHTML = eval(display.innerHTML)
    })
    
    // tec7.addEventListener("click",(evt)=>{
    //     console.log("Pegou!!!")
    // })
    
    
    
    })