import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../AuthProvider/firebase.init";
import { useNavigate } from "react-router-dom";



const MyProfile = () => {
    const { setUser } = useContext(AuthContext)
    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    const handleUpdateProfile = async (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const Username = form.get("name")
        const photoUrl = form.get("photo")
        // console.log({ Username, photoUrl });

        const Userp = auth.currentUser
        if (!Userp) {
            setMessage("not okay")
            return;
        }
        try {
            await updateProfile(Userp, {
                displayName: Username,
                photoURL: photoUrl,
            })

            const updateUse = {
                ...Userp,
                displayName: Username,
                photoURL: photoUrl,
            }
            // console.log(updateUse);
            setUser(updateUse)
            setMessage('sucessfully')
             navigate("/userProfile")
        } catch (error) {
            // console.log('ERROR', error);
        }
    }

    return (
        <div>
            <div className="md:w-[600px] mt-12 mx-auto rounded-lg bg-gradient-to-tr from-sky-200 to-gray-300 py-4">
                <div className="md:w-[400px] mx-auto">
                    <h2 className="text-xl font-bold text-center">Update Your Profile </h2>
                    <form onSubmit={handleUpdateProfile} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="text"
                                name="photo"
                                placeholder="photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6 ">
                            <button className="btn  bg-gradient-to-r from-gray-800 to-green-800 text-white ">Update Profile</button>
                        </div>
                        {
                            message && <p>{message}</p>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;



