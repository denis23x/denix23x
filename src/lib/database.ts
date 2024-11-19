import { Pool } from "pg";

// Configure the PostgreSQL connection
const pool: Pool = new Pool({
	connectionString: process.env.DATABASE_URL,
});

const query = (text: string, params?: string[]) => pool.query(text, params);

export { query };
