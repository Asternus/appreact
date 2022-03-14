import React, {useState} from 'react'; //if you click rsc WS create this form

const Texter = function () {
    const [value,setValue] = useState("ТЕКСТ В ИНПУТЕ")

    return (
        <div>
            <h1>{value}</h1>
            <input type="text"
                   value={value}
                   onChange={event => setValue(event.target.value)}
            />
        </div>
    )

}

export default Texter;