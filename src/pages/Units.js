import React from 'react'; 

export const Units =()=>{
  return(
    <div className="reports">
      <h1>units</h1>
    </div>
  );
};

export const RegisterOwner=()=>{
  return(
    <>
    <style>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        </style>
        <form>
        <div className="mb-3">
<label htmlFor="exampleFormControlInput1" className="form-label">Building Number</label>  
        <select className="form-select" aria-label="Default select example">
  <option value>Building number</option>
  <option value="1">101</option>
  <option value="2">102</option>
  <option value="3">104</option>
  <option value="4">105</option>
  <option value="5">106</option>
  <option value="6">107</option>
  <option value="7">108</option>
  <option value="8">109</option>
</select>
</div>
<div className="mb-3">
<label htmlFor="exampleFormControlInput1" className="form-label">Flat/Block</label>
<select className="form-select" aria-label="Default select example">
  <option value>Flat/Block</option>
  <option value="1">A</option>
  <option value="2">B</option>
  <option value="3">C</option>
  <option value="4">D</option>
  <option value="5">E</option>
  <option value="6">F</option>
  <option value="7">G</option>
  <option value="8">H</option>
  <option value="9">I</option>
  <option value="10">J</option>
</select>
</div>
        <div className="mb-3">
<label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
<input type="text" className="form-control" id="exampleFormControlInput1" placeholder="username" />
</div>
  <div className="mb-3">
<label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
<input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
<div className="mb-3">
<label htmlFor="exampleFormControlInput1" className="form-label">Area</label>
<input type="text" className="form-control" id="exampleFormControlInput1" placeholder="area name" />
</div>
<div className="mb-3">
<label htmlFor="exampleFormControlInput1" className="form-label">
  Contact Number
</label>
<input type="number" className="form-control" id="exampleFormControlInput1" placeholder="phone number" />
</div>
</form>
<button type="button" class="btn btn-primary mx-3">Submit</button>
<button type="button" class="btn btn-primary mx-3">Save</button>
<button type="button" class="btn btn-primary mx-3">Cancel</button>
</>
  );
};

export const RegisterOccupier=()=>{
  return(
    <div className="reports">
      <h1>units/RegisterOccupier</h1>
    </div>
  );
};