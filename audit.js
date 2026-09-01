import fs from 'fs';
import path from 'path';

const projectRoot = process.cwd();
const ignoreDirs = new Set(['node_modules', '.git', 'dist', '.vscode']);
const textExtensions = new Set(['.js', '.jsx', '.ts', '.tsx', '.json', '.html', '.css', '.config.js']);

function getDirectoryTree(dirPath, prefix = '') {
  let output = '';
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  const filtered = entries.filter(e => !ignoreDirs.has(e.name));

  filtered.forEach((entry, index) => {
    const isLast = index === filtered.length - 1;
    const connector = isLast ? '└── ' : '├── ';
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      output += `${prefix}${connector}${entry.name}/\n`;
      output += getDirectoryTree(fullPath, `${prefix}${isLast ? '    ' : '│   '}`);
    } else {
      const stats = fs.statSync(fullPath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      output += `${prefix}${connector}${entry.name} (${sizeKB} KB)\n`;
    }
  });

  return output;
}

function dumpTextFiles(dirPath) {
  let output = '';
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    if (ignoreDirs.has(entry.name)) continue;
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      output += dumpTextFiles(fullPath);
    } else {
      const ext = path.extname(entry.name);
      if (textExtensions.has(ext) && entry.name !== 'audit.js') {
        const relativePath = path.relative(projectRoot, fullPath);
        output += `\n==================================================\n`;
        output += `FILE: ${relativePath}\n`;
        output += `==================================================\n`;
        try {
          output += fs.readFileSync(fullPath, 'utf8');
        } catch (err) {
          output += `[Error reading file: ${err.message}]`;
        }
        output += `\n`;
      }
    }
  }

  return output;
}

function inspectPublicVideos() {
  let report = '=== PUBLIC / VIDEOS ASSET AUDIT ===\n';
  const publicPath = path.join(projectRoot, 'public');
  const videosPath = path.join(publicPath, 'videos');

  if (!fs.existsSync(publicPath)) {
    report += '❌ MISSING: "public" directory does not exist at project root.\n';
    return report;
  }

  if (!fs.existsSync(videosPath)) {
    report += '❌ MISSING: "public/videos" directory does not exist.\n';
    return report;
  }

  const files = fs.readdirSync(videosPath);
  if (files.length === 0) {
    report += '⚠️ "public/videos" folder exists, but contains NO files.\n';
    return report;
  }

  report += `✅ Found ${files.length} file(s) in public/videos/:\n`;
  files.forEach(file => {
    const filePath = path.join(videosPath, file);
    const stats = fs.statSync(filePath);
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    report += `  - ${file} (${sizeMB} MB)\n`;
  });

  return report;
}

function runAudit() {
  console.log('Running site structure and source code audit...\n');

  let report = '';
  report += '==================================================\n';
  report += '1. DIRECTORY STRUCTURE\n';
  report += '==================================================\n';
  report += getDirectoryTree(projectRoot);

  report += '\n==================================================\n';
  report += '2. MEDIA ASSET VERIFICATION\n';
  report += '==================================================\n';
  report += inspectPublicVideos();

  report += '\n==================================================\n';
  report += '3. SOURCE CODE DUMP\n';
  report += '==================================================\n';
  report += dumpTextFiles(projectRoot);

  const outputPath = path.join(projectRoot, 'site-audit-report.txt');
  fs.writeFileSync(outputPath, report, 'utf8');

  console.log(`✅ Audit completed successfully!`);
  console.log(`Report generated at: ${outputPath}\n`);
  console.log('To view the summary directly in the terminal, run:');
  console.log('head -n 45 site-audit-report.txt\n');
}

runAudit();