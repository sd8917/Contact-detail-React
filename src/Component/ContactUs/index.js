import React from 'react';
import "./contactus.css"
const ContactUs = () => {
    return (
        <div id="contact-wrapper">
            <div className="map-wrapper">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28763.999751954503!2d85.20261961130386!3d25.68786537924808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5c1f0e3e9d01%3A0x34ac550b84f13ad3!2sHajipur%2C%20Bihar%2C%20India!5e0!3m2!1sen!2sus!4v1627557652403!5m2!1sen!2sus"
                    width="600" height="450" style={{ "border": "0" }} allowfullscreen="" loading="lazy"></iframe>
            </div>

            <div className="address">
                <p className="text-center">
                    Halalpur ,Madarpur <br />
                    vaishali ,Hajipur<br />
                    pin-844502 <br />
                </p>

                <div>

                    <h5 className="card-header info-color white-text text-center py-4">
                        <strong className="info-color">Query Form</strong>
                    </h5>

                    <div className="card-body px-lg-5 pt-0">

                        <form className="text-center" style={{"color": "#757575"}} action="#!">

                            <div className="md-form mt-3 pb-2">
                                <input type="text" id="materialContactFormName" className="form-control" placeholder="Name..."/>
                                
                            </div>

                            <div className="md-form pb-2">
                                <input type="email" id="materialContactFormEmail" className="form-control" placeholder="E-mail..." />
                                
                            </div>

                            <div className="md-form pb-2">
                                <textarea id="materialContactFormMessage" className="form-control md-textarea" rows="3" placeholder="Message..."></textarea>

                            </div>
                            <button className="btn btn-outline-info btn-rounded btn-block z-depth-0 my-4 waves-effect" type="submit">Send</button>

                        </form>


                    </div>

                </div>

            </div>

        </div>
    );
}

export default ContactUs;