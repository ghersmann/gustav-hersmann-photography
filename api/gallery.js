import { neon } from '@neondatabase/serverless'

const sql = neon(process.env.VITE_DATABASE_URL)

export default async function handler(req, res) {
  try {
    const images = await sql`SELECT * FROM images;`
    res.status(200).json(images)
  } catch (error) {
    console.error('Database error:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
