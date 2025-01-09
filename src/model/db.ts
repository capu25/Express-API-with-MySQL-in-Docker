import mysql from "mysql2";

// --- DB CONNECTION SPEC ---
const db = mysql.createConnection({
  host: "localhost", //OR WATHEVER
  user: "USER",
  password: "PASSWORD",
  database: "DB_NAME",
});

// --- CONNECTION LOGIC ---
db.connect((err) => {
  if (err) {
    console.error("CONNECTION ERROR: ", err);
    return;
  }
  console.log("CONNECTED TO CONTAINER");
});

export default db;
