exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments("id");
    tbl.string("name").notNullable();
    tbl.string("email").notNullable().unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
