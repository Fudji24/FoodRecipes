# FoodRecipes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3. and [Spoonacular Food API](https://spoonacular.com/food-api)

## Features

- fetching recipes from api
- search filter
- filter by tags
- short recipe info
- details about recipe instructions

## Installation
#### API key
Sign up into https://spoonacular.com/food-api to get your free API key.
Once you get API key copy it, navigate to /src/app/services/http.services.ts and change it with "YOUR_API_KEY" *property name: apiKey*

#### Dependencies
In terminal navigate to the project root folder and run command *npm install*

```
cd foodrecipes
npm install
```


## Development server

Run `ng serve` for a dev server and navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
