import { RequestHandler } from "express";
import { RowDataPacket, ResultSetHeader } from "mysql2/promise";
import db from "../model/db";

interface DummyData {
  employee_id: number;
  first_name: string;
  last_name: string;
}

export const getData: RequestHandler = async (req, res) => {
  try {
    const [results] = await db.execute<RowDataPacket[]>(
      "SELECT * FROM dummyData"
    );
    res.json(results);
    return;
  } catch (err) {
    console.error("Error executing query:", err);
    res.status(500).json({ message: "Error fetching data" });
    return;
  }
};

export const createData: RequestHandler<{}, {}, Partial<DummyData>> = async (
  req,
  res
) => {
  const { first_name, last_name } = req.body;

  try {
    const [result] = await db.execute<ResultSetHeader>(
      "INSERT INTO dummyData (first_name, last_name) VALUES (?, ?)",
      [first_name, last_name]
    );
    res.status(201).json({ message: "Data inserted successfully" });
    return;
  } catch (err) {
    console.error("Error inserting data:", err);
    res.status(500).json({ message: "Error inserting data" });
    return;
  }
};

export const deleteData: RequestHandler<{ id: string }> = async (req, res) => {
  try {
    const [result] = await db.execute<ResultSetHeader>(
      "DELETE FROM dummyData WHERE employee_id = ?",
      [req.params.id]
    );

    if (result.affectedRows === 0) {
      res.status(404).json({ message: "No record found with this ID" });
      return;
    }

    res.status(200).json({ message: "Successfully deleted" });
    return;
  } catch (err) {
    console.error("Error deleting:", err);
    res.status(500).json({ message: "Error deleting data" });
    return;
  }
};
