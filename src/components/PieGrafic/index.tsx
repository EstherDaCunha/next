import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Grafico() {
    const data = {
        datasets: [{
            data: [3, 6, 9,2],
            backgroundColor: ['#9E2896', '#1C8580', '#017CC0', '#03894C']
        }]
    };


    const options = {
        plugins: {
            tooltip: {
                enabled: true,
                labels: ['Programação', 'Fluxograma', 'Mapeamento', 'Reunião'],
            },
            legend: {
                display: true,
            },
            
        }
    };

    return (
        <div className='border border-gray-300 w-[20em] h-[20em] m-5 rounded'>
            <Pie
                data={data}
                options={options}
                style={{width:'23em', height:'23em'}}
            />
        </div>
    );
}
