const buttonNumber = document.querySelectorAll("[data-number]");
const btnclear = document.querySelector("[data-clear]");
const btnegal = document.querySelector("[data-egal]");
const backspace = document.querySelector("[data-backspace]");
const btnoperator = document.querySelectorAll("[data-operator]");
const curentnumber = document.querySelector("#display");
const prevnumber = document.querySelector("#display2");


class Calculator{
    constructor(display1, display2){
    this.display1 = curentnumber
    this.display2 = prevnumber
    this.clear()
    
    }
    clear(){
        this.display11 = ''
        this.display22 = ""
        this.store = []
    }
    back(){
        if(this.display11 == ""){
            alert("Valoare invalida");
        }
        this.display11 = this.display11.slice(0, -1);
     
    }

    numberappend(number){

        if(this.display11.charAt(this.display11.length-1) == "." && number === '.') return

    
        this.display11 = this.display11.toString() + number.toString()
        // console.log(this.display11.charAt(this.display11.length-1))
     console.log(this.display11)
    }
    corect(){
        

        this.plus = /\d\(/g
       

        if(this.plus.test(this.display11) == true) {

        this.display11 = this.display11.replace("(", "*(")

        }
       
        console.log(this.cor)
        
    }
    opera(operatie){
        
        if(this.display11.charAt(this.display11.length-1) == '+'||
        this.display11.charAt(this.display11.length-1) == '-'||
        this.display11.charAt(this.display11.length-1) == '*'||
        this.display11.charAt(this.display11.length-1) == '/' )return
        
        if (this.display22 !="" && this.display11 != ""){
            this.display22 = ""
        }

        if(this.display22 != ""){
            this.display11 = this.display22
            this.display22 = ""
        }
        
        
        

        this.operatie = operatie
        this.display11 += this.operatie
        // console.log(this.display11.charAt(this.display11.length-1))
        // console.log(this.display11.length)
       

    }
    ecuatia(){

        try{
            this.display22 = eval(this.display11)
        }
        catch(err){
            alert("Ecuatie gresita ")

        }
        
        this.display11 = ""
        
        console.log(eval(this.display11))
    }

    evaldisplay(){

        this.display1.innerText = this.display11
        this.display2.innerText = this.display22
     
    }
}

const calc = new Calculator (curentnumber, prevnumber)

buttonNumber.forEach(button =>{
    button.addEventListener('click',()=>{
        calc.numberappend(button.innerText)
        
        calc.evaldisplay()
    })
})
btnoperator.forEach(button =>{
    button.addEventListener('click',()=>{
        calc.opera(button.innerText)
        calc.evaldisplay()
    })
})
btnegal.addEventListener("click", button => {
    calc.corect();
    calc.ecuatia();
    calc.evaldisplay();

 })
 btnclear.addEventListener("click", button => {
    calc.clear();
    calc.evaldisplay();

 })
 backspace.addEventListener("click", button =>{
    calc.back();
    calc.evaldisplay();
 })


