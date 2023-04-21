

$('#telefone').mask('(00) 00000-0000',{
    placeholder: '(__) _____-____'
})

$('#formcontato').validate({
    rules:{
        nome: {
            required:true
        },
        email: {
            required:true,
            email:true
        },
        mensagem: {
            required: true
        },
    },
    messages: {
        nome: 'Por favor insira seu nome'
    },
    submitHandler: function(form) {
        console.log(form)
    },
    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incorretos`)
        }
    }
})
