import React from "react";

const Home = () => {
  return (
    <>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Title
        </label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Title"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Description
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        
      </div>

      <div class="col-12">
          <button class="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
        <br/>
        <br/>

      <table class="table">
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
