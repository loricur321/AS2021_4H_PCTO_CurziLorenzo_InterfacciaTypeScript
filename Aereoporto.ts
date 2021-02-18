//interfaccia ICompare contenente codice identificativo che dovranno avere tutti gli aereomobili
// e il metodo Superiore che dovrà essere implementato nella classi Aliente e AereoMotore
interface ICompare {
    codiceIdentificativo : number;
    Superiore(x : Aereomobile) : boolean;
}

//classe astratta che implementa l'interfaccia ICompare
abstract class Aereomobile implements ICompare {
    abstract codiceIdentificativo: number;
    abstract Superiore(x : Aereomobile): boolean;
    abstract get Tipologia() : string; //metodo che dovranno avere la classe Aliante e AereoMotore che deve restituire una strina indicante il tipo di aereomobile 
}

//classe Aliente che estende la classe astratta Aereomobile
class Aliante extends Aereomobile {
    codiceIdentificativo : number;
    efficienza : number;

    constructor(codice : number, efficienza : number)
    {
        super();
        this.codiceIdentificativo = codice;
        this.efficienza = efficienza;
    }

    Superiore(x : Aliante): boolean {
        var retVal : boolean; 

        if(typeof x == null) //se il valore di x è null allora ritornerò false in quanto x non è un aereomobile
            retVal = false;

        if(this.efficienza > x.efficienza) //confronto l'efficienza dell'aereomobile che richiama il metodo con quello passato
            retVal = true;

        return retVal;
    }

    get Tipologia() : string {
        return "Aliante";
    }
    
}

//classe AereoMotore che estende la classe astratta Aereomobile
class AereoMotore extends Aereomobile {
    codiceIdentificativo : number;
    potenzaCV : number;

    constructor(codice : number, CV : number)
    {
        super();
        this.codiceIdentificativo = codice;
        this.potenzaCV = CV;
    }

    Superiore(x : AereoMotore): boolean {
        var retVal : boolean; 

        if(typeof x == null) //se il valore di x è null allora ritornerò false in quanto x non è un aereomobile
            retVal = false; 

        if(this.potenzaCV > x.potenzaCV) //confronto la potenza dell'aereomobile che richiama il metodo con quello passato
            retVal = true;

        return retVal;
    }   

    get Tipologia() : string {
        return "Aereo a motore";
    }
}


//Programs
//aereo a motore con codice 1 e potenza 500cv
var aereoMotore1 :  AereoMotore = new AereoMotore(1, 500); //dichiaro la prima istanza della classe AereoMotore

//aliante con codice 2 e efficienza 40%
var aliante1 : Aliante = new Aliante(2, 40); //dichiaro la prima istanza della classe Aliante

//aereo a motore con codice 3 e potenza 300cv
var aereoMotore2 : AereoMotore = new AereoMotore (3, 300);

//aliante con codice 4 e efficienza 20%
var aliante2 : Aliante =  new Aliante (4, 60);


//tipolgia dell'aereomobile con codice 1
console.log("\nLa tipologia dell'aereomobile con codice 1 è:");
console.log(aereoMotore1.Tipologia);

//tipolgia dell'aereomobile con codice 2
console.log("\nLa tipologia dell'aereomobile con codice 2 è:");
console.log(aliante1.Tipologia);

//tipolgia dell'aereomobile con codice 3
console.log("\nLa tipologia dell'aereomobile con codice 3 è:");
console.log(aereoMotore2.Tipologia);

//tipolgia dell'aereomobile con codice 4
console.log("\nLa tipologia dell'aereomobile con codice 4 è:");
console.log(aliante2.Tipologia);

console.log("\nConfronto tra due aerei a motore:");
if(aereoMotore1.Superiore(aereoMotore2))
    console.log("L'aereo a motore con codice " + aereoMotore1.codiceIdentificativo + " e potenza " + aereoMotore1.potenzaCV + "cv è superiore rispetto all'aereo a motore con codice " + aereoMotore2.codiceIdentificativo +" e potenza " + aereoMotore2.potenzaCV + "cv");
else
    console.log("L'aereo a motore con codice " + aereoMotore1.codiceIdentificativo + " e potenza " + aereoMotore1.potenzaCV + "cv è inferiore rispetto all'aereo a motore con codice " + aereoMotore2.codiceIdentificativo + " e potenza " + aereoMotore2.potenzaCV + "cv");

console.log("\nConfronto tra due alianti:");
if(aliante1.Superiore(aliante2))
    console.log("L'aliante con codice " + aliante1.codiceIdentificativo + " ed efficienza " + aliante1.efficienza + "% è superiore rispetto all'aliante con codice " + aliante2.codiceIdentificativo +" ed efficienza " + aliante2.efficienza + "%");
else
    console.log("L'aliante con codice " + aliante1.codiceIdentificativo + " ed efficienza " + aliante1.efficienza + "% è inferiore rispetto all'aliante con codice " + aliante2.codiceIdentificativo +" ed efficienza " + aliante2.efficienza + "%");