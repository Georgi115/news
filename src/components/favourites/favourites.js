import React from 'react'
import './favourites.css'


const Favourites = ({ favoriteSearch, runTheQuery, deleteItemFromFavorite }) => {
    const length = favoriteSearch.length


    return (
        < div className='favorites' >
            <h2>Избранные запросы</h2>
            {length === 0 ? <div className='noSearch'>У вас нет добавленных запросов</div> : favoriteSearch.map((el, id) => {
                return (
                    <div key={id} className='listFavorites'>
                        <div className='favoritesItem'>
                            <p>{el.request}</p>
                            <div>
                                <span onClick={() => deleteItemFromFavorite(id)} className='delete'>Удалить</span>
                                <span onClick={() => runTheQuery(id)
                                } className='searchGo'>Выполнить</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </ div>
    )

}

export default Favourites