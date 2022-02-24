/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 

exports.up = async function (knex) {
    await knex.schema 
      .createTable('cars', table => {
          table.increments('car_id')
          table.string('car_name', 200).notNullable().unique()
      })
      .createTable('cities', table => {
        table.increments('ingredient_id')
        table.string('city_name', 200).notNullable().unique()
        table.string('city_state', 50)
    })
}
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

 exports.down = async function(knex) {
   await knex.schema
  .dropTableIfExists('cars')
  .dropTableIfExists('cities')
};
