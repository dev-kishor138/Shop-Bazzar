"use client"

import useAuth from '@/hooks/useAuth';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc'

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { signIn, googleLogin } = useAuth();

    const onSubmit = async (data) => {
        const { email, password } = data;
        const toastId = toast.id('Loading...')
        try {
            const user = await signIn(email, password);
            toast.dismiss(toastId);
            toast.success("user signed in successfully")
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error.message || "user not signed in")
        }
    }

    const handleGoogleLogin = async () => {
        const toastId = toast.id('Loading...')
        try {
            const user = await googleLogin();
            toast.dismiss(toastId);
            toast.success("user signed in successfully")
        } catch (error) {
            toast.dismiss(toastId);
            toast.error(error.message || "user not signed in")
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
                <label htmlFor="email" className="label label-text">
                    Email
                </label>
                <input
                    type="email"
                    placeholder="email"
                    id="email"
                    name="email"
                    className="input input-bordered"
                    autoComplete="email"
                    {...register("email", {
                        required: true,
                        pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/,
                    })}
                />
                {errors.email && (
                    <span className="text-red-500 text-base mt-1">
                        Please enter a valid email address.
                    </span>
                )}
            </div>
            <div className="form-control">
                <label htmlFor="password" className="label label-text">
                    Password
                </label>
                <input
                    type="password"
                    placeholder="password"
                    id="password"
                    name="password"
                    className="input input-bordered"
                    autoComplete="new-password"
                    {...register("password", { required: true, minLength: 6 })}
                />
                {errors.password && (
                    <span className="text-red-500 text-base mt-1">
                        Please enter a password.
                    </span>
                )}
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                    </a>
                </label>
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                    Login
                </button>
            </div>
            <p className="mt-3">
                Don&apos;t have an account?
                <Link className="text-blue-500 underline ml-1" href="/signup">
                    Signup
                </Link>
            </p>
            <div className="divider mt-5">OR</div>
            <div className='text-center'>
                <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
                    <span className='text-xl'> <FcGoogle /></span>
                </button>
            </div>
        </form>
    );
};

export default LoginForm;