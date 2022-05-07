import React from 'react'
import "./featuredInfo.css"
 import {Adb,CheckCircle,Error,Album} from '@material-ui/icons' 

export default function FeaturedInfo() {
  return (

    <div className='featured'>
      <div className="featuredItem">
          <span className="featureTitle">Total Defect Count</span>
          <div className="featuredOpenDefects">
              <span className="openDefects">135</span>
              <span className="closeDefects">
                 <Adb className='featuredIcon negative'/>
              </span>
          </div>
          <span className="featuredSub">
             Compared to last Week 
          </span>
      </div>
      <div className="featuredItem">
          <span className="featureTitle">Hih Priority Defects  </span>
          <div className="featuredOpenDefects">
              <span className="openDefects">65</span>
              <span className="closeDefects">
                 <Error className='featuredIcon negative'/>
              </span>
          </div>
          <span className="featuredSub">
             Compared to last Week 
          </span>
      </div>

      <div className="featuredItem">
          <span className="featureTitle">Fixed  Defect Count</span>
          <div className="featuredOpenDefects">
              <span className="openDefects">39</span>
              <span className="closeDefects">
                 <CheckCircle className='featuredIcon'/>
              </span>
          </div>
          <span className="featuredSub">
             Compared to last Week 
          </span>
      </div>
      <div className="featuredItem">
          <span className="featureTitle">Open  Defect </span>
          <div className="featuredOpenDefects">
              <span className="openDefects">45</span>
              <span className="closeDefects">
                 <Album className='featuredIcon open'/>
              </span>
          </div>
          <span className="featuredSub">
             Compared to last Week 
          </span>
      </div>
      

    </div>
  )
}

