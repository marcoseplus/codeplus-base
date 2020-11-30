# Tutorial - Pull Request BitBucket

Nesse tutorial utilizaremos o método de mergear uma feature branch a master, existem outras formas como o Fork ou o Git Workflow.

## Fluxo
1. Clone o repositório no qual você irá fazer uma contribuição.Exemplo:  
`git clone https://marcuslima94@bitbucket.org/osfeladaeplus/project-start.git`
2. Crie uma branch com o nome da sua contribuição.Exemplo:  
`git checkout -b doc-pullrequest`
3. Faça sua contribuição e após ela execute:  
    3.1. `git add .`  
    3.2. `git commit -m 'mensagem do commit'`  
4. Sincronize sua branch local ao repositório do bitbucket, para isso execute:  
`git push -u origin nome-da-branch`.
5. Selecione a opção *Pull requests*.   
![](https://i.ibb.co/4mpn19P/pull-request01.png)  
6. Clique no botão *Create pull request*.  
![](https://i.ibb.co/LYTDFtK/pull-request02.png)  
7. Selecione a branch que você criou.  
![](https://i.ibb.co/jwWRyWc/pull-request03.png) 
   
8. Preencha todos os campos com clareza para o melhor entendimento de quem irá revisar sua contribuição.  
Obs: Não esqueça de selecionar uma pessoa como *Reviewer* e de selecionar o input *Close branch*.  
![](https://i.ibb.co/qmdbyJr/pull-request04.png)  

## Referências
https://br.atlassian.com/git/tutorials/making-a-pull-request

