import React, { useState } from 'react'
import Dropdown from './Dropdown'

const options = [
    {
        title: 'Arabic',
        value: 'red'
    },
    {
        title: 'English',
        value: 'green'
    },
    {
        title: 'Dutch',
        value: 'blue'
    }
];
function Translate() {
    const [language, setlanguage] = useState(options[0]);
    const [Text, setText] = useState('');
    return (
        <>
            <div>
                <input type="text" value={Text} onChange={(e) => setText(e.target.value)} />
                <Dropdown
                    select={language}
                    selecteditemchange={setlanguage}
                    options={options} />
            </div>
        </>
    )
}

export default Translate