let expression = '';
    const resultInput = document.getElementById('result');

    function appendNumber(number) {
      expression += number;
      resultInput.value = expression;
    }

    function appendOperator(operator) {
      expression += operator;
      resultInput.value = expression;
    }

    function appendDecimal() {
        if (expression === '' || !expression.endsWith('.')) {
          expression += '.';
          resultInput.value = expression;
        }
      }
      

    function calculateResult() {
      try {
        const result = eval(expression);
        expression = result.toString();
        resultInput.value = expression;
      } catch (error) {
        expression = '';
        resultInput.value = 'Error';
      }
    }

    function clearResult() {
      expression = '';
      resultInput.value = '';
    }