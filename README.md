# DzLib
@See : https://javascript.plainenglish.io/create-angular-library-2022-3965beee6dc6

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.0.

## Steps 

  # 1 - Generate the workspace for the library

    ng new dz-lib --no-create-application

  # 2 - Generate the library folder

    ng generate library dz-lib --style=scss

  # 3 - Create a new module

    ng g module new-lib
    ng g c new-lib --project dz-lib

    Add these 2 lines inside your existing public-api.ts
    
    export * from './lib/new-lib/new-lib.module';
    export * from './lib/new-lib/new-lib.component';

  
