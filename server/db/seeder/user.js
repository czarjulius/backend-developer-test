import User from '../models/user';

const createUser= ({userName, email, password}) =>{
  const user = new User({
    userName,
    email,
    password,
  });
  user.save();
  }
  
  const seed = [{
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
  }];
  
  
  seed.forEach(nu => createUser(nu));
  // let user;
  // function seedUsers(req, res) {
  //   // create some events
  //   const seed = [{
  //         userName: "Onyinye",
  //         email: "onyinye@gmail.com",
  //         password: "dfafdtt3"
  //       },
  //       {
  //         userName: "Julius",
  //         email: "julius@gmail.com",
  //         password: "gjhgtghhg"
  //       },
  //       {
  //         userName: "emeka",
  //         email: "emeka@gmail.com",
  //         password: "gjhgtghhg"
  //       }];
  
  //   // use the Event model to insert/save
  //   for (user of seed) {
  //     var newUser = new User(user);
  //     newUser.save();
  //   }
  
  //   // seeded!
  //   console.log('Database seeded!');
  // }
  // seedUsers();
