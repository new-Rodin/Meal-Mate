# Recipe Finder React App

A responsive web application built with React that allows users to search for recipes by dish name or ingredients. Users can view detailed cooking instructions, nutritional information, and save their favorite recipes. This project was developed to showcase frontend development skills, including API integration, state management, and building a clean, component-based UI.



## Features

The application implements a range of features as outlined in the project requirements.

### Basic Features
* **Search Functionality**: Users can search for recipes by either typing a dish name or selecting from a list of ingredients.
* **Recipe Cards**: Search results are displayed in a visually appealing grid of recipe cards, each showing the recipe's image and title.
* **Detailed Recipe View**: Clicking on a recipe card navigates the user to a full-page view with a complete list of ingredients and step-by-step cooking instructions.
* **Responsive Design**: The application is fully responsive and provides an optimal viewing experience on both desktop and mobile devices.

### Intermediate Features
* **Random Recipes on Load**: The homepage initially displays a list of random recipes to engage the user immediately.
* **Save Favorites**: Users can save their favorite recipes. This list persists even after the browser is closed, using the browser's Local Storage.
* **Favorites Page**: A dedicated page where users can view all their previously saved recipes.

---

## Tech Stack

This project was built using modern frontend technologies.

* **Frontend:** **React.js**
* **Routing:** **React Router** for client-side navigation.
* **API:** **Spoonacular Food API** for fetching recipe data.
* **Styling:** **Plain CSS** with separate stylesheets for each component.
* **Build Tool:** **Vite** for a fast development experience.

---

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have **Node.js** (version 16.x or later) and **npm** installed on your computer. You can download them from [nodejs.org](https://nodejs.org/).

### Local Setup

1.  **Clone the repository**
    Open your terminal and run the following command to clone the project:
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```

2.  **Navigate to the project directory**
    ```bash
    cd your-repo-name
    ```

3.  **Install dependencies**
    Install all the required npm packages:
    ```bash
    npm install
    ```

4.  **Set up environment variables**
    This project requires an API key from Spoonacular to fetch recipe data.

    * Create a new file named `.env` in the root of your project folder.
    * Add the following line to the `.env` file, replacing `YOUR_API_KEY` with your actual key from the [Spoonacular API website](https://spoonacular.com/food-api):
        ```
        VITE_SPOONACULAR_API_KEY=YOUR_API_KEY
        ```
    * **Important:** You will need to update one line in `src/services/recipeAPI.js` to use this environment variable. Change the `API_KEY` constant to the following:
        ```javascript
        const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
        ```

5.  **Run the development server**
    Start the application in development mode:
    ```bash
    npm run dev
    ```
    The application should now be running on `http://localhost:5173` (or another port if 5173 is busy).