/**
 * Script to scan album photo folders and generate a skeleton presentation file.
 *
 * Usage: npx tsx scripts/generate-album-data.ts
 *
 * This reads the 3 act folders from public/album/, parses filenames,
 * and outputs a starter presentation to stdout that you can redirect
 * to lib/slides/album-2025-presentation.ts and then edit manually.
 */

import fs from 'fs'
import path from 'path'

interface PhotoFile {
  filename: string
  sectionNum: number
  sectionName: string
  description: string
  ext: string
  folder: string
  folderIndex: number
}

const ALBUM_ROOT = path.join(process.cwd(), 'public', 'album')

function parseFilename(filename: string, folder: string, folderIndex: number): PhotoFile | null {
  const ext = path.extname(filename).toLowerCase()
  if (!['.jpg', '.jpeg', '.png', '.webp', '.mp4'].includes(ext)) return null

  // Pattern: {num}_{SECTION}_{description}.ext or {num}_{SECTION}.ext
  const match = filename.match(/^(\d+)_(.+?)(?:_(.+))?\.(?:jpe?g|png|webp|mp4)$/i)
  if (!match) return null

  const sectionNum = parseInt(match[1], 10)
  let sectionName = match[2].trim()
  let description = match[3]?.replace(/\.[^.]+$/, '').trim() || ''

  // Remove trailing parenthetical duplicates like " (2)"
  description = description.replace(/\s*\(\d+\)\s*$/, '').trim()

  return { filename, sectionNum, sectionName, description, ext, folder, folderIndex }
}

function scanFolder(folderName: string, folderIndex: number): PhotoFile[] {
  const folderPath = path.join(ALBUM_ROOT, folderName)
  if (!fs.existsSync(folderPath)) {
    console.error(`Folder not found: ${folderPath}`)
    return []
  }

  const files = fs.readdirSync(folderPath).sort()
  return files
    .map(f => parseFilename(f, folderName, folderIndex))
    .filter((f): f is PhotoFile => f !== null)
}

// Scan all folders
const folders = fs.readdirSync(ALBUM_ROOT).filter(f =>
  fs.statSync(path.join(ALBUM_ROOT, f)).isDirectory()
).sort()

console.log('// Auto-generated album data skeleton')
console.log('// Edit this file to customize captions, layouts, and grouping')
console.log('')
console.log(`// Found ${folders.length} folders:`)

for (const folder of folders) {
  const photos = scanFolder(folder, folders.indexOf(folder))

  // Group by section
  const sections = new Map<string, PhotoFile[]>()
  for (const photo of photos) {
    const key = `${photo.sectionNum}_${photo.sectionName}`
    if (!sections.has(key)) sections.set(key, [])
    sections.get(key)!.push(photo)
  }

  console.log(`\n// === ${folder} (${photos.length} files, ${sections.size} sections) ===`)

  for (const [sectionKey, sectionPhotos] of sections) {
    const [num, ...nameParts] = sectionKey.split('_')
    const name = nameParts.join('_')
    console.log(`//   Section ${num}: ${name} (${sectionPhotos.length} photos)`)

    // Suggest slide types
    if (sectionPhotos.length === 1) {
      console.log(`//     -> PhotoSlide (fullscreen)`)
    } else if (sectionPhotos.length <= 3) {
      console.log(`//     -> PhotoGridSlide (row-${sectionPhotos.length})`)
    } else if (sectionPhotos.length <= 6) {
      console.log(`//     -> 1 PhotoSlide + 1 PhotoGridSlide`)
    } else {
      const gridCount = Math.ceil((sectionPhotos.length - 1) / 5)
      console.log(`//     -> 1 PhotoSlide + ${gridCount} PhotoGridSlide(s)`)
    }

    // List files
    for (const photo of sectionPhotos) {
      const isVideo = photo.ext === '.mp4'
      console.log(`//       ${isVideo ? '[VIDEO]' : ''} ${photo.filename}`)
    }
  }
}

console.log('\n// Total photos:', folders.reduce((sum, f) => sum + scanFolder(f, 0).length, 0))
