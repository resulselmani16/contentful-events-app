export const GET_ORGANIZER_BIO = `
    query GetOrganizer($organizerId: String){
        personCollection(where: {organizerId: $organizerId}, limit: 1) {
            items {
            name
            email
            profileImage {
                url
                title
            }
            website
            organizerId
            bio {
                json
            }
            }
        }
    }
`;
