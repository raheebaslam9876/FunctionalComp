import { React, useState } from 'react'

function Accordian(props) {
    const [activeindex, setindex] = useState(null);

    const functionclick = (index) => {
        setindex(index)
    }
    const response = props.data.map((data, index) => {
        const active = index == activeindex ? "active" : " ";
        return (
            <div key={data.title}>
                <div className={`title${active}`} onClick={() => functionclick(index)}>
                    <i className='dropdown icon'></i>
                    {data.title}
                </div>
                <div className={`content${active}`}>
                    <p>
                        {data.name}
                    </p>
                </div>
            </div>
        );
    })

    return (
        <div className='ui styles accordian'>
            {response}
        </div>
    )
}

export default Accordian