import React from 'react'
import { useState } from 'react'
import './menuTopHeadlines.css'


const MenuTopHeadlines = ({ viewNewsTop, searchNewsTopHeadlines }) => {
    const [country, setContry] = useState('ru')
    const [category, setCategory] = useState('business')
    const countryChange = (e) => {
        setContry(e.target.value)
    }

    const categoryChange = (e) => {
        setCategory(e.target.value)
    }
    return (
        <div className={viewNewsTop ? 'MenuTopHeadlines' : 'defaultMenu'} >
            <div className={viewNewsTop ? 'contentTopHeadlines' : 'defaultContentMenu'}>
                <h3>Вывести топ новости</h3>
                <p>Выберите страну</p>
                <select onChange={(e) => countryChange(e)} id='country'>
                    <option value='ru'>Россия</option>
                    <option value='ua'>Украина</option>
                    <option value='us'>США</option>
                </select>
                <p>Выберите тему новостей</p>
                <select onChange={(e) => categoryChange(e)} id='category'>
                    <option value='business'>Бизнес</option>
                    <option value='entertainment'>Развлечения</option>
                    <option value='sports'>Спорт</option>
                    <option value='health'>Здоровье</option>
                </select>
                <div className='buttonTopHead'> <button onClick={() => { searchNewsTopHeadlines(country, category) }}>Показать новости</button></div>
            </div>
        </div>
    )

}


export default MenuTopHeadlines