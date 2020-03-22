exports.seed = async function(knex) {
	await knex("project").insert([
		{
			name: "set up files",
			description: "clone down project and run npm install",
			completed: "0",
			resource_id: 1
		},
		{
			name: "complete MVP",
			description: "database 2 project",
			completed: "0",
			resource_id: 2
		}
	]);
};
