# NexBookStore

NexBookStore is an online bookstore built with the MERN stack that allows users to explore a diverse range of books across various categories such as Cooking, Fantasy, Science Fiction, Programming, and History. This project demonstrates full-stack web development skills, including the integration of front-end and back-end technologies.

## Features

- **Book Listings**: View a collection of books dynamically fetched from the backend.
- **Book Categories**: Books are organized into categories for easy browsing.
- **Responsive Design**: The website is fully responsive and optimized for various screen sizes.
- **User Authentication**: Users can sign up and log in to access their profiles.
- **Login and Sign-up Forms**: Two separate forms for login and sign-up with form validation.
- **Modern UI**: Clean and modern user interface designed using Tailwind CSS.
  
## Tech-Stack

- **Frontend**:
  - React.js
  - Tailwind CSS
  - React Router DOM
  - Axios

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (using MongoDB Atlas)
  
- **Other Tools**:
  - Vite (for bundling)
  - Git (for version control)

## Installation & Setup

1. Clone the repository:
   ```bash
        git clone https://github.com/your-username/nexbookstore.git  
   ```
2. Navigate into the project directory:
   ```bash
        cd nexbookstore
   ```
3. Install dependencies:
   ```bash
        # for FrontEnd  
        npm install
   ```
   ```bash
        # for Backend
        cd BacKEnd
        npm install
    ```
4. Setup Environment variables. create a ``.env`` file and add following:
    ```bash
        # for FrontEnd 
        VITE_BACKEND_URL=<your-backend-url>
    
        # for BackEnd
        PORT=<Port>
        MongoDbURL=<your-database-url>
    ```
5. Run the Project:
    ```bash
        # for FrontEnd
        npm run dev 
        # for BackEnd
        npm start
    ``` 
6. Open the Project in your browser at ``http://localhost:5173``.

7. Verify the backend API by visiting ``http://localhost:<PORT>`` in your browser.

## Contribution
Feel free to fork this project and submit pull requests if you have any improvements or new features.
