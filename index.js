//var katzDeliLine = []; already created
function takeANumber(queue, newName){//two parameters: current line of people and new person's name
  queue.push(newName);
  var queueLength = queue.length
  return `Welcome, ${newName}. You are number ${queueLength} in line.`
}

function nowServing(katzDeliLine){
    if(katzDeliLine.length < 1){
      return `There is nobody waiting to be served!`
    } else {
      return `Currently serving ${katzDeliLine.shift()}.`
    }
}
//accept the current line of people (katzDeliLine)
//return the first person in line
//then remove that individual from the line.
//If there is nobody in line, it should return "There is nobody waiting to be served!"

function currentLine(line){
  if (line.length < 1){
    return `The line is currently empty.`
  } else {
    for(var n=0; n < line.length; n++){
    var newLine = new Array();
    newLine.push(`${parseInt(line.indexOf(line[n])+1)}. ${line[n]}`)
    }
    return `The line is currently: ${newLine}.`
  }
}
//accepts the current line of people and returns the current line as a string
//
