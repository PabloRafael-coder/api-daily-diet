import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.uuid('session_id').notNullable();
    table.uuid('meal_made').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  knex.schema.dropTable('users');
}
