import express from "express"
import { cartAdd, GetAll, cartUpdate, cartDelete } from "../controllers/cart.controller.js"



const Carter = express.Router()
Carter.get("/all",GetAll)
Carter.post("/add",cartAdd)
Carter.put("/update/:id",cartUpdate)
Carter.delete("/delete/:id",cartDelete)

export default Carter
