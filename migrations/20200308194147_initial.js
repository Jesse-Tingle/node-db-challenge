exports.up = async function(knex) {
	await knex.schema.createTable("resource", table => {
		table.increments("id");
		table
			.string("name")
			.notNull()
			.unique();
		table.string("description");
	});

	await knex.schema.createTable("project", table => {
		table.increments("id");
		table.string("name").notNull();
		table.string("description");
		table.boolean("completed").defaultTo(0);
		table
			.integer("resource_id")
			.references("id")
			.inTable("resource");
	});

	await knex.schema.createTable("task", table => {
		table.increments("id");
		table.string("description").notNull();
		table.string("notes");
		table.boolean("completed").defaultTo(0);
	});

	await knex.schema.createTable("project_task", table => {
		table
			.integer("project_id")
			.references("id")
			.inTable("project");
		table
			.integer("task_id")
			.references("id")
			.inTable("task");
		// primary key - combination of these to columns
		table.primary(["project_id", "task_id"]);
	});
};

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("project_task");
	await knex.schema.dropTableIfExists("resource");
	await knex.schema.dropTableIfExists("project");
	await knex.schema.dropTableIfExists("task");
};
