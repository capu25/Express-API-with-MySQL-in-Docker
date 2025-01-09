import mysql from "mysql2/promise";

// --- DB CONNECTION SPEC ---
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "localBackend",
});

// --- Test the Connection ---
(async () => {
  try {
    const connection = await db.getConnection();
    console.log("CONNECTED TO CONTAINER");
    connection.release(); // Release the connection back to the pool
  } catch (err) {
    console.error("DATABASE CONNECTION ERROR:", err);
  }
})();

export default db;
