import { useNavigate } from 'react-router-dom';
import opps from '../assets/opps.jpg'
const ErrorEliment = () => {
    const navigate = useNavigate()
    const handleError = ()=>{
        navigate("/")
    }
    return (
        <div className='flex items-center justify-center pt-10'>
            <div className='text-center'>
                <h2 className='text-red-700 text-4xl font-bold'>Is moving to the wrong place</h2>
                <img src={opps} alt="" />
                <button onClick={handleError}
                className='py-2 px-4 bg-red-600 text-white rounded-lg'>Back to home</button>
            </div>
        </div>
    );
};

export default ErrorEliment;