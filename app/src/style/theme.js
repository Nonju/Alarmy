
const currentTheme = 'light'; // Default theme // Todo: changeable through settings

const light = {
  header: 'lightblue',
  background: '#f9f9f9',
  listItem: 'lightgray',
  weekDaySelector: {
    background: 'lightblue',
    text: '',
  }
};

const dark = {
  header: '#00f',
  background: '#666',
  listItem: '#ccc',
  weekDaySelector: {
    background: '#154187',
    text: '',
  },
};

const themes = { light, dark };
const getByKey = key => themes[currentTheme][key];

// Basics
export const getHeader = () => getByKey('header');
export const getBackground = () => getByKey('background');

// AlarmList
export const getListItemBackground = () => getByKey('listItem');

// WeekDay Selector
export const getWeekDaySelectorSelectedColors = () => getByKey('weekDaySelector');

