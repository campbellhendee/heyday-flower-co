// Optional helper if you want to run conversions in Node with sharp
// Usage: node scripts/convert-to-jpg.mjs inputDir outputDir
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const [,, inDir, outDir] = process.argv;
if (!inDir || !outDir) {
  console.error('Usage: node scripts/convert-to-jpg.mjs inputDir outputDir'); process.exit(1);
}
await fs.mkdir(outDir, { recursive: true });

const entries = await fs.readdir(inDir, { withFileTypes: true });
const files = entries.filter(e => e.isFile()).map(e => path.join(inDir, e.name));

let idx = 1;
for (const file of files) {
  try {
    const image = sharp(file).rotate();
    const meta = await image.metadata();
    const w = meta.width || 0;
    const out = path.join(outDir, `img-${String(idx).padStart(3,'0')}.jpg`);
    const pipeline = w > 2000 ? image.resize(2000) : image;
    await pipeline.jpeg({ quality: 80 }).toFile(out);
    idx++;
    console.log('saved', out);
  } catch (e) {
    console.warn('skip', file, e.message);
  }
}
