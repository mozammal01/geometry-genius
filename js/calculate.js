const resultField = document.getElementById('result-field');

document.getElementById('triangle-calculate-btn').addEventListener('click', function(event){
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


  const triangleResultField = document.getElementById('triangle-result-field')

  if(event){
    triangleResultField.style.display = 'block'
  }
})


document.getElementById('rectangle-calculate-btn').addEventListener('click', function(event){
  const rectangleInputFieldW = document.getElementById('rectangle-input-w')
  const rectangleInputFieldStringW = rectangleInputFieldW.value;
  const rectangleInputAmountW = parseFloat(rectangleInputFieldStringW);
  rectangleInputFieldW.value = '';

  const rectangleInputFieldl = document.getElementById('rectangle-input-l');
  const rectangleInputFieldStringl = rectangleInputFieldl.value;
  const rectangleInputAmountl = parseFloat(rectangleInputFieldStringl);
  rectangleInputFieldl.value = '';

  const totalRectangle = rectangleInputAmountW * rectangleInputAmountl;
  
  const previousRectangleResultField = document.getElementById('rectangle-result');

  previousRectangleResultField.innerText = totalRectangle


  const rectangleResultField = document.getElementById('rectangle-result-field')

  if(event){
    rectangleResultField.style.display = 'block'
  }
})

