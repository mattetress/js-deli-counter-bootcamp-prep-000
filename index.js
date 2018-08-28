
function takeANumber(line, custName) {
  line.push(custName);
  return `Welcome, ${custName}. You are number ${line.length} in line.`;
}
