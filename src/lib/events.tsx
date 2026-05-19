export type event = {
  image: string;
  title: string;
  slug: string;
  location: string;
  time: string;
  date: string; // keep ISO format
};

 const events: event[] = [
  {
    image: "/images/event1.png",
    title: "Tech Meetup 2026",
    slug: "tech-meetup-2026",
    location: "Multan, Pakistan",
    time: "10:00 PM",
    date: "2026-04-21",
  },
  {
    image: "/images/event2.png",
    title: "Startup Networking Night",
    slug: "startup-networking-night",
    location: "Pattoki, Pakistan",
    time: "08:00 PM",
    date: "2026-04-22",
  },
  {
    image: "/images/event3.png",
    title: "Design Workshop",
    slug: "design-workshop",
    location: "Lahore, Pakistan",
    time: "05:00 PM",
    date: "2026-04-23",
  },
   {
    image: "/images/event4.png",
    title: "AI & Future Tech Talk",
    slug: "ai-future-tech-talk",
    location: "Kirachi, Pakistan",
    time: "07:30 PM",
    date: "2026-04-24",
  },
  {
    image: "/images/event5.png",
    title: "Freelancers Meetup",
    slug: "freelancers-meetup",
    location: "Islamabad, Pakistan",
    time: "06:00 PM",
    date: "2026-04-25",
  },
  {
    image: "/images/event6.png",
    title: "Web Development Bootcamp",
    slug: "web-dev-bootcamp",
    location: "Multan, Pakistan",
    time: "04:00 PM",
    date: "2026-04-26",
  },
];

export default events
