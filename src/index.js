const fs = require('fs');
const { resourceUsage } = require('process');
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

<<<<<<< Updated upstream
    console.log(data)
=======
    splitIntoParagraphs(texto);
>>>>>>> Stashed changes
})

function clearText(text){
    text = text.toLowerCase().normalize();
    text = text.replace(/[.,:;?!()]/g, '');
    return text

<<<<<<< Updated upstream
=======
}

function splitIntoParagraphs(text){
    // text = text.split('\n');
    // return text
    //*O código acima pdoe ser apenas:
    text = text.split('\n');
    console.log(text)
}

function separetedWords(text){
    return text.split(' ');
    
}

function createObject(array){
    const paragraphs ={};
    for (elemento of array){
        if(!(elemento in paragraphs)){
            paragraphs[elemento] = 1
        }
        else{
            paragraphs[elemento] += 1
        }
    }
    return paragraphs
}

function finalText(text){
    text = clearText(text);
    text = splitIntoParagraphs(text);
    // text=separetedWords(text);
    const result = createObject(text)
    console.log(result);
}

>>>>>>> Stashed changes

