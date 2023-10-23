## Custom Bootstrap Theme Generator + Visualizer

### Steps to get started:
1. Clone the repo, and install all the dependencies by running: `npm install`.
2. Download sass compiler from [Sass's Official GitHub Repository](https://github.com/sass/dart-sass/releases/), extract the contents from the compressed file, and add the extracted folder's path to your environment's `$PATH` [variable](https://phoenixnap.com/kb/windows-set-environment-variable) to be able to compile and preview changes to your theme live!
3. Run the command `npm run start`, once the dependencies have been installed. 
    * This will start the live-server which will reload your html page (for visualizing your bootstrap theme) whenever changes are made to the [html file](./public/index.html),
    * And it will also begin compiling the content from the [scss file](./src/scss/custom-styles.scss) to the [css file](./public/styles/styles.css), based on which the [html file](./public/index.html) is styled on!

### Helpful Resources:
1. [Bootstrap's Sass documentation](https://getbootstrap.com/docs/5.3/customize/sass/) - Helps understand how to customize bootstrap theming!
2. [Sass's installation page](https://sass-lang.com/install/) - The CLI install section Highlight's how to install Sass compiler on your local machine to get up and running!
3. [HTML Bootstrap template app](https://bootswatch.com/default/) - boiler plate html template with all custom bootstrap classes added to corresponding html tags!

#### Next steps:
1. [StoryBook](https://storybook.js.org/tutorials/) exploration.
2. Exporting component's as installable npm packages. Resourcces:
    * [UnOfficial](https://jasonwatmore.com/post/2020/06/16/angular-npm-how-to-publish-an-angular-component-to-npm)
    * [Official](https://angular.io/guide/creating-libraries)
3. Testing Angular applications - maybe learn [Playwright](https://playwright.dev/docs/intro).
4. Many application ideas to be implemented!