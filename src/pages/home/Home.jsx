import ChartBox from '../../components/chartBox/ChartBox'
import Topbox from '../../components/topbox/Topbox'
import './home.scss'
import { chartBoxUser, chartBoxConversion, chartBoxProduct, chartBoxRevenue, barChartBoxRevenue, barChartBoxVisit } from '../../data'
import BarChartBox from '../../components/barChartBox/BarChartBox'
import PieChartBox from '../../components/pieChartBox/PieChartBox'
import BigChartBox from '../../components/bigChartBox/BigChartBox'


function Home() {
return (
    <div className='home'>
      <div className="box box-1"><Topbox /></div>
      <div className="box box-2"><ChartBox {...chartBoxUser} /> </div>
      <div className="box box-3"><ChartBox {...chartBoxProduct} /> </div>
      <div className="box box-4"><PieChartBox /></div>
      <div className="box box-5"><ChartBox {...chartBoxConversion} /> </div>
      <div className="box box-6"><ChartBox {...chartBoxRevenue} /> </div>
      <div className="box box-7"><BigChartBox /> </div>
      <div className="box box-8"><BarChartBox {...barChartBoxVisit} /></div>
      <div className="box box-9"><BarChartBox {...barChartBoxRevenue} /></div>
    </div>
  )

}
export default Home