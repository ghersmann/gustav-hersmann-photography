import { neon } from '@neondatabase/serverless'

// eslint-disable-next-line no-undef
const sql = neon(process.env.VITE_DATABASE_URL)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { slug, visible } = await req.body

  if (!slug || typeof visible !== 'boolean') {
    return res.status(400).json({ error: 'Missing or invalid parameters' })
  }

  try {
    await sql`UPDATE galleries SET visible = ${visible} WHERE slug = ${slug}`
    res.status(200).json({ message: 'Gallery visibility updated' })
  } catch (error) {
    console.error('Database error:', error)
    res.status(500).json({ error: 'Failed to update gallery visibility' })
  }
}
