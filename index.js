// add solution here
var empty = []
var musicians = []
var instruments = []

function theBeatlesPlay(musicians, instruments) {

  for (i = 0; i <= musicians.length; i++) {
    if (i === 0) {
      musicians[0] = "John Lennon"
      instruments[0] = " plays guitar"
      empty[0].push(`${musicians[0]}` + `${musicians[0]}`)
    } else {
      empty.push()
    }

    }

  }
