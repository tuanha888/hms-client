export const HOST_URL = "http://54.83.109.61:8080"
export function convertDatesToObjects(obj) {
  for (const key in obj) {
    if (obj[key] instanceof Object) {
      // If the value is an object, recursively call the function
      obj[key] = convertDatesToObjects(obj[key]);
    } else if (typeof obj[key] === 'string' && obj[key].match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?[-+]\d{2}:\d{2}$/)) {
      // If the value is a string matching the date pattern, convert it to a Date object
      obj[key] = new Date(obj[key]);
    }
  }
  return obj;
}

export function isDateInCurrentWeek(time: Date): boolean {
  const dateWeek = getISOWeek(time);
  const dateYear = time.getFullYear;
  const currentYear = (new Date()).getFullYear;
  const currentWeek = getISOWeek(new Date());
  return dateWeek === currentWeek && dateYear === currentYear;
}

function getISOWeek(date: Date): number {
  const dayOfWeek = date.getUTCDay() || 7; // Sunday is 0, but ISO week starts from Monday (1)
  date.setUTCDate(date.getUTCDate() + 4 - dayOfWeek); // Move to the Thursday in the current week
  const startOfYear = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
  const weekNumber = Math.ceil(((date.getTime() - startOfYear.getTime()) / 86400000 + 1) / 7);

  return weekNumber;
}