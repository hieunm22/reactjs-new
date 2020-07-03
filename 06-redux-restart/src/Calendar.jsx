import React from 'react'

export default class Calendar extends React.Component {

  getDayOfMonth() {
    const date = new Date()
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
    return firstDay.getDay() + 1
  }

  daysInMonth (month, year) {
    return new Date(year, month, 0).getDate()
  }

  findDate(index) {
    const firstDay = this.getDayOfMonth() - 2
    const offset = firstDay - 1
    const totalDays = this.daysInMonth(8, 2019)
    const prevMonthTotalDays = this.daysInMonth(7, 2019)

    if (index === firstDay) {
      return [1, true]
    }

    if (index > firstDay && index < firstDay + offset + totalDays - 2) {
      return [index - offset, true]
    }

    if (index >= (firstDay + offset + totalDays - 2)) {
      return [index - (firstDay + offset + totalDays) + 3, false]
    }

    if (index < firstDay) {
      return [prevMonthTotalDays + index - offset, false]
    }
  }

  renderHeader() {
    return Array.from({ length: 7 }).map((_, idx) => (
      <div className="calendar-item calendar-item__bold" key={idx}>
        {idx < 6 ? idx + 2 : 'CN'}
      </div>
    ))
  }

  render() {
    return (
      <div className="calendar flex container calendar-container">
        {this.renderHeader()}
        {Array.from({ length: 42 }).map((_, index) => {
          const [day, active] = this.findDate(index)
          const cls = `calendar-item ${active && 'calendar-item__active'}`
          return (
            <div className={cls} key={index}>
              {day}
            </div>
          )
        })}
      </div>
    )
  }
}