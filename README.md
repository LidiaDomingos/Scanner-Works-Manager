# Projeto - Interface para modificação e manutenção de equipamentos. 

## Descrição do Projeto - Proposta 4

<p align="justify">
Aplicativo desenvolvido na disciplina de Desenvolvimento Colaborativo Ágil no 3° Semestre de Engenharia da Computação em parceria com a empresa ConnectData.  
</p>
<p align="justify">
O aplicativo produzido tem como objetivo monitorar a situação de materiais de forma otimizada, ou seja, ter uma gestão de modificações e manutenção de peças, equipamentos e sistemas construtivos nos locais de construções civis.
</p>
<p align="justify">
Esse monitoramento é feito por meio do uso de identificadores únicos que trazem do banco de dados as informações do material, sendo possível alterar alguns dados, como a quantidade e afins, caso seja necessário. Tal identificação pode ser feita com a leitura do QR Code disponível nos objetos que devem ser monitorados. Além disso, é também feito o uso de um registro de histórico para melhor visualização da movimentação que está ocorrendo no local da obra.
</p>

## Integrantes:

- Letícia Côelho
- Lídia Alves
- Lorran Caetano  
- Nívea de Abreu

## Status do Projeto: Concluído:heavy_check_mark:

## Features realizadas

-  Detecção de QRcode.
-  Interface para adicionar ou retirar quantidades e efetuar observações. 
-  Registro de alterações no banco de dados.
-  Verificação da lista de alterações pelo app.

*Para ter acesso completo as funcionalidades deste projeto, realizar:*

> pip install npm

> Instalar aplicativo Expo Go. 

Para instalar Expo Go:

<div align="center">
<p> <a href = "https://play.google.com/store/apps/details?id=host.exp.exponent"> Expo Go na Play Store </a> </p>
<p> <a href = "https://apps.apple.com/br/app/expo-go/id982107779"> Expo Go na Apple Store </a> </p>
</div>

## :warning: Para execução correta do programa siga o tutorial abaixo: :warning:

*Para o funcionamento do programa basta realizar o clone do repositório em um terminal, entrar na pasta do repósitorio, abrir o terminal e realizar o descrito a seguir*

- **Funcionamento Interface(Frontend):**

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
<p align="justify">
No canto inferior esquerdo haverá um QRCode que pode ser scaneado pelo aplicativo do Expo Go previamente instalado em seu dispositivo móvel. Essa conexão poderá ser realizada via LAN (necessário estar na mesma rede de wi-fi que seu dispositivo móvel) ou via TUNEL.
</p>
:warning: Antes de realizar essa conexão, é necessário configurar o banco de dados :warning:

- **Configurando banco de dados e conexão com a interface**

1. Criação dos Bancos de dados

Para o funcionamento, é necessário ter uma conta Google e criar dois bancos de dados Firestore como mostrado no seguinte tutorial: <a href = "https://ensino.hashi.pro.br/desagil/tutorial/banco/criacao.html"> Criação de Banco de Dados </a>. Os nomes das chaves devem ser, necessariamente, firestore.json e firestore_test.json e salvas dentro da pasta Backend.

2. Inicializando banco de dados

Abrir na IDE Eclipse (ou outra semelhante e previamente configurada) a pasta Backend contida no repositorio clonado.
 
Rodar a pasta Backend/src como Java Application.

Pegar o link obtido no console.

3. Conexão Frontend-Backend
<p align="justify">
Copiar o valor do link obtido anteriormente e colar na chave "url" presente na pasta Frontend/settings.json. Caso haja um link no local o mesmo deve ser apagado e esse colado no lugar.
</p>
<p align = "justify">
Tendo feito os procedimentos descritos, é preciso ir na aba chamada Projecs, disponível na parte inferior esquerda da interface do Expo em seu dispositivo móvel, clicar no Scan QR Code e scanear o QR Code que foi disponibilizado pela janela do Metro Bundle em seu navegador, como descrito antes.
</p>
<p align="justify">
Agora o aplicativo deve estar funcional! Entre no aplicativo Expo Go em seu dispositivo móvel, faça o scan do QRCode como descrito e mãos a obra!
</p>

## Alguns fluxos possíveis de serem realizados

- <p> <a href = "https://www.youtube.com/watch?v=JPmV8nfNpAU&list=PL5_V9v2YDb3F6leLQwSuE0Havvg9nOwHw&index=1"> Visualizar informações do produto a partir do Scan </a> </p>
- <p> <a href = "https://www.youtube.com/watch?v=OxjqxLM7xMY&list=PL5_V9v2YDb3F6leLQwSuE0Havvg9nOwHw&index=2"> Visualizar informações do produto a partir do Input </a> </p>
- <p> <a href = "https://www.youtube.com/watch?v=0RfOTtSYvik&list=PL5_V9v2YDb3F6leLQwSuE0Havvg9nOwHw&index=3"> Visualizar e modificar algumas informações do produto a partir do Scan </a> </p>
- <p> <a href = "https://www.youtube.com/watch?v=YYfyCDZRBJ8&list=PL5_V9v2YDb3F6leLQwSuE0Havvg9nOwHw&index=4"> Visualizar e modificar algumas informações do produto a partir do histórico </a> </p>
- <p> <a href = "https://www.youtube.com/watch?v=hQuUxk2SeJM&list=PL5_V9v2YDb3F6leLQwSuE0Havvg9nOwHw&index=5"> Retirar a movimentação do produto </a> </p>
- <p> <a href = "https://www.youtube.com/watch?v=jKfXWzaf2wY&list=PL5_V9v2YDb3F6leLQwSuE0Havvg9nOwHw&index=6"> Apagar um produto </a> </p>

<div>
<h3>Foi feita uma playlist para melhor visualização:
<a href="https://www.youtube.com/watch?v=JPmV8nfNpAU&list=PL5_V9v2YDb3F6leLQwSuE0Havvg9nOwHw"> Playlist </a>
 </h3>
</div>
<p align="center"><img src="readmeLogo.PNG" width=150 style="float: center; margin: 0px 0px 10px 10px"></p>

@2021, Insper. Terceiro Semestre, Engenharia da Computação.

