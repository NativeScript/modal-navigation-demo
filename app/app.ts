/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import "./bundle-config";
import * as application from 'application';

application.android.on(application.AndroidApplication.activityBackPressedEvent, function (args) {
    console.log(">>>>>>>>>>>>>>>>>>>>> activityBackPressedEvent <<<<<<<<<<<<<<<<<<<<<")
    console.log("Event: " + args.eventName + ", Activity: " + args.activity);
    // Set args.cancel = true to cancel back navigation and do something custom.
});

application.run({ moduleName: 'app-root' });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
