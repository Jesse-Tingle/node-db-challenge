exports.seed = async function(knex) {
	await knex("resource").insert([
		{ name: "computer", description: "macBook Pro" },
		{ name: "Lambda student", description: "someone with backend experience" },
		{ name: "TL", description: "team lead at Lambda School" },
		{ name: "npm", description: "npm package manager" }
	]);
};
