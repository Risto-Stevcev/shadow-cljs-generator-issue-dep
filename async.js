const empty = async function* () {}

const enumerate = async function* (n) {
  n = n || Infinity
  for (let i = 1; i <= n; i++) yield i
}

const from = async function* (value) {
  yield value
}

export { empty, enumerate, from }
