/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div

const billTotal = document.getElementById('billTotalInput');
const tipInp = document.getElementById('tipInput');
const numPeople = document.getElementById('numberOfPeople');
const perPerson = document.getElementById('perPersonTotal');

// Get number of people from number of people div

console.log(`Number of people are ${numPeople.textContent}`)
// ** Calculate the total bill per person **
const calculateBill = () => {
    // get bill from user input & convert it into a number
    
    let billAmt = Number(billTotal.value)
    console.log(billAmt)
  
    // get the tip from user & convert it into a percentage (divide by 100)
    
    let tip = Number(tipInp.value)/100
    console.log(tip)
  
    // get the total tip amount
    
    let totTip = billAmt * tip
    console.log(`Total tip is ${totTip}`)  
    // calculate the total (tip amount + bill)
    
    let totalBill = totTip + billAmt
    console.log(`totalbill is ${totalBill}`)
    // calculate the per person total (total divided by number of people)

    let billPerPerson = totalBill/Number(numPeople.textContent) 
    console.log(billPerPerson)
    // update the perPersonTotal on DOM & show it to user
    perPerson.textContent = Math.round(billPerPerson)
  
  }
  
  // ** Splits the bill between more people **
  const increasePeople = () => {
    // increment the amount of people
    
    let people = Number(numPeople.textContent) 
    people ++
    numPeople.textContent = people

    
    // update the DOM with the new number of people
  
  
    // calculate the bill based on the new number of people
    calculateBill()
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
  
    
    // decrement the amount of people
    
    let people = Number(numPeople.textContent) 
    if (people > 1){
      people --;
    }
    
    numPeople.textContent = people
  
    // update the DOM with the new number of people
  
  
    // calculate the bill based on the new number of people
    calculateBill()
  }