import { notFound } from 'next/navigation';
import { getSimilarEventBySlug } from '@/lib/actions/event.actions';
import EventDetail from '@/app/components/EventDetail';
import { cacheLife } from 'next/cache';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const EventDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  "use cache"
  cacheLife('hours')
  const { slug } = await params;

  const res = await fetch(`${BASE_URL}/api/events/${slug}`, {
    next: { revalidate: 3600 },  
  });

  if (!res.ok) return notFound();

  const { event } = await res.json();

  if (!event?.description) return notFound();

  const similarEvents = await getSimilarEventBySlug(slug);

  return (
    <EventDetail
      event={event} 
      similarEvents={similarEvents} 
      slug={slug} 
      eventId={event._id}
    />
  );
};

export default EventDetailsPage;