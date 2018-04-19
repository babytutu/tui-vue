#!/usr/bin/env node
const colors = require('colors')
const { spawnSync } = require('child_process')

const commands = {
  start: 'npm run dll && webpack-dev-server --config webpack/webpack.dev.js',
  dll: 'webpack --config webpack/webpack.dll.js',
  eslint: 'eslint src --ext .js,.vue',
  fix: 'eslint src --ext .js,.vue --fix',
  doc: 'npm run dll && webpack --config webpack/webpack.prod.js',
  deploy: 'npm run doc && gh-pages -d tui-vue -b coding-pages && gh-pages -d tui-vue -o github',
  pack: 'webpack --config webpack/webpack.pack.js && gulp',
  pub: 'npm run pack && npm publish',
  help: 'help',
  entry: 'node bin/build-router.js && node bin/build-router-demo.js'
}

const runCommand = (command, options = []) => {
  if (command === 'help') {
    console.log('Commands List'.cyan)
    console.log('--------------------------------------------------------------------------------------------'.cyan)
    Object.keys(commands).map(key => console.log(key.padEnd(6).yellow, ':', commands[key].cyan))
    console.log('--------------------------------------------------------------------------------------------'.cyan)

    process.exit(0)
  }
  if (command) {
    spawnSync(command, options, {
      stdio: 'inherit',
      shell: true,
    })
    process.exit(0)
  } else {
    console.log('Bad command parameters！Run help to get help'.red)
    process.exitCode = 1
  }
}

// 获取命令的参数
const args = process.argv.slice(2)

if (args.length) {
  runCommand(commands[args[0]])
} else {
  console.log('Missing command parameters！Run help to get help'.red)
  process.exitCode = 1
}