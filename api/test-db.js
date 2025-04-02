import { Pool } from '@neondatabase/serverless'
export default async function handler(req, res) {
  const pool = new Pool({ connectionString: process.env.VITE_DATABASE_URL })

  try {
    const client = await pool.connect()
    const result = await client.query('SELECT NOW()') // Simple test query
    client.release()

    res.status(200).json({ message: 'Database connected!', time: result.rows[0].now })
    console.log('Success!')
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Database connection failed' })
    console.log('Failed')
  }
}
