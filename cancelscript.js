// A naive implementation of CancelScript in fairly modern JavaScript

function cancelScript(source) {
  let i = -1

  for (const char of source) {
    i++

    if (char.trim() === '') {
      // console.log('Character is whitespace')

      continue
    }
    if (source.slice(i, i + 'cancel'.length + 1).toLowerCase() == 'cancel') {
      // console.log('The following word is "cancel". Terminating.')

      process.exit(0)
    }
    if (char) {
      // console.log(`Character '${char}' is unrecognised non-whitespace input. Terminating.`)

      process.exit(0)
    }

    i++
  }
}

module.exports = cancelScript
