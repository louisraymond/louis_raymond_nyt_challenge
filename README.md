
## Blue Harvest New York Times App

to boot this project up in development mode run:

### `npm install`
### `npm start`

Which runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## How Does the App work?

This app fetches the 10 latest stories from the NYT article api. It allows you to search for articles related to a phrase, and is responsive

for a video demo, along with a talk through of some of the code - click here:

##Summary of Architectural Choices  

The information from the API and the current search term is handled by StoryContainer, which then passes the stories down to StoryDisplay, which in turn renders individual stories (not a separate component)- StoryDisplay keeps an internal state to know if it has been clicked or not- which determines the information it displays.

I decided not to split each story into a functional component because it was simpler to have one component decide what to renders, rather than two functional components (one for the picture 'side' of the story, and one for the 'summary and link' side)
