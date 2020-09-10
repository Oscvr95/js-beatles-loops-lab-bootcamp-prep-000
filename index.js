// add solutions here

musicians = ["John Lennon ", "Paul McCartney ", "George Harrison ", "Ringo Starr "]
instruments = ["plays Guitar", "plays Bass Guiter", "plays Lead Guitar", "plays Drums"]

function theBeatlesPlay(musicians, instruments) {
  var empty = []
  for (let i = 0; i < musicians.length; i++) {
    empty.push(`${musicians[i]} ${instruments[i]}`)
    return empty
  }
}
