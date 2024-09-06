import { query } from '$lib/server/database/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	return {
		users: await query("SELECT * FROM users;"),
};
};
