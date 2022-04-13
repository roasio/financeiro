import { type } from '@testing-library/user-event/dist/type';
import { Item } from '../../types/Item';
import { TableLine, TableColumn } from './styles';
import {formatDate} from '../../helpers/dateFilter';
import {categories} from '../../data/categories';
type props = {
    item: Item
}

export const TableItem =({item}: props) => {
    return(
            <TableLine>
                <TableColumn>{formatDate(item.date)}</TableColumn>
                <TableColumn>{categories[item.category].title}</TableColumn>
                <TableColumn>R$ {item.value}</TableColumn>
                <TableColumn>{item.title}</TableColumn>
            </TableLine>
    );
}