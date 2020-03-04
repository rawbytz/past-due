(function pastDue_0_1() {
  const roundToNearestHour = date => new Date(Math.round(date.getTime() / 36e5) * 36e5); // fix for WorkFlowy search bug
  const nowish = roundToNearestHour(new Date()).toLocaleDateString("en-US", { hour: 'numeric' });
  WF.search(`1/1/1970 - ${nowish}`);
})();