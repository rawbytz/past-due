# Past Due Bookmarklet for WorkFlowy
- Searches the current zoom level for all past dates.
- Respects the completed filter.
- *Due to a bug in WorkFlowy's date parser, this rounds "now" to nearest hour. So if the current minutes are 00-29 it rounds down to the current hour, and at 30-59 it rounds up to the next hour.*

## Installation: Drag this link to your bookmarks bar:

<a href="javascript:(function pastDue_0_1(){const roundToNearestHour=date=&gt;new Date(Math.round(date.getTime()/36e5)*36e5);const nowish=roundToNearestHour(new Date).toLocaleDateString(&quot;en-US&quot;,{hour:'numeric'});WF.search(`1/1/1970 - ${nowish}`)})();">pastDue</a>
## Links:
- [rawbytz Blog](https://rawbytz.wordpress.com)
- [Source code](https://github.com/rawbytz/past-due/blob/master/pastDue.js)
