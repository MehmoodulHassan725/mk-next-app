'use client'

import { createBooking } from "@/lib/actions/booking.actions"
// import posthog from "posthog-js"
import { usePostHog } from 'posthog-js/react'
import { useState } from "react"

const BookEvent = ({ eventId, slug }: { eventId: string, slug: string }) => {
 const [email, setEmail] = useState('')
 const [submitted, setSubmitted] = useState(false)
 const posthog = usePostHog()
 
 const handleSubmit = async (e: React.FormEvent)=>{
  e.preventDefault();

  const {success} = await createBooking({eventId, email, slug})
  
  if(success){
    setSubmitted(true)
    posthog.capture('event_booked', {eventId, slug, email})
  }else{
    console.error('Booking Creation Failed')
    posthog.captureException('Booking Creation Failed')
  }
  }

  return (
    <div id="book-event">
      {submitted ? (
        <p className="text-sm">Event booked successfully!</p>
      ):(
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" >Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
            />
          </div>
          <button type="submit" className="button-submit">Submit</button>
        </form>
      )
      } 
    </div>
  )
}

export default BookEvent