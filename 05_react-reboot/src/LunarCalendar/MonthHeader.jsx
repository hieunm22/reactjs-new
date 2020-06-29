import React from 'react';

const MonthHeader = props => {
  return (
    <div className="month-header flex">
      <button className="month-action" onClick={props.monthAction(1)} title="Năm trước">
        <i className="fa fa-fast-backward"></i>
      </button>
      <button className="month-action" onClick={props.monthAction(2)} title="Tháng trước">
        <i className="fa fa-step-backward"></i>
      </button>
      <div className="month-year-title">
        <div className="month-name">
          Tháng {props.currentMonth.mm}
          <button className="dropdown-icon">
            <i className="fa fa-caret-square-o-down"></i>
          </button>
        </div>
        <div className="year-name">
          Năm {props.currentMonth.yyyy}
        </div>
      </div>
      <button className="month-action" onClick={props.monthAction(3)} title="Tháng sau">
        <i className="fa fa-step-forward"></i>
      </button>
      <button className="month-action" onClick={props.monthAction(4)} title="Năm sau">
        <i className="fa fa-fast-forward"></i>
      </button>
    </div>
  )
}

export default MonthHeader