import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const imgDir = path.join(__dirname, 'src', 'Imagens');

async function processImages() {
  const files = fs.readdirSync(imgDir);
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg')) {
      const inputPath = path.join(imgDir, file);
      const filenameWithoutExt = path.parse(file).name;
      const outputPath = path.join(imgDir, `${filenameWithoutExt}.webp`);
      
      console.log(`Processing ${file}...`);
      try {
        await sharp(inputPath)
          .resize({ width: 1920, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(outputPath);
        console.log(`Saved ${outputPath}`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
}

processImages();
