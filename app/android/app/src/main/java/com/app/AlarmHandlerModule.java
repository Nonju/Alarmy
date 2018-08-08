
// Custom Alarm handler
// AlarmHandlerModule.java

package com.app;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

import android.app.AlarmManager;
import java.util.Collection;

public class AlarmHandlerModule extends ReactContextBaseJavaModule {
    // All alarm groups
    // private List<AlarmGroup> alarmGroups // Todo: implement AlarmGroup ( + implement AlarmItem )

    public AlarmHandlerModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "AlarmHandler";
    }

    @ReactMethod
    public void getList(int groupId, final Promise promise) {
        promise.resolve('Not yet implemented');
    }

    @ReactMethod
    public void getListFull(final Promise promise) {
        promise.resolve('Not yet implemented');
    }

    @ReactMethod
    public void create(final Promise promise) {
        int alarmId = 1337; // Temp id ( generate random id to keep track of created alarm )
        promise.resolve(Integer.toString(alarmId));
    }

    @ReactMethod
    public void delete(int alarmId, final Promise promise) {
        promise.resolve(true); // true / false --> success / failed removing alarm
    }
}
