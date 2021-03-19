import React from 'react'
import { useState } from 'react'
import './modals.css'

const Modals = ({ viewInput, closeModals, saveRequest, viewErorModals, closeEror, viewModals, saveInput, }) => {
    const [titleRequest, setTitleRequest] = useState('')
    const changeTitle = (e) => {
        closeEror()
        setTitleRequest(e.value)
    }
    return (
        <div className={viewModals ? 'modals' : 'modalsClose'}>
            <div className='modalsBlock'>
                <div className='modalsContent'>
                    <h3>Сохранить запрос</h3>
                    <h5>Запрос</h5>
                    <div className='request'>{saveInput}</div>
                    <h5><span>*</span>Название запроса</h5>
                    <div className='name'><input onChange={(e) => changeTitle(e.target)} placeholder="Укажите название"></input></div>
                    {viewErorModals ? <div><p className='errorModals'>Введите название запроса</p> </div> : null}
                    <div className='buttonDiv'>

                        <button onClick={closeModals} className='noSave'>Не сохранять</button>
                        <button onClick={() => saveRequest(titleRequest, saveInput)} className='save'>Сохранить</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Modals