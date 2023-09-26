class NagykepView{
    #kep
    constructor(kep, szuloElem){
        this.#kep=kep;
        this.szuloElem=szuloElem
        this.#htmlOsszerak()
        this.balGombElem=$("#bal")
        this.jobbGombElem=$("#jobb")
        this.nagykephelye=$("nagykephelye")
        this.balGombElem.om("click",()=>{
            this.#sajatEsemenykezelo("bal")
        })
        this.jobbGombElem.om("click",()=>{
            this.#sajatEsemenykezelo("jobb")
        })
       

    }
    nagykepCsere(kep){
        this.nagykephelye.attr("src",kep)
    }
    
    #sajatEsemenykezelo(esemenynev){
        const esemenyem= new CustomEvent(esemenynev)
        window.dispatchEvent(esemenyem)
    }

    #htmlOsszerak(){
        let txt="<button id='bal'>BAL</button>"
        txt +=`<div class="card">
        <div class="card-header">Header</div>
        <div class="card-body"><img id=nagykephelye src="${this.#kep}" class="img-thumbnail" alt="Cinque Terre"></div>
        <div class="card-footer">Footer</div>
      </div>`
      txt="<button id='jobb'>JOBB</button>"
      this.szuloElem.html(txt);
    }

}
export default NagykepView;