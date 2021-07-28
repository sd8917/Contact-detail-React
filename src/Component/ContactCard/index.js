import React from 'react';

const ContactCard = () => {
    return (
        <div className="card-container">
            <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfF-B3UWX16v3M6L65H7AseW4qM89ZEKELDA&usqp=CAU" />


                <h4 className="card-title">Sudhanshu Kumar<span id="relation">Friend</span></h4>

                <h6 className="card-number">+91 9123145982</h6>
            </div>

            <div className="card">
                <img src="
            https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80
            " />
                <h4 className="card-title">Neha Roy<span id="relation">Friend</span></h4>
                <h6 className="card-number">+91 7352719212</h6>
            </div>
            <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUs73Mz3FqhV8uy2F5TGw_jGvFdzGirConJA&usqp=CAU" />


                <h4 className="card-title">Sujeet Sinha <span id="relation">Friend</span></h4>

                <h6 className="card-number">+91 239839232</h6>
            </div>
           

        </div>

    );
}

export default ContactCard;