import { neon } from '@neondatabase/serverless'

// eslint-disable-next-line no-undef
const sql = neon(process.env.VITE_DATABASE_URL)

export default async function handler(req, res) {
  try {
    const { gallerySlug } = req.query

    if (!gallerySlug) {
      return res.status(400).json({ error: 'Gallery slug is required' })
    }

    const images = await sql`
      SELECT images.* FROM images
      JOIN galleries ON images.gallery_id = galleries.id
      WHERE galleries.slug = ${gallerySlug}
    `
    res.status(200).json(images)
  } catch (error) {
    console.error('Database error:', error)
    res.status(500).json({ error: 'Internal Server Error. Sorry.' })
  }
}
