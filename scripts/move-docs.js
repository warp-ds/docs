#!/usr/bin/env node

import { cp, readdir, readFile, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const SOURCE_ROOT = resolve(__dirname, '../docs');
const DEST_ROOT = resolve(__dirname, '../../warp-documentation/docs');

const FOLDERS_TO_COPY = ['collaborate', 'components', 'foundations', 'get-started', 'help', 'patterns'];

const TEXT_REPLACEMENTS = [
  { from: /<>/g, to: '<Fragment>' },
  { from: /<\/>/g, to: '</Fragment>' },
  { from: /```\w+\s+example.*$/gm, to: '```' },
];

async function getAllFiles(dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getAllFiles(fullPath)));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

async function performReplacements(filePath) {
  const content = await readFile(filePath, 'utf-8');
  let newContent = content;

  for (const { from, to } of TEXT_REPLACEMENTS) {
    newContent = newContent.replace(from, to);
  }

  if (newContent !== content) {
    await writeFile(filePath, newContent, 'utf-8');
    console.log(`  Updated: ${filePath}`);
    return true;
  }
  return false;
}

async function copyFolder(folderName) {
  const srcPath = join(SOURCE_ROOT, folderName);
  const destPath = join(DEST_ROOT, folderName);

  console.log(`\nCopying: ${srcPath}`);
  console.log(`     To: ${destPath}`);

  // Copy folder to destination
  await cp(srcPath, destPath, { recursive: true });
  console.log('  Copied successfully');

  // Perform text replacements on all files
  const files = await getAllFiles(destPath);
  let updatedCount = 0;

  for (const file of files) {
    const updated = await performReplacements(file);
    if (updated) updatedCount++;
  }

  console.log(`  Processed ${files.length} files, ${updatedCount} updated`);
}

async function main() {
  console.log('Copying documentation folders...');
  console.log(`Source: ${SOURCE_ROOT}`);
  console.log(`Destination: ${DEST_ROOT}`);

  for (const folder of FOLDERS_TO_COPY) {
    try {
      await copyFolder(folder);
    } catch (error) {
      console.error(`\nError copying ${folder}:`, error.message);
      process.exit(1);
    }
  }

  console.log('\nDone! All folders copied and text replacements applied.');
}

main();
