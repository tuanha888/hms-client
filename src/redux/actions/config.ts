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
  const currentTime = new Date();
  let sevenDays = new Date(currentTime.getTime());
  sevenDays.setDate(currentTime.getDate() + 7);
  return time >= currentTime && time <= sevenDays;
}