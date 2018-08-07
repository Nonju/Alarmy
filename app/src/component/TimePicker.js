import { Platform, /* DatePickerAndroid, */ TimePickerAndroid, DatePickerIOS } from 'react-native';

const androidPicker = async () => {
  try {
    const currentDate = new Date();

    // Todo: Replace with weekday selector
    // const datePick = await DatePickerAndroid.open({ date: currentDate });
    // if (datePick.action === 'dismissedAction') { return null; }

    const timePick = await TimePickerAndroid.open({
      hour: currentDate.getHours(),
      minute: currentDate.getMinutes(),
      is24Hour: true, // Todo: Add possibility to change through settings
    });
    if (timePick.action === 'dismissedAction') { return null; }

    // Delete actions and merge pick-objects before returning
    // delete datePick.action;
    // delete timePick.action;
    // return { ...datePick, ...timePick };
    delete timePick.action;
    return timePick;

  } catch (e) {
    console.log('Error selecting datetime:', e);
  }
  return null;
};

// Todo: Implement
const iosPicker = () => {}; // Implement using 'DatePickerIOS'

export default () => {
  switch (Platform.OS) {
    case 'android': return androidPicker();
    case 'ios': return iosPicker();
    default: return {};
  }
};

