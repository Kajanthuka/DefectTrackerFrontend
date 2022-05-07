import React from 'react'
import './widgetLg.css';


export default function WidgetLg() {

  const Button = ({type}) =>{
    return <button className={'widgetLgButton ' + type}>{type}</button> 
  }
  return (
    <div className='widgetLg'>
        <h3 className="widgetLgTitle">Latest Defects</h3>
        <table className="widgetLgTable">
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Defect</th>
            <th className="widgetLgTh">Email</th>
            <th className="widgetLgTh">prority</th>
            <th className="widgetLgTh">module</th>
            <th className="widgetLgTh">Status</th>
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img src="https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?cs=srgb&dl=pexels-katie-e-3671083.jpg&fm=jpg" alt="" className='widgetLgImg' />
              <span className='widgetLgDefect'>not work</span>
            </td>
            <td className='widgetLgEmail'>kaja@gmail.com</td>
            <td className='widgetLgPriority'>High</td> 
            <td className='widgetLgModule'>AdminButton</td> 
            <td className='widgetLgStatus'><Button type="Pending"/></td>    
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img src="https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?cs=srgb&dl=pexels-katie-e-3671083.jpg&fm=jpg" alt="" className='widgetLgImg' />
              <span className='widgetLgDefect'>Button </span>
            </td>
            <td className='widgetLgEmail'>kaja@gmail.com</td>
            <td className='widgetLgPriority'>High</td> 
            <td className='widgetLgModule'>AdminButton</td> 
            <td className='widgetLgModule'><Button type="Approved"/></td>    
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img src="https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?cs=srgb&dl=pexels-katie-e-3671083.jpg&fm=jpg" alt="" className='widgetLgImg' />
              <span className='widgetLgDefect'> onclick </span>
            </td>
            <td className='widgetLgEmail'>kaja@gmail.com</td>
            <td className='widgetLgPriority'>High</td> 
            <td className='widgetLgModule'>AdminButton</td> 
            <td className='widgetLgModule'><Button type="Deaclined"/></td>    
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img src="https://images.pexels.com/photos/3671083/pexels-photo-3671083.jpeg?cs=srgb&dl=pexels-katie-e-3671083.jpg&fm=jpg" alt="" className='widgetLgImg' />
              <span className='widgetLgDefect'>InputType </span>
            </td>
            <td className='widgetLgEmail'>kaja@gmail.com</td>
            <td className='widgetLgPriority'>Medium</td> 
            <td className='widgetLgModule'>AdminButton</td> 
            <td className='widgetLgModule'><Button type="Pending"/></td>    
          </tr>
           
           


        </table>
    </div>
  )
}
