class meuHeroi{ //
    constructor(nome, idade,tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
       let ataque
    }
    tipoAtaque(){
     if(this.tipo == "mago"){console.log(`O ${this.tipo} atacou usando magia`)}
     else if (this.tipo == "guerreiro"){console.log(`O ${this.tipo} atacou usando Espada`)}
     else if (this.tipo == "Ninja"){console.log(`O ${this.tipo} atacou usando Shuriken`)}
    }
    
}

let patolino = new meuHeroi('patorilo','3000','mago')
patolino.tipoAtaque()