
// Custom Alarm handler
// AlarmHandlerModule.java

package com.app;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

public class AlarmHandlerModule extends ReactContextBaseJavaModule {
    public AlarmHandlerModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "AlarmHandler";
    }

    @ReactMethod
    public void add(final Promise promise) {
        int alarmId = 1337; // Temp id ( generate random id to keep track of created alarm )
        promise.resolve(Integer.toString(alarmId));
    }
}
