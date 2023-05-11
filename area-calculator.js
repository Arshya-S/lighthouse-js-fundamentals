const calculateRectangleArea = function (length, width){
  if (length > 0 && width > 0){
    let recArea = length * width;
    return recArea;
  }

}

const calculateTriangleArea = function (base, height){
  if (base > 0 && height > 0){
    let triangArea = (base * height)/2;
    return triangArea;
  }
}

const calculateCircleArea = function (radius){
  if (radius > 0){
    let circleArea = Math.PI * (radius ** 2);
    return circleArea;
  }
}

