import { Link } from "react-router-dom";
import React, { useState } from 'react';

export default function Login() {

    var [userData, setUserData] = useState({ username: '', email: '', password: '', passwordconf: ''})

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

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

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageSelect = (image) => {
        setSelectedImage(image);
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
                                <input value={userData.username} onChange={handleInputChange} type="text" name="username" id="username" maxLength={20} className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-400 sm:text-sm sm:leading-6 dark:bg-white/5 dark:border-0 dark:text-white" placeholder="Username" required="" />
                                {userData.username && userData.username.trim() !== '' && userData.username.trim().length < 3 && (
                                    <span className="text-red-500 text-xs">Username must be at least 3 characters</span>
                                )}
                            </div>
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input value={userData.email} onChange={handleInputChange} type="email" name="email" id="email" className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-400 sm:text-sm sm:leading-6 dark:bg-white/5 dark:border-0 dark:text-white" placeholder="john@doe.com" required="" />
                                {userData.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userData.email) && (
                                    <span className="text-red-500 text-xs">Please enter a valid email address</span>
                                )}

                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input value={userData.password} onChange={handleInputChange} type="password" name="password" id="password" className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-400 sm:text-sm sm:leading-6 dark:bg-white/5 dark:border-0 dark:text-white" placeholder="•••••••••" required="" />
                            </div>
                            <div>
                                <label for="passwordconf" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password confirmation</label>
                                <input value={userData.passwordconf} onChange={handleInputChange} type="password" name="passwordconf" id="passwordconf" className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-400 sm:text-sm sm:leading-6 dark:bg-white/5 dark:border-0 dark:text-white" placeholder="•••••••••" required="" />
                            </div>
                        </div>
                        <button disabled={userData.username.trim() !== '' && userData.username.trim().length < 3 || userData.email.trim() === '' || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(userData.email) || userData.password.trim() === '' || userData.passwordconf.trim() === ''} onClick={() => next()} className="text-sm font-semibold leading-6 text-gray-900 bg-primary-400 hover:bg-primary-300 rounded-lg px-3 py-1.5 text-center">
                            Next Step
                        </button>
                    </div>

                    <div className="transition-opacity duration-500" style={{ opacity: activeSection === 2 ? 1 : 0, display: activeSection === 2 ? 'block' : 'none' }}>
                        <div className="flex justify-center space-x-10 mb-10 mt-10">
                            <div className="text-center">
                                <img
                                    src="sword.svg"
                                    alt="Sword"
                                    className={`cursor-pointer ${selectedImage === 'sword' ? 'drop-shadow-[0_0_13px_rgb(248,255,13)]' : ''}`}
                                    onClick={() => handleImageSelect('sword')}
                                />
                                <div className="mt-2 text-white">Knight</div>
                            </div>
                            <div className="text-center">
                                <img
                                    src="staff.svg"
                                    alt="Staff"
                                    className={`cursor-pointer ${selectedImage === 'staff' ? 'drop-shadow-[0_0_13px_rgb(248,255,13)]' : ''}`}
                                    onClick={() => handleImageSelect('staff')}
                                />
                                <div className="mt-2 text-white">Mage</div>
                            </div>
                            <div className="text-center">
                                <img
                                    src="bow.svg"
                                    alt="Bow"
                                    className={`cursor-pointer ${selectedImage === 'bow' ? 'drop-shadow-[0_0_13px_rgb(248,255,13)]' : ''}`}
                                    onClick={() => handleImageSelect('bow')}
                                />
                                <div className="mt-2 text-white">Ranger</div>
                            </div>
                        </div>
                        <button onClick={() => prev()} className="text-sm font-semibold leading-6 text-white border-0 bg-white/5 hover:bg-white/10 mr-2 rounded-lg px-3 py-1.5 text-center">
                            Back
                        </button>
                        <button onClick={() => next()} className="text-sm font-semibold leading-6 text-gray-900 bg-primary-400 hover:bg-primary-300 rounded-lg px-3 py-1.5 text-center">
                            Next Step
                        </button>
                    </div>

                    <div className="transition-opacity duration-500" style={{ opacity: activeSection === 3 ? 1 : 0, display: activeSection === 3 ? 'block' : 'none' }}>
                        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                            <div className="mx-auto grid max-w-2xl grid-cols-1 grid-rows-1 items-start gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none">
                                {/* Invoice summary */}
                                <div className="lg:w-full">
                                    <h2 className="sr-only">Summary</h2>
                                    <div className="rounded-lg bg-white/5 shadow-sm ring-1 ring-gray-100/5">
                                        <dl className="flex flex-wrap">
                                            <div className="flex-auto pl-6 pt-6">
                                                <dt className="text-sm font-semibold leading-6 text-gray-200">Final Steps</dt>
                                                <dd className="mt-1 text-white font-semibold leading-6">Verify your Details</dd>
                                            </div>
                                            <div className="mt-6 flex w-full flex-none gap-x-4 border-t border-gray-100/5 px-6 pt-6">
                                                <dt className="flex-none">
                                                    <span className="sr-only">Client</span>

                                                </dt>
                                                <dd className="text-sm font-medium leading-6 text-gray-200">MaikeruDev</dd>
                                            </div>
                                            <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                                                <dt className="flex-none">
                                                    <span className="sr-only">Due date</span>
                                                </dt>
                                                <dd className="text-sm font-medium leading-6 text-gray-200">michael@prietl.com</dd>
                                            </div>
                                            <div className="mt-4 flex w-full flex-none gap-x-4 px-6">
                                                <dt className="flex-none">
                                                    <span className="sr-only">Status</span>
                                                </dt>
                                                <dd className="text-sm font-medium leading-6 text-gray-200">Knight</dd>
                                            </div>
                                        </dl>
                                        <div className="mt-6 border-t border-gray-100/5 px-6 py-6">
                                            <p className="text-sm font-semibold leading-6 text-gray-200">
                                                Seems about right? Make sure your data is correct, as you <span className="text-primary-500">won't</span> be able to change it later.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => prev()} className="text-sm font-semibold leading-6 text-white border-0 bg-white/5 hover:bg-white/10 mr-2 rounded-lg px-3 py-1.5 text-center">
                            Back
                        </button>
                        <button onClick={() => next()} className="text-sm font-semibold leading-6 text-gray-900 bg-primary-400 hover:bg-primary-300 rounded-lg px-3 py-1.5 text-center">
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