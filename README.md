# :evergreen_tree: Birch: A webshop with plants :evergreen_tree:

## What is this project about 
This webshop was created by [Gordon So](https://github.com/sssgordon) and [Melissa 't Hart](https://github.com/MelissaDTH). We worked on this during a project week at the Codaisseur Academy in week 4. Initially it was built only on the client-side, but later on in the academy we decided to also create a back-end ([The back-end repository can be found here](https://github.com/sssgordon/birch-server.git)). 

## Table of contents 
- **[Technologies used](#technologies-used)**
- **[Goals for this project](#goals-for-this-project)**
- **[Application features](#application-features)**
- **[Project set-up](#project-set-up)**

## Technologies used 

<b>Front-end</b>
  - React (with Routing and Thunk);
  - Redux;
  - React-bootstrap;

<b>Back-end</b>
  - Express;
  - Sequelize;
  - Cors;
  - Body-parser;
  - Docker;
  
## Goals for this project

1. Practice with creating an app with React;
    - To be able to make a webshop that contains a cart (and wishlist)
2. Work together in a team;
3. Work in an Agile environment with the SCRUM methodology;
4. Practice styling;

## Application features

 :floppy_disk: The project features: :floppy_disk:

  - It has a fully working navigation bar;
  - At the homepage, you get information about the available plants.
  - Clicking on those plants, it wel redirect you to their details page;
  - It contains an About page with information;
  - The plants are divided in three categories (Snow, Rainforest and Desert). These categories all have their own page with the corresponding plants;
  - Every plant can be added to the cart, at the cart page it will show which plants are selected and it shows the total amount;
  - When there are plants in the cart, a button becomes available that redirects the customer to the checkout page. Here, they can fill in their personal information. No further action or redirection to an actual payment page is yet available here;
  - The webshop has an overall styling, mostly done with CSS and some components are done with React-bootstrap;

## Project set-up
<i>Type in your terminal inside the project directory</i>

<b>Front-end</b>

### 1. Clone the repository
```
git clone https://github.com/sssgordon/birch.git
```

### 2. Install all dependencies 
```
npm install
```

## 3. To start a development server:

``` 
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

<hr>
<b>Back-end</b>

<i> You will need to create a container on your computer for the database, we used [Docker](http://docker.com/).</i>

## 1. Clone the repository 
```
git clone https://github.com/sssgordon/birch-server.git
```

## 2. Install all dependencies
```
npm install
```

## 3. To start the server

``` 
nodemon .
```

## 4. Start the database:

``` 
Open Docker, connect with the password 'secret'
```

