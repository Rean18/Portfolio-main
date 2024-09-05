import CanvasJSReact from '@canvasjs/react-charts';
import '../../styles/Home.css'
//var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
function Chart({ data }) {

    const options = {
        
        dataPointWidth: 50,
        animationEnabled: true,
        animationDuration: 1000,
        axisX:{
            labelFontColor: '#095252',
            labelFontFamily: 'Lusitana',
            labelFontWeight:'Bold',
            labelFontSize:18,
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
      }

    
              
      return (
        <div className='chart-wrapper'>
          <CanvasJSChart options = {options} />
        </div>
      );
}
      
export default Chart