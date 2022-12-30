const nome = "Lucas";
let nome2 = "";
let pessoaDefault = {
    nome: "Lucas",
    idade: "18",
    trabalho: "sim" 
}

let nomes = ["Lucas", "João","Paulo"]
let pessoas = [
    {
        nome: "Lucas",
        idade: "18",
        trabalho: "sim"  
    },
    {
        nome: "João",
        idade: "19",
        trabalho: "sim"
    },
    {
        nome: "Paulo",
        idade: "17",
        trabalho: "não"
    }
]

function alterarnome() {
    nome2 = "Maria"
    console.log("Valor alterado:")
    console.log(nome2)
}

function recebeEalteranome (novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:")
    console.log(nome2)
}

function imprimirPessoa(pessoa) {
    console.log("Nome:");
    console.log(pessoa.nome);
    
    console.log("Idade:");
    console.log(pessoa.idade);
    
    console.log("Trabalho:");
    console.log(pessoa.trabalho);  
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa)
}

function imprimirPessoas() {
    console.log("---IMPRIMIR PESSOAS---");
    pessoas.forEach((item) => {
        console.log("Nome");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);
        
        console.log("Trabalho:");
        console.log(item.trabalho); 
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Daniela",
    idade: "16",
    trabalho: "não"
});

imprimirPessoas();