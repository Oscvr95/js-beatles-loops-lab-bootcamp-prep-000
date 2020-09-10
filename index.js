// add solutions here

function theBeatlesPlay(musicians, instruments) {
  var empty = []
  for (let i = 0; i < musicians.length; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return empty
}

function johnLennonFacts(facts) {

  let i = 0

  while( i < facts.length) {
    facts.push(`${facts[i]}!!!`)
    i++
  }
  return facts
}
