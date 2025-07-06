import React, { useEffect, useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Shield, AlertTriangle, CheckCircle, Sparkles } from 'lucide-react';
import { mockData } from '../data/mockData';

const RulesPage = () => {
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
          style={{ backgroundImage: `url(${mockData.backgroundImages[2]})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-neon-yellow/30 via-neon-pink/30 to-neon-purple/30"></div>
        
        {/* Animated Neon Orbs */}
        <div className="absolute top-20 right-20 w-80 h-80 bg-neon-yellow/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-neon-pink/40 rounded-full blur-3xl animate-bounce"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-6xl md:text-8xl font-black text-white mb-6">
              <span className="bg-gradient-to-r from-neon-yellow via-neon-pink to-neon-cyan bg-clip-text text-transparent animate-pulse">
                REGLER
              </span>
              <Sparkles className="inline-block ml-4 text-neon-yellow animate-spin" size={60} />
            </div>
            <p className="text-2xl md:text-3xl text-white font-bold mb-4">
              <span className="text-neon-pink">SPELREGLER</span> för vår <span className="text-neon-cyan">EPIC NIGHT</span>!
            </p>
            <div className="flex justify-center items-center space-x-4 mb-8">
              <Shield className="text-neon-yellow h-8 w-8 animate-pulse" />
              <p className="text-lg text-white/90">Följ reglerna = GARANTERAT KUL!</p>
              <Shield className="text-neon-cyan h-8 w-8 animate-pulse" />
            </div>
          </div>

          {/* Rules Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {mockData.rules.map((rule, index) => (
                <Card key={index} className="bg-black/60 backdrop-blur-xl border-2 border-neon-pink/50 hover:border-neon-cyan transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-pink/30 group">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${rule.color} rounded-full flex items-center justify-center text-white font-black text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        {index + 1}
                      </div>
                      <div className="text-4xl mb-4">{rule.emoji}</div>
                    </div>
                    <h3 className="text-xl font-black text-white mb-4 group-hover:text-neon-cyan transition-colors duration-300">
                      {rule.title}
                    </h3>
                    <p className="text-white/90 text-lg group-hover:text-white transition-colors duration-300">
                      {rule.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <Card className="bg-black/60 backdrop-blur-xl border-2 border-neon-green/50 hover:border-neon-yellow transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-green/30">
              <CardContent className="p-8 text-center">
                <CheckCircle className="mx-auto h-16 w-16 mb-6 text-neon-green animate-pulse" />
                <h3 className="text-3xl font-black text-white mb-6">
                  <span className="bg-gradient-to-r from-neon-green via-neon-cyan to-neon-yellow bg-clip-text text-transparent">
                    FÖLJ REGLERNA = EPIC NIGHT!
                  </span>
                </h3>
                <div className="text-lg text-white/90 space-y-3">
                  <p>✅ <span className="text-neon-cyan font-bold">RESPEKT</span> för varandra och lokalen</p>
                  <p>✅ <span className="text-neon-pink font-bold">SÄKERHET</span> för alla deltagare</p>
                  <p>✅ <span className="text-neon-yellow font-bold">MAXIMAL KUL</span> för alla!</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Warning Section */}
          <div className="max-w-4xl mx-auto mt-12">
            <Card className="bg-black/60 backdrop-blur-xl border-2 border-red-500/50 hover:border-red-400 transition-all duration-300">
              <CardContent className="p-8 text-center">
                <AlertTriangle className="mx-auto h-12 w-12 mb-4 text-red-400 animate-pulse" />
                <h3 className="text-xl font-black text-white mb-3">
                  <span className="text-red-400">VARNING!</span>
                </h3>
                <p className="text-white/90">
                  Bryt mot reglerna = <span className="text-red-400 font-bold">INSTANT UTSLÄNGNING</span>
                </p>
                <p className="text-white/70 mt-2">
                  Vakter och personal har 0% tolerans för regelbrott
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesPage;