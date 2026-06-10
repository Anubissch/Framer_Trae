const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Load environment variables
try {
    const envPath = path.join(__dirname, '.env');
    if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, 'utf8');
        envContent.split('\n').forEach(line => {
            const [key, value] = line.split('=');
            if (key && value) {
                process.env[key.trim()] = value.trim();
            }
        });
    }
} catch (e) {
    // Ignore if .env doesn't exist
}

// Configuration
const REPO_PATH = path.join(__dirname, '..');
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Color codes for terminal output
const colors = {
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    red: '\x1b[31m',
    blue: '\x1b[34m',
    reset: '\x1b[0m'
};

function log(message, color = 'reset') {
    console.log(`${colors[color]}${message}${colors.reset}`);
}

function runCommand(command) {
    try {
        return execSync(command, { cwd: REPO_PATH, encoding: 'utf8' });
    } catch (error) {
        return error.message;
    }
}

function getStatus() {
    log('📋 Checking repository status...', 'blue');
    
    const status = runCommand('git status --porcelain');
    const branch = runCommand('git branch --show-current').trim();
    
    console.log(`\nCurrent branch: ${colors.green}${branch}${colors.reset}\n`);
    
    if (status.trim() === '') {
        log('✅ Working tree is clean - all files synced!', 'green');
        return;
    }
    
    log('📁 File changes detected:', 'yellow');
    console.log(status);
}

function pull() {
    log('📥 Pulling latest changes from GitHub...', 'blue');
    const result = runCommand('git pull');
    console.log(result);
    log('✅ Pull complete!', 'green');
}

function push(message = 'Update from Trae') {
    log('📤 Pushing changes to GitHub...', 'blue');
    
    runCommand('git add .');
    runCommand(`git commit -m "${message}"`);
    const result = runCommand('git push');
    
    console.log(result);
    log('✅ Push complete!', 'green');
}

function sync() {
    log('🔄 Starting sync...', 'blue');
    pull();
    push();
    log('🎉 Sync complete!', 'green');
}

// Parse command line arguments
const args = process.argv.slice(2);
const command = args[0];

console.log('\n🚀 Framer Trae GitHub Sync\n');

switch (command) {
    case 'status':
        getStatus();
        break;
    case 'pull':
        pull();
        break;
    case 'push':
        const commitMessage = args.slice(1).join(' ') || 'Update from Trae';
        push(commitMessage);
        break;
    case 'sync':
        sync();
        break;
    default:
        log('Available commands:', 'blue');
        console.log('  status  - Check git status');
        console.log('  pull    - Pull latest changes');
        console.log('  push    - Push changes (optional: add commit message)');
        console.log('  sync    - Pull then push\n');
        log('Example: node scripts/sync.js push "Updated Qsd component"', 'yellow');
}

console.log('');
