import EventItem from "./EventItem";

const EventList = (props) => {
  const { items } = props;

  return (
    <ul>
      {items.map((item) => (
        <EventItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default EventList;
