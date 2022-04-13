import { useState, useEffect } from "react";
import * as C from "./App.styles";
import { Item } from "./types/Item";
import { Category } from "./types/category";
import { categories } from "./data/categories";
import { items } from "./data/items";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <C.container>
      <C.header>
        <C.headertext>Sistema Financeiro</C.headertext>
      </C.header>
      <C.body>
        {/*ÁREA DE INFORMAÇÕES */}

        {/*ÁREA DE INSERÇÃO */}

        <TableArea list={filteredList} />
      </C.body>
    </C.container>
  );
};

export default App;
