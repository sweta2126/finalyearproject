import React from "react";

function Society() {
  return (
    <>
      
      
      <form style={{}}>
        <div className="mb-3 " style={{}}>
          <label htmlFor="exampleFormControlInput1" className="form-label " style={{padding:'6px 6px  6px 0',display:'inline-block'}} >
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="username"
            style={{borderColor:'gray',}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label" style={{padding:'6px 6px  6px 0',display:'inline-block'}}>
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="address"
            style={{borderColor:'gray',}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label" style={{padding:'6px 6px  6px 0',display:'inline-block'}}>
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="city name"
            style={{borderColor:'gray',}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label" style={{padding:'6px 6px  6px 0',display:'inline-block'}}>
            Pincode
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="pincode"
            style={{borderColor:'gray',}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label" style={{padding:'6px 6px  6px 0',display:'inline-block'}}>
            Registration Number
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="registration number"
            style={{borderColor:'gray',}}
             
             
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label" style={{padding:'6px 6px  6px 0',display:'inline-block'}}>
            Bank Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="bankname"
            style={{borderColor:'gray',}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label" style={{padding:'6px 6px  6px 0',display:'inline-block'}}>
            Branch Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="branchname"
            style={{borderColor:'gray',}}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label"style={{padding:'6px 6px  6px 0',display:'inline-block'}}>
            IFCS Code
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="ifcs code"
            style={{borderColor:'gray',}}
          />
        </div>

        <button type="button" className="btn btn-primary mx-3">
          Submit
        </button>
        <button type="button" className="btn btn-primary mx-3">
          Save
        </button>
        <button type="button" className="btn btn-primary mx-3">
          Cancel
        </button>
      </form>
      
      
    </>
  );
}
export default Society;
