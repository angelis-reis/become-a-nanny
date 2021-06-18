<h1 align="center">
    Hapu's Nanny Share (Jungle Devs's React Challenge)
</h1>

## 💻 About the Project

Hapu is Airbnb for nanny share. Share your home, nanny, and costs and create new flexible, affordable solutions in childcare.

Simple land page, with A/B test and newsletter API integration.

Project developed as a ReactJs technical challenge for the Jungle Dev's company.

---

## ⚙️ Functionalities

-   [x] A/B test for user interaction analytics
-   [x] Newsletter subscription

---

## 🎨 Layout

Application layout available in Figma:

<a href="https://www.figma.com/file/iBxoiuoSXy3SiOAnwXo2Np/Frontend-%E2%80%93-Challenge-1B?node-id=0%3A1">
  <img alt="Figma layout" src="https://img.shields.io/badge/Acessar%20Layout%20-Figma-%2304D361">
</a>

---

## Pré-requisites

Before you start, you need to install the following tools on your computer:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

---

## 🧭 Running the application in development mode

```bash

# Clone this repository
$ https://github.com/angelis-reis/become-a-nanny

# Access the project folder
$ cd become-a-nanny

# Install the project dependencies
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm start

# The application will open in port:3000 - open http://localhost:3000 in your browser

```

---

## A/B test

    The A/B test has two variants, A and B. These variants change the Title and Subtitle in the hero section. You can find the A/B test variants inside src/ABtest folder. When the Hero section link is pressed, a win is emitted for variants A or B.

    When we run our app in development mode, we'll see a small control panel at the bottom of the screen. This lets us manually switch between the different variants so we can easily test the UI for each of these cases without having to randomly get assigned to it.

    A key-value pair is stored in localStorage defining which variant the user is set to receive. This allows the user to receive a consistent experience while using the app.

---

## Logging A/B test data

    This application sends the A/B test data for the MixPanel service for analytics. For this, you need to create an account in MixPanel, create a new project and get the project's token.

    Add the project's token in the MixpanelToken.js file inside src/sensitive. This folder is in .gitignore so that the private token will not be accessible in the running application.

---

## Newsletter subscription

The newsletter subscription form sends a post request for the Jungle Dev's API (https://api.jungledevs.com/api/v1/challenge-newsletter/) with the user's name and user's email.

---

## 🛠 Creating a Production Build

```bash

# creates a build directory with a production build of the app
$ npm run build

```

    This creates a build directory inside the root directory, which bundles your React app and minifies it into simple HTML, CSS, and JavaScript files.
    With the build files, you can deploy your application at your favorite cloud host.

---

## 🛠 Technology

This are the tolls used in this project:

### **Website** ([React](https://reactjs.org/))

-   **[React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)**
-   **[Axios](https://github.com/axios/axios)**
-   **[styled-components](https://github.com/styled-components/styled-components)**
-   **[react-hook-form](https://github.com/react-hook-form/react-hook-form)**
-   **[hookform/error-message](https://github.com/react-hook-form/error-message)**
-   **[react-ab-test](https://github.com/marvelapp/react-ab-test)**
-   **[mixpanel](https://github.com/mixpanel/mixpanel-js)**
-   **[Eslint](https://github.com/eslint/eslint)**
-   **[prettier](https://github.com/prettier/prettier)**

-   Code Editor: **[Visual Studio Code](https://code.visualstudio.com/)**
-   Commit Convention: **[ConventionalCommits](https://www.conventionalcommits.org/en/v1.0.0/)**
-   Fonts: **[Inter](https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap')**

---

## 🦸 Author

<a href="https://github.com/angelis-reis">
<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/18598530?v=4" width="100px;" alt=""/>
<br />
<sub><b>Frederico de Angelis Reis</b></sub></a>
<br />

---

## 📝 License

This project is under [MIT](./LICENSE).

Made by Frederico de Angelis Reis 👋🏽 [Get in touch!](https://www.linkedin.com/in/frederico-matheus-de-angelis-reis-2505b2117/)

---
