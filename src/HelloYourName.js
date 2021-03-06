import React from 'react';

class HelloYourName extends React.Component
{
    //props is what most react developers would call this parameter convention here
    render()
    {
        return(
            <section>
                <h2>Welcome to our website!</h2>
                <p>Hello there, {this.props.name}.</p>
                <p>Favourite food, {this.props.favFood}.</p>
            </section>
        )
    }
}
export default HelloYourName;