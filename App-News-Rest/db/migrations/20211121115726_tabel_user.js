const Knex = require(`knex`);
const tableNames = require(`../../src/constans/nameTabel`);
const {
  addDefaultColumns,
  createNameTable,
  url,
  references,
} = require("../../src/lib/table");

/**
 *
 * @param {Knex} knex
 */

exports.up = async (knex) => {
  await Promise.all([
    await knex.schema.createTable(tableNames.user, (table) => {
      table.increments().notNullable().primary();
      table.integer(`msisdn`, 254).notNullable().unique();
      table.string(`uuid`, 254).notNullable().unique();
      table.string(`name`, 254).notNullable();
      table.string(`password`, 127).notNullable();
      table.string(`username`, 254).notNullable();
      addDefaultColumns(table);
    }),
    await knex.schema.createTable(tableNames.logistic, (table) => {
      table.increments().notNullable().primary();
      table.string(`logistic_name`).notNullable();
      table.integer(`amount`).notNullable();
      table.string(`destination_name`).notNullable();
      table.string(`origin_name`).notNullable();
      table.integer(`duration`).notNullable();
      addDefaultColumns(table);
    }),
  ]);
};

exports.down = async (knex) => {
  await Promise.all(
    [
      tableNames.user,
      tableNames.logistic,
    ].map((tableName) => knex.schema.dropTableIfExists(tableName))
  );
};
