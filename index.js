// code your solution here
function superbowlWin(array){
  const wins = array.find(recodObject => recodObject.result === "W")
  if(wins === undefined){
    return undefined
  }
  return wins.year
}
  


