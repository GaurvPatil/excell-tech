import React from "react";

const EmployeeCard = ({ data }) => {
  return (
    <div
      className="
    flex
    flex-col
    justify-items-center
    "
    >
      {data.map((employee) => {
        //   destructuring
        const { id, name, username, email, phone, website } = employee;
        const companyName = employee["company"].name;

        // adress section
        const empAddress = employee["address"];

        //   destructuring
        const { street, suite, city, zipcode } = empAddress;
        const address = street + ", " + suite + ", " + city + ", " + zipcode;

        // image URl
        const imgSrc = `https://avatars.dicebear.com/v2/avataaars/${username}.svg?options[mood][]=happy`;

        return (
          <div
            key={id}
            className="
           emp-container 
          flex
          gap-5
          m-8
          "
          >
            <div
              className="
           
            "
            >
              <img
                src={imgSrc}
                alt={name}
                className="
                h-56 
                w-56
              pb-8
              "
              />
            </div>

            <div
              className="
            emp-info  
            flex
            flex-col
            flex-start
            
            "
            >
              <h1>{name}</h1>
              <p>
                {" "}
                <span>Email</span>: {email}
              </p>
              <p>
                <span>Phone:</span>
                {phone}
              </p>
              <p>
                <span>Company:</span> {companyName}
              </p>
              <p>
                <span>website:</span> {website}
              </p>
              <p>
                <span>Address:</span> {address}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EmployeeCard;
