import React, { useState } from "react";

import { useRouter } from "next/router";
import axios, { AxiosError, AxiosResponse } from "axios";
import { useForm } from "react-hook-form";
import { NextPage } from "next";
import Layout from "../components/layout/layout";

type FormData = {
    email: string;
    password: string;
};

const Login: NextPage = () => {
    const [loginErrors, setErrors] = useState("");
    useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data: FormData) => {
        console.log(data);
        setErrors("");
        try {
            const response: AxiosResponse = await axios({
                url: "http://127.0.0.1:8080/login",
                method: "post",
                data: {
                    email: data.email,
                    password: data.password,
                },
                withCredentials: true,
            });
            if (response.status === 200) {
                console.log("You are logged");
            }
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                setErrors(error.toString());
            }
            console.log("[ERR]", error);
            setErrors("Wrong email or password");
        }
    };
    return (
        <Layout>
            <h1 className="text-4xl font-bold text-white text-center m-12 block mt-3">
                Log in!
            </h1>
            <div className="flex flex-col items-center justify-center bg-white w-64 text-center m-auto rounded-lg mb-12">
                <form id="login-form" onSubmit={handleSubmit(onSubmit)} className="m-4">
                    <br />
                    <p className='text-red-500 text-sm'>{loginErrors}</p>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                        })}
                        placeholder="Email"
                        className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-4"
                    ></input>
                    <br></br>
                    <input
                        type="password"
                        {...register("password", {
                            required: "Password is required",
                        })}
                        placeholder="Password"
                        className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-4"
                    ></input>
                    <p>{errors.password?.message}</p>
                    <button className="bg-blue-jat w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105 my-8">
                        Login
                    </button>
                </form>
            </div>
        </Layout>
    );
};

export default Login;
