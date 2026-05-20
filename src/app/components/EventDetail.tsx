import Image from 'next/image';
import BookEvent from '@/app/components/BookEvent';
import EventCard from '@/app/components/EventCard';
import { IEvent } from '@/database/eventmodel';

const bookings = 10;

const EventDetailItem = ({ icon, alt, label }: { icon: string; alt: string; label: string }) => (
  <div className='flex flex-row gap-2 items-center'>
    <Image 
      src={icon} 
      alt={alt} 
      width={17} 
      height={17} 
    />
    <p>{label}</p>
  </div>
);

const EventAgenda = ({ agendaItems }: { agendaItems: string[] }) => (
  <div className='agenda'>
    <h2>Agenda</h2>
    <ul>
      {agendaItems.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  </div>
);

const EventTags = ({ tags }: { tags: string[] }) => (
  <div className='flex flex-row flex-wrap gap-2'>
    {tags.map((tag, i) => (
      <div key={i} className='pill'>{tag}</div>
    ))}
  </div>
);

// ✅ define proper type for props
interface EventDetailProps {
  event: IEvent;
  similarEvents: IEvent[];
  slug: string;
  eventId: string;
}

const EventDetail = ({ event, similarEvents, slug, eventId }: EventDetailProps) => {
  const { description, image, date, time, overview, location, mode, agenda, audience, tags, organizer } = event;

  return (
    <div id='event'>
      <div className="header">
        <h1>Event Description</h1>
        <p>{description}</p>
      </div>

      <div className="details">
        {/* Left side */}
        <div className='content'>
          <Image
            src={image}
            alt="event banner"
            width={800}
            height={800}
            className='banner'
          />

          <section className='flex flex-col gap-2'>
            <h2>Overview</h2>
            <p>{overview}</p>
          </section>

          <section className='flex flex-col gap-2'>
            <h2>Event Details</h2>
            <EventDetailItem icon='/icons/calendar.svg' alt='calendar' label={date} />
            <EventDetailItem icon='/icons/clock.svg' alt='clock' label={time} />
            <EventDetailItem icon='/icons/pin.svg' alt='pin' label={location} />
            <EventDetailItem icon='/icons/mode.svg' alt='mode' label={mode} />
            <EventDetailItem icon='/icons/audience.svg' alt='audience' label={audience} />
          </section>

          <EventAgenda agendaItems={agenda} />

          <section className='flex flex-col gap-2'>
            <h2>About the Organizer</h2>
            <p>{organizer}</p>
          </section>

          <EventTags tags={tags} />
        </div>

        {/* Right side */}
        <aside className='booking'>
          <div className='signup-card'>
            <h2>Book Your Spot</h2>
            {bookings > 0 ? (
              <p className='text-sm'>Join {bookings} people who have already booked their spot!</p>
            ) : (
              <p className='text-sm'>Be the first to book your spot!</p>
            )}
            <BookEvent eventId={eventId} slug={slug} />
          </div> 
        </aside>
      </div>

      <div className='flex w-full flex-col gap-4 pt-20'>
        <h2>Similar Events</h2>
        <div className='events'>
          {similarEvents.length > 0 && similarEvents.map((similarEvent: IEvent) => (
            <EventCard key={similarEvent.title} {...similarEvent} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventDetail;