exports.seed = async function(knex) {
	await knex("project_task").insert([
		{ project_id: 1, task_id: 1 },
		{ project_id: 2, task_id: 2 }
	]);
};
