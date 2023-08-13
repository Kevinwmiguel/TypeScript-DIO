//Dio banking

import { StringArray } from "aws-sdk/clients/rdsdataservice";
//name,accountnumber
//depositar, sacar

import { bankAccount } from './class/bankAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(42099279888, 'Kevin', 1)
console.log(peopleAccount)
peopleAccount.deposit(50)

const companyaccount: CompanyAccount = new CompanyAccount('Devs Heart', 1900001)
companyaccount.deposit()



//peopleAccount.setname('Kevin Willians Miguel')
//console.log(peopleAccount.getName())
//console.log(companyaccount.deposit())