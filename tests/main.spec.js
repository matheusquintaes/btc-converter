const expect = require('chai').expect;
const exec = require('child_process').exec;
const pkg = require('../package.json');

// const btcConverter = './src/main.js'; //Unix
const btcConverter = 'node.exe ./src/main.js'; // Windows

describe('Main CLI', () => {
  it('should return version of btc-converter', (done) => {
    exec(`${btcConverter} --version`, (err, stdout, stderr) => {
      if(err) throw err;
      expect(stdout.replace('\n', '')).to.be.equal(pkg.version);
      done();
    });
  });
});
