function scuberGreetingForFeet(ft){
  // Write your code here!
  if (ft <= 400) {
    return "This one is on me!";
  }
  else if (ft <= 2000) {
    return "That will be twenty bucks.";
  }
  else if (ft <= 2500) {
    return "I will gladly take your thirty bucks.";
  }
  else {
    return "No can do."
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city === "NYC") {
    return "Ok, sounds good.";
  }
  else {
    return "No go."
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip) {
    case 'generous':
      // code block
      return 'Thank you so much.';
      break;
    case 'not as generous':
      // code block
      return 'Thank you.';
      break;
    default:
      // code block
      return "Bye.";
  }
}