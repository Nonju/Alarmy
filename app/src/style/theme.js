
const currentTheme = 'light'; // Default theme // Todo: changeable through settings
const style = {
  light: {
    header: 'lightblue',
    background: '#f9f9f9',
    listItem: 'lightgray',
  },
  dark: {
    header: '#00f',
    background: '#666',
    listItem: '#ccc',
  }
};
const getByKey = key => style[currentTheme][key];

// Basics
export const getHeader = () => getByKey('header');
export const getBackground = () => getByKey('background');

// AlarmList
export const getListItemBackground = () => getByKey('listItem');

