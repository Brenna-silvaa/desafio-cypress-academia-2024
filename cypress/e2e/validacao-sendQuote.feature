#utf-8
#language: pt

Funcionalidade: validação dados do envio da cotacao 
    Cenário: Preencher os dados para o envio da cotacao com sucesso
        Dado que acesso o portal Tricentis
        E preencho os campos com os dados do veiculo
        E valido a insercao de dados no formulario de dados do veiculo
        E preencho os campos com os dados do segurador
        E valido a insercao de dados no formulario de dados do segurador
        E preencho os campos com os dados do produto
        E valido a insercao de dados no formulario de dados do produto
        Quando seleciono a opçao de preço escolhido
        E valido o campo de opçao de preço
        Então preencho os campos com os dados obrigatorio para o envio da cotacao
