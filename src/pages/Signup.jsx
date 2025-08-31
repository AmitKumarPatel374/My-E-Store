import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { IoMdArrowRoundBack } from "react-icons/io";
import { MyProductContext } from '../Context/ProductContext';
import { Link, useNavigate } from 'react-router';

const Signup = () => {
    const { users, setusers } = useContext(MyProductContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const nevigate = useNavigate();

    const submitHandler = (data) => {
        data.id = nanoid();
        const updateUser = [...users, data];
        setusers(updateUser);
        localStorage.setItem("users", JSON.stringify(updateUser));
        console.log(data);
        toast.success("User Registered SuccessFully!");
        reset();
        nevigate('/signin');
    }


    return (
        <div className="flex h-screen items-center justify-center bg-[url('https://images.unsplash.com/photo-1617713965103-9fda56c89fad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
            <button className='flex items-center absolute top-[7%] left-[1%] font-bold cursor-pointer' onClick={() => nevigate(-1)}><IoMdArrowRoundBack /><span>Back</span></button>
            <form
                onSubmit={handleSubmit(submitHandler)}
                className="border-[2px] w-1/2  flex flex-col gap-[2rem] p-10 rounded-md "
            >
                <h1 className='text-center text-3xl font-bold'>Sign Up</h1>

                <div className='flex flex-col relative'>
                    <label className="absolute top-[-32%] left-[2%] bg-[url('https://images.unsplash.com/photo-1617713965103-9fda56c89fad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]" htmlFor="Name">Name</label>
                    <input
                        {...register("Name", { required: "Name is Required" })}
                        className='border p-2 rounded '
                        type="text"
                        name='Name'
                        id='Name'
                        autoComplete='Name'
                    />
                    <p className="text-red-500">{errors?.Name?.message}</p>
                </div>


                <div className='flex flex-col relative'>
                    <label className="absolute top-[-32%] left-[2%] bg-[url('https://images.unsplash.com/photo-1617713965103-9fda56c89fad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]" htmlFor="Email">Email</label>
                    <input
                    {...register("Email", { required: "Email is Required" })}
                    className='border p-2 rounded '
                    type="email"
                    name='Email'
                    id='Email'
                    autoComplete='Email'
                />
                <p className="text-red-500">{errors?.Email?.message}</p>
                </div>


                <div className='flex flex-col relative'>
                    <label className="absolute top-[-32%] left-[2%] bg-[url('https://images.unsplash.com/photo-1617713965103-9fda56c89fad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]" htmlFor="Password">Password</label>
                    <input
                    {...register("Password",
                        {
                            required: "Password is required",
                            minLength: {
                                value: 4,
                                message: "minimum 4 digit password is required"
                            }
                        }
                    )}
                    className='border p-2 rounded '
                    type="password"
                    name='Password'
                    id='Password'
                    autoComplete="new-password"
                />
                <p className="text-red-500">{errors?.Password?.message}</p>
                </div>


                <button
                    className='bg-[#00809D] p-2 rounded cursor-pointer'>
                    Sign Up
                </button>

                <p className="font-thin text-black mt-[10px] text-center">
                    Already have an account ?{" "}
                    <Link to="/signin" className="text-blue-400 cursor-pointer">Sign In</Link>
                </p>

            </form>
        </div>
    )
}

export default Signup
