
const resultField = document.getElementById('result-field');
// Triangle
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

  const previousTriangleResultField = document.getElementById('triangle-result');

  previousTriangleResultField.innerText = totalTriangle


  const triangleResultField = document.getElementById('triangle-result-field')

  if(event){
    triangleResultField.style.display = 'block'
  }
})

// Rectangle
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

// Parallelogram
document.getElementById('parallelogram-calculate-btn').addEventListener('click', function(event){

  const parallelogramInputFieldb = document.getElementById('parallelogram-input-b')
  const parallelogramInputFieldStringb = parallelogramInputFieldb.value;
  const parallelogramInputAmountb = parseFloat(parallelogramInputFieldStringb);
  parallelogramInputFieldb.value = '';

  const parallelogramInputFieldh = document.getElementById('parallelogram-input-h');
  const parallelogramInputFieldStringh = parallelogramInputFieldh.value;
  const parallelogramInputAmounth = parseFloat(parallelogramInputFieldStringh);
  parallelogramInputFieldh.value = '';

  const totalParallelogram = parallelogramInputAmountb * parallelogramInputAmounth;
  


  const previousParallelogramResultField = document.getElementById('parallelogram-result');

  previousParallelogramResultField.innerText = totalParallelogram


  const parallelogramResultField = document.getElementById('parallelogram-result-field')

  if(event){
    parallelogramResultField.style.display = 'block'
  }
})

// Rhombosh
document.getElementById('rhombus-calculate-btn').addEventListener('click', function(event){

  const rhombusInputFieldd1 = document.getElementById('rhombus-input-d1')
  const rhombusInputFieldStringd1 = rhombusInputFieldd1.value;
  const rhombusInputAmountd1 = parseFloat(rhombusInputFieldStringd1);
  rhombusInputFieldd1.value = '';

  const rhombusInputFieldd2 = document.getElementById('rhombus-input-d2');
  const rhombusInputFieldStringd2 = rhombusInputFieldd2.value;
  const rhombusInputAmountd2 = parseFloat(rhombusInputFieldStringd2);
  rhombusInputFieldd2.value = '';

  const totalRhombus =0.5 * rhombusInputAmountd1 * rhombusInputAmountd2;
  


  const previousRhombusResultField = document.getElementById('rhombus-result');

  previousRhombusResultField.innerText = totalRhombus


  const rhombusResultField = document.getElementById('rhombus-result-field')

  if(event){
    rhombusResultField.style.display = 'block'
  }
})

// Pentagon
document.getElementById('pentagon-calculate-btn').addEventListener('click', function(event){

  const pentagonInputFieldp = document.getElementById('pentagon-input-p')
  const pentagonInputFieldStringp = pentagonInputFieldp.value;
  const pentagonInputAmountp = parseFloat(pentagonInputFieldStringp);
  pentagonInputFieldp.value = '';

  const pentagonInputFieldb = document.getElementById('pentagon-input-b');
  const pentagonInputFieldStringb = pentagonInputFieldb.value;
  const pentagonInputAmountb = parseFloat(pentagonInputFieldStringb);
  pentagonInputFieldb.value = '';

  const totalPentagon =0.5* pentagonInputAmountp * pentagonInputAmountb;
  

  const previousPentagonResultField = document.getElementById('pentagon-result');

  previousPentagonResultField.innerText = totalPentagon


  const pentagonResultField = document.getElementById('pentagon-result-field')

  if(event){
    pentagonResultField.style.display = 'block'
  }
})

// Ellipse
document.getElementById('ellipse-calculate-btn').addEventListener('click', function(event){
  
  const ellipseInputFielda = document.getElementById('ellipse-input-a')
  const ellipseInputFieldStringa = ellipseInputFielda.value;
  const ellipseInputAmounta = parseFloat(ellipseInputFieldStringa);
  ellipseInputFielda.value = '';

  const ellipseInputFieldb = document.getElementById('ellipse-input-b');
  const ellipseInputFieldStringb = ellipseInputFieldb.value;
  const ellipseInputAmountb = parseFloat(ellipseInputFieldStringb);
  ellipseInputFieldb.value = '';

  const totalEllipse = 3.14 * ellipseInputAmounta * ellipseInputAmountb;
  

  const previousEllipseResultField = document.getElementById('ellipse-result');
  
  previousEllipseResultField.innerText = totalEllipse.toFixed(2);
  
  const ellipseResultField = document.getElementById('ellipse-result-field')

  if(event){
    ellipseResultField.style.display = 'block'
  }
})