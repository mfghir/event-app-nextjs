import EventList from "@/components/events/EventList";
import { getFeaturedEvents } from "@/data";

export default function Home() {
  const featureEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featureEvents} />
    </div>
  );
}
