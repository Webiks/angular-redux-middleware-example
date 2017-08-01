# Angular-Redux-Middleware
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) 
version 1.2.1 & Angular version 4.3.0


## Objectives:
This repository is Demo to our [tutorial]()[]. 
At the end of it you should know how to:
1. Write a generic function for a Redux middleWare
2. Write a Redux logger middleWare
3. Plug it to your store

## Starting up with angular/cli and angular-redux
First thing first - 
We'll do `ng new my-project` to create `angular/cli` project. then install 
the following with `npm i <package> --save`:
* [flux-standard-action](https://github.com/acdlite/flux-standard-action)
* [redux](https://github.com/reactjs/redux) Predictable state container for Javascript.
* [@angular-redux/store](https://github.com/angular-redux/store) Redux + Angular bindings


## Let's create a very simple angular + redux app
Basically it's infrastructure is a simplified version based on [Redux Zoo animals example](https://github.com/angular-redux/example-app), 
and other examples I've found here and there.
Check the full [zoo app example](https://github.com/angular-redux/example-app) out if you looking for more complex demo. 
We'll go straight to the fun part - Redux middleware.

But before that, here's a (very) quick guide to our app for our dear reader:
* The app components contains 2 component (list-control & list-view) and a store
* All it does is `add`, `select` and `delete` items,which will be displayed using item-list component. 
* Each item payload will be a simple string value.
* Our state contains only 2 properties - `items` which is an array of strings, 
and `selected` which will represent the selected index (-1 if none selected)
* Our store is being created using NgRedux method - configureStore.
Check out [store.module.ts](). it will look something like:
```
    store.configureStore(rootReducer, INITIAL_STATE);
```
We will change it later to include our middleWare.


## Do the right thing. Plug a middleware.
Middleware can be a great way to manage your store actions.
In our example, we'll plug a <b>logger middleware</b>, which will print to console the next action to be performed.
Not so fancy, I know, but for this demo - it will do.
In a real app you'll probably want to use something like [log4js](https://github.com/nomiddlename/log4js-node)
for that.

## Now, Let's do some magic trick
For our next show, we'll create a function you can use for pretty much any Redux middleWare.
Our basic middleware function format will be the following:
```
function myMiddleware(store) {
  return function (next) {
    return function (action) {
      // do something
      // then (usually) - continue to the next action
      return next(action);
    };
  };
}
```

## Wait. What?
So what do we have here?
Yes, correcto - it's a nested functions with 3 levels.
It's look a bit hairy at first look, 
but let's take a moment to look at each level separately.

The out-most function receive a single parameter - `store`,
Which will correspond to our store.

The middle one gets a `next`, which is a pointer to the next middleWare (if exits in stack)
Or - to the original Redux `dispatch` function if we reached the end of the stack
(e.g. if we went trough all of our middleWares).

The inner most gets an `action`. As you probably guess, it correspond to our action,
so you can treat it the same as you use in your reducers.

Finally, the inner most function return invocation of `next(action)`.
Remember, `next` is a reference to the next middleWare in the line 
(or the dispatch function in case it's the end of the line).
If you're familiar to node.js, you probably know this pattern from popular libraries
like `connect` and `express`, which work pretty much the same.

So this is a generic middleWare function, which we case use to write 
(almost) any Redux middleWare.
Now let's use it to add our logger code:
```
export function loggerMiddleware(store) {
  return function (next) {
    return function (action) {
      // log a fancy message and action
      console.log('Hello, this is your captain speaking.', action);
      // continue to the next action
      return next(action);
    };
  };
}
```

All which is left to do is to add our middleWare function as an array at the end of your Redux config:
```
    store.configureStore(rootReducer, INITIAL_STATE, [loggerMiddleware]);
```

That's it!
Now any invocation of an action will pass trough our amazing middleWare. Splendid.

And We're done.
Have a question? a note? a recipe for pizza?
Leave me a [comment]()
