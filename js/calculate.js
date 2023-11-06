const resultField = document.getElementById('result-field');

document.getElementById('triangle-calculate-btn').addEventListener('click', function(){
  const triangleInputFieldB = document.getElementById('triangle-input-b')
  const triangleInputFieldStringB = triangleInputFieldB.value;
  const triangleInputAmountB = parseFloat(triangleInputFieldStringB);
  triangleInputFieldB.value = '';

  const triangleInputFieldH = document.getElementById('triangle-input-h');
  const triangleInputFieldStringH = triangleInputFieldH.value;
  const triangleInputAmountH = parseFloat(triangleInputFieldStringH);
  triangleInputFieldH.value = '';
  
  const totalTriangle = 0.5 * triangleInputAmountB * triangleInputAmountH;
  // resultField.value = totalTriangle;

  const previousTriangleResultField = document.getElementById('triangle-result');

  previousTriangleResultField.innerText = totalTriangle
})


document.getElementById('rectangle-calculate-btn').addEventListener('click', function(){
  const rectangleInputFieldW = document.getElementById('rectangle-input-w')
  const rectangleInputFieldStringW = rectangleInputFieldW.value;
  const rectangleInputAmountW = parseFloat(rectangleInputFieldStringW);
  rectangleInputFieldW.value = '';

  const rectangleInputFieldl = document.getElementById('rectangle-input-l');
  const rectangleInputFieldStringl = rectangleInputFieldl.value;
  const rectangleInputAmountl = parseFloat(rectangleInputFieldStringl);
  rectangleInputFieldl.value = '';

  const totalRectangle = rectangleInputAmountW * rectangleInputAmountl;
  console.log(totalRectangle);
})

