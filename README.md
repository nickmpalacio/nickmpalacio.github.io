# Dash or Dine 🗽🍽️

Retrieve results of restaurant inspection violations for dining establishments in New York City. 

## Prerequisites

- A restaurant name (preferred), and/or bourough & street name

## Instructions

1. Enter in a restaurant name (or borough or street name -> or all three to find the most specific results!)
2. Click 'Search' button
3. Review restaurant violations to understand criticality
4. Decide to dash or dine!

### Open Issues + Work ons

- Better filtering of API response results - if you do not enter in a Restaurant name and only include boroough or street name, some of the values are 'undefined' for restaurant name
- Better formatting - would like to clean up UI to align inspection dates & violation descriptions to help users understand if a violation was recent or from a few years ago
- Better formatting - would also like to aggregate violations together in an expandable dropdown a user can click on that's tied to one restaurant name instead of displaying the restaurant name over and over again
- more guidance to the user on if they should dash or dine, perhaps with messaging around the score (not always available from dataset) or the number of critical violations

## References

1. Loom [recording](https://www.loom.com/share/0456d33ec28a4c2c8a6b46308c3fe6a7)
2. Capitalize function from [Stackoverflow](https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript)
3. NYC Open Data: https://data.cityofnewyork.us/Health/DOHMH-New-York-City-Restaurant-Inspection-Results/43nn-pn8j (dataset) & https://dev.socrata.com/docs/filtering.html (how to filter using params)
