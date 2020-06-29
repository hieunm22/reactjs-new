import React from 'react';
import MonthView from './MonthView'
import './LunarCalendar.css'
import MonthHeader from './MonthHeader';
import DayOfWeekHeader from './DayOfWeekHeader';

export default class LunarCalendar extends React.Component {
  constructor(props) {
    super(props)
    const today = new Date()
    this.state = {
      mm: today.getMonth() + 1,
      yyyy: today.getFullYear()
    }
  }

  today = { dd: new Date().getDate(), mm: new Date().getMonth() + 1, yyyy: new Date().getFullYear()}

  monthAction = id => e => {
    switch (id) {
      case 1:
        this.setState({ yyyy: this.state.yyyy - 1 })
        break;
      case 2:
        this.state.mm === 1
          ? this.setState({ mm: 12, yyyy: this.state.yyyy - 1 })
          : this.setState({ mm: this.state.mm - 1 })
        break;
      case 3:
        this.state.mm === 12
          ? this.setState({ mm: 1, yyyy: this.state.yyyy + 1 })
          : this.setState({ mm: this.state.mm + 1 })
        break;
      case 4:
        this.setState({ yyyy: this.state.yyyy + 1 })
        break;
      default:
        break;
    }
  }

  render() {
    // this.props.onSetDate(new Date())
    return (
      <div className="month-view">
        <MonthHeader
          monthAction={this.monthAction}
          currentMonth={this.state}
        />
        <DayOfWeekHeader />
        <div className="month-content flex">
          <MonthView
            state={this.state}
            today={this.today}
            onSetDate={this.props.onSetDate}
          />
        </div>
      </div>
    )
  }
}