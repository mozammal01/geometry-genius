
const resultField = document.getElementById('result-field');
// Triangle
document.getElementById('triangle-calculate-btn').addEventListener('click', function (event) {
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

  if (isNaN(triangleInputAmountB)) {
    alert('Please enter a valid number')
  }
  else if (isNaN(triangleInputAmountH)) {
    alert('Please enter a valid number')
  }
  else {
    triangleResultField.style.display = 'block'
  }
})

// Rectangle
document.getElementById('rectangle-calculate-btn').addEventListener('click', function (event) {
  const rectangleInputFieldw = document.getElementById('rectangle-input-w')
  const rectangleInputFieldStringw = rectangleInputFieldw.value;
  const rectangleInputAmountw = parseFloat(rectangleInputFieldStringw);
  rectangleInputFieldw.value = '';

  const rectangleInputFieldl = document.getElementById('rectangle-input-l');
  const rectangleInputFieldStringl = rectangleInputFieldl.value;
  const rectangleInputAmountl = parseFloat(rectangleInputFieldStringl);
  rectangleInputFieldl.value = '';

  const totalRectangle = rectangleInputAmountw * rectangleInputAmountl;


  const previousRectangleResultField = document.getElementById('rectangle-result');

  previousRectangleResultField.innerText = totalRectangle


  const rectangleResultField = document.getElementById('rectangle-result-field')

  if (isNaN(rectangleInputAmountw)) {
    alert('Please enter a valid number')
  }
  else if (isNaN(rectangleInputAmountl)) {
    alert('Please enter a valid number')
  }
  else {
    rectangleResultField.style.display = 'block'
  }
})

// Parallelogram
document.getElementById('parallelogram-calculate-btn').addEventListener('click', function (event) {

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

  if (isNaN(parallelogramInputAmountb)) {
    alert('Please enter a valid number')
  }
  else if (isNaN(parallelogramInputAmounth)) {
    alert('Please enter a valid number')
  }
  else {
    parallelogramResultField.style.display = 'block'
  }
})

// Rhombosh
document.getElementById('rhombus-calculate-btn').addEventListener('click', function (event) {

  const rhombusInputFieldd1 = document.getElementById('rhombus-input-d1')
  const rhombusInputFieldStringd1 = rhombusInputFieldd1.value;
  const rhombusInputAmountd1 = parseFloat(rhombusInputFieldStringd1);
  rhombusInputFieldd1.value = '';

  const rhombusInputFieldd2 = document.getElementById('rhombus-input-d2');
  const rhombusInputFieldStringd2 = rhombusInputFieldd2.value;
  const rhombusInputAmountd2 = parseFloat(rhombusInputFieldStringd2);
  rhombusInputFieldd2.value = '';

  const totalRhombus = 0.5 * rhombusInputAmountd1 * rhombusInputAmountd2;



  const previousRhombusResultField = document.getElementById('rhombus-result');

  previousRhombusResultField.innerText = totalRhombus


  const rhombusResultField = document.getElementById('rhombus-result-field')

  if (isNaN(rhombusInputAmountd1)) {
    alert('Please enter a valid number')
  }
  else if (isNaN(rhombusInputAmountd2)) {
    alert('Please enter a valid number')
  }
  else {
    rhombusResultField.style.display = 'block'
  }
})
// Pentagon
document.getElementById('pentagon-calculate-btn').addEventListener('click', function (event) {

  const pentagonInputFieldp = document.getElementById('pentagon-input-p')
  const pentagonInputFieldStringp = pentagonInputFieldp.value;
  const pentagonInputAmountp = parseFloat(pentagonInputFieldStringp);
  pentagonInputFieldp.value = '';

  const pentagonInputFieldb = document.getElementById('pentagon-input-b');
  const pentagonInputFieldStringb = pentagonInputFieldb.value;
  const pentagonInputAmountb = parseFloat(pentagonInputFieldStringb);
  pentagonInputFieldb.value = '';

  const totalPentagon = 0.5 * pentagonInputAmountp * pentagonInputAmountb;


  const previousPentagonResultField = document.getElementById('pentagon-result');

  previousPentagonResultField.innerText = totalPentagon


  const pentagonResultField = document.getElementById('pentagon-result-field')

  if (isNaN(pentagonInputAmountb)) {
    alert('Please enter a valid number')
  }
  else if (isNaN(pentagonInputAmountp)) {
    alert('Please enter a valid number')
  }
  else {
    pentagonResultField.style.display = 'block'
  }
})

// Ellipse
document.getElementById('ellipse-calculate-btn').addEventListener('click', function () {

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

  if (isNaN(ellipseInputAmounta)) {
    alert('Please enter a valid number')
  }
  else if (isNaN(ellipseInputAmountb)) {
    alert('Please enter a valid number')
  }
  else {
    ellipseResultField.style.display = 'block'
  }
});