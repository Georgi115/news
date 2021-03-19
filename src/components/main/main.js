import React from 'react'
import './main.css'
import Authorization from '../authorization/authorization'
import StartPage from '../startPage/startPage'



const users = [
    {
        login: "Gosha",
        password: 1234
    }
]
class Main extends React.Component {
    state = {
        authorization: false,
        favoriteSearch: [],
        viewModals: false,
        viewErorModals: false,
        styleHeart: false,
        viewHint: false,
    }


    chekingLogin = (userLogin, userPassword, setView) => {
        users.forEach((item) => {
            if (item.login === userLogin & item.password === +userPassword) {
                localStorage.setItem('authorization', true)
                this.setState({
                    authorization: true
                })
            } else {
                setView('view')
            }
        })
    }

    buttonClose = () => {
        localStorage.clear()
        this.setState({
            authorization: false
        })
    }

    saveRequest = (titleRequest, request) => {
        document.querySelector('#in').value = ''
        if (titleRequest === '' || request === '') {
            this.setState({ viewErorModals: true })
            return
        }
        const arr = this.state.favoriteSearch.slice()
        arr.push({ name: titleRequest, request: request })
        this.setState(
            {
                viewModals: false,
                favoriteSearch: arr
            }
        )

    }

    favoriteButton = (inputField) => {

        if (!inputField) {
            this.setState({
                viewHint: true
            })
            return
        }
        const res = this.state.favoriteSearch.some((el) => el.request.toLowerCase() === inputField.toLowerCase())
        if (res) return
        this.setState({ viewModals: true })

    }

    closeHint = () => {
        this.setState({ viewHint: false })
    }
    closeModals = () => {
        this.setState({ viewModals: false })
    }
    closeEror = () => {
        this.setState({ viewErorModals: false })
    }

    deleteItemFromFavorite = (id) => {
        const arr = this.state.favoriteSearch.slice()
        arr.splice(id, 1)
        this.setState({
            favoriteSearch: arr
        })
    }
    checkLocalStorage = () => {
        if (localStorage.getItem('authorization') === 'true') {
            this.setState({
                authorization: true
            })
        }
    }

    render() {
        return (
            <div className={localStorage.getItem('authorization') ? 'mainTrue' : 'main'}>
                {localStorage.getItem('authorization') ? <StartPage
                    deleteItemFromFavorite={this.deleteItemFromFavorite}
                    closeHint={this.closeHint}
                    viewHint={this.state.viewHint}
                    styleHeart={this.state.styleHeart}
                    favoriteSearch={this.state.favoriteSearch}
                    closeEror={this.closeEror}
                    viewErorModals={this.state.viewErorModals}
                    saveRequest={this.saveRequest}
                    closeModals={this.closeModals}
                    favoriteButton={this.favoriteButton}
                    buttonClose={this.buttonClose}
                    viewModals={this.state.viewModals}
                    setState={this.setState}
                /> : <Authorization
                        chekingLogin={this.chekingLogin}
                        viewBlock={this.state.viewBlock} />}
            </div>)
    }
}

export default Main