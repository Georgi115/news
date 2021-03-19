import React from 'react'
import { useState } from 'react'
import './listNews.css'


const ListNews = ({ listNews, inputField }) => {
    const [viewList, setViewList] = useState('cube')
    const viewContent = (viewContent) => {
        switch (viewContent) {
            case 'cube':
                setViewList('cube')
                return
            case 'list':
                setViewList('list')
                return
            default:
                return
        }
    }

    return (<div className='ListNews'>
        <div className='listBlockNews'>
            <div className='headerNews'>
                <div className='right-header'>
                    <h3>Новости по запросу "{inputField} "</h3>
                    <span>Найдено новостей: {listNews.length}</span>
                </div>
                <div className='left-header'>
                    <i onClick={() => viewContent('list')} className={viewList === 'list' ? 'fa fa-list list' : 'fa fa-list'} ></i>
                    <i onClick={() => viewContent('cube')} className={viewList === 'cube' ? 'fa fa-th listCube' : 'fa fa-th'}></i>
                </div>
            </div>
            <div className={viewList === 'cube' ? 'listItemNews' : 'listItemNews flexDir'} >
                {listNews.map((el, i) => {
                    return (
                        <div key={i} className={viewList === 'cube' ? 'itemNews' : 'itemNews itemNewsTwo'}>
                            <div className='img' style={{ backgroundImage: `url(${el.urlToImage ? el.urlToImage : 'https://avatars.mds.yandex.net/get-pdb/1554263/cdeb4c07-ce6d-433b-a5d1-6371594727f9/s1200?webp=false'})` }}></div>
                            <div className={viewList === 'cube' ? 'textToNews' : 'textToNews textToNews textToNewsTwo'}>
                                <div className={viewList === 'cube' ? 'titleNews' : 'titleNews titleNewsTwo'}>{el.title}</div>
                                {viewList === 'list' ? <div className='description-text'>{el.description}</div> : null}
                                <div className='description'>Источник : {el.source.name}</div>
                                <div className='read'><a target='targetBlank' href={el.url}>Читать далее</a> </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>

    </div>)

}


export default ListNews