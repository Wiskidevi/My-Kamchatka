const mysql = require("mysql");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const express = require("express");
const app = express();

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});



//регистрация
exports.auth = (req, res) => {
    console.log(req.body)

    const { name, email, password, passwordConfirm } = req.body;

    db.query('SELECT email FROM users WHERE email = ?', [email], async (error, results) => {
        if(error){
            console.log(error);
        }

        if( results.length > 0 ){
            return res.render('register', {
                message: 'Этот адрес электронной почты уже используется'
            })
        } else if( password !== passwordConfirm){
            return res.render('register', {
                message: 'Пароли не совпадают'
            });
        }

        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

        db.query('INSERT INTO users SET ?', {name: name, email: email, password: hashedPassword }, (error, results) =>{
            if(error){
                console.log(error);
            } else {
                return res.render('dashboard', {
                    message: 'Спасибо за регистрацию!',
                    name: name,
                    email: email,
                });
            }
        })
    });
}


//вход в аккаунт
app.post('/register', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
  
    db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (error, results, fields) => {
      if (results.length > 0) {
        res.render('dashboard'); // Перенаправление на страницу после успешного входа
      } else {
        res.render('register', { error: 'Неверный email или пароль' }); // Вывод ошибки на страницу входа
      }
    });
  });
