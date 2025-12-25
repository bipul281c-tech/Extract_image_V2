#!/usr/bin/env node

/**
 * IndexNow Setup Script
 *
 * This script helps you set up IndexNow for automatic search engine notifications.
 * It will:
 * 1. Generate a secure API key
 * 2. Create the key file in /public
 * 3. Update your .env.local file
 * 4. Provide next steps for Bing Webmaster Tools
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// ANSI color codes for pretty output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  green: '\x1b[32m',
  blue: '\x1b[34m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  cyan: '\x1b[36m',
};

function log(message, color = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function header(message) {
  console.log('\n' + '='.repeat(60));
  log(message, colors.bright + colors.cyan);
  console.log('='.repeat(60) + '\n');
}

function success(message) {
  log(`✓ ${message}`, colors.green);
}

function info(message) {
  log(`ℹ ${message}`, colors.blue);
}

function warning(message) {
  log(`⚠ ${message}`, colors.yellow);
}

function error(message) {
  log(`✗ ${message}`, colors.red);
}

// Generate a secure API key (32 character hex)
function generateApiKey() {
  return crypto.randomBytes(16).toString('hex');
}

// Get project root directory
function getProjectRoot() {
  return path.resolve(__dirname, '..');
}

// Create key file in /public
function createKeyFile(apiKey) {
  const publicDir = path.join(getProjectRoot(), 'public');
  const keyFilePath = path.join(publicDir, `${apiKey}.txt`);

  // Ensure public directory exists
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
    info('Created /public directory');
  }

  // Write key file
  fs.writeFileSync(keyFilePath, apiKey, 'utf8');
  success(`Created key file: /public/${apiKey}.txt`);

  return keyFilePath;
}

// Update or create .env.local
function updateEnvFile(apiKey) {
  const envPath = path.join(getProjectRoot(), '.env.local');
  const envContent = `
# IndexNow API Configuration
# Generated on ${new Date().toISOString()}
INDEXNOW_API_KEY=${apiKey}

# Optional: Secure the notify-crawl API endpoint
# NOTIFY_CRAWL_SECRET=your_random_secret_here
`;

  if (fs.existsSync(envPath)) {
    const existing = fs.readFileSync(envPath, 'utf8');
    if (existing.includes('INDEXNOW_API_KEY')) {
      warning('.env.local already contains INDEXNOW_API_KEY');
      info('Please update it manually if needed');
      return false;
    } else {
      fs.appendFileSync(envPath, envContent);
      success('Updated .env.local with INDEXNOW_API_KEY');
      return true;
    }
  } else {
    fs.writeFileSync(envPath, envContent);
    success('Created .env.local with INDEXNOW_API_KEY');
    return true;
  }
}

// Create .env.example template
function createEnvExample(apiKey) {
  const envExamplePath = path.join(getProjectRoot(), '.env.example');
  const exampleContent = `# IndexNow API Configuration
# Generate your key at: https://www.indexnow.org/getstarted
INDEXNOW_API_KEY=your_api_key_here

# Optional: Secure the notify-crawl API endpoint
NOTIFY_CRAWL_SECRET=your_random_secret_here
`;

  if (!fs.existsSync(envExamplePath)) {
    fs.writeFileSync(envExamplePath, exampleContent);
    success('Created .env.example template');
  }
}

// Display next steps
function displayNextSteps(apiKey) {
  header('Setup Complete! Next Steps:');

  console.log(`${colors.bright}1. Verify Key File${colors.reset}`);
  info(`   File location: /public/${apiKey}.txt`);
  info(`   Public URL: https://www.extractpics.com/${apiKey}.txt`);
  console.log('');

  console.log(`${colors.bright}2. Test Your Setup${colors.reset}`);
  info('   Start dev server: npm run dev');
  info(`   Test key file: curl http://localhost:3000/${apiKey}.txt`);
  info('   Test API: curl -X POST http://localhost:3000/api/notify-crawl');
  console.log('');

  console.log(`${colors.bright}3. Deploy to Production${colors.reset}`);
  info('   Commit changes:');
  info(`     git add public/${apiKey}.txt .env.local`);
  info('     git commit -m "Add IndexNow configuration"');
  info('     git push');
  console.log('');
  warning('   Remember to add INDEXNOW_API_KEY to Vercel environment variables!');
  console.log('');

  console.log(`${colors.bright}4. Register with Bing Webmaster Tools${colors.reset}`);
  info('   a) Go to: https://www.bing.com/webmasters');
  info('   b) Add and verify your site: www.extractpics.com');
  info('   c) Navigate to: Sitemaps → Submit Sitemap');
  info('      Submit: https://www.extractpics.com/sitemap.xml');
  info('   d) Check IndexNow status in Webmaster Tools dashboard');
  console.log('');

  console.log(`${colors.bright}5. Test IndexNow Submission${colors.reset}`);
  info('   After deployment, trigger a notification:');
  info('   curl -X POST https://www.extractpics.com/api/notify-crawl');
  info('   Expected response: {"success": true, "indexNow": {"status": "success"}}');
  console.log('');

  console.log(`${colors.bright}6. Verify in Bing Webmaster Tools${colors.reset}`);
  info('   Check if URLs are received:');
  info('   Bing Webmaster → URL Submission → API Submit');
  info('   You should see your sitemap URL submitted');
  console.log('');

  header('Your IndexNow Configuration:');
  console.log(`${colors.bright}API Key:${colors.reset}      ${colors.yellow}${apiKey}${colors.reset}`);
  console.log(`${colors.bright}Key File:${colors.reset}     /public/${apiKey}.txt`);
  console.log(`${colors.bright}Key URL:${colors.reset}      https://www.extractpics.com/${apiKey}.txt`);
  console.log(`${colors.bright}Sitemap URL:${colors.reset}  https://www.extractpics.com/sitemap.xml`);
  console.log(`${colors.bright}API Endpoint:${colors.reset} https://www.extractpics.com/api/notify-crawl`);
  console.log('');

  header('Adding New Images - Quick Reference:');
  info('1. Upload image to R2');
  info('2. Add entry to /data/seo-images.json');
  info('3. Deploy changes');
  info('4. Trigger notification: curl -X POST https://www.extractpics.com/api/notify-crawl');
  info('5. Bing/Google will crawl within minutes!');
  console.log('');

  success('IndexNow setup completed successfully!');
  console.log('');
}

// Main execution
function main() {
  try {
    header('IndexNow Setup for ExtractPics');

    info('This script will configure IndexNow for automatic search engine notifications.');
    info('IndexNow is supported by: Microsoft Bing, Yandex, Seznam.cz, Naver');
    console.log('');

    // Generate API key
    info('Generating secure API key...');
    const apiKey = generateApiKey();
    success(`Generated API key: ${apiKey}`);
    console.log('');

    // Create key file
    info('Creating key file in /public directory...');
    createKeyFile(apiKey);
    console.log('');

    // Update .env.local
    info('Updating environment variables...');
    updateEnvFile(apiKey);
    console.log('');

    // Create .env.example
    createEnvExample(apiKey);
    console.log('');

    // Display next steps
    displayNextSteps(apiKey);

  } catch (err) {
    error('Setup failed with error:');
    console.error(err);
    process.exit(1);
  }
}

// Run the script
main();
