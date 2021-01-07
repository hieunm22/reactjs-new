import React from 'react';
import { Solar2Lunar } from './DateUtils'

function getDaysInMonth(m, y) {
  return new Date(y, m, 0).getDate()
}

function getSpecialSolarDate(dt, index) {
  if (index % 7 >= 5) {
    return true
  }
  if (dt.d0 === 2 && dt.m0 === 9) {
    return true
  }
  if (dt.d0 === 30 && dt.m0 === 4) {
    return true
  }
  if (dt.d0 === 17 && dt.m0 === 10) {
    return true
  }
  if (dt.d0 === 1 && (dt.m0 === 1 || dt.m0 === 5 || dt.m0 === 8)) {
    return true
  }

  return false
}

function showDate(selectedDate) {
  alert(selectedDate.d0 + "-" + selectedDate.m0 + "-" + selectedDate.y0)

}

const MonthView = (props) => {
  const { mm, yyyy } = props.state

  const firstDayOfMonth = new Date(yyyy, mm - 1, 1).getDay() || 7
  const numberDaysOfCurrentMonth = getDaysInMonth(mm, yyyy)
  const numberDaysOfPreviousMonth = getDaysInMonth(mm - 1, yyyy)

  const allDaysInMonthView = Array.from({ length: 42 }).map((_, index) => {
    if (index >= firstDayOfMonth - 1 + numberDaysOfCurrentMonth) {
      return { d0: index - firstDayOfMonth + 2 - numberDaysOfCurrentMonth,
        m0: (mm === 12 ? 1 : mm + 1),
        y0: yyyy + (mm === 12 ? 1 : 0)
      }
    }
    if (index >= firstDayOfMonth - 1) {
      return { d0: index - firstDayOfMonth + 2,
        m0: mm,
        y0: yyyy
      }
    }
    return { d0: numberDaysOfPreviousMonth - firstDayOfMonth + index + 2,
      m0: (mm === 1 ? 12 : mm - 1),
      y0: yyyy - (mm === 1 ? 1 : 0)
    }
  })

  const firstDayInMonthView = allDaysInMonthView[0]
  const lunarFirst = Solar2Lunar(yyyy, firstDayInMonthView.m0, firstDayInMonthView.d0)
  firstDayInMonthView.d1 = lunarFirst.Day
  firstDayInMonthView.m1 = lunarFirst.Month

  for (let i = 1; i < allDaysInMonthView.length; i++) {
    const ele = allDaysInMonthView[i]
    ele.d1 = allDaysInMonthView[i - 1].d1 + 1
    ele.m1 = allDaysInMonthView[i - 1].m1
    if (ele.d1 >= 30) {
      const lunar = Solar2Lunar(yyyy, ele.m0, ele.d0)
      allDaysInMonthView[i].d1 = lunar.Day
      allDaysInMonthView[i].m1 = lunar.Month
    }
  }

  return allDaysInMonthView.map((item, index) =>
  <div
    className={`full-day${item.d0 === props.today.dd && item.m0 === props.today.mm && item.y0 === props.today.yyyy ? " today" : ""}`}
    key={index}
    onClick={e => props.onSetDate(item)}
  >
    <div className={`solar-date${getSpecialSolarDate(item, index) ? " weekend" : ""}${item.m0 !== props.state.mm ? " other-month" : ""}`}>
      {item.d0}
    </div>
    <div className={`${item.d1 === 1 || item.d1 === 15 ? "lunar-special-dates" : "lunar-date"}`}>
      {item.d1 === 1 ? `${item.d1}/${item.m1}` : item.d1}
    </div>
  </div>
  )
}

export default MonthView