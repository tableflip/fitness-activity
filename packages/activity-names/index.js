/*
Normalise rando activity names from various fitness apis.

Usage:

```js
  const activityTypes = require('activity-types')
  const rawName = getActivityNameFromSomeWhere()
  const normcoreName = activityTypes(rawName)
  // ...now do some aggregations that prefer normalised names.
```

```js
'Ride' => 'Cycling'
'Bike Riding' => 'Cycling'
'Biking' => 'Cycling'
```

Standardising on Google Fit names as they are the most comprehensive,
except on the issue of "Biking", which is pronounced: "Cycling".

More generally the normalisation is:
  - Sentence case (unless a brand name like CrossFit)
  - Slashy alt names, pick the first one. "Boxing / MMA" => "Boxing".
  - Remove redundant qualifying paranetheses
    - "Inline skating (rollerblading)" => "Inline skating"
  - Any of [/Other.* /, falsey, ] => 'Activity'.
  - Defer to the Google fit one if no strong reason not to.

Use https://github.com/samuelmr/google-fit-activity-types to convert from a
google-fit numeric activity id to a activity name first.
*/

const humanize = require('underscore.string/humanize')

const activities = {
  'ride': 'Cycling',
  'biking': 'Cycling',
  'bikeriding': 'Cycling',
  'ebikeride': 'Cycling',
  'virtualride': 'Cycling',
  'stairstepper': 'Stair-climbing machine',
  'stairmaster/stepwell': 'Stair-climbing machine',
  'walk': 'Walking',
  'run': 'Running',
  'swim': 'Swiming',
  'hike': 'Hiking',
  'nordicski': 'Nordic skiing',
  'rollerski': 'Roller skiing',
  'alpineski': 'Alpine skiing',
  'crossfit': 'CrossFit',
  'backcountryski': 'Back-country skiing',
  'cross-countryskiing': 'Cross-country skiing',
  'snowboard': 'Snowboarding',
  'snowshoe': 'Snowshoeing',
  'iceskate': 'Ice skating',
  'inlineskate': 'Inline skating',
  'inlineskating(rollerblading)': 'Inline skating',
  'kitesurf': 'Kitesurfing',
  'windsurf': 'Windsurfing',
  'sports': 'Team sports',
  'other': 'Activity',
  'other(unclassifiedfitnessactivity)': 'Activity',
  'boxing/mma': 'Boxing'
}

const nameToKey = (name) => name.trim().replace(' ', '').toLowerCase()

module.exports = (name) => {
  const normcoreName = activities[nameToKey(name)]
  if (normcoreName) {
    return normcoreName
  } else {
    return humanize(name)
  }
}
