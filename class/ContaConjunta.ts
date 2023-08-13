import { bankAccount } from './bankAccount'

export class ContaConjunta extends bankAccount {
    constructor(name:string, accountNumber:number){
        super(name, accountNumber)
    }
    
    deposit = (amount:number) =>{
        amount = amount + 10
        this.SetBalance(amount)
    }
}