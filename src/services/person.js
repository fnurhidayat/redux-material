export default {
  /* Pura puranya request ke API */
  all: () => Promise.resolve([
    {
      id: 1,
      name: 'Ryan Gosling',
      address: 'Los Feliz, California, U.S',
      phoneNumber: '+1-123-123',
      photo: 'https://cdn.famousoutfits.com/wp-content/uploads/2014/08/profile-ryan-gosling.png'
    },
    {
      id: 2,
      name: 'Robert Pattinson',
      address: 'Orlando, Florida, U.S',
      phoneNumber: '+1-123-193',
      photo: 'https://m.media-amazon.com/images/M/MV5BNzk0MDQ5OTUxMV5BMl5BanBnXkFtZTcwMDM5ODk5Mg@@._V1_.jpg'
    },
    {
      id: 3,
      name: 'Christian Bale',
      address: 'Toronto, Canada',
      phoneNumber: '+1-123-163',
      photo: 'https://m.media-amazon.com/images/M/MV5BMTkxMzk4MjQ4MF5BMl5BanBnXkFtZTcwMzExODQxOA@@._V1_SY1000_CR0,0,665,1000_AL_.jpg'
    },
    {
      id: 4,
      name: 'Daniel Rosenfeld',
      address: 'Karl-Marx-Stadt, East Germany',
      phoneNumber: '+1-123-143',
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Daniel_Rosenfeld.jpg/800px-Daniel_Rosenfeld.jpg'
    }
  ]),
}
