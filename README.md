# :evergreen_tree: Birch: A Webshop with Plants :evergreen_tree:

## What is this project about 
This webshop was created by [Gordon So](https://github.com/sssgordon) and [Melissa 't Hart](https://github.com/MelissaDTH). We worked on this during a 3-day project week at the Codaisseur Academy. The goal was to familiarize ourselves with **React** and **Redux**. Initially the project was built only on the client-side, but later on in the academy we decided to also create a back-end ([The back-end repository can be found here](https://github.com/sssgordon/birch-server.git)). 

## Table of contents 
- **[Technologies used](#technologies-used)**
- **[Goals for this project](#goals-for-this-project)**
- **[Application features](#application-features)**
- **[Project set-up](#project-set-up)**

## Technologies used 

<b>Front-end</b>
  * React
      * Components and props
      * Routers
  * Redux
      * Action creators
      * Thunks
      * Reducers
  * React-bootstrap

<b>Back-end</b>
  * Express
  * Sequelize
  * Cors
  * Body-parser
  * Docker
  
## Goals for this project

* Practice with creating an app from scratch with React and Redux
    * Make a webshop that contains a cart and a wishlist
* Work together in a team
* Work in an Agile environment with the SCRUM methodology
* Practice styling

## Application features

 :floppy_disk: Project features :floppy_disk:

  * It has a fully working **navigation bar**
  * Clicking on those plants will redirect you to their **details page**
  * The plants are divided in three categories: Desert, Snow and Rainforest. Each category has its own page with the corresponding plants
  * Customers can add plants to a **wishlist**
  * They can also add plants to the **cart**, which is a separate page that shows which plants are selected as well as the **total price**
  * When there are plants in the cart, a button that directs the customer to the **checkout page** becomes available. Over there, they can fill in their personal information. No further action or redirection to an actual payment page is yet available here
  * The webshop has an overall styling, mostly done with CSS and React-Bootstrap

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

