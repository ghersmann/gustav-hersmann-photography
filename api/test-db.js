import { Pool } from '@neondatabase/serverless'

export default async function handler(req, res) {
  const pool = new Pool({
    connectionString: import.meta.env.VITE_DATABASE_URL // Use Vercel's environment variable
  })

  try {
    const client = await pool.connect()
    const result = await client.query('SELECT NOW()') // Simple query to check DB connection
    client.release()

    res.status(200).json({
      message: 'Database connection successful!',
      time: result.rows[0].now
    })
  } catch (error) {
    res.status(500).json({
      message: 'Database connection failed!',
      error: error.message
    })
  }
}
