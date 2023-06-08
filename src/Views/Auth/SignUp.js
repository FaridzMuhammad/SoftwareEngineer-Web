import React from 'react';
import img from '../../Components/Img/mask2 1.png';
import { DatePicker } from 'antd';

const SignUp = () => {
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
                    <img src={img} alt="Album" style={{ width: "350px", marginLeft: '25px' }} />
                </figure>
                <div className="card-body">
                    <h3 className="card-title">SignUp</h3>
                    <div className="form-control" >
                        <div style={{ display: 'flex', gap: '10px', width: '100%', marginBottom: '10px' }}>
                            <input type="text" placeholder="First Name" className="input input-bordered" style={{ flex: '1' }} />
                            <input type="text" placeholder="Last Name" className="input input-bordered" style={{ flex: '1' }} />
                        </div>
                        <input type="text" placeholder="Email" className="input input-bordered" style={{ marginBottom: '10px' }} />
                        <input type="password" placeholder="Password" className="input input-bordered" style={{ marginBottom: '10px' }} />
                        <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
                            <DatePicker
                                placeholder="Date / month / year"
                                className="input input-bordered"
                                style={{ flex: '1' }}
                                inputReadOnly={true}
                                pickerInputStyle={{
                                    color: '#fff',
                                    '::placeholder': {
                                        color: 'rgb(156, 163, 175)',
                                    },
                                }}
                            />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Sign Up</button>
                    </div>
                    <label className="label">
                        <p className="label-text-alt">Already have an account ? </p>
                        <a href="/" className="label-text-alt link link-hover">Sign In</a>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
