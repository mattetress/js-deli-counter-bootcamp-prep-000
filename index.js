var katzDeliLine = [];

function takeANumber(lineLength, custName) {
  katzDeliLine.push(custName);
  return `Welcome, ${custName}. You are number ${lineLength + 1} in line.`;
} 