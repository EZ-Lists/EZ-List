exports.up = function(knex) {
    return knex.schema.createTable("test", tbl => {
      tbl.increments("id");
      tbl.string("test", 12).notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("test");
  };