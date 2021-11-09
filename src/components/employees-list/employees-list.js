import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleRaise, onChangeSalary}) => {

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
