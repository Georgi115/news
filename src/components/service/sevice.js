const apiKey = '47f1a813c11c483a853f2202d1c6582e'

class Service {

    async searchNews(q) {
        const res = await fetch(`https://news-api-v2.herokuapp.com/everything?q=${q}&language=ru&apiKey=${apiKey}`)
        const result = await res.json()
        return result
    }

    async topHeadlines(country, category) {
        const res = await fetch(`https://news-api-v2.herokuapp.com/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`)
        const result = await res.json()
        return result
    }
}

export default Service