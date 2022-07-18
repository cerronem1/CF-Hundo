// A common pattern for functions is to have a "Get Function" (or Controller), "Logic Function(s)", and "Display Function(s)" 
// My trick to rememeber: "Get it, Do it, View it"

// Get the values from the page
// This is a "Controller Function". It triggers the logic functions.
function getValues() {
  // Get values
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  // Must first validate user input
  // Attempt to convert strings to intergers
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    // call generateNums()
    let valueNums = generateNums(startValue, endValue);
    // call displayNums()
    displayNums(valueNums);
  } else {
    alert("Please enter a number.");
  }
}

// Generate numbers from startValue to endValue
// This is a "Logic Function". It does the work the controller triggers.
function generateNums(startVals, endVals) {
  let genNums = [];

  // Get all numbers from start to end
  for (let index = startVals; index <= endVals; index++) {
    // Whatever code is in here will execute in a loop until the condition above is met.
    genNums.push(index);    
  }
  return genNums;
}

// Display numbers and mark even numbers BOLD
// This is a "Display Function" or "View Function". It prints the results of the logic function(s) for the user to see.
function displayNums(dispNums) {
  let templateRows = "";

  for (let index = 0; index < dispNums.length; index++) {
    let className = "even";
    let dispNum = dispNums[index];

    if (dispNum % 2 == 0) {
      className = "even";
    } else {
      className = "odd";
    }

    templateRows += `<tr><td class="${className}">${dispNum}</td></tr>`;
  }

  document.getElementById("results").innerHTML = templateRows;
}