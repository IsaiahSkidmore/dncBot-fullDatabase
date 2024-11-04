# DNC Bot ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

DNC Bot is a web application that provides an interface for adding phone numbers to a Do Not Call (DNC) list. Designed for call centers and telemarketing teams, this tool helps streamline DNC compliance by securely managing phone numbers in a database. Built with TypeScript, React, and Node.js, the app includes authentication, a RESTful API, and a robust backend deployed on Render.

## Features

- **User Authentication**: Allows users to securely log in and manage the DNC list.
- **Add to DNC List**: Users can submit phone numbers to the DNC list, which are then saved in a database.
- **Database Integration**: Uses Sequelize ORM for seamless interaction with the database.
- **Front-end and Back-end Separation**: React-powered front end communicates with a Node.js and Express back end.
- **Deployment on Render**: Both the client and server are deployed using Render.

## Tech Stack

- **Front End**: React, TypeScript, HTML, CSS
- **Back End**: Node.js, Express, JavaScript
- **Database**: Sequelize with support for various SQL databases
- **Deployment**: Render

## Getting Started

To set up the application locally, clone this repository and follow the instructions below.

### Prerequisites

- Node.js
- NPM or Yarn
- Render account (if deploying)

### Installation

1. **Clone the Repository**  
   ```bash
   git clone <repository-url>
   cd dnc-bot

2. **Install Dependencies**
    ```bash
    npm install

3. **Configure Environment Variables**
     
   Create a .env file in your server folder and add the following:
   ```bash 
   DATABASE_URL=<Your Database URL>
   DB_HOST=<Your Database Host>
   DB_NAME=<Your Database Name>
   DB_PASS=<Your Database Password>
   DB_PORT=<Database Port>
   DB_USER=<Your Database User Name>
   JWT_SECRET=<JSON Web Token>
   PORT=<Application Port>




## Future Development  

In future iterations of DNC Bot, several enhancements are planned to improve functionality, user experience, and overall performance:

### 1. Admin Feature
An admin feature will be added to allow authorized users to remove phone numbers from the DNC database. This will involve:
   - **Admin Authentication**: Separate authentication to ensure only designated admins can access this feature.
   - **Enhanced UI**: Admins will have an additional interface option to view and delete entries from the DNC list.
   - **Audit Logging**: Implementing logs to record deletion activities, providing traceability and accountability.

### 2. Front-end Optimization
To improve usability, the front-end will undergo a design overhaul to enhance aesthetic appeal and user experience:
   - **Responsive Layout**: Optimizing the layout for better compatibility with mobile and tablet devices.
   - **Styling Updates**: Applying a modern UI theme, consistent color schemes, and improved typography.
   - **Enhanced Usability**: Simplified navigation and restructured components to make the app more intuitive.

### 3. Error Message Modals
To improve feedback, error message modals will be introduced across the application. These modals will display specific reasons for issues, particularly during login and user creation:
   - **Detailed Error Information**: Clear descriptions for errors such as incorrect credentials, missing fields, or server issues.
   - **Consistent Error Handling**: Unified error handling across the app, ensuring all error messages are displayed uniformly.
   - **User Guidance**: Messages will include tips to help users resolve common issues independently, improving support and user satisfaction.


# Deployed Application:   

https://dncbot-fulldatabase.onrender.com/  
  

    
## Questions
Github username: IsaiahSkidmore  
If you have any questions, please reach out to me at iskidmore0617@gmail.com  

## License
This project is licensed under the MIT license.

   
