// add solutions here

musicians = []
instruments = []

function theBeatlesPlay(musicians, instruments) {
  var empty = []
  for (i = 0; i < musicians.length; i++) {
    musicians[0] = "John Lennon "
    instruments[0] = "plays guitar"
    empty.push(`${musicians[0]} ${instruments[0]}`)
  }
}
