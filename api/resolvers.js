const defaultData = [
    {
        id: 1,
        name: 'Luke SkyWaler',
        gender: 'male',
        homeworld: 'Tattoine'
    },
    {
        id: 2,
        name: 'C-3PO',
        gender: 'bot',
        homeworld: 'Tattoine'
    }
];

export default {
    Query: {
        allPerson: () => {
            return defaultData
        },
        person: (root, { id }) => {
            return defaultData.filter(character => {
                // return character.id === id
                return true
            })[0]
        }
    }
}