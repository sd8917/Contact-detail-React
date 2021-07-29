import React from 'react';

const ContactCard = () => {

    const userDetail = [
        {
            id:1,
            name:"Sudhanshu kumar",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfF-B3UWX16v3M6L65H7AseW4qM89ZEKELDA&usqp=CAU",
            phone:"9123145982",
            company:"Accenture",
            relation:"Brother"
        },
        {
            id:2,
            name:"Anjali kumari",
            imgUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            phone:"9823232322",
            company:"Abodbe",
            relation:"Sister"
        },
        {
            id:3,
            name:"Neha Sharma",
            imgUrl: "https://coop.ma/assets/img/tmp/agent-2.jpg",
            phone:"8237823923",
            company:"Linkdin",
            relation:"GirlFriend"
        },
        {
            id:4,
            name:"Pritam Manjhi",
            imgUrl: "https://www.citrix.com/blogs/wp-content/upload/2018/03/slack_compressed-e1521621363404-360x360.jpg",
            phone:"7829389391",
            company:"Google",
            relation:"WorkingMate"
            
        },
        {
            id:5,
            name:"Ranjan Kushwaha",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUs73Mz3FqhV8uy2F5TGw_jGvFdzGirConJA&usqp=CAU",
            phone:"7352739145",
            company:"Amazon",
            relation:"Best Friends"
        },
        {
            id:6,
            name:"Shivam Chaudaary",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6AriosjEVuc2ZhFBtETJ9SRHKIa1UD5-ucA&usqp=CAU",
            phone:"8238923922",
            company:"TCS",
            relation:"College Mate"
        },
        {
            id:6,
            name:"Rana Sinha",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU",
            phone:"9094567891",
            company:"TCS",
            relation:"Boss"
        },
        {
            id:7,
            name:"Rahul tripathi",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJktgxGN_T3zisMxJb0GazGPI5Wsme2LAIGw&usqp=CAU",
            phone:"3234343434",
            company:"Accenture",
            relation:"Friend"
        },
    
        {
            id:8,
            name:"Sanaya Soni",
            imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSepvEWzMN3rFJaMLL1MOpVSIi5ZiFvm1u9o4cmFslvqCtbGyIjCIV4Wi1hLWKRm-B23yg&usqp=CAU",
            phone:"2839239223",
            company:"Facebook",
            relation:"Sponsor"
        },
    
    ]

    const{name, imgUrl, phone, company, relation} = userDetail;

    return (

        <div className="card-container">
            <div className="card">
                <img src={userDetail[0].imgUrl}/>


                <h4 className="card-title">{userDetail[0].name}<span id="relation">{userDetail[0].relation}</span></h4>

                <h6 className="card-number">{userDetail[0].phone}</h6>
            </div>

            <div className="card">
                <img src="
            https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80
            " />
                <h4 className="card-title">Neha Roy<span id="relation">Girl Friend</span></h4>
                <h6 className="card-number">+91 7352719212</h6>
            </div>
            <div className="card">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUs73Mz3FqhV8uy2F5TGw_jGvFdzGirConJA&usqp=CAU" />


                <h4 className="card-title">Sujeet Sinha <span id="relation">Brother</span></h4>

                <h6 className="card-number">+91 239839232</h6>
            </div>
           

        </div>

    );
}

export default ContactCard;