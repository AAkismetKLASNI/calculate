const inputCalc = document.querySelector('.input-calc');
const outputResult = document.querySelector('.output-result');
const outputPrev = document.querySelector('.output-prev');

const operations = ['+', '-', '/', '*', '%'];

inputCalc.addEventListener('click', ({ target }) => {
  const btn = target.closest('button');

  if (btn) {
    switch (btn.classList[0]) {
      case 'number-btn': {
        inputNumber(btn.textContent);
        break;
      }
      case 'function-btn': {
        inputFunction(btn.textContent);
        break;
      }
    }
  }
});

function inputNumber(value) {
  if (outputResult.textContent === '0') {
    outputResult.textContent = value;
  } else {
    outputResult.textContent += value;
  }
}

function inputFunction(value) {
  if (value === 'AC') {
    outputResult.textContent = '0';
    outputPrev.textContent = '';
    return;
  } else if (value === '=') {
    outputPrev.textContent = outputResult.textContent;

    const result = eval(outputResult.textContent);

    result % 1 === 0
      ? (outputResult.textContent = result)
      : (outputResult.textContent = result.toFixed(1));
    return;
  }

  const findOperation = operations.find(
    (operation) => operation === outputResult.textContent.at(-1)
  );

  findOperation
    ? (outputResult.textContent = outputResult.textContent.replace(/.$/, value))
    : (outputResult.textContent += value);
}
