import './Counter.css'

export default function Counter({ title, number, eventColor }) {
  return (
    <div className="counter">
      <p className="counter-number" style={{ backgroundColor: eventColor }}>
        {number}
      </p>
      <h3 className="counter-text" style={{ Color: eventColor }}>
        {title}
      </h3>
    </div>
  )
}
