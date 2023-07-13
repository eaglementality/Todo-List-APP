# TODO-LIST App  📋 built with NEXTjs 😉
## Design Preview
![desktop-preview](https://github.com/eaglementality/Todo-List-APP/assets/97172881/049cf38b-53d0-4d5b-ac48-96bbb4e86c8a)
## Requirement
users should be able to:
+ View the optimal layout for the app depending on their device's screen size
+ See hover states for all interactive elements on the page
+ Add new to-dos to the list
+ Mark to-dos as complete
+ Delete to-dos from the list
+ Filter by all/active/complete to-dos
+ Clear all completed to-dos
+ Toggle light and dark mode
+ Drag and drop to reorder items on the list
+ Build this project as a full-stack application
## What i learnt
There were challenges concerning the drag and drop using the react-beautiful-dnd lib and with Nextjs as it's an SSR(Server Side Render) which can mess up how some libraries operate.

Why react-beautiful-dnd? I chose this library simply because it offers a good drag and drop experience as it's a higher-level abstraction specifically built for vertical and horizontal lists.

I used (useReducer with useContext) React hook. (the useContext it is not a state management solution by itself, however combining it with the useReucer it became a full state management solution).

Concerning the light/dark toggle it may be other different approaches to build in Nextjs, I chose to build mine with useState and some stringVariables.

# Made by Jesse Yeboah 🎧 
