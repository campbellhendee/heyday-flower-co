#!/usr/bin/env node
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const [, , mapPath = 'scripts/hero-map.json'] = process.argv;
const root = process.cwd();
const targetWidth = Number(process.env.HERO_WIDTH || 2560);
const quality = Number(process.env.HERO_QUALITY || 85);

const sections = ['home', 'weddings', 'corporate', 'private', 'daily'];

function outDirFor(section) {
  return path.join(root, 'public', 'images', 'hero', section);
}

function outName(section, idx) {
  const base = `${section}-hero-${String(idx + 1).padStart(3, '0')}.jpg`;
  return path.join(outDirFor(section), base);
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function processOne(inputFile, outputFile) {
  const img = sharp(inputFile).rotate();
  const meta = await img.metadata();
  const w = meta.width || 0;
  const pipeline = w && w > targetWidth ? img.resize(targetWidth) : img;
  await pipeline.jpeg({ quality, progressive: true }).toFile(outputFile);
}

async function main() {
  const mapRaw = await fs.readFile(path.resolve(root, mapPath), 'utf8');
  const map = JSON.parse(mapRaw);

  for (const section of sections) {
    const list = map[section];
    if (!Array.isArray(list) || list.length === 0) continue;
    const dir = outDirFor(section);
    await ensureDir(dir);
    let i = 0;
    for (const input of list) {
      const inAbs = path.resolve(root, input);
      const outAbs = outName(section, i);
      try {
        await processOne(inAbs, outAbs);
        console.log('saved', path.relative(root, outAbs));
        i++;
      } catch (e) {
        console.warn('skip', input, e?.message || e);
      }
    }
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

