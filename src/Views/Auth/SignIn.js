import img from '../../Components/Img/Group 1.png';
import { DatePicker } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Album" style={{ width: "350px", marginLeft: '25px', margin:"25px" }} />
        </figure>
        <div className="card-body">
          <h3 className="card-title" style={{ marginBottom: '10px' }}>SignUp</h3>
          <div className="form-control" style={{ width:"420px" }}>
            <input type="text" placeholder="Email" className="input input-bordered" style={{ marginBottom: '10px' }} />
            <input type="password" placeholder="Password" className="input input-bordered" style={{ marginBottom: '10px' }} />
          </div>
          <div className="form-control mt-6">
            <Link to="#" className="btn btn-primary">Sign In</Link>
          </div>
          <label className="label">
            <p className="label-text-alt">don’t have an account ?</p>
            <a href="/signup" className="label-text-alt link link-hover">SignUp</a>
          </label>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
