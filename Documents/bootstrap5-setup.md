# Install Bootstrap

# version 3.x

npm install bootstrap-sass --save

# version 4.x

npm install bootstrap@next --save

# version 5.x

npm install bootstrap@next popper.js --save

### popper js is a light weight js for tooltip and popup

# Configuring Project

Create an empty file \_variables.scss in src/.
If you are using bootstrap-sass, add the following to \_variables.scss:

$icon-font-path: '../node_modules/bootstrap-sass/assets/fonts/bootstrap/';

# In styles.scss add the following: (Incase of Theming using scss only)

# version 3

@import 'variables';
@import '../node_modules/bootstrap-sass/assets/stylesheets/\_bootstrap';

# version 5

@import 'variables';
@import '../node_modules/bootstrap/scss/bootstrap';

IF YOU'RE USING BOOTSTRAP 5:

1. From the root of your project you need to install Bootstrap 5, and Popper.js which is used for dropdown menu’s and other JavaScript sort of things:

npm install bootstrap@next popper.js --S

2. <strong> Do only theming not needed . If you do theming no need </strong> <a href="#importing">click to theming</a> Update your angular.json file with the same code snippet below in two places. Underneath "build" and "test":

<script>
 "styles": [
   "src/styles/styles.scss",
   "./node_modules/bootstrap/scss/bootstrap.scss"
 ],
 // See blurb about this below, and delete this comment.
 "stylePreprocessorOptions": {
   "includePaths": [
     "src/styles",
     "./node_modules/bootstrap/scss"
   ]
 },
 "scripts": [
   "./node_modules/jquery/dist/jquery.min.js", // Delete line if using version 5.
   "./node_modules/popper.js/dist/umd/popper.min.js",
   "./node_modules/bootstrap/dist/js/bootstrap.min.js"
 ]
</script>

3. Create a styles directory/folder in /src. So it should be src/styles.

4. Now move your styles.scss file into that directory and create your variables, mixins and custom files to that src/styles directory using the following naming convention: \_variables.scss, \_mixins.scss and \_custom.scss.

src
├── app
│ ├── app-routing.module.ts
│ ├── app.component.html
│ ├── app.component.scss
│ ├── app.component.spec.ts
│ ├── app.component.ts
│ ├── app.module.ts
│ └── users
├── assets
├── environments
│ ├── environment.prod.ts
│ └── environment.ts
├── favicon.ico
├── index.html
├── main.ts
├── polyfills.ts
├── styles
│ ├── _custom.scss /\* Add files here but they should have the "_" pre-pended like `_custom.scss`, (shown above) other than `styles.scss`. _/
│ ├── \_mixins.scss /_ Your editor and the lang strips these but I'm not entire sure why they are needed, but that's what I was taught. _/
│ ├── styles.scss
│ └── \_variables.scss /_ Add files here but they should have the "\_" pre-pended like `_custom.scss`, (shown above) other than `styles.scss`. \*/
└── test.ts

5. Now open your styles.scss file and import Bootstrap and your custom/mixin/variable files:

# Importing

<div id="importing">
<pre>
In your custom.scss, you’ll import Bootstrap’s source Sass files. You have two options: include all of Bootstrap, or pick the parts you need. We encourage the latter, though be aware there are some requirements and dependencies across our components. You also will need to include some JavaScript for our plugins.

// Custom.scss
// Option A: Include all of Bootstrap

// Include any default variable overrides here (though functions won't be available)

@import "../node_modules/bootstrap/scss/bootstrap";

// Then add additional custom code here

// Custom.scss
// Option B: Include parts of Bootstrap

// 1. Include functions first (so you can manipulate colors, SVGs, calc, etc)
@import "../node_modules/bootstrap/scss/functions";

// 2. Include any default variable overrides here

// 3. Include remainder of required Bootstrap stylesheets
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";

// 4. Include any optional Bootstrap components as you like
@import "../node_modules/bootstrap/scss/root";
@import "../node_modules/bootstrap/scss/reboot";
@import "../node_modules/bootstrap/scss/type";
@import "../node_modules/bootstrap/scss/images";
@import "../node_modules/bootstrap/scss/containers";
@import "../node_modules/bootstrap/scss/grid";
@import "~bootstrap/scss/utilities";
@import "~bootstrap/scss/utilities/api";

// 5. Add additional custom code here

/_ Custom _/
@import 'variables';
@import 'mixins';
@import 'custom';

 </pre>
 <a href="https://getbootstrap.com/docs/5.0/customize/sass/">click here for official bootstrap theming document </a>
</div>

6.  To use your variables in other components, you’ll have to import them into every component-name.component.scss file like so. But because we imported all of Bootstrap’s .scss files into our angular.json file, we can leave off the path which makes things much cleaner:

@import 'variables';

7. Since we updated angular.json you’ll have to restart your server.
