import React, {useEffect, useState} from 'react';

function CounterComponent() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count > 0) {
            alert('Count değeri değişti');
        }
    }, [count]);

    const countUp = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <p>{count} kez tıklandı</p>
            <button onClick={countUp}>
                Tıkla
            </button>
        </div>
    );
}

export default CounterComponent;