exports.seed = async function(knex) {
	await knex("task").insert([
		{
			description: "clone project",
			notes: "find project on github and clone",
			completed: 0
		},
		{
			description: "npm install",
			notes: "run npm install and set up files",
			completed: 0
		}
	]);
};
