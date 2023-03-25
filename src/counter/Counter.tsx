import {useState, useEffect} from 'react';
import './Counter.css'

export function Counter() {
    const [value,setValue] = useState(0);
    const [minusButtonClass,setMinusButtonClass] = useState('counterButtonMinusActive');

    useEffect(() => {
        document.getElementById('display').innerHTML = `vezes cinco: ${5.00 * value}`;
    }, [value]);

    function down() {
        if(value<=1) {
            setMinusButtonClass('counterButtonMinusInactive')
        }

        if(value>0) {
            setValue(value-1);
        }
        
    }

    function up() {
        setValue(value+1);
        setMinusButtonClass('counterButtonMinusActive')
    }

    return (
        <div className="wrapper">
            <div className='counterWrapper'>
                <button className={minusButtonClass} onClick={down}>-</button>
                <p>{value}</p>
                <button className='counterButtonPlusActive' onClick={up}>+</button>
            </div>
            <div id='display'></div>
        </div>
        
)};