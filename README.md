## React Native Library App

<img src="https://github.com/snyder625/react-native-library-app/book.gif" width="48">
<img src="https://github.com/snyder625/react-native-library-app/dbook.gif" width="48">
<img src="https://github.com/snyder625/react-native-library-app/sbook.gif" width="48">


### Code Structure
There are 4 main screens: home screen, search screen, all books screen and book details. There's a fun intro / welcome screen with lottie animations as well.  
Important Code:  
`screens/...jsx` App Screens  
`components/...jsx` Reusable Components  

### Dependencies
I wanted to keep the dependencies outside of React Native & Expo to a minimum. The app relies on the following libraries as core, others you see in package.json are optional.
```
react-navigation
lottie-react-native (remove if you don't need lottie)
```

### Reference Material
Lottie Animations  
https://github.com/lottie-react-native/lottie-react-native

**Android**  
If you're running into issues with Android please make sure to check that reanimated and shared navigation element (v5) are installed properly with the right versions and Layout Animations have been enabled.

**React Native Community**  
Was this helpful? Want to see more code like this? Would you like this as an template? Just want share your thoughts? Catch me at [@rizwanahmed625](https://twitter.com/rizwanahmed625).
