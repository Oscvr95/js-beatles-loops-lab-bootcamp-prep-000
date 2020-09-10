// add solutions here

musicians = []
instruments = []

function theBeatlesPlay(musicians, instruments) {
  var empty = []
  for (let i = 0; i < musicians.length; i++) {
    musicians[0] = "John Lennon "
    instruments[0] = "plays guitar"
    empty.push(`${musicians[i]} ${instruments[i]}`)
  }
}
