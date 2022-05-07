import React from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/charts/Chart'; 
import "./home.css";
import {userData} from "../../dummyData";
import WidgetSm from '../../components/widgetLg/WidgetLg';
import WidgetLg from '../../components/widgetSm/WidgetSm';



export default function Home() {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Chart data={userData} title="Defect Analytics" grid dataKey="ActiveDefect"/>
        <div className="homeWidget">
          <WidgetSm/>
          <WidgetLg/>

        </div>
    </div>
  )
}
