class CalcController {
  constructor() {
    this.locale = 'pt-BR'
    this._displayCalcEL = document.querySelector('#display')
    this._dateEl = document.querySelector('#data')
    this._timeEl = document.querySelector('#hora')
    this._currentDate
    this.initialize() /* Executa este método sempre que um novo objeto calculadora
    for instanciado*/
  }

  initialize() {
   
    this.setDisplayDateTime() //Executado assim que o objeto é instanciado 

    setInterval(() => {
      this.setDisplayDateTime()
    }, 1000)
  }


  setDisplayDateTime(){
    this.displayDate = this.currentDate.toLocaleDateString(this.locale, {
      day: "2-digit",
      month: "short", // "short" abrevia o mê e o "log" põe por extenso
      year: "numeric" // põe a data com os 4 digitos
    })
    this.displayTime = this.currentDate.toLocaleTimeString(this.locale)
  }


  get displayTime() {
    return this._timeEl.innerHTML
  }

  set displayTime(value) {
    this._timeEl.innerHTML = value
  }

  get displayDate() {
    return this._dateEl.innerHTML
  }
  set displayDate(value) {
    this._dateEl.innerHTML = value
  }

  get displayCalc() {
    return this._displayCalcEL.innerHTML // retorna o que estiver escrito no html interno da tag
  }

  set displayCalc(value) {
    this._displayCalcEL.innerHTML = value // Atribui um valor ao html interno da tag
  }

  get currentDate() {
    return new Date()
  }

  set currentDate(value) {
    this._currentDate = value
  }
}
