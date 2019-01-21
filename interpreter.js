const readline = require('readline')

const cancelScript = require('./cancelscript')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line', line => {
  cancelScript(line)
  rl.close()
})
