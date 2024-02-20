import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") 
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const filteredData = data.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div
        className="text-center justify-content-center"
        style={{ backgroundColor: "#171823" }}
      >
        <h1 className="text-white text-center pt-5 mt-3 fw-bold" style={{letterSpacing: "15px"}}>USER LIST</h1>
        <div className="d-flex mt-4 justify-content-center mb-2">
          <input
            type="text"
            className="p-2 col-9 col-md-7 col-lg-5 ps-3 rounded-2"
            placeholder="Search User"
            value={searchTerm}
            onChange={handleSearch}
            style={{ backgroundColor: "#25273D", color: "#767992" }}
          />
        </div>

        {/* Card */}
        <div className="py-4 py-md-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0 px-1 px-md-5">
            {filteredData.map((item) => (
              <div className="group p-2">
                <div className="col">
                  <div
                    className="custom-card rounded-3"
                    style={{ backgroundColor: "#25273D" }}
                  >
                    <div className="d-flex col py-3">
                      <div className="col-3">
                        <img src="Avatar.svg"></img>
                      </div>
                      <div className="col-9">
                        <div className="text-start">
                          <p
                            className="mb-2 fw-semibold"
                            style={{ color: "#C8CBE7", fontSize: "18px" }}
                          >
                            {item.name}
                          </p>
                          <p
                            className="mb-3 fw-medium"
                            style={{ color: "#4B4D6A" }}
                          >
                            {item.company.name}
                          </p>
                          <div className="d-flex align-items-center mb-3">
                            <img src="phone.svg" className="img-fluid" />
                            <p
                              className="mb-0 ms-1"
                              style={{ color: "#C8CBE7", fontSize: "14px" }}
                            >
                              {item.phone}
                            </p>
                          </div>
                          <div className="d-flex align-items-center mb-3">
                            <img src="location.svg" className="img-fluid" />
                            <p
                              className="mb-0 ms-1"
                              style={{ color: "#C8CBE7", fontSize: "14px" }}
                            >
                              {item.address.city}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-3 pb-3">
                      <div className="d-flex col">
                        <div className="col-auto">
                          <div className="d-flex">
                            <img src="mail.svg" />
                            <p
                              className="mb-0 ms-1 fw-medium"
                              style={{ color: "#3A7CFD", fontSize: "14px" }}
                            >
                              {item.website}
                            </p>
                          </div>
                        </div>
                        <img src="line.svg" className="px-3" />
                        <div className="col-auto">
                          <div className="d-flex align-items-start">
                            <img src="email.svg" />
                            <p
                              className="email-width mb-0 ms-1 fw-medium text-start"
                              style={{ color: "#3A7CFD", fontSize: "14px", overflow: "hidden", textOverflow: "ellipsis"  }}
                            >
                              {item.email}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
