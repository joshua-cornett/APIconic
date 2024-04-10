const fs = require('fs');

// Read package.json
const packageJsonPath = './package.json'; // Update this path accordingly
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

// Update devDependencies
Object.keys(packageJson.devDependencies).forEach((dependency) => {
  packageJson.devDependencies[dependency] = 'latest';
});

// Update dependencies
Object.keys(packageJson.dependencies).forEach((dependency) => {
  packageJson.dependencies[dependency] = 'latest';
});

// Write back to package.json
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('Package.json dependencies updated to "latest".');
