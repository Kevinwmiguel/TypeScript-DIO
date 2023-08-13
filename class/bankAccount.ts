export abstract class bankAccount {
    private name: string 
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name:string, accountNmber:number){
        this.name = name
        this.accountNumber = accountNmber
    }

    /*/
    setaccountNumber = () {
        this.accountNumber = 23
    }
    /*/
    setname = (name:string):void => {
        this.name = name
        console.log('New Name saved')
    }
    getName = ():string => {
        return this.name
    }

    deposit = (amount:number):void => {
        if(this.validateStatus()){
            console.log(`Deposited ${amount}`)
            this.balance = this.balance + amount
            
        }
        
    }

    withdrawal = (valor:number):void => {
        if (this.status && this.balance > valor){
            this.SetBalance(this.balance-valor)
            console.log(`Withdrawal ${valor}`)
        }
        
    }

    SetBalance = (amount:number) => {
        this.balance = amount
    }
    getBalance():void {
        console.log(this.balance)
    }
    
    validateStatus = ():boolean => {
        if (this.status){
            return this.status
        }

        throw new Error('Conta invalida')
    }
}

