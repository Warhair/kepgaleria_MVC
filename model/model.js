import { KEPLISTA } from "./adat.js";
class Modell{
    #lista=[]
    #id
    constructor(){
        this.#lista=KEPLISTA;
        this.#id=0;
    }
    getlist(){
        return this.#lista;
    }
    getAKtKep(){
        return this.#lista[this.#id]
    }
    ball(){
        this.#id--
        if(this.#id < 0){
            this.#id = this.#lista.length - 1;
        }
    }
    jobb(){
        this.#id++
        if(this.#id >= this.#lista.length){
            this.#id = 0;
        }
    }

}
export default Modell;