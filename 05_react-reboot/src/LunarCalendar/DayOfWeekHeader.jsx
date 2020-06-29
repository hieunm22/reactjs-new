import React from 'react';
import { daysOfWeek } from './DateUtils'

const DayOfWeekHeader = () => {
  return (
    <div className="day-of-week flex">
    {daysOfWeek.map((item, index) =>
      <div 
        className={`day-of-week-title${index >= 5 ? ' weekend' : ''}`} 
        key={index} 
        title={item.title}
      >
        {item.textDisplay}
      </div>
    )}
  </div>
  )
}

export default DayOfWeekHeader