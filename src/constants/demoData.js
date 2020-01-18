
const DEMO = {
  link: '#', // javascript:;
  home: '#',//#/app/dashboard
  home2: '#',///app/dashboard
  productLink: 'https://www.linkedin.com/in/amine-addajou/',
  user: 'Lisa',
  login: '#/user/login',
  signUp: '#/user/sign-up',
  forgotPassword: '#/user/forgot-password',
}

// header links
DEMO.headerLink = {
  profile: '#/app/page/about',
  about: '#/app/page/about',
  help: '#/app/page/contact',
  signOut: '#/user/login' // redirect login page
}


DEMO.list = {
  notifications: [
    {
      icon: 'mail',
      iconColor: 'bg-info text-body-reverse',
      title: '5 new newsletters',
      datetime: '1 hour ago'
    }, {
      icon: 'star-o',
      iconColor: 'bg-warning text-body-reverse',
      title: 'New collection saved',
      datetime: '5 hour ago'      
    }, {
      icon: 'plus',
      iconColor: 'bg-success text-body-reverse',
      title: 'Task added successfully',
      datetime: 'Yesterday'      
    }, {
      icon: 'delete',
      iconColor: 'bg-danger text-body-reverse',
      title: 'Member Jason removed',
      datetime: 'A week ago'      
    }
  ],
  messages: [
    {
      avatar: 'assets/images-demo/avatars/1.jpg',
      title: 'New mail from Jason',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      datetime: '5 minutes ago'
    }, {
      avatar: 'assets/images-demo/avatars/2.jpg',
      title: '2 messages from Bella',
      desc: 'Tempor incididunt ut labore et dolore magna aliqua',
      datetime: '15 minutes ago'
    }, {
      avatar: 'assets/images-demo/avatars/4.jpg',
      title: 'New member Emily joined',
      desc: 'Ut enim ad minim veniam quis nostrud exercitation',
      datetime: '1 hour ago'
    }
  ],
  tasks: [
    {
      tag: 'WIP',
      tagColor: 'cyan',
      title: 'Publish version 4.0',
      desc: 'Ullamco laboris nisi ut aliquip ex ea commodo'
    }, {
      tag: 'Stopped',
      tagColor: 'red',
      title: 'New material design',
      desc: 'Duis aute irure dolor in reprehenderit in'      
    }, {
      tag: 'Waiting',
      tagColor: '',
      title: 'Better documentation',
      desc: 'Cillum dolore eu fugiat nulla pariatur'      
    }, {
      tag: 'A week past',
      tagColor: 'green',
      title: 'Start public beta test',
      desc: 'Sunt in culpa qui officia deserunt mollit'      
    }
  ]
}

// used on Blog Cards, 
DEMO.articles = [
  {
    img: 'assets/images-demo/assets/600_400-1.jpg',
    date: 'May 1st',
    title: 'Be Yourself',
    content: 'Be yourself; everyone else is already taken.',
    tag: 'Quotes',
    author: 'Oscar Wilde'
  }, {
    img: 'assets/images-demo/assets/600_400-2.jpg',
    date: 'May 1st',
    title: "When You're in Love",
    content: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    tag: 'Quotes',
    author: 'Dr. Seuss'
  }, {
    img: 'assets/images-demo/assets/600_400-3.jpg',
    date: 'May 1st',
    title: 'Once is Enough',
    content: 'You only live once, but if you do it right, once is enough.',
    tag: 'Quotes',
    author: 'Mae West'
  }, {
    img: 'assets/images-demo/assets/600_400-4.jpg',
    date: 'May 1st',
    title: 'Be the Change You Wish to See',
    content: 'Be the change that you wish to see in the world.',
    tag: 'Quotes',
    author: 'Mahatma Gandhi'
  }, {
    img: 'assets/images-demo/assets/600_400-5.jpg',
    date: 'May 1st',
    tag: 'Quotes',
    title: 'Music Matters',
    content: 'Without music, life would be a mistake',
    author: 'Friedrich Nietzsche'
  }, {
    img: 'assets/images-demo/assets/600_400-6.jpg',
    date: 'May 1st',
    title: 'To know a Man',
    content: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    tag: 'Quotes',
    author: 'J.K. Rowling'
  }
];

