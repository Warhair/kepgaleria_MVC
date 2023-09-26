import Modell from "../model/model.js";
import NagykepView from "../view/Nagykep.js";

class Controller{
    constructor(){
        const MODELL = new Modell()
        const NAGYKEPVIEW = new NagykepView(MODELL.getAKtKep(), $("nagykep"))
        $(window).on("jobb",()=>{
            MODELL.jobb()
            MODELL.getAKtKep()
            let aktKep=MODELL.getAKtKep()
            NAGYKEPVIEW.nagykepCsere(aktKep)
        })
    }
}
export default Controller;