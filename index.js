// add solutions here

musicians = ["John Lennon ", "Paul McCartney ", "George Harrison ", "Ringo Starr "]
instruments = ["Guitar", "Bass Guiter", "Lead Guitar", "Drums"]

function theBeatlesPlay(musicians, instruments) {
  var empty = []
  for (let i = 0; i < musicians.length; i++) {
    empty.push(`${musicians[i]} ${instruments[i]}`)
  }
  return empty
}
