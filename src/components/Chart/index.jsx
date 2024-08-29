import CanvasJSReact from '@canvasjs/react-charts';
import '../../styles/Home.css'
//var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJSChart = CanvasJSReact.CanvasJSChart;
function Chart({ data }) {

    const options = {
        
        width: 800,
        dataPointWidth: 50,
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
                return "";  // Retourne une chaîne vide pour masquer les labels de l'axe Y
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