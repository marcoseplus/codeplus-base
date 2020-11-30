# VTEX - API de dados mestre - v2  

## ATENÇÃO:  
**Esta versão não é compatível com entidades de dados da versão antiga (por exemplo, CL e AD). É possível usar essa configuração apenas para novas entidades de dados.**  

**Bem vinda!**  
O VTEX Master Data é um repositório fácil de usar, seguro, rápido, escalável e extensível. Nela você pode criar suas próprias Entidades, armazenar dados e consultar diretamente da loja ou usá-la para armazenar informações para alguma integração externa.  

Existem módulos VTEX internos que usam o Master Data da VTEX como repositório de dados. Temos o Atendimento ao Cliente VTEX, o Sistema de Perfil VTEX e o VTEX InStore, por exemplo. Também é usado por outros serviços internos.  

Existem duas maneiras de usar os dados mestre:  

1. Diretamente da vitrine  
2. Integração externa  

**DIRETAMENTE DA VITRINE**  
Se o seu cenário é para ser usado dentro da loja, esteja ciente das seguintes observações:  

1. Use o host da loja para consultar ou armazenar informações;  
2. Configure quais informações devem ser públicas e quais não devem, dentro do esquema JSON da Entidade de Dados;  
3. Não crie loops de consulta (a vitrine pode ser afetada pelo Throttling e o apis pode ser desativado como uma proteção de segurança);  
4. Nunca adicione via JS qualquer tipo de chave de autenticação (x-vtex-api-appkey ou x-vtex-api-apptoken);  

**INTEGRAÇÃO EXTERNA**  
Se o seu cenário é realizar integração externa, como migrar dados do cliente de outro serviço, esteja ciente das seguintes observações:  

1. Use o host api.vtex.com;  
2. Use as chaves de autenticação (x-vtex-api-appkey ou x-vtex-api-apptoken);  

**ATRIBUTOS MAIS USADOS ​​LISTADOS AQUI**  

**accountName** - Nome da conta no Gerenciador de Licenças VTEX  
**name** - Nome da Entidade de Dados  
**data_entity_name** - Sigla da entidade de daods  
**schema** - Esquema JSON de uma entidade de dados  
**id** - Identificador de um documento  
**x-vtex-api-appKey** - Chave do usuário  
**x-vtex-api-appToken** - Token do usuário  

### Outras documentações  

**Documentação completa MasterData V2** - <https://documenter.getpostman.com/view/164907/vtex-master-data-api-v2/7EHbXTe?version=latest>  
**Documentação completa MasterData V1** - <https://documenter.getpostman.com/view/164907/vtex-masterdata-api-v102/2TqWsD?version=latest>  
**Criando uma entidade** - <https://help.vtex.com/tutorial/criando-entidade-de-dados?locale=pt>  
**Criando campo** - <https://help.vtex.com/tutorial/como-crio-um-campo-no-master-data?locale=pt>  
**Criando um formulário** - <https://help.vtex.com/tutorial/creando-formulario-en-master-data?locale=pt>  