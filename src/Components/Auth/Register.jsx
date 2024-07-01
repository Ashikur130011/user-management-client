import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {

    const {createUser, setUser} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        createUser(email, password)
            .then((result) => {
                console.log(result.user)
            })
            .then((error) => {
                console.log(error.message)
            })



    }
    return (
        <div className="hero bg-base-200 md:w-full min-h-screen">
            <div className="hero-content flex-col md:w-full">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body w-full">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <p className='my-3'>Already have an account? Please <Link className='text-blue-500' to="/login">Login</Link></p>
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;