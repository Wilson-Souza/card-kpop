import './select.css'

const Select = (props) => {
    return (
        <div className='select'>
            <label>{props.label}</label>
            <select onChange={event => props.onChangeValue(event.target.value)} required={props.required} value={props.value}>
                <option value=""/>
                {props.items.map((item) => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default Select