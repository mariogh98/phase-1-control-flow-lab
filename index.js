function scuberGreetingForFeet(numberOfFeet){
  if (numberOfFeet <= 400) {
    return "This one is on me!"
  } else if (numberOfFeet > 400 && numberOfFeet <= 2000) {
    return "That will be twenty bucks."
  } else if (numberOfFeet > 2000 && numberOfFeet<=2500) {
    return "I will gladly take your thirty bucks."
  } else if (numberOfFeet > 2500) {
    return "No can do."
  }
}  

function ternaryCheckCity(city){
 const cityResponse = (city === "NYC") ? ("Ok, sounds good.") : ("No go.")
 return cityResponse

}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case "generous" :
      return "Thank you so much."
    case "not as generous" :
      return "Thank you." 
    default:
      return "Bye."   
  } 
}