import { useState } from 'react';
import { Gantt, Task, ViewMode } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";


export default function Calendario() {
    const [viewMode, setViewMode] = useState(ViewMode.Day);

    const onViewModeChange = (mode: ViewMode) => {
        setViewMode(mode);
    };

    // Omit<Task, 'start' | 'end'>[] = [

    const tasks: Task[] = [
        {
            start: new Date(2024, 1, 1),
            end: new Date(2024, 1, 2),
            name: 'SSO',
            id: "1",
            type: 'task',
            progress: 26,
            isDisabled: true,
            styles: { progressColor: '#18837E', progressSelectedColor: '#ff9e0d' },
        },

        {
            start: new Date(2024, 4, 6),
            end: new Date(2024, 4, 9),
            name: 'API tasks',
            id: "2",
            type: 'task',
            progress: 45,
            isDisabled: true,
            styles: { progressColor: '#18837E', progressSelectedColor: '#ff9e0d' },
        },

        {
            start: new Date(2024, 4, 1),
            end: new Date(2024, 4, 3),
            name: 'Login',
            id: "3",
            type: 'task',
            progress: 70,
            isDisabled: true,
            styles: { progressColor: '#9E2896', progressSelectedColor: '#ff9e0d' },
        },

        {
            start: new Date(2024, 4, 5),
            end: new Date(2024, 4, 7),
            name: 'Componentes',
            id: "4",
            type: 'task',
            progress: 100,
            isDisabled: true,
            styles: { progressColor: '#9E2896', progressSelectedColor: '#ff9e0d' },
        },


    ];

    const tasksWithoutLegend = tasks.map(task => {
        const { styles, ...rest } = task;
        return rest;
    });


    return (
        <div className='p-4 w-[52%] h-[20em] border border-gray-300 m-5 rounded'>

            {/* <div>
                <h1 className='font-bold text-2xl text-palette-gray mb-4'>Cronograma de Tasks</h1>
            </div> */}

            <div className='space-x-5'>
                <button onClick={() => onViewModeChange(ViewMode.Week)} className='bg-palette-blue w-[70px] h-[30px] text-white font-semibold rounded'>Week</button>
                <button onClick={() => onViewModeChange(ViewMode.Day)} className='bg-palette-sea-green w-[70px] h-[30px] text-white font-semibold rounded'>Day</button>
                <button onClick={() => onViewModeChange(ViewMode.Month)} className='bg-palette-pink w-[70px] h-[30px] text-white font-semibold rounded'>Month</button>
            </div>
{/* 
            <Gantt
                tasks={tasksWithoutLegend}
                viewMode={viewMode}
            /> */}
        </div>
    )
}
