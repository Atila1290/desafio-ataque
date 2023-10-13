class classeHeroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque = ["magia","espada","artes marciais","shuriken"]

        if(this.tipo === "Mago" || this.tipo === "mago" ){
            console.log(`o ${this.tipo} atacou usando ${ataque[0]}`);
        }else if(this.tipo === "guerreiro" || this.tipo === "Guerreiro"){
            console.log(`o ${this.tipo} atacou usando ${ataque[1]}`);
        }else if(this.tipo === "monge" || this.tipo === "Monge"){
            console.log(`o ${this.tipo} atacou usando ${ataque[2]}`);
        }else if(this.tipo === "ninja" || this.tipo === "Ninja"){
            console.log(`o ${this.tipo} atacou usando ${ataque[3]}`);
        }
        

    }
}

let heroi = new classeHeroi("Merlin", "100", "Ninja")
heroi.atacar()