#utf-8
#language: pt

Funcionalidade: validação dados do segurador 
    Cenário: Preencher os dados do segurador com sucesso
        Dado que acesso o portal Tricentis
        E preencho os campos com os dados do veiculo
        Quando valido a insercao de dados no formulario de dados do veiculo
        E preencho os campos com os dados do segurador
        Então valido a insercao de dados no formulario de dados do segurador
