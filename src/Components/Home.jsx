import React from "react";
import { useState , useEffect} from "react";
import axios from "axios";

const Home = () => {


  const [admin, setAdmin] = useState({});
  const [data, setData] = useState({});
  const [getdata, setGetdata] = useState([])


  const fetchData = () => {
    return fetch("http://localhost:8080/posttitle")
    .then((res) => res.json())
    .then((data) => setGetdata(data))
  }

  useEffect(() => {
    fetchData();
  }, []);


  const handleChange = (e) => {
    const { id, value } = e.target;
    setAdmin({ ...admin, [id]: value });
  };

  const NoteData = (e) => {
    e.preventDefault();
    let axiosConfig = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios
      .post(
        "http://localhost:8080/posttitle",
        admin,
        axiosConfig
      )
      .then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      });

    if (data) {
      alert("Note add is Added");
    }
  };





  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Title"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Description
        </label>
        <textarea
          className="form-control"
          id="description"
          rows="3"
          onChange={handleChange}
        ></textarea>
        
      </div>

      <div className="col-12">
          <button className="btn btn-primary" 
           onClick={NoteData}
          >
            Submit form
          </button>
        </div>
        <br/>
        <br/>

        {/* {getdata.posttitle.map((e) =>{
          console.log(e)
          return (
            <h1 key={e.id}>{e.title}</h1>
          )
        })} */}

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
    </>
  );
};

export default Home;
