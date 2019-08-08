# rocketseat-examples-youtube API REST e RESTFULL
## VERBOS HTTP
 - GET - Recebe dados do resource
 - POST - Eviar dados ou informaçoes a serem processadas pelo resource 
 - PUT - Arualizar dados de um resource
 - DELETE - Deletar um resource
  
  
 ## URL: https:localhost:3000/clientes
 - Endpoint - "/clientes"
 - API - 
 
 ## BOAS PRATICAS
 - utilizar verbos http para as requisições
 - Não deixar barra no final do endpoint
 - Nunca deixar o cliente sem reposta, sempre informar (404,402,500 etc...)
 
  
 ## STATUS DE RESPOSTAS
 - 1xx: Informação
 - 2xx: Sucesso
  - 200: OK
  - 201: CREATED
  - 204: Não tem conteudo PUT, POST ou DELETE
 - 3xx: Redirection
 - 4xx: Client Error
  - 400: Bad request
  - 404: Not Found!
 - 5xx:  Server Error
  - 500: internal serve error
