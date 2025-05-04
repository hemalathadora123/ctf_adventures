'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Link from 'next/link'

interface AchievementStats {
  totalChallenges: number;
  totalPoints: number;
  categoryStats: Array<{ _id: string; count: number; points: number }>;
  difficultyStats: Array<{ _id: string; count: number; points: number }>;
  platformStats: Array<{ _id: string; count: number; points: number }>;
}

export default function ProfilePage() {
  const [stats, setStats] = useState<AchievementStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/achievements');
        if (!response.ok) throw new Error('Failed to fetch stats');
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  // Social media links configuration
  // TO UPDATE: Replace the 'url' values below with your actual profile URLs
  const socialLinks = [
    {
      name: 'LinkedIn',
      // ↓↓↓ PASTE YOUR LINKEDIN PROFILE URL HERE (e.g., https://linkedin.com/in/your-actual-profile) ↓↓↓
      url: 'https://www.linkedin.com/in/sailaja-adireddi-056a9230b',
      // ↑↑↑ PASTE YOUR LINKEDIN PROFILE URL HERE ↑↑↑
      icon: (
        <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/AdireddiSa75619',
      icon: (
        <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    
    {
      name: 'Email',
      url: 'mailto:sailuadireddi@gmail.com',
      icon: (
        <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Navbar />
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Profile Header */}
          <div className="text-center">
            <div className="relative inline-block group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00FF94] to-[#00B8FF] rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <Image
                  src="/mine.jpg"
                  alt="Xpl01tE4gl3"
                  width={128}
                  height={128}
                  className="rounded-full border-2 border-gray-800 hover:border-cyan-500 transition-colors duration-300"
                  priority
                />
              </div>
            </div>
            <h1 className="mt-4 text-4xl font-bold gradient-text">Xpl01tE4gl3</h1>
            <p className="mt-2 text-gray-400">Cracking Codes. Capturing Flags. Flying High. – Xpl01tE4gl3</p>
          </div>

          {/* Stats */}
          {loading ? (
            <div className="text-center text-gray-400">Loading achievements...</div>
          ) : stats && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <dt className="text-sm font-medium text-gray-400">Total Challenges</dt>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <dd className="mt-2 text-3xl font-semibold gradient-text">{stats.totalChallenges}</dd>
              </div>
              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <dt className="text-sm font-medium text-gray-400">Total Points</dt>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <dd className="mt-2 text-3xl font-semibold gradient-text">{stats.totalPoints}</dd>
              </div>
              <div className="card p-6">
                <div className="flex items-center justify-between">
                  <dt className="text-sm font-medium text-gray-400">Platforms</dt>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <dd className="mt-2 text-3xl font-semibold gradient-text">{stats.platformStats.length}</dd>
              </div>
            </div>
          )}

          {/* Category Breakdown */}
          {stats && (
            <div className="card p-6">
              <h3 className="text-xl font-bold text-white mb-6">Category Breakdown</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {stats.categoryStats.map((cat) => (
                  <div key={cat._id} className="bg-gray-800/50 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">{cat._id}</span>
                      <span className="text-cyan-400">{cat.points} pts</span>
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Solved</span>
                        <span className="text-white">{cat.count}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Difficulty Breakdown */}
          {stats && (
            <div className="card p-6">
              <h3 className="text-xl font-bold text-white mb-6">Difficulty Breakdown</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {stats.difficultyStats.map((diff) => (
                  <div key={diff._id} className="bg-gray-800/50 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <span className={`text-sm font-medium ${
                        diff._id === 'Easy' ? 'text-green-400' :
                        diff._id === 'Medium' ? 'text-yellow-400' :
                        'text-red-400'
                      }`}>
                        {diff._id}
                      </span>
                      <span className="text-cyan-400">{diff.points} pts</span>
                    </div>
                    <div className="mt-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Solved</span>
                        <span className="text-white">{diff.count}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bio */}
          <div className="card p-6">
            <h3 className="text-xl font-bold text-white">About Me</h3>
            <div className="mt-4 text-gray-300">
              <p>
                A passionate CTF player and security enthusiast. I specialize in web exploitation,
                cryptography, and reverse engineering. Through this blog, I share my experiences
                and learnings from various CTF competitions.
              </p>
            </div>
          </div>

          {/* Skills & Expertise */}
          <div className="card p-6">
            <h3 className="text-xl font-bold text-white mb-6">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { name: 'Web Exploitation', color: 'blue' },
                { name: 'Cryptography', color: 'purple' },
                
              ].map((skill) => (
                <span
                  key={skill.name}
                  className={`tag bg-${skill.color}-500/20 text-${skill.color}-400`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
            
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-lg transition-all duration-300 group"
                >
                  {link.icon}
                  <span className="text-gray-300 group-hover:text-cyan-400 transition-colors">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 