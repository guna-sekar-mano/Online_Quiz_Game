'use client'
import { Chart as ChartJS,CategoryScale,LinearScale, BarElement,Title,Tooltip,Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement,Title, Tooltip,Legend);
const Chart=(props)=>{
    const {chartdata}=props;
    const data = {
        labels: chartdata?.map(d=>d.Date),
        datasets: [
          {
            label: 'Test Count Per Date',
            data: chartdata?.map(d=>d.Total_count),
            backgroundColor: '#4F46E5', // Bar color
            borderColor: '#4F46E5', // Border color
            borderWidth: 1, // Border width
          },
        ],
      };
    
      const options = {
        responsive: true,
        scales: {
          y: {
            
            beginAtZero: true,
          },
        },
      };
    
      return (

            <div className="grid grid-cols-1 lg:grid-cols-2">
                
                <div className="bar-chart bg-white mt-5 shadow rounded-xl p-5  hover:shadow-md transition">
                    <div>
                        <h1 className='font-semibold'>Test Count</h1>
                    </div>
                    <Bar data={data} options={options} />
                </div>
            </div>
       
      );
}
export default Chart;