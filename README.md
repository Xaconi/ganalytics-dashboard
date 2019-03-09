# WORK IN PROGESS

## Google Analytics Dashboard

Useful tool for a multi-website analytics agency. With this tool you can control the Analytics from a bunch of websites and compare the data from the day before, the week before and the month before.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### @TODO List

- [x] OAuth Google Login 
- [x] Basic GA API usage
- [x] Layout and theme with @React
- [x] Component sections
- [x] App Logo
- [ ] Retrive data for every website on the account
- [ ] Data presentation
- [ ] Data comparative
- [ ] Deployment on [Github Pages](https://facebook.github.io/create-react-app/docs/deployment#github-pages-https-pagesgithubcom)


### Install instructions

```
    git clone https://github.com/Xaconi/ganalytics-dashboard.git
```

```
    cd ganalytics-dashboard
```

```
    npm install
```

* Create a ClientID on [Google Developers Console](https://cloud.google.com/)
* Copy the ClientID to an .env file on the project root as REACT_APP_GOOGLE_API variable
* Authorize the App domains on the [Google Developers Console](https://cloud.google.com/)
* Enable the Google Analytics API on [Google Developers Console](https://cloud.google.com/)
* Add the Google Analytics API scope on [Google Developers Console](https://cloud.google.com/)
* Start the App with ``` npm start ```
* ...