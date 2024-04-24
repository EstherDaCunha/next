"use client";

import Apprentice from "@/components/ApprenticeCard";
import ButtonIcon from "@/components/ButtonIcon";
import FormInput from "@/components/FormInput";
import Header from "@/components/Header";
import Modal from "@/components/Modal";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { MdOutlineGroupAdd } from "react-icons/md";
import Department from "@/components/DepartmentCard";
import TasksNotStarted from "@/components/NotStarted/TaskNotStarted";
import Grafico from "@/components/PieGrafic";
import Calendario from "@/components/Gantt";
import Filter from "@/components/Filter";
import { DefaultAccordion } from "@/components/AccordionOpen";

export default function Home() {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [text, setText] = useState<string>("")
    const { data: session, status } = useSession();

    // useEffect(() => {
    //     if (status == "authenticated") {
    //         localStorage.setItem("JWT_TOKEN", JSON.stringify(session?.access_token))
    //     }
    // }, [status]);

    if (status == "loading") {
        return (
            <>
                <Header title={"Dashboard"} userImg={"bg-[url('/avatar.jpg')]"} status={status == "loading"} />
                <div className='flex flex-col justify-center items-center w-full animate-pulse'>
                    <div className='flex items-center justify-center gap-[15em]'>
                        <div className='flex flex-col'>
                            <div className="w-[20vw] h-[8vh] bg-gray-200 rounded-md mt-5"></div>
                            <div className="w-[20vw] h-[8vh] bg-gray-200 rounded-md mt-5"></div>
                        </div>
                        <div className='flex gap-[10em]'>
                            <div className="w-[15vw] h-[20vh] bg-gray-200 rounded-md "></div>
                            <div className="w-[15vw] h-[20vh] bg-gray-200 rounded-md "></div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-16 mt-16'>
                        <div className="w-[30vw] h-[45vh] bg-gray-200 rounded-md "></div>
                        <div className="w-[45vw] h-[45vh] bg-gray-200 rounded-md "></div>
                    </div>
                    <div className='flex flex-col mt-16 my-10 border-[1px] border-gray-300 rounded-md p-4'>
                        <div className='flex space-x-[31em]'>
                            <div className="w-[20vw] h-[2.5vh] bg-gray-200 rounded-md mt-5"></div>
                            <div className="w-[10vw] h-[2.5vh] bg-gray-200 rounded-md mt-5"></div>
                        </div>
                        <div className="w-[20vw] h-[2.5vh] bg-gray-200 rounded-md mt-14"></div>
                        <div className='flex flex-col gap-2 mt-4'>
                            <div className="w-[50vw] h-2.5 bg-gray-200 rounded-full "></div>
                            <div className="w-[48vw] h-2 bg-gray-200 rounded-full "></div>
                            <div className="w-[50vw] h-2.5 bg-gray-200 rounded-full "></div>
                            <div className="w-[30vw] h-2.5 bg-gray-200 rounded-full "></div>
                        </div>
                        <hr className='h-px my-4 mt-8 bg-gray-300 border-0 ' />
                        <div className='my-6'>
                            <div className="w-[20vw] h-[2.5vh] bg-gray-200 rounded-md "></div>
                            <div className='flex flex-col gap-2 mt-4'>
                                <div className="w-[50vw] h-2 bg-gray-200 rounded-full "></div>
                                <div className="w-[48vw] h-2 bg-gray-200 rounded-full "></div>
                                <div className="w-[50vw] h-2 bg-gray-200 rounded-full "></div>
                                <div className="w-[30vw] h-2 bg-gray-200 rounded-full "></div>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        )
    }

    return (
        <>
            <Header title="Dashboard" status={false} userImg="https://flowbite.com/application-ui/demo/images/users/neil-sims.png" />
            <div className="flex gap-10 w-full">
                <div className="flex flex-col m-10">
                    <Apprentice classAprentice="Digital Solutions 10" lider={true} name="Joãozinho Balacubaco" profile="https://flowbite.com/application-ui/demo/images/users/neil-sims.png" />
                    <Apprentice classAprentice="Digital Solutions 10" lider={true} name="Joãozinho Balacubaco" profile="https://flowbite.com/application-ui/demo/images/users/neil-sims.png" />
                </div>
                <Department department="TEF 7" focalpoint="Leandro Galvao" profile="https://flowbite.com/application-ui/demo/images/users/neil-sims.png    " />
                <TasksNotStarted />
            </div>
            <div className="flex  m-0 p-0">
                <Grafico />
                <Calendario />
            </div>

            <div className="border border-gray-300 w-[57em] h-[15em] m-5 rounded">

            </div>
            <div className="w-[57em] m-5">
                <Filter />
            </div>


            <div className="border border-gray-300 w-[57em] h-[20em] m-5 rounded">
                <div className="m-2">
                    <h1 className="font-bold text-palette-sea-green">Latest Registration</h1>
                    <DefaultAccordion />
                </div>

            </div>

        </>
    )
}