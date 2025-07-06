import React, { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Users, Crown, PartyPopper, Sparkles, Music, Calendar, Star } from 'lucide-react';
import { mockData } from '../data/mockData';

const AboutPage = () => {
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
          style={{ backgroundImage: `url(${mockData.backgroundImages[3]})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/30 via-neon-pink/30 to-neon-cyan/30"></div>
        
        {/* Animated Neon Orbs */}
        <div className="absolute top-40 left-32 w-72 h-72 bg-neon-purple/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-32 w-80 h-80 bg-neon-cyan/40 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-pink/40 rounded-full blur-3xl animate-ping"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-6xl md:text-8xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan bg-clip-text text-transparent animate-pulse">
                EVENTET
              </span>
              <Sparkles className="inline-block ml-4 text-neon-yellow animate-spin" size={60} />
            </div>
            <p className="text-2xl md:text-3xl text-white font-bold mb-4">
              En <span className="text-neon-pink">LEGENDARY</span> natt att minnas för <span className="text-neon-cyan">EVIGT</span>!
            </p>
          </div>

          {/* The Three Kings */}
          <div className="max-w-6xl mx-auto mb-16">
            <Card className="bg-black/60 backdrop-blur-xl border-2 border-neon-pink/50 hover:border-neon-cyan transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-pink/30">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <Crown className="mx-auto h-16 w-16 mb-4 text-neon-yellow animate-bounce" />
                  <h2 className="text-4xl font-black text-white mb-6">
                    <span className="bg-gradient-to-r from-neon-yellow via-neon-pink to-neon-cyan bg-clip-text text-transparent">
                      TRE KUNGAR FYLLER 18!
                    </span>
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-neon-pink to-neon-purple rounded-full flex items-center justify-center text-white font-black text-3xl mb-4 mx-auto hover:scale-110 transition-transform duration-300">
                      E
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2">
                      <span className="text-neon-pink">ELTON</span>
                    </h3>
                    <p className="text-white/90">King #1 - The Legend</p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-neon-cyan to-neon-green rounded-full flex items-center justify-center text-white font-black text-3xl mb-4 mx-auto hover:scale-110 transition-transform duration-300">
                      J
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2">
                      <span className="text-neon-cyan">JULIUS</span>
                    </h3>
                    <p className="text-white/90">King #2 - Franska Skolan</p>
                  </div>
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-neon-yellow to-neon-pink rounded-full flex items-center justify-center text-white font-black text-3xl mb-4 mx-auto hover:scale-110 transition-transform duration-300">
                      L
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2">
                      <span className="text-neon-yellow">LENNON</span>
                    </h3>
                    <p className="text-white/90">King #3 - Franska Skolan</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Event Details */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-black/60 backdrop-blur-xl border-2 border-neon-purple/50 hover:border-neon-yellow transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-purple/30">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <PartyPopper className="mx-auto h-12 w-12 mb-4 text-neon-purple animate-pulse" />
                  <h3 className="text-3xl font-black text-white mb-6">
                    <span className="bg-gradient-to-r from-neon-purple via-neon-pink to-neon-cyan bg-clip-text text-transparent">
                      ABOUT THE EPIC NIGHT
                    </span>
                  </h3>
                </div>
                
                <div className="text-lg text-white/90 space-y-6 leading-relaxed">
                  <p>
                    Vi firar tre kungar som fyller 18: <span className="text-neon-pink font-bold">ELTON, JULIUS och LENNON!</span>
                  </p>
                  <p>
                    Det blir en <span className="text-neon-cyan font-bold">OFÖRGLÖMLIG KVÄLL</span> i hyrd lokal med plats för 
                    <span className="text-neon-yellow font-bold"> 120 personer</span>, inga vuxna, öl och cider i baren, 
                    och vakter + bartenders på plats för att hålla ordning.
                  </p>
                  <p>
                    Festen är för att fira en <span className="text-neon-green font-bold">NY ERA I LIVET</span> – det blir musik, 
                    dans, skratt och en <span className="text-neon-pink font-bold">SJUKT ROLIG KVÄLL</span>.
                  </p>
                  <div className="text-center text-3xl font-black mt-8">
                    <span className="bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-yellow bg-clip-text text-transparent">
                      DON'T MISS IT! 🎉
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Event Features */}
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-black/60 backdrop-blur-xl border-2 border-neon-cyan/50 hover:border-neon-pink transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-cyan/30">
                <CardContent className="p-6 text-center">
                  <Users className="mx-auto h-12 w-12 mb-4 text-neon-cyan animate-pulse" />
                  <h4 className="text-xl font-black text-white mb-2">
                    <span className="text-neon-cyan">120 GÄSTER</span>
                  </h4>
                  <p className="text-white/90">Exclusive guest list</p>
                </CardContent>
              </Card>

              <Card className="bg-black/60 backdrop-blur-xl border-2 border-neon-pink/50 hover:border-neon-yellow transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-pink/30">
                <CardContent className="p-6 text-center">
                  <Music className="mx-auto h-12 w-12 mb-4 text-neon-pink animate-bounce" />
                  <h4 className="text-xl font-black text-white mb-2">
                    <span className="text-neon-pink">EPIC MUSIC</span>
                  </h4>
                  <p className="text-white/90">DJ + Sound system</p>
                </CardContent>
              </Card>

              <Card className="bg-black/60 backdrop-blur-xl border-2 border-neon-yellow/50 hover:border-neon-green transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-yellow/30">
                <CardContent className="p-6 text-center">
                  <Calendar className="mx-auto h-12 w-12 mb-4 text-neon-yellow animate-pulse" />
                  <h4 className="text-xl font-black text-white mb-2">
                    <span className="text-neon-yellow">AUGUSTI 2025</span>
                  </h4>
                  <p className="text-white/90">Save the date!</p>
                </CardContent>
              </Card>

              <Card className="bg-black/60 backdrop-blur-xl border-2 border-neon-green/50 hover:border-neon-cyan transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-green/30">
                <CardContent className="p-6 text-center">
                  <Star className="mx-auto h-12 w-12 mb-4 text-neon-green animate-bounce" />
                  <h4 className="text-xl font-black text-white mb-2">
                    <span className="text-neon-green">NO ADULTS</span>
                  </h4>
                  <p className="text-white/90">Young people only!</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Final Call to Action */}
          <div className="max-w-4xl mx-auto mt-16">
            <Card className="bg-black/60 backdrop-blur-xl border-2 border-neon-pink/50 hover:border-neon-cyan transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-pink/30">
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6">🎊👑🎉</div>
                <h3 className="text-3xl font-black text-white mb-4">
                  <span className="bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-yellow bg-clip-text text-transparent">
                    GET READY FOR THE NIGHT OF YOUR LIFE!
                  </span>
                </h3>
                <p className="text-xl text-white/90 mb-6">
                  Tre vänner, en natt, minnen för evigt!
                </p>
                <div className="flex justify-center space-x-4">
                  <div className="text-neon-pink text-2xl animate-pulse">🔥</div>
                  <div className="text-neon-cyan text-2xl animate-bounce">⚡</div>
                  <div className="text-neon-yellow text-2xl animate-pulse">✨</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;