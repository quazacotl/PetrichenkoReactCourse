import './employees-list-item.css';
import {DataItem} from '../app/app'
import {EmployeesListProps} from '../employees-list/employees-list'
import React from "react";

interface EmployeesListItemProps extends DataItem, Omit<EmployeesListProps, 'data'>  {}

const EmployeesListItem = ({id, name, salary, onDelete, onToggleIncrease, onToggleRaise, increase, raise, onChangeSalary}: EmployeesListItemProps) => {

    // const {id, name, salary, onDelete, onToggleIncrease, onToggleRaise, increase, raise, onChangeSalary} = props
    let classNames = 'list-group-item d-flex justify-content-between'
    classNames = increase ? `${classNames} increase` : classNames
    classNames = raise ? `${classNames} like` : classNames

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <li className={classNames}>
            <span
                className="list-group-item-label"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => onToggleRaise}
            >{name}
            </span>
            <input
                type="text"
                className="list-group-item-input"
                defaultValue={salary + '$'}
                onChange={(e: React.FormEvent<HTMLInputElement>) => onChangeSalary(id, +e.currentTarget.value.match('\\d*')[0])}
            />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        className="btn-cookie btn-sm "
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => onToggleIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}

export default EmployeesListItem;
