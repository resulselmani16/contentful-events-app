export const GET_SINGLE_EVENT = `
query GetEventBySlug($slug: String) {
  eventCollection(where: {slug: $slug}, limit: 1) {
    items {
      sys {
        id
      }
      title
      description{
        json
      }
      startDate
      endDate
			location
      eventType
      coverImage{
        title
        url
      }
      organizer{
        organizerId
        name
        email
      }
      tags
    }
    
  }
}
`;
