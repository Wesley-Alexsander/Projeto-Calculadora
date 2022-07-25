class CalcController {

    constructor(){  // Metodo construtor

        // Usamos o underscore como uma convenção para informar que este metodo é privado e so pode ser acessado pelo objeto que pertence a esta classe

        
        this._displayCalcEl = document.querySelector("#display");// seleciona a tag com id display, o "EL" é uma convenção para falar que este é um elemento HTML

        this._dateEl = document.querySelector("#data"); // seleciona a tag com id hora, o "EL" é uma convenção para falar que este é um elemento HTML

        this._timeEl = document.querySelector("#hora");// seleciona a tag com id data, o "EL" é uma convenção para falar que este é um elemento HTML

        this._currentDate; // atributo data do objeto instanciado
        this.initialize(); // inicializa o metodo initialize junto com a classe 

    }

    initialize(){// Metodo inicializado junto com a classe pelo construtor

        //Escrevendo dentro do elemento displayCalc
        this.displayCalcEl.innerHTML = "7950";
        this.dateEl.innerHTML = "23/07/2022";
        this.timeEl.innerHTML = "00:30";

    }

    get displayCalc(){

        return this._displayCalcEl.innerHTML; // retorna o que estiver escrito no html interno da tag 

    }

    set displayCalc(valor){

        this._displayCalcEl.innerHTML = valor;

    }

    get currentDate(){

        return this._currentDate;

    }

    set currentDate(valor){

        this._currentDate = valor;

    }

}