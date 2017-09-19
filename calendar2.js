const M = require('moment')
const _ = require('lodash')
const chalk = require('chalk')
const MomentRange = require('moment-range')

let now = moment()
console.log(now.year())
let year = now.range('year')
for(const month of year.by('months'))
    {
        console.log(month)
    }