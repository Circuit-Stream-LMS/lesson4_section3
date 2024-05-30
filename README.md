# Random User API Project

## Getting Started

### Folder Structure

```
└── lesson3_section3/
    ├── client/ # frontend code
    │   ├── index.html
    │   ├── script.js
    │   └── styles.css
    ├── server/ # backend code
    │   └── app.js
    ├── package.json
    ├── package-lock.json
    └── README.md
```

### Prerequisites

Before you start, make sure you have Node.js and npm (the package manager for Node.js) installed on your machine.

### Frontend Setup

1. Open the `client` folder and view the `index.html` file in a web browser.
2. Note that the frontend is already built and has fields to display user information.

### Backend Setup

1. From within a terminal, `cd` into the root of the repo and run `npm install`. This will install all the dependencies you need for this project.
1. Now, cd into the `server` folder.
2. Start the server by running `node app.js`. You should see the message:
```Server is running on port 3000```

### Display User Info

Back in your browser, click on the `Get a random user` button. Notice that the user fields should now be populated. 

### Modify Endpoint

Modify the `/users` endpoint in `app.js` to make a request to the [Random User API](https://randomuser.me/) and return the response to the frontend.

Good luck!