🎬 Movie Website Project
This project is a movie Browse website built using ReactJS, Vite, TailwindCSS, and integrates with The Movie Database (TMDB) API.

🚀 How to Run the Project
Please follow the steps below to install and run this project on your machine:

1. Clone Project
Open your Terminal or Command Prompt and type the following command:

Bash
git clone https://github.com/MGPISEHT/TMDBMovies.git

2. Open Project
Open the project folder with your favorite code editor, such as VS Code or another IDE.

3. Install Dependencies
Open Terminal in your project directory and install all dependencies:

Bash
npm install
# or if you use Yarn:
# yarn install

4. Run Project
Once the dependencies are installed, use the following command to run the project in development mode:

Bash
npm run dev
# or if you use Yarn:
# yarn dev
The project will run on http://localhost:5173 (or any other port shown in Terminal).

🔑 Configuring API Key
Important Note: You cannot use my own TMDB API Key. You must create a personal account on the TMDB website to get your API Key.

Get Your API Key:
Go to The Movie Database (TMDB) website.
Create a new account or Login.
Go to your account settings and request an API Key (v3).

Create a .env File:
In the root directory of your project, create a new file called .env. In this file, add your API Key in the following format:

Code snippet
VITE_THE_MOVIE_DB_API_KEY = "YOUR_ACTUAL_TMDB_API_KEY_HERE"
Make sure to: Replace "YOUR_ACTUAL_TMDB_API_KEY_HERE" with the actual API Key you received from TMDB.