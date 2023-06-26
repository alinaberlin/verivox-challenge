# Introduction

This project contains a set of tests using Cypress and Cucumber for checking the verivox website.

This implementation is experimental, because executing functional tests against a production site is not a good practice, because is difficult to find the elements without proper "data-test" attributes, because of the load on the site, sometimes the loading time is too long and requires to rely on long wait time.

## Challenges

This project had some challanges:
1. The menu is difficult to click on it, because rely on mouse hover event, and cypress doesn't have support for it and an additional plugin is required.
2. Difficult to identify elements because we don't have "data-test" attributes.
3. Cookie modal window, because it is under a different domain and in the page is shadow element.
4. Result page is loading very slow and we need a long wait time, close to 20 seconds.

## How use it

1. Open cypress

```
npm run cy:open
```

2. Run tests

```
npm run test
```
