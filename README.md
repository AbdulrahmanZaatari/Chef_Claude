# Chef Claude - Recipe Generator

Chef Claude is a web application that helps you discover delicious recipes based on the ingredients you have on hand. Simply add your ingredients, and Chef Claude will suggest a recipe for you!

## Features

* **Ingredient Input:** Easily add ingredients to your list.
* **Recipe Generation:** Generates recipes based on your ingredients using the powerful Mistral AI model.
* **User-Friendly Interface:** Clean and simple interface for a seamless user experience.

## Technologies Used

* **Frontend:** React.js
* **Backend:** Node.js, Express.js
* **AI Model:** Mistral AI (through Hugging Face Inference API)
* **Environment Variables:** dotenv
* **CORS:** cors

## Setup Instructions

1.  **Clone the Repository:**

    ```bash
    git clone [https://github.com/AbdulrahmanZaatari/Chef_Claude.git](https://github.com/AbdulrahmanZaatari/Chef_Claude.git)
    cd Chef_Claude
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Create a `.env` File:**

    * In the root directory of the project, create a file named `.env`.
    * Add your Hugging Face API token to the `.env` file:

        ```
        HF_ACCESS_TOKEN=your_huggingface_api_token
        ```

        * **Note:** Replace `your_huggingface_api_token` with your actual Hugging Face API token.

4.  **Start the Backend Server:**

    ```bash
    node ai.js
    ```

    * The server will start on `http://localhost:3001`.

5.  **Start the Frontend Application:**

    ```bash
    npm run dev
    ```

    * The React app will start on `http://localhost:5173` (or a similar port).

6.  **Open in Browser:**

    * Open your web browser and navigate to `http://localhost:5173`.

## Usage

1.  **Add Ingredients:**
    * Use the input field to add ingredients to your list.
    * Click the "Add ingredient" button to add each ingredient.

2.  **Generate Recipe:**
    * Once you have added all your ingredients, click the "Generate Recipe" button.
    * Chef Claude will generate a recipe based on your ingredients and display it on the page.

## Important Notes

* **API Token Security:** Ensure your Hugging Face API token is kept secure. Never commit your `.env` file to version control.
* **Server Requirement:** The Node.js/Express.js backend server must be running for the application to function correctly.
* **CORS:** The backend server uses CORS to allow requests from the frontend application.

## Author

* Abdulrahman Zaatari

## Contributing

Feel free to contribute to this project by submitting pull requests or opening issues.
=======
# Chef_Claude
A React and Express.js app where you input your ingredients and then get recipe recommendations from Claude or Mistral AI!

