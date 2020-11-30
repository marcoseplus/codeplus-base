
## Ambiente de Gerênciamento
nomedoprojeto.vtxcommercestable.com.br  
nomedoprojeto.myvtex.com

## Admin
nomedoprojeto.vtxcommercestable.com.br/admin  
nomedoprojeto.myvtex.com/admin

## CMS
nomedoprojeto.myvtex.com/admin/a  
nomedoprojeto.vtxcommercestable.com.br/admin/a

* ### HTML Templates
**Padrão:** nomeDoProjeto-nomeDoTemplate

nomeDoProjeto-account  
nomeDoProjeto-categoria  
nomeDoProjeto-contato  
nomeDoProjeto-error  
nomeDoProjeto-orders  

* ### Files Manager
Local onde é feito o upload css, js.

* ### Estrutura Hierarquica Ecommerce
Departamento  
Categoria  
SubCategoria  

* ### Páginas comuns site de ecommerce
  - Home
  - Categoria / Departamento
  - Produto
  - Checkout
  - Login / Minha Conta / Orders
  - Intitucionais (Quem somos, fale conosco)

## Softwares, Plugins e Dependências
- jquery  
- icomoon  
- slick  
- instafeed  
- qd_infinitscrool  
- Goggle Optimize

## Glossário

**Breadcrumb:** is a form of site navigation that shows visitors where they are on a site's hierarchy of pages without having to examine a URL structure.  
O controle `<vtex.cmc:breadCrumb/>` é responsável por renderizar breadcrumbs.  
Funciona apenas nas seguintes páginas:
- Produto
- Departamento
- Categoria
- Busca



## **VTEX**

**CMS**: é o módulo que gerencia o código do seu site e tudo relacionado a ele.  
- **Sites and channels:** é nesse diretorio que é criado o web site e onde é criado e organizado os layouts do site.
- **Templates:** é aqui que fica o código propriamente dito. Os templates ficam reunidos nas pastas HTML Templates e Shelves Templates.
  - **HTML Templates:** 
    - São eles que estruturam o código HTML e referenciam arquivos JavaScript e CSS para serem usados na páginas do web site.
  - **Shelves Templates:**
    - Definem a estrutura e o conteúdo das prateleiras. 
    - **Prateleira:** são elementos que agrupam produtos a partir de critérios de exibição e podem ser usados em mais de uma página.
  - **Sub Templates:** 
    - Eles são, a exemplo das prateleiras, elementos que vão aparecer na maioria (ou em todas) as páginas do seu web site, como *footers*, *menus*, *headers* e outros.  
        OBS: Header e Footer são subtemplates default.
      - Para referenciar um Subtemplate dentro de um Template de página, utilize a sintaxe abaixo:  
        `<vtex:template id="nome-do-id" />`

- **Layouts:** 
  - São os responsáveis por determinar quais placeholders serão exibidos.
  - É ele que configura os placeholders (elementos  como banners, coleções e outros), que serão exibidos para o usuário final. 
  - Para funcionar, cada layout precisa estar vinculado a um único template. É encontrado no diretório Sites and channels.  
- **Placehoulders:** 
  - São elementos (Banner DHTML, HTML, Coleção, Banner, Produtos relacionados) que podem ou não ser usados.
  - São configurados nos layouts (que ficam armazenados no diretório Sites and channels).
  - Sua posição na página é determinada pelo código presente nos templates (armazenados no diretório HTML Templates).  
  - O layout define quais placeholders vão ser usados, e o que eles exibem, mas é o código  
  (ou seja, o template) que vai dizer onde eles aparecem na página.  
  `<vtex:contentPlaceHolder id="PlaceHolderName"/>`
- **Coleção:** São placeholders que exibem grupos de produtos (Product Clusters (Collections)).
- **Controles:** 
  - Os controles nativos da VTEX renderizam diversas funcionalidades úteis e replicáveis nos templates do seu site.  
  - Por exemplo, ao inserir o controle `<vtex.cmc:productName/>` na sua página de produto, o sistema renderizará automaticamente o nome do produto.
- **Custom Elements:**  
    Em diversos projetos existe a necessidade de criar um banner, uma vitrine ou até mesmo um código HTML que será utilizado em várias páginas do site. Um exemplo é o banner de frete grátis e descontos, normalmente localizado no header, logo abaixo do menu.

    Para evitar o trabalho de adicionar manualmente o mesmo conteúdo várias vezes em cada página, temos a área de Controles Customizados (Custom Elements). 
    
  - Além dos controles nativos da VTEX, o sistema permite que você crie controles customizados.
  - Eles ficam armazenados no diretório Custom Elements, e podem ser usados em qualquer template, da mesma maneira que os controles nativos.
  - **Sintaxes:**
    - Tipo Banner: `<vtex:nomedatag>`
    - Tipo HTML: `<vtex.cmc:nomedatag/>`
    - Tipo Coleção: `<vtex.cmc:nomedatag/>`
- **Estutura de Pastas:**
  - **Pastas Obrigatórias:**
    - Busca
    - Categoria
    - Departamento
    - Login
    - Produto
  - **Pastas Importantes:**
    - /account
    - /account/orders 
  - **Pastas Úteis:** 
    - /sistema/buscavazia
    - /sistema/{codigoHTTP}

### Links úteis
  - Lista de controles: https://help.vtex.com/tutorial/lista-de-controles-para-templates?locale=pt
  - Lista de controles de prateleira: https://help.vtex.com/tutorial/controles-do-template-de-prateleira?locale=pt
  - Documentação da API vtex.js: https://github.com/vtex/vtex.js/blob/master/docs/README.en.md
## Source

### Markdown
https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet  

### VTEX
https://help.vtex.com/tutorial/o-que-e-o-cms?locale=pt  
https://help.vtex.com/tutorial/o-que-sao-templates?locale=pt  
https://help.vtex.com/tutorial/como-identificar-o-template-de-uma-pagina?locale=pt  
https://help.vtex.com/tutorial/what-are-shelves--28D8d6GFfuAsuAoeWC8eq0  
https://help.vtex.com/tutorial/subtemplates?locale=es  
  