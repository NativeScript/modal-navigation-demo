/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import "./bundle-config";
import * as application from 'application';
import { NavigationEntry } from 'ui/frame';
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

// Create navigation entry
let navigationEntry: NavigationEntry;
navigationEntry = {
  create: (() => { return page; })
};

application.start(navigationEntry);

// application.run({ moduleName: 'app-root' });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
