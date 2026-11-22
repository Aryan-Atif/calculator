function add (a ,b) 
{ 
  return +a + +b;
}
function sub (a ,b)
{
  return a-b;
}
function multiply (a ,b)
{
  return a*b;
}
function divide (a ,b) 
{
  if (b == 0) return "Math Error!";
  return (a/b);
}

function compile_expression (expression)
{
  let number1_index = 0;
  do 
  {
    if (numpad.includes(expression.at(number1_index)))
    {
      console.log ("index: " + number1_index);
      eval_expression.number1 += expression.at(number1_index);
    }
    number1_index++;
    console.log ("index: " + number1_index);
    console.log ("eval_expression.number1 = " + eval_expression.number1);
  }
  while (eval_expression.number1 == ' ' || numpad.includes(expression.at(number1_index)));
}

function operate (expression)
{
  expression_arr = expression.split(" "); 
  const operation = expression_arr.find((element) => signs.includes(element));
  console.log("Sign found: " + operation);

  let result;
  switch (operation)
  {
    case "plus":
      result = add (expression_arr[0], expression_arr[2]);
      break;
    case "minus":
      result = sub (expression_arr[0], expression_arr[2]);
      break;
    case "mul":
      result = multiply(expression_arr[0], expression_arr[2]);
      break;
    case "div":
      result = divide (expression_arr[0], expression_arr[2]);
      break;
  }
  return result;
}

function sign_name_to_char (sign)
{
  switch (sign)
  {
    case "plus":
      return '+'; 
    case "minus":
      return '-'; 
    case "mul":
      return '*'; 
    case "div":
      return '/'; 
    case "equals":
      return '='; 
  }
}
function eval_input (button_id)
{

  let button_pressed = button_id.slice(4);  /* remove *_btn from the button id */

  if (signs.includes(button_pressed))
  {
 //   button_pressed = sign_name_to_char (button_pressed);
    console.log ("Entered a sign: " + button_pressed);
    expression += (" " + button_pressed + " ");
    expression_display.textContent = expression;
  }
  else if (numpad.includes(button_pressed))
  {
    console.log ("Entered a number: " + button_pressed);
    expression += button_pressed;
    expression_display.textContent = expression;

  }
  else if (clear.includes(button_pressed))
  {
    console.log ("button pressed: " + button_pressed);
    if (button_pressed == "ce")
    {
      expression = expression.slice(0, expression.length - 1);
    }
    else 
    {
        expression = "";
        result_display.textContent = "";
    }
    expression_display.textContent = expression;
  }
  else if (button_pressed == "equals")
  {
    result = operate (expression);
    result_display.textContent = result;
    expression = "";

    console.log ("result = " + result);
  }
  console.log ("Expression = " + expression);

}
function init_calc (button_pressed)
{

  let pressed_button;
  buttons.forEach ((button) =>
  {
    button.addEventListener("click", (e)=>
    {
        pressed_button = e.target.id;
        eval_input(pressed_button);
      });
  });
  
  console.log("Expression: " + expression);
  operate (expression);


}

const signs = ["plus", "minus", "mul", "div"];
const numpad = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
const clear = ["clear", "ce"];

let expression = "";

const result_display = document.querySelector (".result");
const expression_display = document.querySelector (".expression_entered");

const buttons = document.querySelectorAll("button");
init_calc();
