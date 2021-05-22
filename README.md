# Sequelize Transactions

A REST blog api to make crud operations using sequelize transactions

### Configration

---

Make a MySQL database with the name "node_blogs"

Inside `config/db.js ` use your database credentials

### Installation

---

Run the following command

```javascript
npm install

npm start
```

### Routes

---

| URL         | Method | Parameter | Description                            |
| ----------- | ------ | --------- | -------------------------------------- |
| /blogs      | GET    | -         | View all Blog Posts                    |
| /blogs/add  | POST   | -         | Add a blog to the DB                   |
| /blogs/{id} | DELETE | id        | Delete a particular blog with given id |
