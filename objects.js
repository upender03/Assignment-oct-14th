// Creating object using Object literal
const bankDetails ={
  name:"aravind",
  place:"hyderabad",
  accno:"6514154",
  balance:"500000"
}
console.log(bankDetails.name)
console.log(bankDetails.place)
console.log(bankDetails.accno)
console.log(bankDetails.balance)

// Creating object using new keyword

const bankDetails= new Object()
  bankDetails.name="aravind",
  bankDetails.place="hyderabad",
  bankDetails.accno="6514154",
  bankDetails.balance="500000"

console.log(bankDetails.name)
console.log(bankDetails.place)
console.log(bankDetails.accno)
console.log(bankDetails.balance)

// Creating object using object.create

const bankDetails ={
  name:"aravind",
  place:"hyderabad",
  accno:"6514154",
  balance:"500000"
}
const customerDetails = Object.create(bankDetails)
console.log(customerDetails.name)
console.log(customerDetails.place)
