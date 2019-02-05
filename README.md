
## New York Times App
To start this app, you can just open the index.html file

## Other Ways To See This App
Or you can check out the version deployed on netlify here: https://infallible-tesla-146517.netlify.com/

Otherwise, to boot this project up in development mode run:

### `npm install`
### `npm start`

Which runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## How Does the App work?

This app fetches the 10 latest stories from the NYT article api. It allows you to search for articles related to a phrase, and is responsive


## Summary of Architectural Choices  

The information from the API and the current search term is handled by StoryContainer, which then passes the stories down to StoryDisplay, which in turn renders individual stories (not a separate component)- StoryDisplay keeps an internal state to know if it has been clicked or not- which determines the information it displays.

I decided not to split each story into a functional component because it was simpler to have one component decide what to renders, rather than two functional components (one for the picture 'side' of the story, and one for the 'summary and link' side)
