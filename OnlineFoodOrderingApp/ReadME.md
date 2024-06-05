Learn react from santhosh

Food ordering APP
/*
Header
    - Logo
    - Nav Items
Body
    - Search
    - Resturant COntainer
        - resturant cards
            -name of res
            -cuisines
            -Start Ratings
            - Delivery Time
Footer
    - CopyRight
    - Links
    - Address
    - Contacts
*/


Two types of exports:


-deafult export

export deafault componentName/ Variable

-Named export

export const componentName
import {componenTName} from path



# React Hooks

(Normal JS utility function)
- useState() -  helps to create superpowerful state variables in react
- useEffect()


when ever a state variable changes it re-renders the components


# Two types of routing in web apps

-Client Side Routing(Make a network call we don't reload the web page again and again instead we reload the component in a APP)

-Server Side Routing(make a network call and get all data from server link About us page or something and loads the data again and again)


#Execution of CLass COmponnets 

 - Construtor
    |
 - Render
    |
 - ComponentDidMount

# Execution of Class components when we have two classes components

/*
Execution when two childs are there

    - Parent Class Constructor
    - Parent Class Render

        - First class Constructor
        - First Class Render

        - Second Class Constructor
        - Second Class Render

    <DOM UPDATED - IN SINGLE BATCH>
        
        - First Class Component Mount
        - Second Class Component Mount

    - Parent Class Component Mount
*/



# Difference between class component and functional component

Explanation:

useState:

useState hook is used to manage the state in functional components. Here, userInfo state is initialized with the default values similar to the class component's state.
useEffect:

useEffect hook is used to perform side effects in functional components. Here, it fetches data from the GitHub API and updates the userInfo state.
The second parameter [] ensures that the effect runs only once after the initial render, similar to componentDidMount in class components.
Cleanup in useEffect:

The return function in useEffect is used for cleanup, similar to componentWillUnmount in class components.
Rendering:

The JSX is similar to your class component, just that we are directly using userInfo state instead of this.state.userInfo.
props.contact is used directly in the JSX, similar to how you accessed props in the class component.
This functional component will behave similarly to your class component, fetching user data from the GitHub API and rendering it in the UI.




# Redux ToolKits
    - Install @reduxjs/toolkit and react-redux
    - Build our store
    - Connect our store to our APP
    - Slice(cartSlice)
    - Dispatch(Action)
    - Selector


# Types of testing (developer)
    - unit testing
    - integration testing 
    - end to end testing - E2E testing


# Setting up testing in our app
    - Install React Testing library
    - Install Jest
    - install babel dependencies
    - Configure Babel 
    - Configure Parcel comfog file to disable default babel transpilation
    - Jest Configuration
    - jest -npx jest --init
    - install jsdom library
    - Install Babel/Preset-react
    - Include Babel/preset-react inside my babel config
    - Install npm i -D @testing-library/jest-dom
