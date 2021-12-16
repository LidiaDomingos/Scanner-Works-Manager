# Projeto - Interface para modificação e manutenção de equipamentos. 

## Descrição do Projeto - Proposta 4

Aplicativo desenvolvido na disciplina de Desenvolvimento Colaborativo Ágil no 3°Semestre de Engenharia da Computação em parceiria com a empresa ConnectData.  
O programa desenvolvido permite gestão de modificações e manutenção em peças, 
equipamentos e sistemas construtivos, possibilitando também a visualização de um hitórico de modificações realizadas. 
 
## Integrantes:

- Letícia Côelho
- Lídia Alves
- Lorran Caetano  
- Nívea de Abreu

## Status do Projeto: Concluído:heavy_check_mark:

## Features realizadas

-  Detecção de QRcode 
-  Interface para adicionar ou retirar quantidades e efetuar observações 
-  Registro de alterações no banco de dados
-  Verificação da lista de alterações pelo app.

*Para ter acesso completo as funcionalidades deste projeto, realizar:*

> pip install npm
> Instalar aplicativo Expo Go. 

## :warning: Para execução correta do programa siga o tutorial abaixo: :warning:

*Para o funcionamento do programa basta realizar o clone do repositório em um terminal, entrar na pasta do repositorio abrir o terminal e realizar o descrito a seguir*

**Funcionamento Interface (Frontend):**

1.  Caso seja o primeiro uso:

```bash

cd Frontend

npm install

npm start

```

2. Caso não seja o primeiro uso

```bash

cd Frontend

npm start

```

Após o descrito, uma janela do seu navegador padrão abrirá com o Metro Bundler.
No canto inferior esquerdo haverá um QRCode que pode ser scaneado pelo aplicativo do Expo Go previamente instalado em seu dispositivo móvel. Essa conexão poderá ser realizada via LAN (necessário está na mesma rede de wifi que seu dispositivo móvel) ou via TUNEL.

:warning: Antes de realizar essa conexão é necessário configurar o banco de dados :warning:

**Configurando banco de dados e conexão com a interface**

1. Inicializando banco de dados

- Abrir na IDE Eclipse (ou outra semelhante e previamente configurada) a pasta Backend contida no repositorio clonado.

- Rodar a pasta Backend/src.

- Pegar o link obtido no console

2. Conexão Frontend-Backend

- Copiar o valor do link obtido anteriormente e colar na chave "url" presente na pasta Frontend/settings.json. 
(Caso haja um link no local o mesmo deve ser apagado e esse colado no lugar)

- Agora o aplicativo deve está funcional ! Entre no aplcativo Expo Go em seu dispositivo móvel scanei o QRCode descrito anterioremente na janela aberta em seu navegador pelo Metro Bundler e mãos a obra!

## Alguns fluxos possíveis de serem realizados

- Scaneando o QRCode e realizando alguma alteração no produto Scaneado: (Colocar link)
- Verificando mais iformações de algum produto no histórico: (Colocar link)


<div style="text-align:center"><img src="Frontend/assets/marca.png" width=150 style="float: center; margin: 0px 0px 10px 10px"></div>

@2021, Insper, Terceiro Semestre, Engenharia da Computação.

