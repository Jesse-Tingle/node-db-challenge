exports.seed = async function(knex) {
	await knex("resource").truncate();
	await knex("project").truncate();
	await knex("task").truncate();
	await knex("project_task").truncate();
};
