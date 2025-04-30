const form = document.querySelector('form')
const entrando = document.querySelectorAll('form input')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const ano = parseInt(document.querySelector('#year').value)
    const mes = parseInt(document.querySelector('#month').value)
    const dia = parseInt(document.querySelector('#day').value)
    const year = document.querySelector('.year')
    const month = document.querySelector('.month')
    const day = document.querySelector('.day')
    const erro = document.querySelectorAll('.field-required')
    const validade = document.querySelectorAll('.valid-info')

    const data = new Date()
    const dia_atual = data.getDate()
    const mes_atual = data.getMonth()
    const ano_atual = data.getFullYear()
    
    let info_dia = dia_atual - dia
    let info_mes = mes_atual - mes
    let info_ano = ano_atual - ano

    // year.textContent = `${info_ano}`
    // month.textContent = `${info_mes}`
    // day.textContent = `${info_dia}`

    if(info_dia <0){
        const mespassado = new Date(data.getFullYear(), data.getMonth(), 0).getDate()
        info_dia = mespassado + info_dia
        info_mes--
    }

    if(info_mes <0){
        info_ano--
        info_mes = info_mes + 12
    }

    const esconder_erro = () => {
        erro.forEach((element) => {
            element.style.display = 'none'
        })
    } 

    const validar_mensagem = () =>{
        let a = true
         entrando.forEach((entrada) => {
            if(entrada.value === ''){
                erro.forEach((element) => {
                    element.style.display = 'block'
                })
                    a = false
            }
            entrada.addEventListener('input', () => {
                esconder_erro()
            })
         }) 
         return a 
    }

    const data_valida = () => {
        validade.forEach((elemento) => {
            elemento.style.display = 'none'
        })
    }  
    
    const datamsg = () => {
       let b = true

       if(dia < 1 || dia>31){
        validade[0].style.display = 'block'
        b = false
       } 

       if(mes < 1 || mes > 12){
        validade[1].style.display = 'block'
        b = false
       }

       if(ano < 1915 || ano > ano_atual){
        validade[2].style.display = 'block'
        b = false
       }

       entrando.forEach((campo) => {
        campo.addEventListener('input', () =>{
            data_valida()
        })
       })

       return b
    }


    if(validar_mensagem() && datamsg()){
        form.addEventListener('submit', (event) => {
            event.preventDefault()
        })
        year.textContent = `${info_ano}`
        month.textContent = `${info_mes}`
        day.textContent = `${info_dia}`

    }
})

