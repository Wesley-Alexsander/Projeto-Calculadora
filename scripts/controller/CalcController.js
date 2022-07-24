class CalcController {

    constructor(){  // Metodo construtor

        // Usamos o underscore como uma convenção para informar que este metodo é privado e so pode ser acessado pelo objeto que pertence a esta classe

        this._displayCalc = "0"; //atribudo display do objeto instanciado
        this._currentDate; // atributo data do objeto instanciado
        this.initialize(); // inicializa o metodo initialize junto com a classe 

    }

    initialize(){// Metodo inicializado junto com a classe pelo construtor

         // este metod vai armazenar tudo que queremos que aconteça quando iniciarmos nossa calculadora.

        let displayCalcEl = document.querySelector("#display");// seleciona a tag com id display, o "EL" é uma convenção para falar que este é um elemento HTML
        let dateEl = document.querySelector("#data"); // seleciona a tag com id hora, o "EL" é uma convenção para falar que este é um elemento HTML
        let timeEl = document.querySelector("#hora");// seleciona a tag com id data, o "EL" é uma convenção para falar que este é um elemento HTML

        //Escrevendo dentro do elemento displayCalc
        displayCalcEl.innerHTML = "11+12";
        dateEl.innerHTML = "15/04/2021";
        timeEl.innerHTML = "13:30";

    }

    get displayCalc(){

        return this._displayCalc;

    }

    set displayCalc(valor){

        this._displayCalc = valor;

    }

    get currentDate(){

        return this._currentDate;

    }

    set currentDate(valor){

        this._currentDate = valor;

    }

}