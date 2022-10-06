const MYAPP = {};
(function () {
  class Calculator {
    constructor() {
      this.inputs = [];
      this.value = "";
      this.history = [];
      this.currentScreen = currentScreen;
      this.previousScreen = previousScreen;
      this.clear();
    }

    clear() {
      this.currentOperand = "";
      this.previousOperand = "";
      this.operation = null;
    }

    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
      if (number === "." && this.currentOperand.includes(".")) return;
      this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    writeOperator(operation) {
      if (this.currentOperand === "") return;
      if (this.previousOperand !== "") {
        this.eval();
      }
      this.operation = operation;
      this.previousOperand = this.currentOperand;
      this.currentOperand = "";
    }

    eval() {
      let evaluation;
      const previous = parseFloat(this.previousOperand);
      const current = parseFloat(this.currentOperand);

      if (isNaN(previous) || isNaN(current)) return;
      switch (this.operation) {
        case "+":
          evaluation = previous + current;
          break;

        case "-":
          evaluation = previous - current;
          break;

        case "*":
          evaluation = previous * current;
          break;

        case "÷":
          evaluation = previous / current;
          break;

        default:
          return;
      }
      this.currentOperand = evaluation;
      this.previousOperand = "";
      this.operation = undefined;
    }

    updateDisplay() {
      this.currentScreen.innerText = this.currentOperand;
      if (this.operation != null) {
        this.previousScreen.innerText = `${this.previousOperand} ${this.operation}`;
      }
    }

    init() {
      let calc = this;

      // Numbers
      this.inputs.push(
        new CalculatorInput(
          "1",
          "1",
          function (e) {
            calc.value += e.calculatorInput.value;
            calc.appendNumber(
              document.getElementsByClassName("number").innerText
            );
            calc.updateDisplay();
          },
          "[role='1']"
        )
      );

      this.inputs.push(
        new CalculatorInput(
          "2",
          "2",
          function (e) {
            calc.value += e.calculatorInput.value;
            calc.appendNumber(
              document.getElementsByClassName("number").innerText
            );
            calc.updateDisplay();
          },
          "[role='2']"
        )
      );

      this.inputs.push(
        new CalculatorInput(
          "3",
          "3",
          function (e) {
            calc.value += e.calculatorInput.value;
            calc.appendNumber(
              document.getElementsByClassName("number").innerText
            );
            calc.updateDisplay();
          },
          "[role='3']"
        )
      );

      this.inputs.push(
        new CalculatorInput(
          "4",
          "4",
          function (e) {
            calc.value += e.calculatorInput.value;
            calc.appendNumber(
              document.getElementsByClassName("number").innerText
            );
            calc.updateDisplay();
          },
          "[role='4']"
        )
      );

      this.inputs.push(
        new CalculatorInput(
          "5",
          "5",
          function (e) {
            calc.value += e.calculatorInput.value;
            calc.appendNumber(
              document.getElementsByClassName("number").innerText
            );
            calc.updateDisplay();
          },
          "[role='5']"
        )
      );

      this.inputs.push(
        new CalculatorInput(
          "6",
          "6",
          function (e) {
            calc.value += e.calculatorInput.value;
            calc.appendNumber(
              document.getElementsByClassName("number").innerText
            );
            calc.updateDisplay();
          },
          "[role='6']"
        )
      );

      this.inputs.push(
        new CalculatorInput(
          "7",
          "7",
          function (e) {
            calc.value += e.calculatorInput.value;
            calc.appendNumber(
              document.getElementsByClassName("number").innerText
            );
            calc.updateDisplay();
          },
          "[role='7']"
        )
      );

      this.inputs.push(
        new CalculatorInput(
          "8",
          "8",
          function (e) {
            calc.value += e.calculatorInput.value;
            calc.appendNumber(
              document.getElementsByClassName("number").innerText
            );
            calc.updateDisplay();
          },
          "[role='8']"
        )
      );

      this.inputs.push(
        new CalculatorInput(
          "9",
          "9",
          function (e) {
            calc.value += e.calculatorInput.value;
            calc.appendNumber(
              document.getElementsByClassName("number").innerText
            );
            calc.updateDisplay();
          },
          "[role='9']"
        )
      );

      this.inputs.push(
        new CalculatorInput(
          "0",
          "0",
          function (e) {
            calc.value += e.calculatorInput.value;
            calc.appendNumber(
              document.getElementsByClassName("number").innerText
            );
            calc.updateDisplay();
          },
          "[role='0']"
        )
      );

      // Decimal
      this.inputs.push(
        new CalculatorInput(
          ".",
          ".",
          function (e) {
            calc.value += e.calculatorInput.value;
            calc.appendNumber(
              document.getElementsByClassName("number").innerText
            );
            calc.updateDisplay();
          },
          "[role='.']"
        )
      );

      // Operators
      this.inputs.push(
        new CalculatorInput(
          "+",
          "+",
          function (e) {
            calc.value += e.calculatorInput.value;
            calc.writeOperator(
              document.getElementsByClassName("operator").innerText
            );
            calc.updateDisplay();
          },
          "[role='+']"
        )
      );

      this.inputs.push(
        new CalculatorInput(
          "-",
          "-",
          function (e) {
            calc.value += e.calculatorInput.value;
            calc.writeOperator(
              document.getElementsByClassName("operator").innerText
            );
            calc.updateDisplay();
          },
          "[role='-']"
        )
      );

      this.inputs.push(
        new CalculatorInput(
          "*",
          "*",
          function (e) {
            calc.value += e.calculatorInput.value;
            calc.writeOperator(
              document.getElementsByClassName("operator").innerText
            );
            calc.updateDisplay();
          },
          "[role='*']"
        )
      );

      this.inputs.push(
        new CalculatorInput(
          "÷",
          "/",
          function (e) {
            calc.value += e.calculatorInput.value;
            calc.writeOperator(
              document.getElementsByClassName("operator").innerText
            );
            calc.updateDisplay();
          },
          "[role='÷']"
        )
      );

      // DELETE
      this.inputs.push(
        new CalculatorInput(
          "delete",
          "delete",
          function (e) {
            calc.delete();
            calc.updateDisplay();
          },
          "[role='delete']"
        )
      );

      // CLEAR
      this.inputs.push(
        new CalculatorInput(
          "clear",
          "clear",
          function (e) {
            calc.clear();
            calc.updateDisplay();
          },
          "[role='AC']"
        )
      );

      // =
      this.inputs.push(
        new CalculatorInput(
          "=",
          "=",
          function (e) {
            calc.value = Calculator.eval();
          },
          "[role='=']"
        )
      );

      this.inputs.forEach((x) => {
        x.init(calc);
      });
    }
    refreshInput() {
      document.querySelector("input").value = this.value;
    }
    getInputs() {
      return this.inputs;
    }
    getValue() {
      return this.value;
    }
    getHistory() {
      return this.history;
    }
  }
  class CalculatorInput {
    constructor(text, value, clickEvent, selector) {
      this.text = text;
      this.clickEvent = clickEvent;
      this.value = value;
      this.selector = selector;
      this.domObject = null;
      this.calculator = null;
    }
    click() {
      this.domObject.click();
    }
    disable(isDisable) {
      if (isDisable) this.domObject.classList.add("disabled");
      else this.domObject.classList.remove("disabled");
    }
    init(calc) {
      let _this = this;
      this.calculator = calc;
      this.domObject = document.querySelector(this.selector);
      this.domObject.innerHTML = this.text;
      this.domObject.addEventListener("click", function (e) {
        e["calculatorInput"] = _this;
        _this.clickEvent(e);
        _this.calculator.refreshInput();
      });
    }
  }
  MYAPP.calculator = new Calculator();
})();


function sss(){


}

var sss = function(){}

sss();