import React, { useState, useEffect, useRef } from 'react'

function Dropdown(props) {
    const [open, setopen] = useState(false);
    const ref = useRef()
    useEffect(() => {
        const onBodyclick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }
            setopen(false);
        }

        document.body.addEventListener('Click',
            onBodyclick

        );

        return () => {
            document.removeEventListener('click', onBodyclick)
        }
    }, []);
    const response = props.options.map((data) => {
        if (data.value === props.select.value) {
            return null;
        }
        return (
            <div key={data.value}>
                <div className='item' onClick={() => props.selecteditemchange(data)}>
                    {data.title}
                </div>
            </div>
        );
    });
    return (

        <div ref={ref} className="ui form" style={{ width: '300px' }}>
            <div className="field">
                <label className="label">Select a Color</label>
                <div onClick={() => setopen(!open)} className={`selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{props.select.title}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>{response}</div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown