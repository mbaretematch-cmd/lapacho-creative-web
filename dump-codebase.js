import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_FILE = path.join(__dirname, 'full-codebase.txt');
const ROOT_DIR = __dirname;

// Directories to ignore completely
const IGNORED_DIRS = new Set([
  'node_modules',
  '.git',
  '.vercel',
  'dist',
  'build',
  '.next',
  'coverage',
  '.vscode'
]);

// Specific files to skip
const IGNORED_FILES = new Set([
  'full-codebase.txt',
  'dump-codebase.js',
  'audit-output.txt',
  'site-audit-report.txt',
  'package-lock.json',
  'pnpm-lock.yaml',
  'yarn.lock'
]);

// Ignored extensions (binary / media assets)
const IGNORED_EXTENSIONS = new Set([
  '.png',
  '.jpg',
  '.jpeg',
  '.gif',
  '.webp',
  '.ico',
  '.mp4',
  '.webm',
  '.mov',
  '.pdf',
  '.zip',
  '.woff',
  '.woff2',
  '.ttf',
  '.eot'
]);

// 1. Generate visual directory tree
function buildDirectoryTree(dir, prefix = '') {
  let treeString = '';
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  const filteredEntries = entries.filter((entry) => {
    if (entry.isDirectory() && IGNORED_DIRS.has(entry.name)) return false;
    if (entry.isFile() && IGNORED_FILES.has(entry.name)) return false;
    return true;
  });

  filteredEntries.forEach((entry, index) => {
    const isLast = index === filteredEntries.length - 1;
    const connector = isLast ? '└── ' : '├── ';
    treeString += `${prefix}${connector}${entry.name}\n`;

    if (entry.isDirectory()) {
      const childPrefix = prefix + (isLast ? '    ' : '│   ');
      treeString += buildDirectoryTree(path.join(dir, entry.name), childPrefix);
    }
  });

  return treeString;
}

// 2. Collect all readable source file paths recursively
function getSourceFiles(dir) {
  let files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (!IGNORED_DIRS.has(entry.name)) {
        files = files.concat(getSourceFiles(fullPath));
      }
    } else if (entry.isFile()) {
      if (IGNORED_FILES.has(entry.name)) continue;
      const ext = path.extname(entry.name).toLowerCase();
      if (IGNORED_EXTENSIONS.has(ext)) continue;
      files.push(fullPath);
    }
  }

  return files;
}

// Main Runner
function run() {
  console.log('Extracting directory structure and source files...');

  let output = '';

  output += '===============================================================================\n';
  output += 'PROJECT DIRECTORY STRUCTURE\n';
  output += '===============================================================================\n\n';
  output += path.basename(ROOT_DIR) + '\n';
  output += buildDirectoryTree(ROOT_DIR);
  output += '\n\n';

  output += '===============================================================================\n';
  output += 'FULL SOURCE CODE FILES\n';
  output += '===============================================================================\n\n';

  const allFiles = getSourceFiles(ROOT_DIR);

  allFiles.forEach((filePath) => {
    const relativePath = path.relative(ROOT_DIR, filePath);
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      output += '===============================================================================\n';
      output += `FILE: ${relativePath}\n`;
      output += '===============================================================================\n';
      output += content;
      output += '\n\n';
    } catch (err) {
      output += `// Error reading file ${relativePath}: ${err.message}\n\n`;
    }
  });

  fs.writeFileSync(OUTPUT_FILE, output, 'utf-8');
  console.log(`Success! Complete project bundle exported to:\n-> ${OUTPUT_FILE}`);
}

run();