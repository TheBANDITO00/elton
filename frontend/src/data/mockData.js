import { MapPin, Shield, PartyPopper, Camera } from 'lucide-react';

export const mockData = {
  navigation: [
    { id: 'home', label: 'Hem', path: '/' },
    { id: 'plats', label: 'Plats', path: '/plats' },
    { id: 'regler', label: 'Regler', path: '/regler' },
    { id: 'om-eventet', label: 'Om Eventet', path: '/om-eventet' },
    { id: 'bilder', label: 'Bilder', path: '/bilder' }
  ],
  
  celebrants: [
    'ELTON RÖNNGREN',
    'JULIUS ENGVALL', 
    'LENNON ROGALIN'
  ],
  
  // Club/Party Background Images
  backgroundImages: [
    'https://images.pexels.com/photos/3358313/pexels-photo-3358313.jpeg',
    'https://images.pexels.com/photos/1555900/pexels-photo-1555900.jpeg',
    'https://images.unsplash.com/photo-1608433348878-e43dea08b910',
    'https://images.pexels.com/photos/801863/pexels-photo-801863.jpeg',
    'https://images.pexels.com/photos/19551009/pexels-photo-19551009.jpeg'
  ],
  
  heroImages: [
    'https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg',
    'https://images.pexels.com/photos/801863/pexels-photo-801863.jpeg',
    'https://images.pexels.com/photos/19551009/pexels-photo-19551009.jpeg'
  ],
  
  previewCards: [
    {
      title: 'PLATS',
      description: 'Hitta vägen till EPICENTER',
      icon: <MapPin size={48} />,
      link: '/plats'
    },
    {
      title: 'REGLER',
      description: 'Spelregler för natten',
      icon: <Shield size={48} />,
      link: '/regler'
    },
    {
      title: 'EVENTET',
      description: 'Allt om festen',
      icon: <PartyPopper size={48} />,
      link: '/om-eventet'
    },
    {
      title: 'BILDER',
      description: 'Våra tre kungar',
      icon: <Camera size={48} />,
      link: '/bilder'
    }
  ],
  
  rules: [
    {
      title: 'INGEN ALKOHOL UTIFRÅN',
      description: 'Vi har allt du behöver i baren! 🍻',
      emoji: '🚫🍷',
      color: 'from-neon-pink to-neon-purple'
    },
    {
      title: 'BARA BJUDNA GÄSTER',
      description: 'Gästlistan är helig - respektera den! 📝',
      emoji: '👥',
      color: 'from-neon-cyan to-neon-green'
    },
    {
      title: 'NOLLTOLERANS MOT DROGER',
      description: 'Instant utslängning - no exceptions! ❌',
      emoji: '🚫💊',
      color: 'from-neon-yellow to-neon-pink'
    },
    {
      title: 'INGA BRÅK',
      description: 'Good vibes only - vakter finns överallt! ✨',
      emoji: '☮️',
      color: 'from-neon-green to-neon-cyan'
    },
    {
      title: 'RESPEKTERA LOKALEN',
      description: 'Så vi får komma tillbaka nästa år! 🏠',
      emoji: '🏘️',
      color: 'from-neon-purple to-neon-yellow'
    },
    {
      title: 'HA KUL!!!',
      description: 'Det viktigaste av allt - PARTY HARD! 🎉',
      emoji: '🎊',
      color: 'from-neon-pink to-neon-cyan'
    }
  ],
  
  placeholderImages: [
    {
      title: 'ELTON',
      description: 'The First King 👑',
      placeholder: 'E'
    },
    {
      title: 'JULIUS',
      description: 'Franska Skolan Legend 🎓',
      placeholder: 'J'
    },
    {
      title: 'LENNON',
      description: 'The Party Machine 🎵',
      placeholder: 'L'
    },
    {
      title: 'TRIO POWER',
      description: 'Together We Rule 🔥',
      placeholder: 'EJL'
    },
    {
      title: 'PARTY PREVIEW',
      description: 'What to Expect 🎊',
      placeholder: '🎉'
    },
    {
      title: 'THE VENUE',
      description: 'Our Kingdom 🏰',
      placeholder: '🏠'
    }
  ]
};