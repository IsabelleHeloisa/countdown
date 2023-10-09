import React, { useContext } from 'react'
import Title from '../components/Title'
import Counter from '../components/Counter'
import useCountdown from '../hooks/useCountdown'

import { CountdownContext } from '../context/CountdownContext'
import { Navigate } from 'react-router-dom'

export default function Countdown() {
  const { event } = useContext(CountdownContext)

  if (!event) return <Navigate to="/" />

  const eventTitle = event.title

  const eventColor = event.color

  const [day, hour, minute, second] = useCountdown(event.date)
  return (
    <>
      <Title title={eventTitle} eventColor={eventColor} />
      <div className="countdown-container">
        <Counter title="Dias" number={day} eventColor={eventColor} />
        <Counter title="Horas" number={hour} eventColor={eventColor} />
        <Counter title="minutos" number={minute} eventColor={eventColor} />
        <Counter title="segundos" number={second} eventColor={eventColor} />
      </div>
    </>
  )
}
