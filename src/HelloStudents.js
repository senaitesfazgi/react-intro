import React from 'react';
import HelloYourName from './HelloYourName';

class HelloStudents extends React.Component
{
        constructor(props)
        {
            //set up our object/component to use the properties passed in
            super(props);//(We will be able to reference them later)
            //Setup state we use state to store data for the component.
            this.state = {
                students: [
                    {
                        name: "Osa",
                        favFood: "Ice Cream"
                    },
                    {
                        name: "MUzzafar",
                        favFood: "Pasta"
                    },
                    {
                        name: "Dannielle",
                        favFood: "Chips"
                    },

                ]
            };
        }
    render()
    {
        return(
            <ul>
                {this.state.students.map( student =>(
                    <li>
                        <HelloYourName name = {student.name} favFood = {student.favFood}/>
                    </li>
                ))}
            </ul>
        );
    }
}
export default HelloStudents;