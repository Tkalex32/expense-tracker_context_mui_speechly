import { useContext } from 'react';
import { ExpenseTrackerContext } from './context/context';
import { incomeCategories, expenseCategories, resetCategories } from './constants/categories';

/*
grafikon rajzoláshoz az adott csoport kigyüjtése  (income v expense),
majd összegének kiszámolása, adott tipusu kategória kiválasztása, aztán az egyes kategórák értékének beállítása, a nullánál nagyobbak kigyüjtése
*/
const useTransactions = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  //kigyüjtjük az adott típusú tranzakciókat. 
  //{id: 1, type: "Income", amount: 50} Income
  const transactionsPerType = transactions.filter((t) => t.type === title);
  //összeadjuk az egyes elemek amount értékét
  const total = transactionsPerType.reduce((acc, curr) => acc += curr.amount, 0);
  //meghatározzuk, milyen kategóriába esnek
  const categories = title === 'Income' ? incomeCategories : expenseCategories;

  //kikeressük a kategóriát, és az itteni értéket növeljük
  //{type: "Salary", amount: 275,....}
  transactionsPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    if (category) category.amount += t.amount;
  });

  //kigyüjtjük azokat, ahol az érték nagyobb nullánál
  //{type: "Dog Food", amount: 0,....} nem kell a grafikonba
  const filteredCategories = categories.filter((sc) => sc.amount > 0);

  //grafikon megjelenítéshez az adatok, színek és feliratok
  const chartData = {
    datasets: [{
      data: filteredCategories.map((c) => c.amount),
      backgroundColor: filteredCategories.map((c) => c.color),
    }],
    labels: filteredCategories.map((c) => c.type),
  };

  return { filteredCategories, total, chartData };
};

export default useTransactions;