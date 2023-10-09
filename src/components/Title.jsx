import './Title.css'

export default function Title({ title, eventColor }) {
  return (
    <h1 className="title" style={{ color: eventColor }}>
      {title}
    </h1>
  )
}
