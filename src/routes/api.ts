import { Router } from "express";
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from "path";

const router = Router();




  async function openDb() {
    return open({
      filename: path.join(__dirname, '../../db/dua_main.sqlite'),
      driver: sqlite3.Database,
    });
  }




router.get("/categories", async (req, res) => {
  try {
    const db = await openDb();
    const categories = await db.all("SELECT * FROM category");
    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get("/sub_categories", async (req, res) => {
  try {
    const db = await openDb();
    const categories = await db.all("SELECT * FROM sub_category");
    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get("/dua", async (req, res) => {
  try {
    const db = await openDb();
    const categories = await db.all("SELECT * FROM dua");
    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
