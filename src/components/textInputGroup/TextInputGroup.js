import React from 'react'

const TextInputGroup = ({name, value, label, placeholder, onChange,error}) => {
    
    return (
        <div className="form-group mb-3">
            <label htmlFor={name} className="mb-1">{label}</label>
            <input 
                id={name} 
                name={name} 
                type="text" 
                value={value}
                className={`form-control ` + (error ? 'is-invalid' : null)} 
                placeholder={placeholder} 
                onChange={onChange} 
            />
            {error &&
                <div className="invalid-feedback">
                    {error}
                </div>
            }
        </div>
    )
}

TextInputGroup.defaultProps = {
    name: "name",
    faculty: "Faculty",
    phone: "123456789",
    label: "Label",
    placeholder: "Placeholder here...",
}

export default TextInputGroup
