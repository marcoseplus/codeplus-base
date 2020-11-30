# Documentação Pickup Store Vtex

Pickup store é um módulo da Vtex que gerencia a retirada e o estoque das lojas físicas de acordo com os pedidos na plataforma Vtex.
Os maiores beneficiados deste modulo são lojistas que possuem e disponibilizam retirada nas lojas físicas, pois o Pickup store apresenta em tempo real as lojas mais próximas em um raio de até 50km. Com ele é possível gerenciar estoque para cada loja e apresentar prazos personalizados dependendo da logística. Por exemplo: caso o produto esteja disponível em outra loja, terá um tempo maior para retirada do que comparado a uma loja que já tenha o produto disponível.
Atualmente é apresentado na página do Checkout e é possível pesquisar a partir da sua geolocalização ou de seu CEP, o controle para a exibição do modulo na página de produto está defasada de acordo com a Vtex.  

## Configuração:

Para habilitar a Pickup store, é necessário cadastrar em " **Estoque & entrega > Pontos de retirada** " e  cadastre as lojas físicas do cliente.  

![](https://i.ibb.co/MNjv7LV/print01.jpg)  

Após as lojas serem cadastradas, é necessário ir em " **Estoque & entrega > Painéis** " e cadastrar um transportadora para cada loja caso queira gerenciar o estoque de cada uma delas, ou caso queira administrar apenas as retiradas, faça o cadastro de apenas uma transportadora como foi feito em nosso exemplo:  

![](https://i.ibb.co/3yZCsgY/print02.jpg)  

Faça o cadastro da transportadora " **Retirada** " preenchendo o formulário, mas se atente, pois no campo  Pontos de retirada, você devera selecionar no campo de seleção abaixo os pontos de retirada.  

![](https://i.ibb.co/XpwJV8x/print03.jpg)  

**Obs:**  É aconselhável que crie uma tabela de frete grátis para inserir no cadastro da transportadora e ter a retirada em loja com valor 0, para isso, basta cadastrar uma planilha contendo um range de CEP a partir de 00000-00 - 99999-999 com o valor 0.  

Após a conclusão do cadastro de transportadora, é necessário que vincule a mesma a uma doca  

![](https://i.ibb.co/wQyhvdq/print04.jpg)  

**Obs:** Para criar uma regra de frete especifica para cada ponto de retirada, é necessário cadastra-los separadamente e vincular a docas e estoques específicos para cada.

Para o mapa ser renderizado na página, é necessário inserir a chave de API do google maps em " **Estoque & entrega > Configurações** " no campo " **Google Geolocation API** ".  
https://developers.google.com/maps/documentation/javascript/get-api-key  

![](https://i.ibb.co/kQKfW19/print05.jpg)  

Com isso, basta configurar o checkout para fazer uso do pickup store.Para isso vamos até " **Checkout > Checkout** " e habilitar a versão 6  

![](https://i.ibb.co/Wcyn4DP/print06.jpg)  

E aplicar a mesma chave de API do google maps que adicionamos em " **Estoque & entrega > Configurações** ", no campo logo abaixo " **Google Maps API Key** "Com isso o Pickup store da Vtex deverá estar sendo renderizado no Checkout  

Abaixo listamos todas as documentações necessárias para o Pickup store:  


**Configurar a retirada na loja (Pickup Store):**
https://help.vtex.com/tutorial/como-configurar-a-retirada-na-loja-pickup-store?locale=pt


**Configurar Pontos de Retirada (Pickup Points):**
https://help.vtex.com/tutorial/configurar-pontos-de-retirada-pickup-points?locale=pt


**Configuração API KEY Google maps:**
https://developers.google.com/maps/documentation/javascript/get-api-key


**Configurar geolocalização no checkout**
https://help.vtex.com/tutorial/geolocalizacao-no-checkout?locale=pt


**Video de como configurar o Logistics:**
https://www.youtube.com/watch?v=n0rNvf2umxo