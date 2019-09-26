import User from '../models/user';
import Team from '../models/team';
import '../config';

const createUser= async ({userName, email, password}) =>{
  const user = new User({
    userName,
    email,
    password,
  });
  const res = await user.save();
  }
  
  const seedUser = [{
    userName: "Onyinye",
    email: "onyinye@gmail.com",
    password: "dfafdtt3"
  },
  {
    userName: "Julius",
    email: "julius@gmail.com",
    password: "gjhgtghhg"
  },
  {
    userName: "emeka",
    email: "emeka@gmail.com",
    password: "gjhgtghhg"
  },
  {
    userName: "Bola",
    email: "bola@gmail.com",
    password: "gjhgtghhg"
  },
  {
    userName: "Yemi",
    email: "yemi@gmail.com",
    password: "gjhgtghhg"
  }];
  
  
  seedUser.forEach(newUser => createUser(newUser));

  const createTeam= async ({name}) =>{
    const team = new Team({ name });
    const res = await team.save();
    }
    
    const seedTeam = [{
      name: "Chelsea",
    },
    {
      name: "Man u",
    },
    {
      name: "Man city",
    },
    {
      name: "Liverpool",
    },
    {
      name: "Arsenal",
    },
    {
      name: "Barcelona",
    }
    ];
    
    
    seedTeam.forEach(newTeam => createTeam(newTeam));
