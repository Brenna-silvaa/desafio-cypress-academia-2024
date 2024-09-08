#utf-8
#language: pt

Funcionalidade: validação escolha do preço 
    Cenário: escolher o campo do preço com sucesso
        Dado que acesso o portal Tricentis
        E preencho os campos com os dados do veiculo
        E valido a insercao de dados no formulario de dados do veiculo
        E preencho os campos com os dados do segurador
        E valido a insercao de dados no formulario de dados do segurador
        E preencho os campos com os dados do produto
        E valido a insercao de dados no formulario de dados do produto
        Quando seleciono a opçao de preço escolhido
        Então valido o campo de opçao de preço
