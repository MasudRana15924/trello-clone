import React from 'react';
import client from '../../assets/client.jpg'
import { SiTask } from 'react-icons/si';
import { GrTasks } from 'react-icons/gr';
import { RiWechatLine } from 'react-icons/ri';
import { HiLink } from 'react-icons/hi';
import { SlCalender } from 'react-icons/sl';
import women from '../../assets/women (2).jpg';
import men from '../../assets/men.jpg';
const Todo = () => {
    return (
        <div className="w-96 bg-gray-100 ml-4 card-section">
        <div className="flex justify-between bg-gray-100 h-16 items-center pl-2 pr-2 ">
            <div className='flex gap-2'>
                <button className="progress-btn w-6 h-4 mt-1 bg-blue-500"></button>
                <p className="text-gray-900 font-semibold ">To Do</p>
            </div>
            <div>
                <button className="h-8 w-8 bg-white font-semibold">0</button>
            </div>
        </div>
        <div className="flex   bg-gray-100 mb-4">
            <div className=" w-full ml-2 mr-2 ">
                <div className="flex justify-between pl-2 pr-2 bg-white pt-3">
                    <div className="flex  items-center">
                        <img src={client} alt="" className="h-8 w-8 border rounded-full" />
                        <p className="text-gray-900 font-semibold text-md">Client Name</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src={client} alt="" className="h-8 w-8 border rounded-full" />
                        <p className="text-gray-900 font-semibold text-md">Sadik Istiak</p>
                    </div>
                </div>
                <div className="flex justify-between pl-2 pr-2 bg-white pt-3">
                    <div className="flex gap-2  items-center">
                        <SiTask></SiTask>
                        <p className="text-gray-500  text-sm">Lorem ipsum, dol</p>
                    </div>
                    <div className="">
                        <div className="flex gap-2  items-center">
                            <GrTasks></GrTasks>
                            <p className="text-gray-500  text-sm">1/2</p>
                        </div>
                    </div>
                </div>
                <div className="flex bg-white pt-3 gap-4 items-center">
                    
                    <img src={men} alt="" className="h-6 w-6 border rounded-full ml-2" />
                    <img src={women} alt="" className="h-6 w-6 border rounded-full " />
                    <button className="w-10 h-8 bg-gray-100  border rounded-full text-gray-900 font-semibold">12+</button>
                    <div className="flex">
                       <RiWechatLine className="text-2xl pt-1 text-gray-400"></RiWechatLine>
                       <p className="font-semibold text-gray-500">15 </p>
                    </div>
                    <div className="flex">
                       <HiLink className="text-2xl pt-1 text-gray-400"></HiLink>
                       <p className="font-semibold text-gray-500">25 </p>
                    </div>
                    <div className="flex gap-2">
                       <SlCalender className="text-xl pt-1 text-gray-400"></SlCalender>
                       <p className="font-semibold text-gray-500">30-12-2022 </p>
                    </div>
                </div>

            </div>
            
        </div>
        <div className="flex  bg-gray-100 mb-4">
            <div className=" w-full ml-2 mr-2 ">
                <div className="flex justify-between pl-2 pr-2 bg-white pt-3">
                    <div className="flex  items-center">
                        <img src={client} alt="" className="h-8 w-8 border rounded-full" />
                        <p className="text-gray-900 font-semibold text-md">Client Name</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src={client} alt="" className="h-8 w-8 border rounded-full" />
                        <p className="text-gray-900 font-semibold text-md">Sadik Istiak</p>
                    </div>
                </div>
                <div className="flex justify-between pl-2 pr-2 bg-white pt-3">
                    <div className="flex gap-2  items-center">
                        <SiTask></SiTask>
                        <p className="text-gray-500  text-sm">Lorem ipsum, dol</p>
                    </div>
                    <div className="">
                        <div className="flex gap-2  items-center">
                            <GrTasks></GrTasks>
                            <p className="text-gray-500  text-sm">1/2</p>
                        </div>
                    </div>
                </div>
                <div className="flex bg-white pt-3 gap-4 items-center">
                    
                    <img src={men} alt="" className="h-6 w-6 border rounded-full ml-2" />
                    <img src={women} alt="" className="h-6 w-6 border rounded-full " />
                    <button className="w-10 h-8 bg-gray-100  border rounded-full text-gray-900 font-semibold">12+</button>
                    <div className="flex">
                       <RiWechatLine className="text-2xl pt-1 text-gray-400"></RiWechatLine>
                       <p className="font-semibold text-gray-500">15 </p>
                    </div>
                    <div className="flex">
                       <HiLink className="text-2xl pt-1 text-gray-400"></HiLink>
                       <p className="font-semibold text-gray-500">25 </p>
                    </div>
                    <div className="flex gap-2">
                       <SlCalender className="text-xl pt-1 text-gray-400"></SlCalender>
                       <p className="font-semibold text-gray-500">30-12-2022 </p>
                    </div>
                </div>

            </div>
            
        </div>
        <div className="flex  bg-gray-100 mb-4">
            <div className=" w-full ml-2 mr-2 ">
                <div className="flex justify-between pl-2 pr-2 bg-white pt-3">
                    <div className="flex  items-center">
                        <img src={client} alt="" className="h-8 w-8 border rounded-full" />
                        <p className="text-gray-900 font-semibold text-md">Client Name</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src={client} alt="" className="h-8 w-8 border rounded-full" />
                        <p className="text-gray-900 font-semibold text-md">Sadik Istiak</p>
                    </div>
                </div>
                <div className="flex justify-between pl-2 pr-2 bg-white pt-3">
                    <div className="flex gap-2  items-center">
                        <SiTask></SiTask>
                        <p className="text-gray-500  text-sm">Lorem ipsum, dol</p>
                    </div>
                    <div className="">
                        <div className="flex gap-2  items-center">
                            <GrTasks></GrTasks>
                            <p className="text-gray-500  text-sm">1/2</p>
                        </div>
                    </div>
                </div>
                <div className="flex bg-white pt-3 gap-4 items-center">
                    
                    <img src={men} alt="" className="h-6 w-6 border rounded-full ml-2" />
                    <img src={women} alt="" className="h-6 w-6 border rounded-full " />
                    <button className="w-10 h-8 bg-gray-100  border rounded-full text-gray-900 font-semibold">12+</button>
                    <div className="flex">
                       <RiWechatLine className="text-2xl pt-1 text-gray-400"></RiWechatLine>
                       <p className="font-semibold text-gray-500">15 </p>
                    </div>
                    <div className="flex">
                       <HiLink className="text-2xl pt-1 text-gray-400"></HiLink>
                       <p className="font-semibold text-gray-500">25 </p>
                    </div>
                    <div className="flex gap-2">
                       <SlCalender className="text-xl pt-1 text-gray-400"></SlCalender>
                       <p className="font-semibold text-gray-500">30-12-2022 </p>
                    </div>
                </div>

            </div>
            
        </div>
        <div className="flex  bg-gray-100 mb-4">
            <div className=" w-full ml-2 mr-2 ">
                <div className="flex justify-between pl-2 pr-2 bg-white pt-3">
                    <div className="flex  items-center">
                        <img src={client} alt="" className="h-8 w-8 border rounded-full" />
                        <p className="text-gray-900 font-semibold text-md">Client Name</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src={client} alt="" className="h-8 w-8 border rounded-full" />
                        <p className="text-gray-900 font-semibold text-md">Sadik Istiak</p>
                    </div>
                </div>
                <div className="flex justify-between pl-2 pr-2 bg-white pt-3">
                    <div className="flex gap-2  items-center">
                        <SiTask></SiTask>
                        <p className="text-gray-500  text-sm">Lorem ipsum, dol</p>
                    </div>
                    <div className="">
                        <div className="flex gap-2  items-center">
                            <GrTasks></GrTasks>
                            <p className="text-gray-500  text-sm">1/2</p>
                        </div>
                    </div>
                </div>
                <div className="flex bg-white pt-3 gap-4 items-center">
                    
                    <img src={men} alt="" className="h-6 w-6 border rounded-full ml-2" />
                    <img src={women} alt="" className="h-6 w-6 border rounded-full " />
                    <button className="w-10 h-8 bg-gray-100  border rounded-full text-gray-900 font-semibold">12+</button>
                    <div className="flex">
                       <RiWechatLine className="text-2xl pt-1 text-gray-400"></RiWechatLine>
                       <p className="font-semibold text-gray-500">15 </p>
                    </div>
                    <div className="flex">
                       <HiLink className="text-2xl pt-1 text-gray-400"></HiLink>
                       <p className="font-semibold text-gray-500">25 </p>
                    </div>
                    <div className="flex gap-2">
                       <SlCalender className="text-xl pt-1 text-gray-400"></SlCalender>
                       <p className="font-semibold text-gray-500">30-12-2022 </p>
                    </div>
                </div>

            </div>
            
        </div>
        <div className="flex  bg-gray-100 mb-4">
            <div className=" w-full ml-2 mr-2 ">
                <div className="flex justify-between pl-2 pr-2 bg-white pt-3">
                    <div className="flex  items-center">
                        <img src={client} alt="" className="h-8 w-8 border rounded-full" />
                        <p className="text-gray-900 font-semibold text-md">Client Name</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src={client} alt="" className="h-8 w-8 border rounded-full" />
                        <p className="text-gray-900 font-semibold text-md">Sadik Istiak</p>
                    </div>
                </div>
                <div className="flex justify-between pl-2 pr-2 bg-white pt-3">
                    <div className="flex gap-2  items-center">
                        <SiTask></SiTask>
                        <p className="text-gray-500  text-sm">Lorem ipsum, dol</p>
                    </div>
                    <div className="">
                        <div className="flex gap-2  items-center">
                            <GrTasks></GrTasks>
                            <p className="text-gray-500  text-sm">1/2</p>
                        </div>
                    </div>
                </div>
                <div className="flex bg-white pt-3 gap-4 items-center">
                    
                    <img src={men} alt="" className="h-6 w-6 border rounded-full ml-2" />
                    <img src={women} alt="" className="h-6 w-6 border rounded-full " />
                    <button className="w-10 h-8 bg-gray-100  border rounded-full text-gray-900 font-semibold">12+</button>
                    <div className="flex">
                       <RiWechatLine className="text-2xl pt-1 text-gray-400"></RiWechatLine>
                       <p className="font-semibold text-gray-500">15 </p>
                    </div>
                    <div className="flex">
                       <HiLink className="text-2xl pt-1 text-gray-400"></HiLink>
                       <p className="font-semibold text-gray-500">25 </p>
                    </div>
                    <div className="flex gap-2">
                       <SlCalender className="text-xl pt-1 text-gray-400"></SlCalender>
                       <p className="font-semibold text-gray-500">30-12-2022 </p>
                    </div>
                </div>

            </div>
            
        </div>
        <div className="flex  bg-gray-100 mb-4">
            <div className=" w-full ml-2 mr-2 ">
                <div className="flex justify-between pl-2 pr-2 bg-white pt-3">
                    <div className="flex  items-center">
                        <img src={client} alt="" className="h-8 w-8 border rounded-full" />
                        <p className="text-gray-900 font-semibold text-md">Client Name</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <img src={client} alt="" className="h-8 w-8 border rounded-full" />
                        <p className="text-gray-900 font-semibold text-md">Sadik Istiak</p>
                    </div>
                </div>
                <div className="flex justify-between pl-2 pr-2 bg-white pt-3">
                    <div className="flex gap-2  items-center">
                        <SiTask></SiTask>
                        <p className="text-gray-500  text-sm">Lorem ipsum, dol</p>
                    </div>
                    <div className="">
                        <div className="flex gap-2  items-center">
                            <GrTasks></GrTasks>
                            <p className="text-gray-500  text-sm">1/2</p>
                        </div>
                    </div>
                </div>
                <div className="flex bg-white pt-3 gap-4 items-center">
                    
                    <img src={men} alt="" className="h-6 w-6 border rounded-full ml-2" />
                    <img src={women} alt="" className="h-6 w-6 border rounded-full " />
                    <button className="w-10 h-8 bg-gray-100  border rounded-full text-gray-900 font-semibold">12+</button>
                    <div className="flex">
                       <RiWechatLine className="text-2xl pt-1 text-gray-400"></RiWechatLine>
                       <p className="font-semibold text-gray-500">15 </p>
                    </div>
                    <div className="flex">
                       <HiLink className="text-2xl pt-1 text-gray-400"></HiLink>
                       <p className="font-semibold text-gray-500">25 </p>
                    </div>
                    <div className="flex gap-2">
                       <SlCalender className="text-xl pt-1 text-gray-400"></SlCalender>
                       <p className="font-semibold text-gray-500">30-12-2022 </p>
                    </div>
                </div>

            </div>
            
        </div>
    </div>
    );
};

export default Todo;