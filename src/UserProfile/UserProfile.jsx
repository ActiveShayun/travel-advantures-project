import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const{user} =useContext(AuthContext)
    // console.log(user);
    const navigate = useNavigate()
    const updateProfile = ()=>{
        navigate("/profile")
    }
    return (
        <div className='min-h-screen flex items-center justify-center  '> 
           <div className='bg-gradient-to-tr from-sky-200 to-gray-300 lg:w-2/4 
            lg:h-[400px] rounded-lg text-center flex flex-col justify-center space-y-4 items-center p-4'>
            <h2 className='text-3xl font-bold'>Wel Come</h2>
            {
                user ?  
                <div>
                    <img className='w-[200px] mx-auto rounded-lg' referrerPolicy="no-referrer" src={user?.photoURL} alt="" />
                    <h2 className='text-lg font-semibold'>{user?.displayName}</h2>
                    <p className='text-lg font-semibold'>{user?.email}</p>
                </div>
                : ''
            }
       
              <button onClick={updateProfile}
              className='w-[300px] py-2 px-10 rounded-xl bg-gradient-to-r from-gray-800 to-green-800 text-white font-bold  mt-3'>Update Profile</button>
           </div>
        </div>
    );
};

export default UserProfile;