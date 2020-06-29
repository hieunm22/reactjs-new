import React from 'react'

const ColorPicker = ({ onPick, selectedColor }) => (
  <div className="color-picker">
    {Array.from({ length: 6 }).map((_, idx) => (
      <button
        key={idx}
        className={`color-picker--color bg-${idx} ${idx === selectedColor && 'color_checked'}`}
      >
      </button>
    ))}
  </div>
)

export default ColorPicker