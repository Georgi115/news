import React from 'react'
import { useState } from 'react'
import './authorization.css'




const Authorization = ({ chekingLogin, viewBlock }) => {
    const [view, setView] = useState('noview')
    const [userLogin, setUserLogin] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [passwordVies, setPasswordVies] = useState(false)
    const inputChange = (e, check) => {
        switch (check) {
            case 'login':
                setView('noview')
                setUserLogin(e.target.value)
                return
            case 'password':
                setView('noview')
                setUserPassword(e.target.value)

                return
            default:
                return
        }
    }

    const clickedSee = () => {
        if (!passwordVies) {
            document.querySelector('#pas').removeAttribute('type')
            setPasswordVies(true)
        } else {
            document.querySelector('#pas').setAttribute('type', 'password')
            setPasswordVies(false)
        }
    }

    return (<div className='Authorization'>
        <div className='formsDiv'>
            <div className='content'>
                <div className='logo'>
                    <div className='part1'></div>
                    <div className='part2'></div>
                    <div className='part3'></div>
                </div>
                <h3>Вход</h3>
                <div className='formDiv'>
                    <div className='login'>
                        <h6>Логин</h6>
                        <input onChange={(e) => inputChange(e, 'login')}></input>
                    </div>
                    <div className='password'>
                        <h6>Пароль</h6>
                        <input id='pas' type='password' onChange={(e) => inputChange(e, 'password')}>
                        </input>
                        <i onClick={clickedSee} className={passwordVies ? 'fa fa-eye-slash fa-2x' : 'fa fa-eye fa-2x'}></i>
                    </div>
                    {view === 'noview' ? null : <p>Неправильный логин или пароль</p>}
                    <div className="button">
                        <button onClick={() => chekingLogin(userLogin, userPassword, setView)}>Войти</button>
                    </div>

                </div>
            </div>
        </div>
    </div>)
}

export default Authorization

//fa-eye-slash