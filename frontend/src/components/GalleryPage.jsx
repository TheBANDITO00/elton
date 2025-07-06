import React, { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Camera, Users, Sparkles, Star, Crown, PartyPopper } from 'lucide-react';
import { mockData } from '../data/mockData';

const GalleryPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${mockData.backgroundImages[4]})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-neon-green/30 via-neon-cyan/30 to-neon-purple/30"></div>
        
        {/* Animated Neon Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-neon-green/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-neon-purple/40 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-neon-cyan/40 rounded-full blur-3xl animate-ping"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-6xl md:text-8xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-neon-green via-neon-cyan to-neon-purple bg-clip-text text-transparent animate-pulse">
                BILDER
              </span>
              <Sparkles className="inline-block ml-4 text-neon-yellow animate-spin" size={60} />
            </div>
            <p className="text-2xl md:text-3xl text-white font-bold mb-4">
              Meet våra <span className="text-neon-pink">TRE KUNGAR</span> och få en <span className="text-neon-cyan">SNEAK PEEK</span>!
            </p>
            <div className="flex justify-center items-center space-x-4 mb-8">
              <Camera className="text-neon-green h-8 w-8 animate-pulse" />
              <p className="text-lg text-white/90">Riktiga bilder kommer snart!</p>
              <Camera className="text-neon-cyan h-8 w-8 animate-pulse" />
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {mockData.placeholderImages.map((image, index) => (
                <Card key={index} className="bg-black/60 backdrop-blur-xl border-2 border-neon-cyan/50 hover:border-neon-pink transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-cyan/30 group">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gradient-to-br from-neon-purple/20 via-neon-pink/20 to-neon-cyan/20 rounded-lg flex items-center justify-center group-hover:from-neon-pink/30 group-hover:to-neon-cyan/30 transition-all duration-300 border-b-4 border-neon-yellow/50">
                      <div className="text-center text-white">
                        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                          {typeof image.placeholder === 'string' && image.placeholder.length <= 3 ? (
                            <div className="w-20 h-20 bg-gradient-to-r from-neon-pink to-neon-cyan rounded-full flex items-center justify-center text-white font-black text-2xl mx-auto">
                              {image.placeholder}
                            </div>
                          ) : (
                            <div className="text-6xl">{image.placeholder}</div>
                          )}
                        </div>
                        <h3 className="text-xl font-black mb-2 text-neon-cyan group-hover:text-neon-pink transition-colors duration-300">
                          {image.title}
                        </h3>
                        <p className="text-white/80 group-hover:text-white transition-colors duration-300">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Coming Soon Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <Card className="bg-black/60 backdrop-blur-xl border-2 border-neon-pink/50 hover:border-neon-yellow transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-pink/30">
              <CardContent className="p-8 text-center">
                <Camera className="mx-auto h-16 w-16 mb-6 text-neon-pink animate-pulse" />
                <h3 className="text-3xl font-black text-white mb-6">
                  <span className="bg-gradient-to-r from-neon-pink via-neon-cyan to-neon-yellow bg-clip-text text-transparent">
                    COMING SOON!
                  </span>
                </h3>
                <div className="text-lg text-white/90 space-y-4">
                  <p>📸 <span className="text-neon-cyan font-bold">PROFESSIONELLA FOTON</span> på våra tre kungar</p>
                  <p>🎬 <span className="text-neon-pink font-bold">SNEAK PEEK VIDEOS</span> från förberelserna</p>
                  <p>🏠 <span className="text-neon-yellow font-bold">VENUE PHOTOS</span> från den episka lokalen</p>
                  <p>🎉 <span className="text-neon-green font-bold">BEHIND THE SCENES</span> från planeringen</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Photo Categories */}
          <div className="max-w-6xl mx-auto mt-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-black text-white mb-4">
                <span className="bg-gradient-to-r from-neon-yellow via-neon-pink to-neon-cyan bg-clip-text text-transparent">
                  WHAT TO EXPECT
                </span>
              </h3>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-black/60 backdrop-blur-xl border-2 border-neon-pink/50 hover:border-neon-cyan transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-pink/30">
                <CardContent className="p-6 text-center">
                  <Crown className="mx-auto h-12 w-12 mb-4 text-neon-yellow animate-bounce" />
                  <h4 className="text-lg font-black text-white mb-2">
                    <span className="text-neon-pink">KINGS</span>
                  </h4>
                  <p className="text-white/90">Individual shots av våra tre kungar</p>
                </CardContent>
              </Card>

              <Card className="bg-black/60 backdrop-blur-xl border-2 border-neon-cyan/50 hover:border-neon-pink transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-cyan/30">
                <CardContent className="p-6 text-center">
                  <Users className="mx-auto h-12 w-12 mb-4 text-neon-cyan animate-pulse" />
                  <h4 className="text-lg font-black text-white mb-2">
                    <span className="text-neon-cyan">TRIO</span>
                  </h4>
                  <p className="text-white/90">Group shots tillsammans</p>
                </CardContent>
              </Card>

              <Card className="bg-black/60 backdrop-blur-xl border-2 border-neon-yellow/50 hover:border-neon-green transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-yellow/30">
                <CardContent className="p-6 text-center">
                  <Star className="mx-auto h-12 w-12 mb-4 text-neon-yellow animate-bounce" />
                  <h4 className="text-lg font-black text-white mb-2">
                    <span className="text-neon-yellow">VENUE</span>
                  </h4>
                  <p className="text-white/90">Lokalen där magin händer</p>
                </CardContent>
              </Card>

              <Card className="bg-black/60 backdrop-blur-xl border-2 border-neon-green/50 hover:border-neon-purple transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-green/30">
                <CardContent className="p-6 text-center">
                  <PartyPopper className="mx-auto h-12 w-12 mb-4 text-neon-green animate-pulse" />
                  <h4 className="text-lg font-black text-white mb-2">
                    <span className="text-neon-green">PARTY</span>
                  </h4>
                  <p className="text-white/90">Fest-vibes och setup</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;