# fitness-activity
:running_woman: Normalise rando activity names from various fitness apis.

Usage:

```js
  const activityNames = require('activity-names')
  const rawName = getActivityNameFromSomeWhere()
  const normcoreName = activityNames(rawName)
  // ...now do some aggregations that prefer normalised names.
```

```js
'Ride' => 'Cycling'
'Bike Riding' => 'Cycling'
'Biking' => 'Cycling'
```

Standardising on Google Fit names as they are the most comprehensive,
except on the issue of "Biking", which is "Cycling".

More generally the normalisation is:
  - Sentence case (unless a brand name like CrossFit)
  - Slashy alt names, pick the first one. "Boxing / MMA" => "Boxing".
  - Remove redundant qualifying paranetheses
    - "Inline skating (rollerblading)" => "Inline skating"
  - Any of [/Other.* /, falsey, ] => 'Activity'.
  - Defer to the Google fit one if no strong reason not to.

Use https://github.com/samuelmr/google-fit-activity-types to convert from a
google-fit numeric activity id to a activity name first.

![Yeah I'm into fitness. Fitness whole pizza in my mouth.](https://s-media-cache-ak0.pinimg.com/736x/fc/36/33/fc3633c0e6da3a7e89a168b707675986.jpg)

---

A [(╯°□°）╯︵TABLEFLIP](https://tableflip.io) side project.
