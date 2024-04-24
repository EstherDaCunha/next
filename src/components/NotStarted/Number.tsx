import React from 'react';
import { CiCircleAlert } from "react-icons/ci";

export default function Number() {
    return (
        <div className='flex items-center space-x-2 w-[6em] h-[6em]'>
            <CiCircleAlert className='text-red-700 w-40 h-40' />
            <div>
                <h1 className='text-6xl text-[#ED0007]'>10</h1>
            </div>

        </div>
    )
}