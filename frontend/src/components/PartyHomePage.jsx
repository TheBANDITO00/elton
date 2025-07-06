import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { MapPin, Calendar, Users, Music, PartyPopper, Star } from 'lucide-react';
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

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                18-ÅRSFEST
              </span>
            </div>
            <div className="hidden md:flex space-x-6">
              {mockData.navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-bounce"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className={`relative z-10 text-center px-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-8">
            <h1 className="text-7xl md:text-9xl font-black text-white mb-4 leading-tight">
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-pulse">
                18
              </span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              TRE KUNGAR FYLLER ÅR
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {mockData.celebrants.map((person, index) => (
                <Badge key={index} className="text-lg py-2 px-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white border-0 hover:scale-105 transition-transform duration-300">
                  {person}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            <p className="mb-4">🎊 En oförglömlig kväll väntar!</p>
            <p>Fira med oss när tre vänner tar steget in i vuxenlivet</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection('plats')}
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Se Plats
            </Button>
            <Button 
              onClick={() => scrollToSection('om-eventet')}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105"
            >
              <PartyPopper className="mr-2 h-5 w-5" />
              Om Festen
            </Button>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="plats" className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              <MapPin className="inline mr-4 text-pink-400" />
              Plats
            </h2>
            <p className="text-xl text-white/80">Här kommer festen att äga rum</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <CardContent className="p-8">
                <div className="aspect-video mb-6 bg-gray-700/50 rounded-lg flex items-center justify-center">
                  <div className="text-center text-white/70">
                    <MapPin className="mx-auto h-12 w-12 mb-4" />
                    <p className="text-lg font-semibold">(maps)</p>
                    <p className="text-sm">Google Maps kommer här</p>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-2">(plats)</h3>
                  <p className="text-white/80 text-lg">Exakt adress kommer snart!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section id="regler" className="py-20 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              <Star className="inline mr-4 text-yellow-400" />
              Regler & Regleringar
            </h2>
            <p className="text-xl text-white/80">Enkla regler för en fantastisk kväll</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2">
              {mockData.rules.map((rule, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{rule.title}</h3>
                        <p className="text-white/80">{rule.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Event Section */}
      <section id="om-eventet" className="py-20 bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              <PartyPopper className="inline mr-4 text-pink-400" />
              Om Eventet
            </h2>
            <p className="text-xl text-white/80">En kväll att minnas för evigt</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-6">Tre Kungar Fyller 18!</h3>
                  <div className="flex justify-center space-x-8 mb-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-2">
                        E
                      </div>
                      <p className="text-white font-semibold">Elton</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-2">
                        J
                      </div>
                      <p className="text-white font-semibold">Julius</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-2">
                        L
                      </div>
                      <p className="text-white font-semibold">Lennon</p>
                    </div>
                  </div>
                </div>
                
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-white/90 text-lg leading-relaxed mb-6">
                    Vi firar tre kungar som fyller 18: <strong>Elton, Julius och Lennon!</strong>
                  </p>
                  <p className="text-white/90 text-lg leading-relaxed mb-6">
                    Det blir en oförglömlig kväll i hyrd lokal med plats för <strong>120 personer</strong>, 
                    inga vuxna, öl och cider i baren, och vakter + bartenders på plats för att hålla ordning.
                  </p>
                  <p className="text-white/90 text-lg leading-relaxed mb-6">
                    Festen är för att fira en ny era i livet – det blir musik, dans, skratt och en sjukt rolig kväll.
                  </p>
                  <p className="text-center text-2xl font-bold text-transparent bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text">
                    Don't miss it! 🎉
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Images Section */}
      <section id="bilder" className="py-20 bg-gradient-to-r from-pink-900/50 to-purple-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">
              <Users className="inline mr-4 text-pink-400" />
              Bilder
            </h2>
            <p className="text-xl text-white/80">Sneak peek på våra kungar</p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {mockData.placeholderImages.map((image, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:from-pink-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                      <div className="text-center text-white/70">
                        <Users className="mx-auto h-12 w-12 mb-4" />
                        <p className="text-lg font-semibold">{image.title}</p>
                        <p className="text-sm mt-2">{image.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-md py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                18-ÅRSFEST
              </span>
            </h3>
            <p className="text-white/80">Elton, Julius & Lennon • Augusti 2025</p>
          </div>
          <div className="flex justify-center space-x-6 mb-8">
            <Calendar className="text-pink-400 h-6 w-6" />
            <Music className="text-purple-400 h-6 w-6" />
            <PartyPopper className="text-indigo-400 h-6 w-6" />
          </div>
          <p className="text-white/60">© 2025 18-Årsfest. En kväll att minnas för evigt.</p>
        </div>
      </footer>
    </div>
  );
};

export default PartyHomePage;