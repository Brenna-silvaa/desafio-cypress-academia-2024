#utf-8
#language: pt

Funcionalidade: validação dados do produto 
    Cenário: Preencher os dados do produto com sucesso
        Dado que acesso o portal Tricentis
        E preencho os campos com os dados do veiculo
        E valido a insercao de dados no formulario de dados do veiculo
        E preencho os campos com os dados do segurador
        E valido a insercao de dados no formulario de dados do segurador
        Quando preencho os campos com os dados do produto
        Então valido a insercao de dados no formulario de dados do produto
