import express, { Request, Response } from "express"
import {knex} from "./database/knex"

const app = express()
app.use(express.json())

app.post("/courses", async (request: Request, response: Response) => {
  const {name} = request.body
  // inserindo dados pelo knex
  await knex("courses").insert({name})
  // await knex.raw("INSERT INTO courses (name) VALUES (?)", [name])

  response.status(201).json()
})

app.get("/courses", async (request :Request, response:Response) => {
  // const name = await knex.raw("SELECT * FROM courses")
  const name = await knex("courses").select().orderBy("name")

  return response.json(name)
})

app.put("/courses/:id", async (request :Request, response:Response) => {
  const {name} = request.body
  const {id} = request.params

  await knex("courses").update({name}).where({id:id})

 return response.json()
})

app.delete("/courses/:id", async (request :Request, response:Response) => {
  const {id} = request.params

  await knex("courses").delete().where({id:id})

 return response.json()
})


//Criação de rotas dos módulos

app.post("/modules", async (request:Request, response:Response) => {
  const {name, course_id} = request.body;
  console.log(name, course_id)

  await knex("courses_modules").insert({name, course_id})

  return response.json({message: "Módulo cadastrado com sucesso!"})

})

//Listagem dos módulos
app.get("/modules", async (request:Request, response:Response) => {

  const modules = await knex("courses_modules").select()

  return response.json(modules)
})



app.listen(3333, () => console.log(`Server is running on port 3333`))
