import { Link, useNavigate } from "react-router-dom";
import registerImg from '../assets/niceRegister.jpg'
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";


const Register = () => {
    const { handleRegister, profileUpdate, setUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()
    // console.log(error);


    const createNewUser = (e) => {
        e.preventDefault();
        const form = new FormData(e.target)
        const name = form.get("name")
        const photo = form.get("photo")
        const email = form.get("email")
        const password = form.get("password")
        // console.log({ name, photo, email, password });

        const pattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (pattern.test(password)) {
            setError('')
        }
        else {
            setError('password will be a uppercase, a lowercase, at least 6 characters long.')
            return;
        }

        handleRegister(email, password)
            .then(result => {
                setUser(result.user)
                // console.log(result.user);
                profileUpdate({ displayName: name, photoURL: photo })
                    .then(() => {
                        navigate("/")
                    })
                    .catch(err => {
                        // console.log('ERROR', err)
                    })

            })
            .catch(err => {
                setError(err.message)
                console.log('ERROR', err)
            })

    }

    return (
        <div className="lg:flex gap-10 flex-row-reverse mt-10 lg:mt-0 justify-center items-center min-h-screen">
            <div>
                <img className='h-[400px] mx-auto lg:mx-0 mb-8 lg:mb-0 rounded-xl' src={registerImg} alt="" />
            </div>
            <div className="card mx-auto lg:mx-1 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-3xl font-bold text-center'>Register</h2>
                <form onSubmit={createNewUser} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text ">Password</span>
                        </label>
                        <input type={showPassword ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" required />

                        <button onClick={() => setShowPassword(!showPassword)}
                            className="absolute bottom-12 right-4">
                            {
                                showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                            }
                        </button>
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-gradient-to-r from-gray-800 to-green-800 text-white font-bold">Register</button>

                        {/* error handling */}
                        {
                            error && <p className="text-center text-red-700">{error}</p>
                        }

                        <p className="text-center mt-2">Do you have an account please
                            <Link to='/private/login' className="text-red-700"> Login</Link></p>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Register;