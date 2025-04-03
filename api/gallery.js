import { neon } from '@neondatabase/serverless'

// eslint-disable-next-line no-undef
const sql = neon(process.env.VITE_DATABASE_URL)

export default async function handler(req, res) {
  try {
    const { category } = req.query // Get category from request

    let images
    if (category) {
      images = await sql`SELECT * FROM images WHERE category = ${category};`
    } else {
      images = await sql`SELECT * FROM images;`
    }

    res.status(200).json(images)
  } catch (error) {
    console.error('Database error:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
