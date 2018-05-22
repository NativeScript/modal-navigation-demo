/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import "./bundle-config";
import * as application from 'application';
import { Frame, NavigationEntry } from 'ui/frame';
import { ScrollView } from 'ui/scroll-view';
import { TextView } from 'ui/text-view';
import { TestPage } from './TestPage';

// Create page to be rendered
const page: TestPage = new TestPage();
page.actionBar.title = 'Test Action Bar';
let pageContent;
pageContent = new ScrollView();
let textView = new TextView();
textView.text = 'Test text view';
pageContent.content = textView;
page.content = pageContent;
(<any>page).scrollableContent = false;

// Create navigation entry
let navigationEntry: NavigationEntry;
navigationEntry = {
  create: (() => { return page; })
};

// Create root entry
let rootEntry: NavigationEntry;
rootEntry = {
  create: (() => {
    const frame = new Frame();
    frame.navigate(navigationEntry);
    return frame;
  })
};

application.run(rootEntry);

// application.run({ moduleName: 'app-root' });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
