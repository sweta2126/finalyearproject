import React, {useState} from "react";

function Society() {
  
  const [info, setInfo] = useState({
    name: "",
    address: "",
    city: "",
    pincode: "",
    registration : "",
    bankName: "",
    branchName: "",
    ifsc: ""
  });
  let name, value;
   const handleOnChange = (event) =>{
     console.log(event)
    name = event.target.name;
    value = event.target.value
    setInfo({...info, [name]:value})
  }

  const PostData = async (event) =>{
    event.preventDefault()
    const { name, address, city, pincode, registration, bankName, branchName, ifsc } = info
    const res = await fetch("/society", {
      method : "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        name, address, city, pincode, registration, bankName, branchName, ifsc
      })
    })

    const data = await res.json();
    if(res.status === 422 || !data){
      window.alert("Something is wrong")
      console.log("Something is wrong")
    }  
    else {
      window.alert("Registered Successfully");
    }
  }

  return (
<>
    
    

  {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossOrigin="anonymous" /> */}
  
<main className="main" style={{maxWidth:'85rem',width:'100%',height:'auto',margin:'0 auto',padding:'0.2rem '}} >


  <div className="wrapper" style={{maxWidth:'38rem',width:'100%',margin:'0 auto',padding:'5rem 1.5 rem'}} >
  
      <div className="card" style={{padding:'1.5rem 2rem',border:'none',outline:'none',borderRadius:'4px',color:'#252a32',background:'#ffffff',boxShadow:'0 1px 3px rgba(0,0,0,0.12),0 1px 3px rgba(0,0,0,0.24)',marginTop:'50px'}} >
      <h2 style={{textAlign:'center',color:'blue',borderBottom:'1px solid #000',margin:'10px 0 20px'}}>Society Information</h2>


          <form className="form" method="POST" style={{width:'100%',height:'auto',margin:'2rem 0'}}>
              <div className="form-group" style={{display:'-webkit-box',display:'flex',WebkitBoxOrient:'horizontal',WebkitBoxDirection:'normal',flexDirection:'row',WebkitBoxPack:'justify',justifyContent:'space-between',WebkitBoxAlign:'center',marginBottom:'1rem'}}>
                  <input type="text" name="name" id="name" className="input-field" onChange={handleOnChange} value={info.name} placeholder="Name"  style={{fontFamily:'inherit',fontSize:'0.95rem',fontWeight:'400',lineHeight:'inherit',width:'100%',height:'auto',padding:'0.75rem 1.25rem',border:'none',outline:'none',borderRadius:'2rem',color:'#252a32',background:'#f1f5f8'}}/>
              </div>
              <div className="form-group" style={{display:'-webkit-box',display:'flex',WebkitBoxOrient:'horizontal',WebkitBoxDirection:'normal',flexDirection:'row',WebkitBoxPack:'justify',justifyContent:'space-between',WebkitBoxAlign:'center',marginBottom:'1rem'}}>
                  <input type="text" name="address" id="address" className="input-field" onChange={handleOnChange} value={info.address} placeholder="Address" style={{fontFamily:'inherit',fontSize:'0.95rem',fontWeight:'400',lineHeight:'inherit',width:'100%',height:'auto',padding:'0.75rem 1.25rem',border:'none',outline:'none',borderRadius:'2rem',color:'#252a32',background:'#f1f5f8'}}/>
              </div>
              <div className="form-group" style={{display:'-webkit-box',display:'flex',WebkitBoxOrient:'horizontal',WebkitBoxDirection:'normal',flexDirection:'row',WebkitBoxPack:'justify',justifyContent:'space-between',WebkitBoxAlign:'center',marginBottom:'1rem'}}>
                  <input type="text" name="city" id="username" className="input-field" onChange={handleOnChange} value={info.city} placeholder="City" style={{fontFamily:'inherit',fontSize:'0.95rem',fontWeight:'400',lineHeight:'inherit',width:'100%',height:'auto',padding:'0.75rem 1.25rem',border:'none',outline:'none',borderRadius:'2rem',color:'#252a32',background:'#f1f5f8'}}/>
              </div>
              <div className="form-group" style={{display:'-webkit-box',display:'flex',WebkitBoxOrient:'horizontal',WebkitBoxDirection:'normal',flexDirection:'row',WebkitBoxPack:'justify',justifyContent:'space-between',WebkitBoxAlign:'center',marginBottom:'1rem'}}>
                  <input type="numerical" name="pincode" id="pincode" className="input-field" onChange={handleOnChange} value={info.pincode} placeholder="PinCode" style={{fontFamily:'inherit',fontSize:'0.95rem',fontWeight:'400',lineHeight:'inherit',width:'100%',height:'auto',padding:'0.75rem 1.25rem',border:'none',outline:'none',borderRadius:'2rem',color:'#252a32',background:'#f1f5f8'}} />
              </div>
              <div className="form-group" style={{display:'-webkit-box',display:'flex',WebkitBoxOrient:'horizontal',WebkitBoxDirection:'normal',flexDirection:'row',WebkitBoxPack:'justify',justifyContent:'space-between',WebkitBoxAlign:'center',marginBottom:'1rem'}}>
                  <input type="numerical" name="registration" id="" className="input-field" onChange={handleOnChange} value={info.registration} placeholder="Registration Number" style={{fontFamily:'inherit',fontSize:'0.95rem',fontWeight:'400',lineHeight:'inherit',width:'100%',height:'auto',padding:'0.75rem 1.25rem',border:'none',outline:'none',borderRadius:'2rem',color:'#252a32',background:'#f1f5f8'}} />
              </div>
              <div className="form-group" style={{display:'-webkit-box',display:'flex',WebkitBoxOrient:'horizontal',WebkitBoxDirection:'normal',flexDirection:'row',WebkitBoxPack:'justify',justifyContent:'space-between',WebkitBoxAlign:'center',marginBottom:'1rem'}}>
                  <input type="text" name="bankName" id="bankName" className="input-field" onChange={handleOnChange} value={info.bankName} placeholder="Bank Name" style={{fontFamily:'inherit',fontSize:'0.95rem',fontWeight:'400',lineHeight:'inherit',width:'100%',height:'auto',padding:'0.75rem 1.25rem',border:'none',outline:'none',borderRadius:'2rem',color:'#252a32',background:'#f1f5f8'}}/>
              </div>
              <div className="form-group" style={{display:'-webkit-box',display:'flex',WebkitBoxOrient:'horizontal',WebkitBoxDirection:'normal',flexDirection:'row',WebkitBoxPack:'justify',justifyContent:'space-between',WebkitBoxAlign:'center',marginBottom:'1rem'}}>
                  <input type="text" name="branchName" id="branchName" className="input-field" onChange={handleOnChange} value={info.branchName} placeholder="Branch Name" style={{fontFamily:'inherit',fontSize:'0.95rem',fontWeight:'400',lineHeight:'inherit',width:'100%',height:'auto',padding:'0.75rem 1.25rem',border:'none',outline:'none',borderRadius:'2rem',color:'#252a32',background:'#f1f5f8'}}/>
              </div>
              <div className="form-group" style={{display:'-webkit-box',display:'flex',WebkitBoxOrient:'horizontal',WebkitBoxDirection:'normal',flexDirection:'row',WebkitBoxPack:'justify',justifyContent:'space-between',WebkitBoxAlign:'center',marginBottom:'1rem'}}>
                  <input type="text" name="ifsc" id="ifsc" className="input-field" onChange={handleOnChange} value={info.ifsc} placeholder="IFSC Code" style={{fontFamily:'inherit',fontSize:'0.95rem',fontWeight:'400',lineHeight:'inherit',width:'100%',height:'auto',padding:'0.75rem 1.25rem',border:'none',outline:'none',borderRadius:'2rem',color:'#252a32',background:'#f1f5f8'}} />
              </div>
              <div className="form-group" style={{display:'-webkit-box',display:'flex',WebkitBoxOrient:'horizontal',WebkitBoxDirection:'normal',flexDirection:'row',WebkitBoxPack:'justify',justifyContent:'space-between',WebkitBoxAlign:'center',marginBottom:'1rem'}}>
                <input type="button" name="submit" className="input-submit " value="Submit"  onClick={PostData} style={{fontFamily:'inherit',fontSize:'0.95rem',fontWeight:'500',lineHeight:'inherit',cursor:'pointer',padding:'0.65rem 2rem', border:'none',outline:'none',borderRadius:'2rem',textAlign:'center',color:'#ffffff',background:'#7579e7',display:'inline-block',float:'right'}} />
              </div>

              <div className="form-group" style={{display:'-webkit-box',display:'flex',WebkitBoxOrient:'horizontal',WebkitBoxDirection:'normal',flexDirection:'row',WebkitBoxPack:'justify',justifyContent:'space-between',WebkitBoxAlign:'center',marginBottom:'1rem'}}>
                <input type="button" name="save" className="input-submit " value="Save" style={{fontFamily:'inherit',fontSize:'0.95rem',fontWeight:'500',lineHeight:'inherit',cursor:'pointer',padding:'0.65rem 2rem', border:'none',outline:'none',borderRadius:'2rem',textAlign:'center',color:'#ffffff',background:'#7579e7',display:'inline-block',float:'center'}} />
              </div>


              <div className="form-group" style={{display:'-webkit-box',display:'flex',WebkitBoxOrient:'horizontal',WebkitBoxDirection:'normal',flexDirection:'row',WebkitBoxPack:'justify',justifyContent:'space-between',WebkitBoxAlign:'center',marginBottom:'1rem'}}>
              <input type="button" name="cancel" className="input-submit  " value="Cancel" style={{fontFamily:'inherit',fontSize:'0.95rem',fontWeight:'500',lineHeight:'inherit',cursor:'pointer',padding:'0.65rem 2rem', border:'none',outline:'none',borderRadius:'2rem',textAlign:'center',color:'#ffffff',background:'#7579e7',display:'inline-block',float:'left'}} />
              
              </div>
       
          </form>
          
      </div>
  </div>
</main>

      
      
</>
  );
}
export default Society;
