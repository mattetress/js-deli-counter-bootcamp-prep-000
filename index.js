var katzDeliLine = [];

function takeANumber(lineLength, custName) {
  let line = [];
  line.push(custName);
  
  return line, `Welcome, ${custName}. You are number ${lineLength + 1} in line.`;
} 