import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';
import {DeleteItemFunc, DataItem, OnToggleIncreaseFunc, OnToggleRaiseFunc, OnChangeSalaryFunc} from '../app/app'


export interface EmployeesListProps {
    data: Array<DataItem>,
    onDelete: DeleteItemFunc,
    onToggleIncrease: OnToggleIncreaseFunc,
    onToggleRaise: OnToggleRaiseFunc,
    onChangeSalary: OnChangeSalaryFunc

}

const EmployeesList = ({data, onChangeSalary, onDelete, onToggleIncrease, onToggleRaise}: EmployeesListProps) => {

    return (
        <ul className="app-list list-group">
            {data.map((item) => {
                return (
                    <EmployeesListItem
                        key={item.id}
                        {...item}
                        onDelete={() => onDelete(item.id)}
                        onToggleIncrease={() => onToggleIncrease(item.id)}
                        onToggleRaise={() => onToggleRaise(item.id)}
                        onChangeSalary={onChangeSalary}
                    />
                )
            })}
        </ul>
    )
}

export default EmployeesList;
