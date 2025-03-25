import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Inserts seed entries
    await knex("courses").insert([
        {  name: "CSS" },
        {  name: "Javascript" },
        {  name: "React" },
        {  name: "Node.js" },
        {  name: "Git" },
        {  name: "Github" },
        {  name: "Typescript" },
    ]);
};
