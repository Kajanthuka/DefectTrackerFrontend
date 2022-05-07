import React from 'react'
import FeaturedInfo from '../components/featuredInfo/FeaturedInfo';
import Chart from '../components/charts/Chart'; 
import "./home/home.css";
import {userData} from "../../src/dummyData";
import WidgetSm from '../components/widgetSm/WidgetSm';
import WidgetLg from '../components/widgetLg/WidgetLg';



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
