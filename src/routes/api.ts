import { Router } from "express";
import sqlite3, { CONSTRAINT } from 'sqlite3';
import { open } from 'sqlite';
import path from "path";

const router = Router();




  async function openDb() {
    return open({
      filename: path.join(__dirname, '../../db/dua_main.sqlite'),
      driver: sqlite3.Database,
    });
  }



//  get all the categories
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

// get all the Sub_cateogry
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

// get all the dua
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




router.get("/dua/subcat/:subcat_id", async (req, res) => {
  try {
    const db = await openDb();
    const subcat_id = req.params.subcat_id; // Get subcat_id from URL parameter
    const duas = await db.all("SELECT * FROM dua WHERE subcat_id = ?", [subcat_id]);
    
    // if (duas.length === 0) {
    //   return res.status(404).json({ error: "No duas found for this subcategory" });
    // }
    
    res.json(duas);
  } catch (error) {
    console.error("Error fetching duas by subcategory:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});





export default router;
