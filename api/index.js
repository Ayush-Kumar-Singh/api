const scapper = require('./anikatsu.js')
const express = require('express')
const { env } = require('process')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/api', (req, res) => {
    res.send('API Currently in Use')
})

app.get('/api/getPopular/:page', async (req, res) => {
    const result = await scapper.popular(req.params.page)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})

app.get('/api/vidcdn/:id', async (req, res) => {
    const result = await scapper.vidcdn(req.params.id)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})

app.get('/api/getNewSeason/:page', async (req, res) => {
    const result = await scapper.newSeason(req.params.page)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})

app.get('/api/search/:query/:page', async (req, res) => {

    const result = await scapper.search(req.params.query, req.params.page)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})

app.get('/api/getGenre/:genre/:page', async (req, res) => {

    const result = await scapper.scrapeGenre(req.params.genre, req.params.page)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})

app.get('/api/getAnimeList/:aph/:page', async (req, res) => {

    const result = await scapper.animeList(req.params.aph, req.params.page)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})

app.get('/api/getAnime/:query', async (req, res) => {

    const result = await scapper.anime(req.params.query)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})

app.get('/api/getRecentlyAdded/:page', async (req, res) => {

    const result = await scapper.recentlyAdded(req.params.query)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})

app.get('/api/getOngoingSeries', async (req, res) => {

    const result = await scapper.ongoingSeries(req.params.query)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})

app.get('/api/getEpisode/:query', async (req, res) => {

    const result = await scapper.watchAnime(req.params.query)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})

app.get('/api/getRecent/:type/:page', async (req, res) => {

    const result = await scapper.newReleases(req.params.type, req.params.page)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})

app.get('/api/getSubCategory/:subCategory/:page', async (req, res) => {

    const result = await scapper.subCategories(req.params.subCategory, req.params.page)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})

app.get('/api/getMovies/:page', async (req, res) => {

    const result = await scapper.animeMovie(req.params.page)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})

app.get('/api/getOngoing/:page', async (req, res) => {

    const result = await scapper.ongoingAnime(req.params.page)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})

app.get('/api/getCompleted/:page', async (req, res) => {

    const result = await scapper.completedAnime(req.params.page)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})

app.get('/api/getAllAnime/:page', async (req, res) => {

    const result = await scapper.loadAllAnime(req.params.page)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})


// Pagination 
// Search 
app.get('/api/searchPage/:query/:page', async (req, res) => {

    const result = await scapper.searchPagination(req.params.query, req.params.page)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})

app.get('/api/popularPage/:page', async (req, res) => {

    const result = await scapper.popularPagination(req.params.page)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})
app.get('/api/completedPage/:page', async (req, res) => {

    const result = await scapper.completedPagination(req.params.page)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})
app.get('/api/ongoingPage/:page', async (req, res) => {

    const result = await scapper.ongoingPagination(req.params.page)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})

app.get('/api/moviePage/:page', async (req, res) => {

    const result = await scapper.moviePagination(req.params.page)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})

app.get('/api/subCategoryPage/:subCategory/:page', async (req, res) => {

    const result = await scapper.subCategoryPagination(req.params.subCategory, req.params.page)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})

app.get('/api/getRecentPage/:type/:page', async (req, res) => {

    const result = await scapper.latestPage(req.params.type, req.params.page)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})

app.get('/api/newSeaPage/:page', async (req, res) => {

    const result = await scapper.newSeaPage(req.params.page)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})
app.get('/api/getGenrePage/:genre/:page', async (req, res) => {

    const result = await scapper.genrePage(req.params.genre, req.params.page)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})

app.get('/api/getAnimeListPage/:aph/:page', async (req, res) => {

    const result = await scapper.animelistPage(req.params.aph, req.params.page)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})
app.get('/api/allAnimeListPage/:page', async (req, res) => {

    const result = await scapper.allAnimelistPage(req.params.page)
    res.header("Content-Type", 'application/json');
    res.send(JSON.stringify(result, null, 4))
})

port = env.PORT || 5000
app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})
