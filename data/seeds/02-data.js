const cars = [
    { car_name: 'Ferarri'},
    { car_name: 'Jaguar'},
]

const cities = [
    { city_name: 'Boston', city_state: 'MA'},
    { city_name: 'New York', city_state: 'NY'},
    { city_name: 'Chicago', city_state: 'Il'},
    { city_name: 'Portland', city_state: 'ME'},
]

exports.seed = async function (knex) {
    await knex('cars').insert(cars)
    await knex('cities').insert(cities)
}