import React from 'react';

import './career.css'

const Career = () => {
    return (
        <div id="form-wrapper">
            <h1 className="text-center">getContact</h1>
            <p className="text-center">Software developer</p>

            <form className="m-4">

                <div className="form-group">
                    <label for="formGroupExampleInput">Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Name..." />
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput2">Email</label>
                    <input type="email" className="form-control" id="formGroupExampleInput2" placeholder="Enter Email..." />
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput2">Phone</label>
                    <input type="number" className="form-control" id="formGroupExampleInput3" placeholder="Enter phone..." />
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput2">College/University</label>
                    <input type="text" className="form-control" id="formGroupExampleInput4" placeholder="Enter College/Universit..." />
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput2">Department/Specialization</label>
                    <input type="text" className="form-control" id="formGroupExampleInput5" placeholder="Enter Department..." />
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput2">Adrress</label>
                    <input type="text" className="form-control" id="formGroupExampleInput5" placeholder="Enter adress..." />
                </div>

                <div className="form-group">
                    <label for="exampleFormControlFile1">Resume : </label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" placeholder="Upload Resume" />
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Career;