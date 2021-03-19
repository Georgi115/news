import React from 'react'
import { useState } from 'react'
import Service from '../service/sevice'
import './startPage.css'
import ListNews from '../listNews/listNews'
import Spinner from '../loadingSpinner/spinner'
import Modals from '../modals/modals'
import Hint from '../hint/hint'
import Favourites from '../favourites/favourites'
import MenuTopHeadlines from '../menuTopHeadlines/menuTopHeadlines'



const service = new Service()
const StartPage = ({ closeHint, viewHint, buttonClose, favoriteButton, viewModals, closeModals, saveRequest, viewErorModals, closeEror, favoriteSearch, deleteItemFromFavorite }) => {
    const [inputField, setInputField] = useState('')
    const [displayedNews, setDisplayedNews] = useState([])
    const [classes, setClasses] = useState(false)
    const [loading, setLoading] = useState(false)
    const [viewInput, setViewInput] = useState('')
    const [heartStyle, setHeartStyle] = useState(false)
    const [pageList, setPageList] = useState('search')
    const [viewNewsTop, setViewNewsTop] = useState(false)

    const searchNews = () => {
        if (inputField === '') { return }
        setViewInput(inputField)
        setDisplayedNews([])
        setLoading(true)
        setClasses(true)
        service.searchNews(inputField).then((res) => {
            setLoading(false)
            setDisplayedNews(res.articles)
        })
    }

    const searchNewsTopHeadlines = (country, category) => {

        switch (country) {
            case "ru":
                setViewInput('Россия')
                break
            case "ua":
                setViewInput('Украина')
                break
            case "us":
                setViewInput('США')
                break
            default:
                break
        }
        setDisplayedNews([])
        setLoading(true)
        setClasses(true)
        setViewNewsTop(false)
        service.topHeadlines(country, category).then((res) => {
            setLoading(false)
            setDisplayedNews(res.articles)
        })

    }
    const changeInputField = (e) => {
        closeHint()
        setHeartStyle(false)
        favoriteSearch.forEach(element => {
            if (element.request === e.value) {
                setHeartStyle(true)
                return
            }
        });
        setInputField(e.value)
    }

    const menuClick = (menu) => {
        setPageList(menu)
    }

    const runTheQuery = (id) => {
        setPageList('search')
        newList(id)
    }
    const newList = (id) => {
        setLoading(true)
        service.searchNews(favoriteSearch[id].request).then((res) => {
            setLoading(false)
            setDisplayedNews(res.articles)
            setViewInput(favoriteSearch[id].request)
        })
    }

    const viewTopMenu = () => {
        if (viewNewsTop) {
            setViewNewsTop(false)
            return
        }
        setViewNewsTop(true)
    }

    return (
        <div style={{}} className={classes ? 'startPage startPageTwo' : 'startPage'}>
            <div className='container'>
                <div className='header'>
                    <i onClick={viewTopMenu} className={viewNewsTop ? 'fa fa-chevron-right fa-3x triggerMenuTwo' : 'fa fa-chevron-right fa-3x animated infinite pulse triggerMenu'}></i>
                    <MenuTopHeadlines viewNewsTop={viewNewsTop} searchNewsTopHeadlines={searchNewsTopHeadlines} />

                    <div className='left-list'>
                        <div className='logo'>
                            <div className='part1'></div>
                            <div className='part2'></div>
                            <div className='part3'></div>
                        </div>
                        <ul>
                            <li onClick={() => menuClick('search')} className={pageList === 'search' ? 'listSearch' : 'default'}>Поиск</li>
                            <li onClick={() => menuClick('favorites')} className={pageList === 'favorites' ? 'listSearch' : 'default'}> Избранное</li>
                        </ul>
                    </div>
                    <div onClick={buttonClose} className='right-list'>
                        Выйти
                    </div>
                </div>
                {pageList === 'search' ? < React.Fragment >
                    <div className={classes ? 'searchPanel searchPanelTwo' : 'searchPanel'}>
                        <div className='blockSearch'>
                            <h1 className={classes ? 'titleSearch' : null}>Поиск новостей</h1>
                            <div>
                                <input id='in' className={classes ? 'inputSearch' : null} onChange={(e) => changeInputField(e.target)} placeholder='Какие новости вас интересуют?'></input>
                                <Hint viewHint={viewHint} />

                                {classes ? <i onClick={() => favoriteButton(inputField)} className={heartStyle ? 'fa fa-heart fa-2x ' : 'fa fa-heart-o fa-2x'}></i> : null}
                                <button onClick={searchNews}>Найти</button>
                            </div>
                        </div>
                    </div>
                    {loading ? <Spinner /> : null}
                    <Modals viewModals={viewModals}
                        closeEror={closeEror}
                        viewErorModals={viewErorModals}
                        saveRequest={saveRequest}
                        closeModals={closeModals}
                        viewInput={viewInput}
                        saveInput={inputField} />
                    {displayedNews.length !== 0 ? <ListNews
                        inputField={viewInput}
                        listNews={displayedNews} /> : null}
                </React.Fragment> : <Favourites
                        deleteItemFromFavorite={deleteItemFromFavorite}
                        inputField={inputField}
                        setInputField={setInputField}
                        favoriteSearch={favoriteSearch}
                        runTheQuery={runTheQuery} />}

            </div>
        </div >
    )

}


export default StartPage