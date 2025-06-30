export const EVENTS_QUERY = `
query getEvents{
  eventCollection {
    items {
      title
      slug
      startDate
      endDate
      coverImage {
        url
        title
      }
      organizer {
        name
        email
      }
    }
  }
}`;
