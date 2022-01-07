import { USERS } from "./user";

export const POST = [
    {
        username: USERS[0].user,
        profile: USERS[0].image,
        imageURL: 'https://randomuser.me/api/portraits/lego/4.jpg',
        likes: "203",
        caption: "LEGO to logoooo",
        comments: [
            {
                user: "Vijay",
                comment: "What do u doo kumarrr!"
            },
         
        ],
    }, 
    {
        username: USERS[1].user,
        profile: USERS[1].image,
        imageURL: 'https://randomuser.me/api/portraits/lego/6.jpg',
        likes: "443",
        caption: "LEGO to logoooo",
        comments: [
            {
                user: "Vijay",
                comment: "What do u doo kumarrr!"
            },
            {
                user: "Vijay",
                comment: "What do u doo kumarrr!"
            }
        ],
  },   
];