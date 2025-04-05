import { neon } from '@neondatabase/serverless'

// eslint-disable-next-line no-undef
const sql = neon(process.env.VITE_DATABASE_URL)

export default async function handler(req, res) {
  try {
    const galleries = await sql`SELECT * FROM galleries WHERE visible = TRUE`
    res.status(200).json(galleries)
  } catch (error) {
    console.error('Database error:', error)
    res.status(500).json({ error: 'Internal Server Error. Sorry.' })
  }
}
