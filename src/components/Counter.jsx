import './Counter.css'

export default function Counter({ title, number }) {
  return (
    <div className="counter">
      <p className="counter-number">{number}</p>
      <h3 className="counter-text">{title}</h3>
    </div>
  )
}
