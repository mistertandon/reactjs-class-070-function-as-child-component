Options for `npm`
  "scripts": {
    "postinstall": "bower install",
    "update-deps": "npm update",
    "postupdate-deps": "bower update",
    "prestart": "npm install",
    "start": "http-server -a localhost -p 8000 -c-1 ./app",
    "pretest": "npm install",
    "test": "karma start karma.conf.js",
    "test-single-run": "karma start karma.conf.js --single-run",
    "preupdate-webdriver": "npm install",
    "update-webdriver": "webdriver-manager update",
    "preprotractor": "npm run update-webdriver",
    "protractor": "protractor e2e-tests/protractor.conf.js",
    "update-index-async": "node -e \"var fs=require('fs'),indexFile='app/index-async.html',loaderFile='app/bower_components/angular-loader/angular-loader.min.js',loaderText=fs.readFileSync(loaderFile,'utf-8').split(/sourceMappingURL=angular-loader.min.js.map/).join('sourceMappingURL=bower_components/angular-loader/angular-loader.min.js.map'),indexText=fs.readFileSync(indexFile,'utf-8').split(/\\/\\/@@NG_LOADER_START@@[\\s\\S]*\\/\\/@@NG_LOADER_END@@/).join('//@@NG_LOADER_START@@\\n'+loaderText+'    //@@NG_LOADER_END@@');fs.writeFileSync(indexFile,indexText);\""
  }