function addStudentInfo() {
    const studentId = "200524201";
    const studentName = "Logan Leach";
    const studentInfo = document.getElementById("studentInfo");
    studentInfo.textContent = `Student ID: ${studentId} - Name: ${studentName}`;
  }
  
  function createPizzaObject() {
    const pizzaForm = document.getElementById('pizzaForm');
    const pizzaSize = pizzaForm.pizzaSize.value;
    const selectedToppings = [...pizzaForm.toppings.selectedOptions].map(option => option.value);
    const cheeseType = pizzaForm.cheeseType.value;
    const deliveryAddress = pizzaForm.delivery.value;
  
    class Pizza {
      constructor(size, toppings, cheese, address) {
        this.size = size;
        this.toppings = toppings;
        this.cheese = cheese;
        this.address = address;
      }
    }
  
    const pizza = new Pizza(pizzaSize, selectedToppings, cheeseType, deliveryAddress);
  
    displayOrderSummary(pizza);
  }
  
  function displayOrderSummary(pizza) {
    const summaryText = document.getElementById('summaryText');
    summaryText.innerHTML = `
      Size: ${pizza.size}<br>
      Toppings: ${pizza.toppings.join(', ')}<br>
      Cheese: ${pizza.cheese}<br>
      Delivery Address: ${pizza.address}
    `;
  
    const orderSummary = document.getElementById('orderSummary');
    orderSummary.style.display = 'block';
  }
  
  addStudentInfo();
  