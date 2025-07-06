import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { MapPin, Calendar, Users, Music, PartyPopper, Star, Sparkles } from 'lucide-react';
import { mockData } from '../data/mockData';

const PartyHomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % mockData.heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background with Club Images */}
      <div className="absolute inset-0">
        {mockData.backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-2000 ${
              index === currentImageIndex ? 'opacity-30' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        {/* Neon Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-pink/20 via-neon-purple/20 to-neon-cyan/20"></div>
        
        {/* Animated Neon Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-neon-pink/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-neon-cyan/30 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-yellow/30 rounded-full blur-3xl animate-ping"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className={`relative z-10 text-center px-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-8">
            <div className="text-8xl md:text-9xl font-black text-white mb-6 leading-tight animate-pulse">
              <span className="bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-yellow bg-clip-text text-transparent">
                18
              </span>
              <Sparkles className="inline-block ml-4 text-neon-yellow animate-spin" size={80} />
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 animate-bounce">
              <span className="bg-gradient-to-r from-neon-green via-neon-pink to-neon-cyan bg-clip-text text-transparent">
                TRE KUNGAR
              </span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {mockData.celebrants.map((person, index) => (
                <Badge key={index} className="text-xl py-3 px-6 bg-gradient-to-r from-neon-pink via-neon-purple to-neon-cyan text-white border-2 border-neon-yellow hover:scale-110 transition-transform duration-300 animate-pulse">
                  {person}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="text-xl md:text-3xl text-white mb-10 max-w-3xl mx-auto">
            <p className="mb-6 font-bold">🎊 EPIC NIGHT LOADING... 🎊</p>
            <p className="text-neon-cyan font-semibold">Fira när tre legender blir vuxna!</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/plats">
              <Button className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-cyan text-white font-black py-6 px-10 rounded-full text-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-neon-pink/50 border-2 border-neon-yellow">
                <MapPin className="mr-3 h-6 w-6" />
                SE PLATS
              </Button>
            </Link>
            <Link to="/om-eventet">
              <Button className="bg-gradient-to-r from-neon-cyan to-neon-green hover:from-neon-green hover:to-neon-yellow text-black font-black py-6 px-10 rounded-full text-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-neon-cyan/50 border-2 border-neon-pink">
                <PartyPopper className="mr-3 h-6 w-6" />
                OM FESTEN
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Preview Cards */}
      <section className="relative py-20 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-neon-yellow via-neon-pink to-neon-cyan bg-clip-text text-transparent">
                SNEAK PEEK
              </span>
            </h2>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {mockData.previewCards.map((card, index) => (
              <Link key={index} to={card.link}>
                <Card className="bg-black/40 backdrop-blur-xl border-2 border-neon-pink/30 hover:border-neon-cyan hover:bg-black/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-pink/30 group">
                  <CardContent className="p-8 text-center">
                    <div className="mb-4 text-neon-cyan group-hover:text-neon-yellow transition-colors duration-300">
                      {card.icon}
                    </div>
                    <h3 className="text-2xl font-black text-white mb-3 group-hover:text-neon-pink transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-white/80 group-hover:text-white transition-colors duration-300">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-black/70 backdrop-blur-xl py-12 border-t border-neon-pink/20">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <h3 className="text-4xl font-black text-white mb-4">
              <span className="bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-yellow bg-clip-text text-transparent">
                18-FEST
              </span>
            </h3>
            <p className="text-white/80 text-lg">Elton, Julius & Lennon • Augusti 2025</p>
          </div>
          <div className="flex justify-center space-x-8 mb-8">
            <Calendar className="text-neon-pink h-8 w-8 animate-pulse" />
            <Music className="text-neon-cyan h-8 w-8 animate-bounce" />
            <PartyPopper className="text-neon-yellow h-8 w-8 animate-pulse" />
            <Star className="text-neon-green h-8 w-8 animate-bounce" />
          </div>
          <p className="text-white/60">© 2025 18-Fest. THE NIGHT OF LEGENDS.</p>
        </div>
      </footer>
    </div>
  );
};

export default PartyHomePage;