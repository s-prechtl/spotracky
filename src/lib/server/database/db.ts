import { env } from "$env/dynamic/private";

import pg from "pg";
const { Pool } = pg;

export const pool = new Pool({
    host: env.DB_HOST,
    port: +env.DB_PORT!,
    database: env.DB_NAME,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
});

export async function query(text: string, params?: any[]) {
  const client = await pool.connect();
  try {
    const res = await client.query(text, params);
    return res.rows;
  } finally {
    client.release();
  }
}
