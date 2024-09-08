#utf-8
#language: pt


Funcionalidade: validação dados do veiculo 
    Cenário: Preencher os dados do veiculo de forma incorreta
        Dado que acesso o portal Tricentis
        Quando preencho os campos com os dados do veiculo de forma invalida
        Então uma mensagem de erro deve ser exibida na tela 'Must be a number between 1 and 2000'