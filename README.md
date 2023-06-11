# Awaitable Modals in React and React Native; Easily manage modals without pain.
Awaitable modals in React Native for enabling better logic flow.

### Problem: Modals & the ceremony around managing them
I love that react allows us to write declarative user interfaces using JavaScript and JSX. 
However, when it comes to modals, I dislike how they are usually implemented in react - as hidden markup alongside main content made visible or hidden in response to state changes.
This forces us to split our logic flow to different methods, and adds extra ceremony if we need to share any data between them.

### Solution: Awaitable modals
The solution is what I call 'Awaitable Modals'. Or more appropriately, modals with an imperative API. 
In general, UI should be declarative and usage of imperative APIs are not advised. However, I believe modals, alerts and toasts are good examples where 
an imperative API is so much better and makes sense. 
It's easier to imagine them as temporary UI elements that shows up in response to user actions, instead of something that represents the application state.

Read full article: https://sarathkcm.dev/blog/awaitable-modals-in-react-native

![Demo of awaitable modals. Screen recording of a phone screen with buttons that opens different modal popups.](https://github.com/sarathkcm/react-native-awaitable-modals/raw/main/rrn-awaitable-modals.webp "Demo")
