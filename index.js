/* 
1.	Přidejte do stránky soubor s JavaScriptem.
2.	Napište funkci selectPlan s jedním parametrem planNumber. Tento parametr bude představovat číslo plánu. 
     Funkce podle čísla plánu vybere ze stránky správný DOM element a přidá k němu CSS třídu plan--selected.
3.	Vyzkoušejte vaši funkci použít ve stránce pro výběr plánu.
4.	Opakovaným voláním funkce selectPlan lze na stránce postupně vybrat všechny plány. 
    My bychom však chtěli, aby mohl být vybrán vždy nejvýš jeden. Upravte funkci selectPlan tak, 
    že vybere plán zadaný v parametru a u ostatních plánů výběr zruší. Ke zrušení výběru stačí z příslušného prvku odebrat třídu plan--selected.
5.	Opět vyzkoušejte funkci ve stránce. Neuvidíte výběr jednotlivých plánů (JavaScript je vybere velmi rychle), 
    ale na stránce by měl zůstat poslední vybraný plán.
*/

function selectPlan(planNumber) {
  const plans = document.querySelectorAll('.plan');
  plans.forEach(plan => {
    plan.classList.remove('plan--selected');
  });

  const selectedPlan = document.querySelector(`.plan[data-plan-number="${planNumber}"]`);
  if (selectedPlan) {
    selectedPlan.classList.add('plan--selected');
  }
}

const selectButtons = document.querySelectorAll('.select-button');
selectButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const plan = event.target.closest('.plan');
    if (plan) {
      const planNumber = plan.getAttribute('data-plan-number');
      selectPlan(planNumber);
    }
  });
});