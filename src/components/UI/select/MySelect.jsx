import React from 'react';

const MySelect = ({optional, defaultValue, value, onChange}) => {
    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {optional.map(option=>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default MySelect;