const fs = require("fs-extra");
const concat = require("concat");
async function build() {
  // NOTE: Have changed angular.json file, 'outputPath' to 'dist' rather than 'dist/<application-name>'. If you are using default angular.json then for file paths below, add <application-name> in file path. Example - './dist/my-medium/runtime.js', do the same for all.
  const files = [
    "./dist/my-angular-element/polyfills.js",
    "./dist/my-angular-element/scripts.js",
    "./dist/my-angular-element/main.js"
  ];
  await fs.ensureDir("elements");
  await concat(files, "elements/my-angular-elements.js");
}

build();
