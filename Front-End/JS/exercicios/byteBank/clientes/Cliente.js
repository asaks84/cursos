export class Cliente {
    #cpf;

    constructor(nome, cpf) {
        this.nome = nome;
        this.#cpf = cpf;
    }

    get cpf(){ return this.#cpf; }
}