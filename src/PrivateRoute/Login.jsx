import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../assets/welcome.avif'
import { useContext, useRef, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithPopup } from "firebase/auth";
import auth from '../AuthProvider/firebase.init';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {

    const { handleSignIn, setUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const emailRef = useRef()

    const navigate = useNavigate()
    const location = useLocation()
    const userLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.target)
        const email = form.get("email")
        const password = form.get("password")
        // console.log({ email, password });
        setError('')
        const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (regex.test(password)) {
            setError("")
        }
        else {
            setError('password will be a uppercase, a lowercase, at least 6 characters long.')
            return;
        }

        handleSignIn(email, password)

            .then(result => {
                setUser(result.user)

                navigate(location?.state ? location.state : '/')

                // console.log(result.user);
            })
            .catch(error => {
                setError('error (auth/invalid-credential)')
                // console.log('ERROR', error);
            })
        toast("Login success full")

    }

    // login with google
    const googleProvider = new GoogleAuthProvider()
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)

            .then(result => {

                setUser(result.user)

                // console.log(result.user);
                navigate("/")
            })

            .catch(error => {
                // console.log('ERROR', error);
            })
        toast("Login success full")
    }

    const handleForgetPassword = () => {
        const email = emailRef.current.value
        if (!email) {
            toast('please provide a valid email')
        }
        else {
            sendPasswordResetEmail(auth, email)
        }


    }
    return (
         <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center min-h-screen mt-12 lg:mt-0 lg:flex flex-row-reverse lg:gap-10'>
            <div className='mb-8 lg:mb-0'>
                <img className=' h-[400px] rounded-xl' src={loginImg} alt="" />
            </div>
            <div className="card bg-base-100  w-full max-w-sm shrink-0 shadow-2xl">
                <h2 className='text-3xl font-bold text-center'>Login</h2>
                <form onSubmit={userLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" ref={emailRef} name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={showPassword ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />

                        <button onClick={() => setShowPassword(!showPassword)}
                            className="absolute bottom-12 right-4">
                            {
                                showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                            }
                        </button>
                        <label onClick={handleForgetPassword} className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-gradient-to-r from-gray-800 to-green-800 text-white font-bold">Login</button>
                    </div>
                    {
                        error && <p className='text-red-700 text-center'>{error}</p>
                    }

                    <p className='text-center mt-2'>New to the wev site please
                        <Link to='/private/register' className='text-red-600'> Register</Link></p>
                    <button onClick={signInWithGoogle}
                        className='flex items-center gap-3 mx-auto font-medium'>Sign in <FaGoogle /></button>
                </form>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                />
            </div>
        </div>
    );
};

export default Login;