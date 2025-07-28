# Online Library system readme.

# Description
A react based online Library application that allows the user to browse, search and filter books. They can even add new books (temporarily) till the session is running. When the page reloads the added book will not be present in the data. This project is to demonstrate redux store management, along with how a basic online library works in front-end.

# Features of the project
-Searching for the books based on title or author
-Filtering the books based on category/genre
-Using redux store management to add a book throught user-inputs
-Integrating a mock data
-Adding a responsive layout through react components

# Project Structure

```
OnlineLibrary
    -Components
        -AddNew.jsx         # (AddBook page) displays the AddBook form page which on submit add new books 
        -Bookdesc.jsx       # displays the book detail page for the particular book selected by the user 
        -BookDisplay.jsx    # used for rendering all the books on the page on the ui
        -CategoryPage.jsx   # (Category page) displays a page containing the filtered books based on the genre 
        -Error.jsx          # (Error page) Page for error message
        -Header.jsx         # contains the nav bar component
        -Home.jsx           # (Home page) Displays the home page
        -Search.jsx         # (Browse Book Page) Displays all the books and gives the user options to filter 
    -features
        -bookSlice.js       # contains the store slice (functionality of adding books)
    -public
        -book-icon          # Favicon of the page
    -src    
        -App.jsx            # Rendering header and the respective components
        -main.jsx           # rendering app.jsx and rerouting the application based on the links
        -style.css          # all the styling of the page
    -utils
        -books-details.js   # contains the mock data of the books
        -store.js           # Redux store

```

## Technologies Used

- React
- Redux
- JavaScript (ES6+)
- TailwindCss

## How to Run Locally

1. Clone the repository:

    ```bash
    git clone https://github.com/shivamkumar7042/online-library-.git
2. Navigate to the project folder:

    ```bash
    cd OnlineLibrary
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

 ```bash
    npm run dev
    ```

## Github Link
https://github.com/shivamkumar7042/online-library-.git

#Update:
-added dist folder in file
-will implement hashrouter in future updates to deploy the page through github
