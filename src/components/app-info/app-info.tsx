import "./app-info.css";

interface AppInfoProps {
    employeesNumber: number,
    increasedEmployeesNumber: number
}

const AppInfo = (props: AppInfoProps) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {props.employeesNumber}</h2>
            <h2>Премию получат: {props.increasedEmployeesNumber}</h2>
        </div>
    )
}

export default AppInfo;
