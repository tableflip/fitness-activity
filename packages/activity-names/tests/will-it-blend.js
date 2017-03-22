const test = require('tape')
const activityNames = require('../')
const Cycling = 'Cycling'

test('Will it "Biking"?', (t) => {
  const expectations = {
    'Bike Riding': Cycling,
    Biking: Cycling,
    Ride: Cycling,
    Cycling: Cycling,
    Zumba: 'Zumba'
  }
  const keys = Object.keys(expectations)
  t.plan(keys.length)
  keys.forEach((key) => {
    const normName = activityNames(key)
    const expected = expectations[key]
    t.equal(normName, expected, `${key} is pronounced "${normName}"`)
  })
})
