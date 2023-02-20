# Rick and Morty Web App

A web application to render a list of characters from the [Rick and Morty API](https://rickandmortyapi.com/documentation/).

The application consists of 2 views. A list of characters and a detailed page for the selected character.

The list of characters has pagination and a search input to search characters by name. It also has a simple donut chart for genders made with D3.js. I used a donut chart because I think this type of chart is perfect to represent limited amount of categories (maximum 4 for this dataset). The chart renders the data for the current page only. It updates every time the page is changed or the data is filtered by name.

The search input is placed in the navigation bar and it uses redux ('search slice') to update the list view page.

The endpoints are defined with the _createApi_ method (from Redux Toolkit Query) to query the API.

The responses from the API are cached for 24 hours using RTK query.

The character view displays the character's image, name, and other details.

## Tools and environment

The project was created in CRA using plain JavaScript and CSS. I in Visual Studio Code.

A Prettier plugin for VScode was used to format the code.

## Run the project

To run the project in the development mode, run [`npm install`] and then [`npm start`] in the terminal within the project folder.

# Styling

I used CSS to style the page. For the naming, I follow _BEM_ (Blocks, Elements and Modifiers) methodology. I also added the styles for mobile view. 

I also use _rem_ units for fonts and media queries to improve the accessibility.

## Testing

- Cross-browser testing

Tested in the latest Chrome and Firefox browsers and for the responsive view.

- Unit testing

Unfortunately I did not have enough time to implement tests, but I think adding them would have been ideal since they improve the code quality, make codebase maintenance easier, and improves development speed. I would use React Testing Library for this case.
