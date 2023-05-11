const range = function (start,end,step){
  let list = [];
  if (start !== "undefined" && end !== "undefined" && step !== "undefined" && start < end && step > 0){
    for (let i = start; i <= end; i += step){
      list.push(i);
    }
  }
  
  return list;
}

