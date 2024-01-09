const express = require("express");
const app = express();
const router = express.Router();

router.get('/', (reg, res) => {
    res.render('index');
});

router.get('/map', (reg, res) => {
    res.render('map/map');
});

router.get('/about-company', (reg, res) => {
    res.render('about-company/about-company');
});

router.get('/buisnes', (reg, res) => {
    res.render('buisnes/buisnes');
});

router.get('/events', (reg, res) => {
    res.render('events/events');
});

router.get('/history', (reg, res) => {
    res.render('history/history');
});

router.get('/news', (reg, res) => {
    res.render('news/news');
});

router.get('/animals', (reg, res) => {
    res.render('photogallery-animals/animals');
});

router.get('/plants', (reg, res) => {
    res.render('photogallery-plants/plants');
});

router.get('/plans', (reg, res) => {
    res.render('plans/plans');
});

router.get('/tourist', (reg, res) => {
    res.render('tourist/tourist');
});

router.get('/tourist-cafe', (reg, res) => {
    res.render('tourist-cafe/tourist-cafe');
});

router.get('/weather', (reg, res) => {
    res.render('weather/weather');
});

router.get('/at-development', (reg, res) => {
    res.render('at-development');
});

router.get('/register', (reg, res) => {
    res.render('register');
});

router.get('/autoriz', (reg, res) => {
    res.render('autoriz');
});

router.get('/dashboard', (reg, res) => {
    res.render('dashboard');
});

router.get('/mishka', (reg, res) => {
    res.render('mishka');
});

module.exports = router;