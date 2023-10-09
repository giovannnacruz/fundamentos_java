function pilares(){
    const imagem1 = document.getElementById("imagem1")
    const imagem2 = document.getElementById("imagem2")
    const imagem3 = document.getElementById("imagem3")
    const imagem4 = document.getElementById("imagem4")
    const texto1 = document.getElementById("texto1")
    const titulo1 = document.getElementById("titulo1")
    const texto2 = document.getElementById("texto2")
    const titulo2 = document.getElementById("titulo2")
    const texto3 = document.getElementById("texto3")
    const titulo3 = document.getElementById("titulo3")
    const texto4 = document.getElementById("texto4")
    const titulo4 = document.getElementById("titulo4")

    const txtexemplo1 = document.getElementById("txtexemplo1")
    const imgexemplo1 = document.getElementById("imgexemplo1")

    titulo1.innerHTML = "1 - Abstração";
    texto1.innerHTML = "É utilizada para a definição de entidades do mundo real. Sendo onde são criadas as classes. Essas entidades são consideradas tudo que é real, tendo como consideração as suas características e ações.";
    imagem1.setAttribute("src","imagens/png.png");

    titulo2.innerHTML = "2 - Encapsulamento";
    texto2.innerHTML = "A ação de colocar algo dentro ou como se estivesse em uma cápsula. Remover o acesso a partes do seu código e tornar as coisas privadas é exatamente o que o Encapsulamento faz";
    imagem2.setAttribute("src","imagens/png.png");

    titulo3.innerHTML = "3 - Herança";
    texto3.innerHTML = "A herança permite que um objeto adquira as propriedades e métodos de outro objeto. A reutilização é o principal benefício aqui.";
    imagem3.setAttribute("src","imagens/hera.png");

    titulo4.innerHTML = "4 - Polimorfismo";
    texto4.innerHTML = "Significa 'A condição de ocorrer de várias formas diferentes'.";
    imagem4.setAttribute("src","imagens/pilar.jpg");

    txtexemplo1.innerHTML = "Exemplo de Polimorfismo:"
    imgexemplo1.setAttribute("src","imagens/exemplos/ospilaresdeOOplimorfismo.png")
    
}
function objeto(){
    const txtexemplo1 = document.getElementById("txtexemplo1")
    const imgexemplo1 = document.getElementById("imgexemplo1")

    const imagem1 = document.getElementById("imagem1")
    const imagem2 = document.getElementById("imagem2")
    const imagem3 = document.getElementById("imagem3")
    const imagem4 = document.getElementById("imagem4")
    
    const titulo1 = document.getElementById("titulo1")
    const texto1 = document.getElementById("texto1")

    const texto2 = document.getElementById("texto2")
    const titulo2 = document.getElementById("titulo2")
    const texto3 = document.getElementById("texto3")
    const titulo3 = document.getElementById("titulo3")
    const texto4 = document.getElementById("texto4")
    const titulo4 = document.getElementById("titulo4")

    
    txtexemplo1.innerHTML = "Exemplo de instanciamento de objeto:"
    imgexemplo1.setAttribute("src","imagens/exemplos/objeto.png")

    titulo1.innerHTML = "O Que é um Objeto em POO?";
    texto1.innerHTML = "A Orientação a Objetos chama de objetos tudo aquilo que pode ser manipulado dentro do nosso sistema de informação. Um objeto possui características genéricas de alguma classe a qual ele pertence.";
    imagem1.setAttribute("src","imagens/objeto.gif");
    titulo2.innerHTML = "";
    texto2.innerHTML = "";
    imagem2.setAttribute("src","imagens/png.png");
    imagem3.setAttribute("src","imagens/png.png");
    titulo3.innerHTML = "";
    texto3.innerHTML = "";
    imagem4.setAttribute("src","imagens/png.png");
    titulo4.innerHTML = "";
    texto4.innerHTML = "";

}
function classe(){
    const txtexemplo1 = document.getElementById("txtexemplo1")
    const imgexemplo1 = document.getElementById("imgexemplo1")

    const imagem1 = document.getElementById("imagem1")
    const imagem2 = document.getElementById("imagem2")
    const imagem3 = document.getElementById("imagem3")
    const imagem4 = document.getElementById("imagem4")
    
    const titulo1 = document.getElementById("titulo1")
    const texto1 = document.getElementById("texto1")

    const texto2 = document.getElementById("texto2")
    const titulo2 = document.getElementById("titulo2")
    const texto3 = document.getElementById("texto3")
    const titulo3 = document.getElementById("titulo3")
    const texto4 = document.getElementById("texto4")
    const titulo4 = document.getElementById("titulo4")

    imgexemplo1.setAttribute("src","imagens/exemplos/classeabstrato.png")

    txtexemplo1.innerHTML = "Exemplo de básico de classe:"

    titulo1.innerHTML = "O Que é uma Classe?";
    texto1.innerHTML = "Uma classe é um elemento do código Java que utilizamos para representar objetos do mundo real. Dentro dela é comum declararmos atributos e métodos, que representam, respectivamente, as características e comportamentos desse objeto.";
    imagem1.setAttribute("src","imagens/classe.png");
    texto2.innerHTML = "";
    titulo2.innerHTML = "";
    imagem2.setAttribute("width","0px");
    titulo3.innerHTML = "Classes internas:";
    texto3.innerHTML = "São quando definimos uma classe dentro de outra classe já existente.";
    imagem3.setAttribute("width","0px");
    titulo4.innerHTML = "Classes Anônimas e Abstratas:";
    texto4.innerHTML = "É um tipo de classe especial que não pode ser instanciada, apenas herdada. Sendo assim, uma classe abstrata não pode ter um objeto criado a partir de sua instanciação.";
    imagem4.setAttribute("width","0px");
    
}
function atributos(){
    const txtexemplo1 = document.getElementById("txtexemplo1")
    const imgexemplo1 = document.getElementById("imgexemplo1")

    const imagem1 = document.getElementById("imagem1")
    const imagem2 = document.getElementById("imagem2")
    const imagem3 = document.getElementById("imagem3")
    const imagem4 = document.getElementById("imagem4")
    
    const titulo1 = document.getElementById("titulo1")
    const texto1 = document.getElementById("texto1")

    const texto2 = document.getElementById("texto2")
    const titulo2 = document.getElementById("titulo2")
    const texto3 = document.getElementById("texto3")
    const titulo3 = document.getElementById("titulo3")
    const texto4 = document.getElementById("texto4")
    const titulo4 = document.getElementById("titulo4")

    imgexemplo1.setAttribute("src","imagens/exemplos/atributos.png")

    txtexemplo1.innerHTML = "Exemplo de Atribuição:"

    titulo1.innerHTML = "O Que é Atribuição?";
    texto1.innerHTML = "Os atributos são as propriedades de um objeto, também são conhecidos como variáveis ou campos. Essas propriedades definem o estado de um objeto, fazendo com que esses valores possam sofrer alterações.";
    imagem1.setAttribute("src","imagens/atributos.png");
    titulo2.innerHTML = "";
    texto2.innerHTML = "";
    imagem2.setAttribute("src","imagens/png.png");
    titulo3.innerHTML = "";
    texto3.innerHTML = "";
    imagem3.setAttribute("src","imagens/png.png");
    titulo4.innerHTML = "";
    texto4.innerHTML = "";
    imagem4.setAttribute("src","imagens/png.png");
}
function metodos(){
    const txtexemplo1 = document.getElementById("txtexemplo1")
    const imgexemplo1 = document.getElementById("imgexemplo1")

    const imagem1 = document.getElementById("imagem1")
    const imagem2 = document.getElementById("imagem2")
    const imagem3 = document.getElementById("imagem3")
    const imagem4 = document.getElementById("imagem4")
    
    const titulo1 = document.getElementById("titulo1")
    const texto1 = document.getElementById("texto1")

    const texto2 = document.getElementById("texto2")
    const titulo2 = document.getElementById("titulo2")
    const texto3 = document.getElementById("texto3")
    const titulo3 = document.getElementById("titulo3")
    const texto4 = document.getElementById("texto4")
    const titulo4 = document.getElementById("titulo4")

    imgexemplo1.setAttribute("src","imagens/exemplos/metodos.png")

    txtexemplo1.innerHTML = "Exemplo de Método:"

    titulo1.innerHTML = "O Que são Métodos?";
    texto1.innerHTML = "Os métodos determinam o comportamento dos objetos de uma classe e são análogos a funções ou procedimentos da programação estruturada.";
    imagem1.setAttribute("src","imagens/metodos.png");
    titulo2.innerHTML = "Modificadores de acesso:";
    texto2.innerHTML = "Os modificadores de acesso são palavras-chave na linguagem Java. Eles servem para definir a visibilidade que determinada classe ou membro terá diante das outras. Visibilidade neste caso tem o mesmo significado que acesso, pois se não está visível não pode ser acessado.";
    imagem2.setAttribute("src","imagens/png.png");
    titulo3.innerHTML = "";
    texto3.innerHTML = "";
    imagem3.setAttribute("src","imagens/png.png");
    titulo4.innerHTML = "";
    texto4.innerHTML = "";
    imagem4.setAttribute("src","imagens/png.png");
}
function pacotes(){
    const txtexemplo1 = document.getElementById("txtexemplo1")
    const imgexemplo1 = document.getElementById("imgexemplo1")

    const imagem1 = document.getElementById("imagem1")
    const imagem2 = document.getElementById("imagem2")
    const imagem3 = document.getElementById("imagem3")
    const imagem4 = document.getElementById("imagem4")
    
    const titulo1 = document.getElementById("titulo1")
    const texto1 = document.getElementById("texto1")

    const texto2 = document.getElementById("texto2")
    const titulo2 = document.getElementById("titulo2")
    const texto3 = document.getElementById("texto3")
    const titulo3 = document.getElementById("titulo3")
    const texto4 = document.getElementById("texto4")
    const titulo4 = document.getElementById("titulo4")

    imgexemplo1.setAttribute("src","imagens/exemplos/pacotes.png")

    txtexemplo1.innerHTML = "Exemplo de Pacotes:"

    titulo1.innerHTML = "O Que são os Pacotes em Java?";
    texto1.innerHTML = "Nada mais é do que um conjunto de classes localizadas na mesma estrutura hierárquica de diretórios.";
    imagem1.setAttribute("src","imagens/pacote.png");
    titulo2.innerHTML = "";
    texto2.innerHTML = "";
    imagem2.setAttribute("src","imagens/png.png");
    titulo3.innerHTML = "";
    texto3.innerHTML = "";
    imagem3.setAttribute("src","imagens/png.png");
    titulo4.innerHTML = "";
    texto4.innerHTML = "";
    imagem4.setAttribute("src","imagens/png.png");
}
function interface(){
    const txtexemplo1 = document.getElementById("txtexemplo1")
    const imgexemplo1 = document.getElementById("imgexemplo1")

    const imagem1 = document.getElementById("imagem1")
    const imagem2 = document.getElementById("imagem2")
    const imagem3 = document.getElementById("imagem3")
    const imagem4 = document.getElementById("imagem4")
    
    const titulo1 = document.getElementById("titulo1")
    const texto1 = document.getElementById("texto1")

    const texto2 = document.getElementById("texto2")
    const titulo2 = document.getElementById("titulo2")
    const texto3 = document.getElementById("texto3")
    const titulo3 = document.getElementById("titulo3")
    const texto4 = document.getElementById("texto4")
    const titulo4 = document.getElementById("titulo4")

    imgexemplo1.setAttribute("src","imagens/exemplos/interface.png")

    txtexemplo1.innerHTML = "Exemplo de uma Interface:"

    titulo1.innerHTML = "O Que é a Interface em Java?";
    texto1.innerHTML = "Uma interface é uma maneira de declarar o comportamento de uma classe. Nesta declaração não especificamos exatamente como acontece internamente cada comportamento.";
    imagem1.setAttribute("src","imagens/classeinterface.png");
    titulo2.innerHTML = "";
    texto2.innerHTML = "";
    imagem2.setAttribute("src","imagens/png.png");
    titulo3.innerHTML = "";
    texto3.innerHTML = "";
    imagem3.setAttribute("src","imagens/png.png");
    titulo4.innerHTML = "";
    texto4.innerHTML = "";
    imagem4.setAttribute("src","imagens/png.png");
}
function enumera(){
    const txtexemplo1 = document.getElementById("txtexemplo1")
    const imgexemplo1 = document.getElementById("imgexemplo1")

    const imagem1 = document.getElementById("imagem1")
    const imagem2 = document.getElementById("imagem2")
    const imagem3 = document.getElementById("imagem3")
    const imagem4 = document.getElementById("imagem4")
    
    const titulo1 = document.getElementById("titulo1")
    const texto1 = document.getElementById("texto1")

    const texto2 = document.getElementById("texto2")
    const titulo2 = document.getElementById("titulo2")
    const texto3 = document.getElementById("texto3")
    const titulo3 = document.getElementById("titulo3")
    const texto4 = document.getElementById("texto4")
    const titulo4 = document.getElementById("titulo4")

    imgexemplo1.setAttribute("src","imagens/exemplos/enumeracao.png")

    txtexemplo1.innerHTML = "Exemplo de Enumeração em Java:"

    titulo1.innerHTML = "O Que são os Enumerações?";
    texto1.innerHTML = "É um tipo no qual declaramos um conjunto de valores constantes pré-definidos. Sua sintaxe é muito semelhante à declaração de uma classe, exceto pelo uso da palavra chave enum que antecede seu nome.";
    imagem1.setAttribute("src","imagens/enumeration.png");
    titulo2.innerHTML = "";
    texto2.innerHTML = "";
    imagem2.setAttribute("src","imagens/png.png");
    titulo3.innerHTML = "";
    texto3.innerHTML = "";
    imagem3.setAttribute("src","imagens/png.png");
    titulo4.innerHTML = "";
    texto4.innerHTML = "";
    imagem4.setAttribute("src","imagens/png.png");
}
function serializ(){
    const txtexemplo1 = document.getElementById("txtexemplo1")
    const imgexemplo1 = document.getElementById("imgexemplo1")

    const imagem1 = document.getElementById("imagem1")
    const imagem2 = document.getElementById("imagem2")
    const imagem3 = document.getElementById("imagem3")
    const imagem4 = document.getElementById("imagem4")
    
    const titulo1 = document.getElementById("titulo1")
    const texto1 = document.getElementById("texto1")

    const texto2 = document.getElementById("texto2")
    const titulo2 = document.getElementById("titulo2")
    const texto3 = document.getElementById("texto3")
    const titulo3 = document.getElementById("titulo3")
    const texto4 = document.getElementById("texto4")
    const titulo4 = document.getElementById("titulo4")

    imgexemplo1.setAttribute("src","imagens/exemplos/serializacao.png")

    txtexemplo1.innerHTML = "Exemplo de Serialização em Java:"

    titulo1.innerHTML = "Quando ocorrem as Serializações?";
    texto1.innerHTML = "A serialização é quando um objeto é transformado.";
    imagem1.setAttribute("src","imagens/seriz.png");
    titulo2.innerHTML = "";
    texto2.innerHTML = "";
    imagem2.setAttribute("src","imagens/png.png");
    titulo3.innerHTML = "";
    texto3.innerHTML = "";
    imagem3.setAttribute("src","imagens/png.png");
    titulo4.innerHTML = "";
    texto4.innerHTML = "";
    imagem4.setAttribute("src","imagens/png.png");
}
function relacionamento(){
    const txtexemplo1 = document.getElementById("txtexemplo1")
    const imgexemplo1 = document.getElementById("imgexemplo1")

    const imagem1 = document.getElementById("imagem1")
    const imagem2 = document.getElementById("imagem2")
    const imagem3 = document.getElementById("imagem3")
    const imagem4 = document.getElementById("imagem4")
    
    const titulo1 = document.getElementById("titulo1")
    const texto1 = document.getElementById("texto1")

    const texto2 = document.getElementById("texto2")
    const titulo2 = document.getElementById("titulo2")
    const texto3 = document.getElementById("texto3")
    const titulo3 = document.getElementById("titulo3")
    const texto4 = document.getElementById("texto4")
    const titulo4 = document.getElementById("titulo4")

    imgexemplo1.setAttribute("src","imagens/exemplos/relacionamento.png")

    txtexemplo1.innerHTML = "Exemplo de Sala de Aula:"

    titulo1.innerHTML = "Como funcionam os relacionamentos entre objetos?";
    texto1.innerHTML = "O relacionamento entre objetos define como eles vão interagir ou colaborar para executar uma operação em uma aplicação. Em qualquer aplicação, objetos de classes de interface do usuário vão interagir com objetos da camada de negócios para executar uma operação.";
    imagem1.setAttribute("src","imagens/rela.jpg");
    titulo2.innerHTML = "";
    texto2.innerHTML = "";
    imagem2.setAttribute("src","imagens/png.png");
    titulo3.innerHTML = "";
    texto3.innerHTML = "";
    imagem3.setAttribute("src","imagens/png.png");
    titulo4.innerHTML = "";
    texto4.innerHTML = "";
    imagem4.setAttribute("src","imagens/png.png");
}
function integrantes(){
    const txtexemplo1 = document.getElementById("txtexemplo1")
    const imgexemplo1 = document.getElementById("imgexemplo1")

    const imagem1 = document.getElementById("imagem1")
    const imagem2 = document.getElementById("imagem2")
    const imagem3 = document.getElementById("imagem3")
    const imagem4 = document.getElementById("imagem4")
    
    const titulo1 = document.getElementById("titulo1")
    const texto1 = document.getElementById("texto1")

    const texto2 = document.getElementById("texto2")
    const titulo2 = document.getElementById("titulo2")
    const texto3 = document.getElementById("texto3")
    const titulo3 = document.getElementById("titulo3")
    const texto4 = document.getElementById("texto4")
    const titulo4 = document.getElementById("titulo4")

    imgexemplo1.setAttribute("src","imagens/png.png")

    txtexemplo1.innerHTML = ""
    
    titulo1.innerHTML = "INTEGRANTES:";
    texto1.innerHTML = "Moisés C. |\r\n| Pedro H. |\r\n| Davi A. |\r\n| Giovanna C.";
    imagem1.setAttribute("src","imagens/integrantes.png");
    titulo2.innerHTML = "";
    texto2.innerHTML = "";
    imagem2.setAttribute("src","imagens/png.png");
    titulo3.innerHTML = "";
    texto3.innerHTML = "";
    imagem3.setAttribute("src","imagens/png.png");
    titulo4.innerHTML = "";
    texto4.innerHTML = "";
    imagem4.setAttribute("src","imagens/png.png");

}
function link(){
    const txtexemplo1 = document.getElementById("txtexemplo1")
    const imgexemplo1 = document.getElementById("imgexemplo1")

    const imagem1 = document.getElementById("imagem1")
    const imagem2 = document.getElementById("imagem2")
    const imagem3 = document.getElementById("imagem3")
    const imagem4 = document.getElementById("imagem4")
    
    const titulo1 = document.getElementById("titulo1")
    const texto1 = document.getElementById("texto1")

    const texto2 = document.getElementById("texto2")
    const titulo2 = document.getElementById("titulo2")
    const texto3 = document.getElementById("texto3")
    const titulo3 = document.getElementById("titulo3")
    const texto4 = document.getElementById("texto4")
    const titulo4 = document.getElementById("titulo4")

    imgexemplo1.setAttribute("src","imagens/png.png")

    txtexemplo1.innerHTML = ""
    
    titulo1.innerHTML = "PRINCIPAIS REFERÊNCIAS:";
    texto1.innerHTML = "https://www.w3schools.com/";
    imagem1.setAttribute("src","imagens/w.png");
    titulo2.innerHTML = "";
    texto2.innerHTML = "https://mimo.org/web";
    imagem2.setAttribute("src","imagens/mimo.png");
    titulo3.innerHTML = "";
    texto3.innerHTML = "https://www.devmedia.com.br/conceitos-e-exemplos-polimorfismo-programacao-orientada-a-objetos/18701";
    imagem3.setAttribute("src","imagens/dev.png");
    titulo4.innerHTML = "";
    texto4.innerHTML = "https://materialpublic.imd.ufrn.br/curso/disciplina/5/76/1/3";
    imagem4.setAttribute("src","imagens/png.png");

}
