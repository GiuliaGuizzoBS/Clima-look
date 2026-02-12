import mysql from "mysql2"

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1808",
  database: "clima_look"
})
