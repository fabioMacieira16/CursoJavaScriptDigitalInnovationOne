var nome = "Fabio Macieira";
var idade = 29;
var idade2 = 30;
var frase = "Fabio ganhando de 10k a 20k"
//alert("Bem Vindo " + nome + " tem idade" + idade);
//alert(idade + idade2);

console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("20k", "25k"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());


//Arrays

var lista = ["maça", "laranha", "laranja"];
console.log(lista);
console.log("Lista só um elemento ->", lista[1])
lista.push("uva");
console.log("incluir um elemento na lista usando o push", lista)
lista.pop("maça");
console.log("retira um elemento na lista usando o pop", lista)
console.log("informa a quantidade de elemento da lista usando o length", lista.length)