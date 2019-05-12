# melonbun-web
A social media platform that allows you to share your experiences, guides and reviews, in which you can post requests and explore exclusive and unique items that completes the experience.

## Melonbun
#### Local Development
1. in root directory, run 'npm install'
2. run 'npm run dev'
2. go to 'localhost:3000'
#### Deployment
- Currently deployed in heroku https://melonbun.herokuapp.com/. Set to automatically deploy on changes to master branch.

## Storybook
Storybook organizes the UI components used in the app in isolation (stories). Each story have documentation of each components, including their props, use cases, and can also perform unit/integration tests.
#### Local Development
1. in root directory, run 'npm run storybook'
2. go to 'localhost:6006'
#### Deployment
- running build creates a static app for Storybook, generated in the /docs folder. Github pages reads the /docs folder in master branch and deploy them in https://melonbun-dev.github.io/melonbun-web/ 
1. run 'npm run build-storybook'
2. Push change to master branch.
