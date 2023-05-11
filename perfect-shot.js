const finalPosition = function (moves) {
  let coord = [0,0];
  for (let position of moves){
    if (position === "north"){
      coord[1]++;
    }else if (position === "west"){
      coord[0]--;
    }else if (position === "east"){
      coord[0]++;
    }else if (position === "south"){
      coord[1]--;
    }
  }
  return coord;
}
