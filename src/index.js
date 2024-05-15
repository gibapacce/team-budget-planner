// src/index.js

// Deal class representing each deal
class Deal {
  constructor(vendor, amount) {
    this.vendor = vendor;
    this.amount = amount;
  }
}

// TeamBudgetPlanner class to manage deals and budgets
class TeamBudgetPlanner {
  constructor() {
    this.deals = [];
  }

  // Add a new deal
  addDeal(vendor, amount) {
    const deal = new Deal(vendor, parseFloat(amount));
    this.deals.push(deal);
  }

  // Calculate total expenses
  calculateTotalExpenses() {
    return this.deals.reduce((total, deal) => total + deal.amount, 0);
  }

  // Decide annual budget based on expenses
  async decideBudget() {
    const totalExpenses = this.calculateTotalExpenses();
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          `The annual budget for the team should be at least $${
            totalExpenses + 1000
          }`,
        );
      }, 1000);
    });
  }

  // Update the displayed expenses and budget
  async updateDisplay() {
    const expensesDiv = document.getElementById('expenses');
    const budgetDiv = document.getElementById('budget');

    const totalExpenses = this.calculateTotalExpenses();
    expensesDiv.innerHTML = `<p>Total Expenses: $${totalExpenses}</p>`;

    const budgetMessage = await this.decideBudget();
    budgetDiv.innerHTML = `<p>${budgetMessage}</p>`;
  }
}

// Immediately Invoked Function Expression (IIFE) to initialize the app
(async () => {
  const teamBudgetPlanner = new TeamBudgetPlanner();

  // Handle form submission
  const form = document.getElementById('dealForm');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const vendor = event.target.vendor.value;
    const amount = event.target.amount.value;

    teamBudgetPlanner.addDeal(vendor, amount);

    await teamBudgetPlanner.updateDisplay();

    form.reset();
  });

  // Initial display update
  await teamBudgetPlanner.updateDisplay();
})();
