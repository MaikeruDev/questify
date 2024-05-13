import { Link } from "react-router-dom";
import React, { useState } from 'react';

export default function Login() {
    const [activeSection, setActiveSection] = useState(1);
    
    const next = () => {
        setActiveSection((prevActiveSection) => prevActiveSection % 3 + 1);
    };

    const prev = () => {
        setActiveSection((prevActiveSection) => prevActiveSection === 1 ? 3 : prevActiveSection - 1);
    }

    const goToSection = (section) => { 
        if (section >= 1 && section <= 3 && section < activeSection) {
            setActiveSection(section);
        }
    };

    return (
        <>
            <div className="flex sm:min-h-screen items-center justify-center px-6 py-12 lg:px-8">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
                <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=yellow&shade=300"
              alt="Your Company"
            />
                    <h2 className="mb-5 mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                        Sign up an account
                    </h2>
                    <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4 rtl:space-x-reverse">
                    {[1, 2, 3].map(step =>
                            <li onClick={() => goToSection(step)} key={step} className={`cursor-pointer flex items-center ${activeSection === step ? 'text-primary-500 dark:text-primary-400' : 'text-gray-500 dark:text-gray-400'}`}
                                style={{ transition: 'opacity 0.5s', opacity: activeSection === step ? 1 : 0.5 }}>
                                <span className="flex items-center justify-center w-5 h-5 me-2rounded-full shrink-0"
                                    >
                                    {step}.
                                </span>
                                {step === 1 && "Account Info"}
                                {step === 2 && "Character Info"}
                                {step === 3 && "Review"}
                                {step < 3 && (
                                    <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 9 4-4-4-4M1 9l4-4-4-4" />
                                    </svg>
                                )} 
                            </li>
                        )}
                    </ol>


                    <div className="transition-opacity duration-500" style={{ opacity: activeSection === 1 ? 1 : 0, display: activeSection === 1 ? 'block' : 'none' }}>
                        <div className="grid gap-4 mb-4 sm:grid-cols-2 mt-4">
                            <div>
                                <label for="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                <input type="text" name="username" id="username" className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-400 sm:text-sm sm:leading-6 dark:bg-white/5 dark:border-0 dark:text-white" placeholder="Username" required="" />
                            </div>
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="email" name="email" id="email" className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-400 sm:text-sm sm:leading-6 dark:bg-white/5 dark:border-0 dark:text-white" placeholder="john@doe.com" required="" />
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" name="password" id="password" className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-400 sm:text-sm sm:leading-6 dark:bg-white/5 dark:border-0 dark:text-white" placeholder="•••••••••" required="" />
                            </div>                        <div>
                                <label for="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                <input type="password" name="confirm-password" id="confirm-password" className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-400 sm:text-sm sm:leading-6 dark:bg-white/5 dark:border-0 dark:text-white" placeholder="•••••••••" required="" />
                            </div>
                        </div>  
                        <button onClick={() => next() } className="text-sm font-semibold leading-6 text-gray-900 bg-primary-400 hover:bg-primary-300 rounded-lg px-3 py-1.5 text-center">
                            Next Step
                        </button>
                    </div>

                    <div className="transition-opacity duration-500" style={{ opacity: activeSection === 2 ? 1 : 0, display: activeSection === 2 ? 'block' : 'none' }}>
                        <img src="sword.svg" />
                        <img src="staff.svg" />
                        <img src="bow.svg" />
                        <button onClick={() => prev() } className="text-sm font-semibold leading-6 text-white border-0 bg-white/5 hover:bg-white/10 mr-2 rounded-lg px-3 py-1.5 text-center">
                        Back
                        </button> 
                        <button onClick={() => next() } className="text-sm font-semibold leading-6 text-gray-900 bg-primary-400 hover:bg-primary-300 rounded-lg px-3 py-1.5 text-center">
                            Next Step
                        </button>
                    </div>
                    
                    <div className="transition-opacity duration-500" style={{ opacity: activeSection === 3 ? 1 : 0, display: activeSection === 3 ? 'block' : 'none' }}>
                        You done?
                        <button onClick={() => prev() } className="text-sm font-semibold leading-6 text-white border-0 bg-white/5 hover:bg-white/10 mr-2 rounded-lg px-3 py-1.5 text-center">
                        Back
                        </button> 
                        <button onClick={() => next() } className="text-sm font-semibold leading-6 text-gray-900 bg-primary-400 hover:bg-primary-300 rounded-lg px-3 py-1.5 text-center">
                            Finish
                        </button>
                    </div>

                    <p className="mt-10 text-center text-sm text-gray-400">
                        Already a member?{' '}
                        <Link to="/Login" className="font-semibold leading-6 text-primary-400 hover:text-primary-300">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}