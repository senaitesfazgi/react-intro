//We must import React in order to reference "React.Component" and/or other React
import React from 'react';
import './hello.css'

//Carry all the properties and method from the React.component and add our own once
class Hello extends React.Component{
    //decides what is the output going to be.
    render()
    {
        /*This returns JSX 
          only return one root element
          we can use a blank <></>
        */
        return(
            <>
                <h2>My first Component</h2>
                <p>Hello, World</p>
            </>
        );
    }
}
//In order for Hello to be accessible via import in other files.
export default Hello;
