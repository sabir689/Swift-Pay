import React, { useContext } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const { signInWithGoogle, setLoading, singInWithFacebook, singInWithGit } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleGoogle = () => {
        signInWithGoogle()
            .then((res) => {
                toast.success('Login successful! Welcome back!')
                navigate('/dashboard')
                setLoading(false)
                return
            })
            .catch(() => {
                setLoading(false)
                toast.error('Login failed. Check your credentials.')
                
            })
    }
    const handleFacebook = () => {
        singInWithFacebook()
            .then((res) => {
                toast.success('Login successful! Welcome back!')
                navigate('/dashboard')
                setLoading(false)
                return
            })
            .catch(() => {
                setLoading(false)
                toast.error('Login failed. Check your credentials.')
                return
            })
    }
    const handlegithub = () => {
        singInWithGit()
            .then((res) => {
                toast.success('Login successful! Welcome back!')
                navigate('/dashboard')
                setLoading(false)
                return
            })
            .catch((error) => {
                setLoading(false)
                toast.error('Login failed. Check your credentials.')
                console.log(error);
                return
            })
    }
    return (
        <div className='flex items-center justify-center mt-3 gap-2'>
            <div onClick={handleGoogle} className='border border-neutral-300 py-1.5 px-3 rounded-md flex items-center justify-center'>
                <FcGoogle className='text-2xl' />
            </div>
            <div onClick={handleFacebook} className='border bg-[#316FF6] border-neutral-300 py-1.5 px-3 rounded-md flex items-center justify-center'>
                <FaFacebook className='text-2xl text-white' />
            </div>
            <div onClick={handlegithub} className='border bg-black border-neutral-300 py-1.5 px-3 rounded-md flex items-center justify-center'>
                <FaGithub className='text-2xl text-white' />
            </div>
        </div>
    )
}

export default SocialLogin