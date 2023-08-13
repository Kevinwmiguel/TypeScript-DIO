import {bankAccount} from './bankAccount'

export class CompanyAccount extends bankAccount{

    constructor(name:string,accountNumber:number){
        super(name,accountNumber)
    }

    getloan = (emprestimo:number):number => {
        if (this.validateStatus()){
            console.log(`Emprestimo feito!`)
            super.getBalance()
            return emprestimo
        }
        emprestimo = 0
        return emprestimo
    }
}