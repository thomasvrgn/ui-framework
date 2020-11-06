const child = require('child_process');
const npmFolder = process.env.path.split(';').find((x) => x.includes('npm'));
const fs = require('fs').promises;

const main = async () => {
  if (!npmFolder) throw 'NPM is not installed on your system but required by builder.';
  console.log('Fetching global modules...');
  try {
    const content = await fs.readdir(npmFolder);
    console.log('Reading fetched modules...');
    const yarnInstallation = content.filter((x) => !x.includes('.')).some((x) => x.includes('yarn'));
    console.log('Checking for Yarn installation...');
    const command = yarnInstallation ? 'yarn' : 'npm install';
    console.log(yarnInstallation ? 'Yarn installation found,' : 'Using NPM default command,', 'installing modules...');
    child.exec(command, { cwd: process.cwd() }, (error, stdout, stderr) => {
      if (error) throw error;
      console.log('Modules installed...')
    });
  } catch (exception) {
    throw exception;
  }
}

main();