As we are using the singe repository for all the application . We moved the Ionic applications also inside our Nx repo. In the Git → pvs → is our common repo for both web and mobile development. Hopefully Nx team also extent the community to support Ionic with angular

http://nrwl.io/ → checkout the official website for more about nx .@nxtend/ionic-angular this the plugin we used of integrating ionic apps with Nx workspace.

Initialize Plugin

Npm

npm install --save-dev --exact @nxtend/ionic-angular

yarn

yarn add --save-dev --exact @nxtend/ionic-angular

Nx CLI

nx generate @nxtend/ionic-angular:init

Angular CLI

ng generate @nxtend/ionic-angular:init

Generating Applications

nx generate @nxtend/ionic-angular:application <app-name>

Capacitor default installed by nx commands . and that is open source too.

Use the following cli to run ionic apps :

nx build <app-name>
nx lint <app-name>
nx serve <app-name>
nx test <app-name>
nx e2e <app-name>

To add the Native Platform :

we have to build

Once the build is success .

Use the following commands to add native platforms :

nx run <app-name>:add:ios
nx run <app-name>:add:android

Then, use the Copy the lastest build output to the native platforms:

nx run <app-name>:copy:ios
nx run <app-name>:copy:android

Sync Build Output and Dependencies

Copy the latest build output to the native platforms and sync native platform dependencies:

nx run <app-name>:sync:ios
nx run <app-name>:sync:android

Open Native Platform

nx run <app-name>:open:ios
nx run <app-name>:open:android

Those above commands open X-code and Android Studio.

In Android Studio . We can build APk and Bundle files also

The above steps are followed by using official document as reference :

            https://nxtend.dev/docs/ionic-angular/overview

Keep Learning :) Keep Coding :)
