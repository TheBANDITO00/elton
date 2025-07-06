import React, { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { MapPin, Navigation, Clock, Phone, Sparkles } from 'lucide-react';
import { mockData } from '../data/mockData';

const LocationPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${mockData.backgroundImages[1]})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/30 via-neon-purple/30 to-neon-pink/30"></div>
        
        {/* Animated Neon Orbs */}
        <div className="absolute top-32 left-20 w-72 h-72 bg-neon-cyan/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-pink/40 rounded-full blur-3xl animate-bounce"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-7xl md:text-8xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-neon-cyan via-neon-green to-neon-yellow bg-clip-text text-transparent animate-pulse">
                PLATS
              </span>
              <Sparkles className="inline-block ml-4 text-neon-yellow animate-spin" size={60} />
            </div>
            <p className="text-2xl md:text-3xl text-white font-bold mb-4">
              <span className="text-neon-pink">EPICENTER</span> för vår <span className="text-neon-cyan">LEGEND</span>-fest!
            </p>
          </div>

          {/* Map Card */}
          <div className="max-w-6xl mx-auto mb-12">
            <Card className="bg-black/60 backdrop-blur-xl border-2 border-neon-cyan/50 hover:border-neon-pink transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-cyan/30">
              <CardContent className="p-8">
                <div className="aspect-video mb-8 bg-gradient-to-br from-neon-purple/20 to-neon-cyan/20 rounded-xl flex items-center justify-center border-2 border-neon-yellow/30">
                  <div className="text-center text-white">
                    <MapPin className="mx-auto h-16 w-16 mb-4 text-neon-pink animate-bounce" />
                    <p className="text-2xl font-black mb-2 text-neon-cyan">(maps)</p>
                    <p className="text-lg text-white/80">Google Maps kommer här snart!</p>
                  </div>
                </div>
                
                <div className="text-center">
                  <h2 className="text-4xl font-black text-white mb-4">
                    <span className="bg-gradient-to-r from-neon-pink to-neon-cyan bg-clip-text text-transparent">
                      (plats)
                    </span>
                  </h2>
                  <p className="text-xl text-white/90 mb-6">Exakt adress kommer snart - håll utkik! 👀</p>
                  <div className="flex justify-center space-x-4">
                    <Button className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-cyan text-white font-black py-3 px-8 rounded-full transition-all duration-300 hover:scale-110 border-2 border-neon-yellow">
                      <Navigation className="mr-2 h-5 w-5" />
                      GET DIRECTIONS
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Info Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            <Card className="bg-black/60 backdrop-blur-xl border-2 border-neon-green/50 hover:border-neon-yellow transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-green/30">
              <CardContent className="p-8 text-center">
                <Clock className="mx-auto h-12 w-12 mb-4 text-neon-yellow animate-pulse" />
                <h3 className="text-2xl font-black text-white mb-3">
                  <span className="text-neon-green">TIMMAR</span>
                </h3>
                <p className="text-white/90 text-lg">Dörrar öppnar: <span className="text-neon-cyan font-bold">19:00</span></p>
                <p className="text-white/90 text-lg">Party till: <span className="text-neon-pink font-bold">SENT!</span></p>
              </CardContent>
            </Card>

            <Card className="bg-black/60 backdrop-blur-xl border-2 border-neon-pink/50 hover:border-neon-cyan transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-pink/30">
              <CardContent className="p-8 text-center">
                <MapPin className="mx-auto h-12 w-12 mb-4 text-neon-cyan animate-bounce" />
                <h3 className="text-2xl font-black text-white mb-3">
                  <span className="text-neon-pink">KAPACITET</span>
                </h3>
                <p className="text-white/90 text-lg">Plats för: <span className="text-neon-yellow font-bold">120 PERSONER</span></p>
                <p className="text-white/90 text-lg">Status: <span className="text-neon-green font-bold">EPIC VENUE!</span></p>
              </CardContent>
            </Card>

            <Card className="bg-black/60 backdrop-blur-xl border-2 border-neon-yellow/50 hover:border-neon-green transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-yellow/30">
              <CardContent className="p-8 text-center">
                <Phone className="mx-auto h-12 w-12 mb-4 text-neon-green animate-pulse" />
                <h3 className="text-2xl font-black text-white mb-3">
                  <span className="text-neon-yellow">KONTAKT</span>
                </h3>
                <p className="text-white/90 text-lg">Har du frågor?</p>
                <p className="text-white/90 text-lg">Kontakta: <span className="text-neon-pink font-bold">TBA</span></p>
              </CardContent>
            </Card>
          </div>

          {/* Special Features */}
          <div className="max-w-4xl mx-auto mt-16">
            <Card className="bg-black/60 backdrop-blur-xl border-2 border-neon-purple/50 hover:border-neon-pink transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-purple/30">
              <CardContent className="p-8">
                <h3 className="text-3xl font-black text-center text-white mb-8">
                  <span className="bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-yellow bg-clip-text text-transparent">
                    VENUE HIGHLIGHTS
                  </span>
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-neon-cyan mb-2">🎵 SOUND SYSTEM</h4>
                    <p className="text-white/90">Professionellt ljud och DJ-utrustning</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-neon-pink mb-2">🍺 FULL BAR</h4>
                    <p className="text-white/90">Öl, cider och bartenders på plats</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-neon-yellow mb-2">🛡️ VAKTER</h4>
                    <p className="text-white/90">Säkerhet och ordning garanterad</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-neon-green mb-2">🕺 DANSGOLV</h4>
                    <p className="text-white/90">Stor yta för att släppa loss</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;