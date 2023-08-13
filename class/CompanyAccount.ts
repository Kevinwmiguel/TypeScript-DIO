import {bankAccount} from './bankAccount'

export class CompanyAccount extends bankAccount{

    constructor(name:string,accountNumber:number){
        super(name,accountNumber)
    }

    getloan = ():void => {
        console.log(`Emprestimo feito!`)
    }

    deposit = ():number => {
        console.log(`A empresa depositou`)
        return 2
    }
}