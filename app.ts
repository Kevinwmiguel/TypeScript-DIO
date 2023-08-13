//Dio banking

import { StringArray } from "aws-sdk/clients/rdsdataservice";
//name,accountnumber
//depositar, sacar

import { bankAccount } from './class/bankAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { ContaConjunta } from "./class/ContaConjunta"; 

const peopleAccount: PeopleAccount = new PeopleAccount(42099279888, 'Kevin', 1)
console.log(peopleAccount)
peopleAccount.deposit(50)
peopleAccount.setname('Kevin Willians Miguel')
peopleAccount.getName()

const companyaccount: CompanyAccount = new CompanyAccount('Devs Heart', 1900001)
companyaccount.SetBalance(companyaccount.getloan(1000))
companyaccount.withdrawal(100)
companyaccount.getBalance()

const marriageAccount: ContaConjunta = new ContaConjunta('Kevin E Jessica', 12154845)
marriageAccount.deposit(350)
marriageAccount.getBalance()
//peopleAccount.setname('Kevin Willians Miguel')
//console.log(peopleAccount.getName())
//console.log(companyaccount.deposit())