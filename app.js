const express = require("express");
const path = require("path");
const mysql = require("mysql");
const dotenv = require("dotenv");


const bcrypt = require('bcrypt');
const app = express();


dotenv.config({ path: './.env'})

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
})

// вывод данных из бд на сайт
// установка соединения
const db2 = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cafekamchatka'
});

// прописывание пути до страницы, на которой должна изображаться инфа
// + формирование запроса
app.get('/tourist-cafe', function(req, res) {
    db2.query('SELECT cafe_location FROM specifications', (err, rows1) => { 
        if(err) throw err; 
        db2.query('SELECT cafe_name FROM names', (err, rows2) => { 
            if(err) throw err; 
            res.render('tourist-cafe/tourist-cafe', { 
                cafeLocation1: rows1[0].cafe_location,
                cafeLocation2: rows1[1].cafe_location,
                cafeLocation3: rows1[2].cafe_location,
                cafeLocation4: rows1[3].cafe_location,
                cafeLocation5: rows1[4].cafe_location,
                cafeLocation6: rows1[5].cafe_location,
                cafeLocation7: rows1[6].cafe_location,
                cafeLocation8: rows1[7].cafe_location,
                cafeLocation9: rows1[8].cafe_location,
                cafeLocation10: rows1[9].cafe_location,
                cafeLocation11: rows1[10].cafe_location,
                cafeLocation12: rows1[11].cafe_location,

                cafeName1: rows2[0].cafe_name,
                cafeName2: rows2[1].cafe_name,
                cafeName3: rows2[2].cafe_name,
                cafeName4: rows2[3].cafe_name,
                cafeName5: rows2[4].cafe_name,
                cafeName6: rows2[5].cafe_name,
                cafeName7: rows2[6].cafe_name,
                cafeName8: rows2[7].cafe_name,
                cafeName9: rows2[8].cafe_name,
                cafeName10: rows2[9].cafe_name,
                cafeName11: rows2[10].cafe_name,
                cafeName12: rows2[11].cafe_name
            });
        });
    }); 
});

app.get('/mishka', function(req, res) {
    db2.query('SELECT dish_name FROM menu', (err, rows1) => { 
        if(err) throw err; 
        db2.query('SELECT price FROM menu', (err, rows2) => { 
            if(err) throw err; 
            db2.query('SELECT cafe_location FROM specifications WHERE cafe_id = 2', (err, rows3) => { 
                if(err) throw err;
                db2.query('SELECT with_animals FROM specifications WHERE cafe_id = 2', (err, rows4) => { 
                    if(err) throw err; 
                    db2.query('SELECT avg_bil FROM specifications WHERE cafe_id = 2', (err, rows5) => { 
                        if(err) throw err; 
                        db2.query('SELECT working_hours FROM specifications WHERE cafe_id = 2', (err, rows6) => { 
                            if(err) throw err; 
                            db2.query('SELECT social_network FROM specifications WHERE cafe_id = 2', (err, rows7) => { 
                                if(err) throw err; 
                                res.render('mishka', { 
                                    dish1: rows1[4].dish_name,
                                    dish2: rows1[5].dish_name,
                                    dish3: rows1[6].dish_name,
                                    dish4: rows1[7].dish_name,
                                    dish5: rows1[8].dish_name,
                                    dish6: rows1[9].dish_name,
                                    dish7: rows1[10].dish_name,
                                    dish8: rows1[11].dish_name,
                                    dish9: rows1[12].dish_name,
                                    dish10: rows1[13].dish_name,
                                    dish11: rows1[14].dish_name,
                                    dish12: rows1[15].dish_name,
                                    dish13: rows1[16].dish_name,
                                    dish14: rows1[17].dish_name,
                                    dish15: rows1[18].dish_name,
                                    dish16: rows1[19].dish_name,
                                    dish17: rows1[20].dish_name,
                                    dish18: rows1[21].dish_name,
                                    dish19: rows1[22].dish_name,
                                    dish20: rows1[23].dish_name,
                                    dish21: rows1[24].dish_name,

                                    price1: rows2[4].price,
                                    price2: rows2[5].price,
                                    price3: rows2[6].price,
                                    price4: rows2[7].price,
                                    price5: rows2[8].price,
                                    price6: rows2[9].price,
                                    price7: rows2[10].price,
                                    price8: rows2[11].price,
                                    price9: rows2[12].price,
                                    price10: rows2[13].price,
                                    price11: rows2[14].price,
                                    price12: rows2[15].price,
                                    price13: rows2[16].price,
                                    price14: rows2[17].price,
                                    price15: rows2[18].price,
                                    price16: rows2[19].price,
                                    price17: rows2[20].price,
                                    price18: rows2[21].price,
                                    price19: rows2[22].price,
                                    price20: rows2[23].price,
                                    price21: rows2[24].price,

                                    location: rows3[0].cafe_location,
                                    animals: rows4[0].with_animals,
                                    bill: rows5[0].avg_bil,
                                    hours: rows6[0].working_hours,
                                    social: rows7[0].social_network,
                                });
                            });
                        });
                    });
                });
            });
        });
    }); 
});



app.use(express.static(__dirname + '/public'));
// const publicDirectory = path.join(__dirname + './public')
// app.use(express.static(publicDirectory))


//парсит URL-encoded bodies (as sent by HTML forms)
//grab the data from any foms
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.set('view engine', 'hbs');

db.connect( (error) => {
    if(error){
        console.log(error)
    } else{
        console.log("MySQL Connected")
    }
})

//Define routes

app.use('/', require('./router/pages'));
app.use('/auth', require('./router/auth'));


app.listen(5000, () => {
    console.log("Server log on Port 5000")
})
