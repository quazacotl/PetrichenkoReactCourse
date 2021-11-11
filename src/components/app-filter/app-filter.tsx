import "./app-filter.css";
import {FilterTypes} from '../app/app'

interface AppFilterProps {
    filter: FilterTypes,
    onFilterEmps: (filter: FilterTypes) => void
}

interface ButtonDataInterface {
    name: FilterTypes,
    label: string
}

const AppFilter = (props: AppFilterProps) =>  {
    const buttonData: Array<ButtonDataInterface> = [
        {name: FilterTypes.All, label: 'Все сотрудники'},
        {name: FilterTypes.Raised, label: 'На повышение'},
        {name: FilterTypes.Salary, label: 'З/П больше 1000$'}
    ]


    const buttons = buttonData.map(({name, label}) => {
        const active: boolean = props.filter === name
        const classes: string = active ? 'btn-light' : 'btn-outline-light'
        return (
            <button type="button"
                    className={`btn ${classes}`}
                    key={name}
                    onClick={() => props.onFilterEmps(name)}
            >
                {label}
            </button>
        )
    });

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;
