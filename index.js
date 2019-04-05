var ticketNumber = 1

function takeANumber(katzDeliLine) {
  ticketNumber++
  katzDeliLine.push(ticketNumber)
  return ("Welcome. You are number " + ticketNumber + ".")
}

function nowServing (katzDeliLine) {
  var nowServing = katzDeliLine[0]; 
  if (katzDeliLine.length > 0) {
    katzDeliLine.shift()
    return ("Currently serving " + nowServing + ".")
  } else {
    return ("There is nobody waiting to be served!")
  }
}

function currentLine (katzDeliLine) {
  var line = []
  if (katzDeliLine.length === 0) {
    return ("The line is currently empty.")
  } 
    for (let i = 0; i < katzDeliLine.length; i++) {
    line.push(`${i+1}. ${katzDeliLine[i]}`)
  }
  return ("The line is currently: " + line.join(", "))
}