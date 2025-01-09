import { Request, Response } from "express";
import db from "../model/db";

export const getData = (req: Request, res: Response) => {
  const query = "SELECT * FROM dummyData";
  db.query(query, (err: any, results: any) => {
    if (err) {
      console.error("Errore nell'esecuzione della query:", err);
      res.status(500).send("Errore nel fetch dei dati");
      return;
    }
    res.json(results);
  });
};

export const createData = (req: Request, res: Response) => {
  const { first_name, last_name } = req.body;
  const query = "INSERT INTO dummyData (first_name, last_name) VALUES (?, ?)";

  db.query(query, [first_name, last_name], (err: any) => {
    if (err) {
      res.status(500).send("Errore nell'inserimento dei dati");
      return;
    }
    res.status(201).json({ message: "Dati inseriti con successo" });
  });
};

export const deleteData = (req: Request, res: Response) => {
  const query: string = "DELETE FROM dummyData WHERE employee_id = ?";
  {
    /*db.query(
    query,
    [req.params.id],
    (err: { message: any }, result: { affectedRows: number }) => {
      if (err) {
        console.error("Errore eliminazione:", err);
        res.status(500).send(err.message);
        return;
      }

      if (result.affectedRows === 0) {
        res
          .status(404)
          .json({ message: "Nessun record trovato con questo ID" });
        return;
      }

      res.status(200).json({ message: "Eliminato con successo" });
    }
  );*/
  }
};
