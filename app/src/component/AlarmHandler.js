
/*
 * Usage:
 * - AlarmHandler.create() --> Promise<alarmId: int> // Todo: add parameters to 'create' to know when to set alarm (+ what sound to use)
 * - AlarmHandler.delete(alarmId: int) --> Promise<success: boolean>
 * - AlarmHandler.getList(groupId: int) --> Array<alarmData> // Returns alarmData for alarmGroup
 * - AlarmHandler.getListFull() --> Array<Array<alarmData>> // Returns array of alarmData for every group
 */

import { NativeModules } from 'react-native';
export default NativeModules.AlarmHandler;

