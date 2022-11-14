# FestivalData

# A coding challange for Energy Australia 

The data for the mock server is located in db.json file 


Clone the repo and run 

```js
npm install 
```

To run the mock server, type 
```js 
 json-server --watch db.json
 
```
 and then visit to see the api endpoint

```js
"http://localhost:3000/festivals"
```
 This endpoint can be replaced with

  ```js

   "https://eacp.energyaustralia.com.au/codingtest/api/v1/festivals"

   ```
   in the festival.service.ts file in line 11
   
   To rum the
```js 
ng s -o

```
This opens the project in browser at

```js
http://localhost:4200/
```

And then visit 
```js
http://localhost:4200/

```



<img width="1403" alt="Screen Shot 2022-11-14 at 4 27 02 pm" src="https://user-images.githubusercontent.com/37270379/201590367-2a6a7a56-60e2-487f-9167-c7d1e23e55c6.png">



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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
