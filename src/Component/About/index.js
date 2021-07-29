import React from 'react';
import "./about.css"

const About = () => {
    return (
        <div className="about-page">

            <div className="about-img-wrapper">
                <img src="https://picsum.photos/400/400" />
            </div>
            <div className="about-para-wrapper">
                <h2>About Page</h2>
                <p>
                    A simple website where any user can store their phone number list over the cloud.
                    You can retrieve these number from anywher you just login into your account and get the 
                    detail contact list from here.Faster UI updated using ReactJs.Larger storage of contact.
                    react to everone.
                </p>
                
                <h4>Team </h4> 
                <div className="team-wrapper">
                    
                    <div className="team">
                        <img src="https://picsum.photos/200" /> 
                        <p>John Wich <span id="designation">CEO</span></p>
                    </div>
                    <div className="team">
                        <img src="https://picsum.photos/200" /> 
                        <p>Sudhanshu <span id="designation">SDE</span></p>
                    </div>
                    <div className="team">
                        <img src="https://picsum.photos/200" /> 
                        <p>Raju Sinha <span id="designation">Manager</span></p>
                    </div>      
                </div>
            </div>
            
        </div>
    );
}

export default About;