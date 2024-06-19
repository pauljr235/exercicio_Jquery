$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay:true,
        Infinity: true,
    })

$('#telefone').mask('(00) 00000-0000')
$('#cpf').mask('000.000.000-00')
$('#cep').mask('0000-000')
    
$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true,
        },
        telefone: {
            required: true,
        },
        cpf: {
            required: true,
        },
        endereco: {
            required: true,
        },
        cep: {
            required: true,
        }
    },

    messages: {
        nome: 'Por favor, insira o nome',
        telefone:'Por favor, insira o número do telefone',
        email: 'Por favor, insira um email válido',
        cpf: 'Por favor, insira o CPF',
        endereco: 'Por favor, insira o endereço',
        cep: 'Por favor, insira o CEP'
    },
    submitHandler: function(form){
        console.log(form);
    },
    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfInvalids();
        if(camposIncorretos){
            alert(`Existem ${camposIncorretos} campos incorretos`);
        }
    }
}) 

})