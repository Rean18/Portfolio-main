import { useEffect, useState } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import '../../styles/Home.css'

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
function Chart({ data }) {

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 700)
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    const desktopOptions = {
        dataPointWidth: 50,
        animationEnabled: true,
        animationDuration: 1000,
        axisX:{
            labelFontColor: '#095252',
            labelFontFamily: 'Lusitana',
            labelFontWeight:'Bold',
            labelFontSize:16,
        },
        axisY: {
            minimum:0,
            maximum:100,
            interval:20,
            labelFormatter: function() {
                return "";  
              },
            lineThickness: 0,
        },
        data: [{
          type: "column",
          dataPoints: data
        }]
      };

      const mobileOptions = {
        dataPointWidth: 30,
        animationEnabled: true,
        animationDuration: 1000,
        axisX:{
            labelFontColor: '#095252',
            labelFontFamily: 'Lusitana',
            labelFontWeight:'Bold',
            labelFontSize:10,
        },
        axisY: {
            minimum:0,
            maximum:100,
            interval:20,
            labelFormatter: function() {
                return "";  
              },
            lineThickness: 0,
        },
        data: [{
          type: "column",
          dataPoints: data
        }]
      };

    
              
      return (
        <div className='chart-wrapper'>
          <CanvasJSChart key={isMobile ? "mobile" : "desktop"} options = {isMobile ? mobileOptions : desktopOptions} />
        </div>
      );
}
      
export default Chart