/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('games', (table) => {
        table.increments('id_games').primary();
        table.string('Name', 150).notNullable();
        table.string('year', 150).notNullable();
        table.string('NA_Sales', 150).notNullable();
        table.string('EU_Sales', 150).notNullable();
        table.string('JP_Sales', 150).notNullable();
        table.string('Other_Sales', 150).notNullable();

        table.integer('platform_id').unique().unsigned();
        table.foreign('platform_id').references('platforms.platform_id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        
        table.integer('genre_id').unique().unsigned();
        table.foreign('genre_id').references('genre.genre_id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');

        table.integer('year_id').unique().unsigned();
        table.foreign('year_id').references('year.year_id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
            
        table.integer('publisher_id').unique().unsigned();
        table.foreign('publisher_id').references('publisher.publisher_id')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
            
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('games')
};