// used on Profile Cards, 
DEMO.profiles = [
  {
    avatar: 'assets/images-demo/avatars/1.jpg',
    name: 'Jason Bourne',
    title: 'Engineer',
    desc: "I must confess I'm American (I know… nobody's perfect)"
  }, {
    avatar: 'assets/images-demo/avatars/2.jpg',
    name: 'Bella Swan',
    title: 'Product Manager',
    desc: 'Love hiking, sailing,  music, dancing, sports.'
  }, {
    avatar: 'assets/images-demo/avatars/3.jpg',
    name: 'Min Chan',
    title: 'Web Developer',
    desc: 'I would walk through fire for a good coffee grinder.'
  }, {
    avatar: 'assets/images-demo/avatars/4.jpg',
    name: 'Emily Smith',
    title: 'Graphic Designer',
    desc: 'Travel, music, dancing, sports, books, last minute plans, open mind, photography, museum, craziness'
  }, {
    avatar: 'assets/images-demo/avatars/5.jpg',
    name: 'Luna Doe',
    title: 'UX Designer',
    desc: 'Enjoy being active, healthy and staying fit.'
  }
]

// Used on Portfolio, 
DEMO.projects = [
  {
    img: `assets/images-demo/assets/600_400-1.jpg`,
    tag: 'PSD',
    name: 'Lorem ipsum dolor'
  }, {
    img: `assets/images-demo/assets/600_400-2.jpg`,
    tag: 'WordPress',
    name: 'Sit amet consectetur'
  }, {
    img: `assets/images-demo/assets/600_400-3.jpg`,
    tag: 'PSD',
    name: 'Adipisicing elit'
  }, {
    img: `assets/images-demo/assets/600_400-4.jpg`,
    tag: 'eCommerce',
    name: 'Sed do eiusmod'
  }, {
    img: `assets/images-demo/assets/600_400-5.jpg`,
    tag: 'Landing',
    name: 'Tempor incididunt ut'
  }, {
    img: `assets/images-demo/assets/600_400-6.jpg`,
    tag: 'WordPress',
    name: 'Labore et dolore'
  }
];

// used on Product Cards
DEMO.products = [
  {
    name: 'Quiz Application',
    img: 'assets/images-demo/products/Quiz.png',
    sash: 'sash-primary',
    sash_icon: 'star',
    sash_text: 'Featured',Domaine: 'Education'
  }, {
    name: 'IOS Todo list',
    img: 'assets/images-demo/products/Todo.png',
    sash: 'sash-info sash-icon-bold',
    sash_icon: 'star',
    sash_text: 'Featured',Domaine: 'Gestion'
  }, {
    name: 'Recette App',
    img: 'assets/images-demo/products/Cuisine.png',
    sash: 'sash-danger',
    sash_icon: 'star',
    sash_text: 'Featured' ,Domaine: 'Cuisine'
  }, {
    name: 'List Contact',
    img: 'assets/images-demo/products/conatct.jpg',
    sash: '',
    sash_icon: 'star',
    sash_text: 'Featured',Domaine: 'Gestion'
  }, {
    name: 'Cour Partage',
    img: 'assets/images-demo/products/Cour.png',
    sash: '',
    sash_icon: 'star',
    sash_text: 'Featured',Domaine: 'Education'
  }, {
    name: 'Sport-Actu',
    img: 'assets/images-demo/products/watch-edition-blue.png',
    sash: '',
    sash_icon: 'star',
    sash_text: 'Featured',Domaine: 'Sportif'
  }, {
    name: 'Navigateur',
    img: 'assets/images-demo/products/Navigateur.png',
    sash: '',
    sash_icon: 'star',
    sash_text: 'Featured',Domaine: 'Informatique'
  }
];
DEMO.products2 = [
  {
    name: 'Casky',
    img: 'assets/images-demo/products/Casky.png',
    sash: 'sash-primary',
    sash_icon: 'star',
    sash_text: 'Featured',
    Profile:"Stagiare",
    Description:["NoSQL ,TSDB ( influx , couchebase)"," React js"," Internet of Things" ,"Analyse d'habitude"] 
  }, {
    name: 'WordSkills 2019',
    img: 'assets/images-demo/products/Wordskills.png',
    sash: 'sash-info sash-icon-bold',
    sash_icon: 'star',
    sash_text: 'Featured', Profile:"Entrainnement",
    Description:["C# Desktop App ","L'analyse , schéma des données","Mobile Projets"] 
  }, {
    name: 'Ministère de l\'Enseignement Supérieur',
    img: 'assets/images-demo/products/Gestion.png',
    sash: 'sash-info sash-icon-bold',
    sash_icon: 'star',
    sash_text: 'Featured', Profile:"Stagiare",
    Description:["Application de Gestion des tâches C#"] 
  }
];


DEMO.iconCards = [
  {
    icon: 'laptop',
    title: 'Responsive Design',
    content: 'Responsive design allows your website to fit on any screen and still be readable and usable.',
    color: 'primary'
  }, {
    icon: 'setting',
    title: 'Easy to Customize',
    content: 'Customizer make it easy. Build your own style simply by changing a few settings in the customizer',
    color: 'dark'
  }, {
    icon: 'code-o',
    title: 'Clean code',
    content: 'Clean code with popular Style Guide recommend by official team',
    color: 'secondary'
  }
];


export default DEMO;