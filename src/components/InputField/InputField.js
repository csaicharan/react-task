import React from 'react';
import { Label } from './InputField.styled';

const RenderInputField = ({ id, label, name, type, value }, onChangeEventHandler) => {
    return (
        <div>
            <Label htmlFor={id}>{label || name}</Label>
            <input
                id={id}
                name={name}
                onChange={onChangeEventHandler}
                type={type}
                value={value} />
        </div>
    );
}

const InputField = (props) => {
    const onChange = (event) => {
        props.onChange(event.target.name, event.target.value);
    };
    return RenderInputField(props, onChange);
}

export default InputField;