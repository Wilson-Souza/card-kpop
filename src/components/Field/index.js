import './field.css'

const Field = ({ type = 'text', placeholder, value, label, onChangeValue, required = false }) => {

    const onDigit = (event) => {
        onChangeValue(event.target.value)
    }

    return (
        <div className={`field field-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={onDigit}
                required={required}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Field