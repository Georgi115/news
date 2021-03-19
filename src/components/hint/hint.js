import React from 'react'
import './hint.css'

const Hint = ({ viewHint }) => {
    return (
        <div className={viewHint ? 'twoHint' : 'hint'} >
            <p className={viewHint ? 'hintText' : 'noText'}>Введите запрос</p>
            <div></div>
        </div>
    )


}

export default Hint