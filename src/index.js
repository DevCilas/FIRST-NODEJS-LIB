const { log } = require('console');
const fs = require('fs');
//*FS é file system um módulo é usado para ler um arquivo dentro do sistema do compuatdor
//*Além de ler o arqeuivo, podemos fazer update, deletar, criar e renomear.
//*OBS: Uma biblioteca é um conjunto de modulos, modolus são códigos reutilizavéis

//*Agora vamos passar o caminho do arquivo de forma que não fique dependendo de alterações manuais
//*Para isso vamos usar a propriedade process.argv, ele retorna as repostas do terminal, sendo a primeira o interpretador, e depois o proório arquivo em questão.

const filePath = process.argv;
const link = filePath[2];
//*Agora vamos usar o método do fs chamado READFILE.

fs.readFile(link, 'utf-8', (err, data)=>{
    if(err){
        console.error('Erro no arquivo');
        return
    }

    console.log(data)
})



