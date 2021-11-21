"use strict";

function addDefaultColumns(table) {
  table.timestamps(false, true);
  table.datetime(`deleted_at`);
}

function createNameTable(knex, table_name) {
  return knex.schema.createTable(table_name, (table) => {
    table.increments().notNullable().primary();
    table.string(`nama`, 254).notNullable().unique();
    addDefaultColumns(table);
  });
}

function url(table, columnName) {
  table.string(columnName, 2000);
}

function references(table, tableName, notNullable = true) {
  const definition = table
    .integer(`${tableName}_id`)
    .unsigned()
    .references(`id`)
    .inTable(tableName)
    .onDelete(`cascade`);

  if (notNullable) {
    definition.notNullable();
  }
}

module.exports = {
  addDefaultColumns,
  createNameTable,
  url,
  references,
};
