import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/pages/Footer/Footer';
import styles from '../../../components/game/Gamepages/GameHome/zorun.module.css';

export default function ZorunPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    '/zorun-images/1.png',
    '/zorun-images/2.png',
    '/zorun-images/3.png',
    '/zorun-images/4.png',
    '/zorun-images/5.png',
    '/zorun-images/6.png',
    '/zorun-images/8.png',
    '/zorun-images/9.png',
    '/zorun-images/10.png',
  ];

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <>
      <Head>
        <title>Zorun - Smart Brain Creations</title>
      </Head>
      <Navbar />
      <div className={styles.zorunContainer}>
        
        {/* Hero Section with Image Carousel */}
        <section className={styles.heroSection}>
          <div className={styles.carouselWrapper}>
            <div className={styles.carouselImage}>
              <img 
                src={heroImages[currentImageIndex]} 
                alt="Zorun Game" 
                className={styles.heroImage}
              />
            </div>
            
            {/* Carousel Indicators */}
            <div className={styles.carouselIndicators}>
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.indicator} ${
                    index === currentImageIndex ? styles.active : ''
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              className={styles.prevArrow}
              onClick={() =>
                setCurrentImageIndex((prevIndex) =>
                  prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
                )
              }
              aria-label="Previous image"
            >
              ❮
            </button>
            <button
              className={styles.nextArrow}
              onClick={() =>
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
              }
              aria-label="Next image"
            >
              ❯
            </button>
          </div>
        </section>

        {/* Zorun Information */}
        <section className={styles.infoSection}>
          <div className={styles.infoContent}>
            <h1>Zorun - Game Information</h1>

            {/* Introduction */}
            <div className={styles.infoBlock}>
              <h2>The Story Behind Zorun</h2>
              <p>
                Zorun began with a simple idea at smartbraincreations to create a fun, fast-action game
                that feels exciting like classic arcade shooters but with a new emotional twist. Inspired
                by the classic Duck Hunt, we imagined: What if instead of hunting targets, players had
                to protect someone important?
              </p>
              <p>
                <strong>That&apos;s when the idea of the dancing cat was born.</strong>
              </p>
              <p>
                In Zorun, zombies suddenly appear and rush toward the cat. The player becomes the
                hero, tapping quickly to defeat them and save the cat. But we wanted more than just
                shooting—we added a smart challenge: when your ammo runs out, the game tests your
                memory by asking how many zombies you defeated. If you answer correctly, your gun
                reloads. If not, the silence of an empty gun makes the danger feel real—and the cat
                depends on your focus.
              </p>
            </div>

            {/* Inspiration */}
            <div className={styles.infoBlock}>
              <h2>Inspiration Behind Creating the Game</h2>
              <p>
                The idea for this game came from classic arcade shooting games like Duck Hunt, where
                timing and accuracy were the key to success. At SmartBrainCreations, we wanted to
                take that simple concept and make it more engaging and meaningful.
              </p>
              <p>
                Instead of just shooting targets, we added a purpose—protecting a dancing cat from
                zombies. This made the gameplay more emotional and fun. But we didn&apos;t stop there.
                We introduced a unique twist: when the ammo runs out, the game tests the player&apos;s
                memory and attention by asking how many zombies they defeated. This turns a
                simple action game into a mix of <strong>action + brain challenge</strong>.
              </p>
            </div>

            {/* Gameplay */}
            <div className={styles.infoBlock}>
              <h2>What Makes Zorun Different?</h2>
              <div className={styles.featuresList}>
                <div className={styles.feature}>
                  <h3>🎮 Gameplay Mechanics</h3>
                  <p>
                    Unlike traditional shooting games where players only shoot enemies, Zorun adds a
                    unique challenge: when ammo finishes, players must answer how many zombies they
                    defeated. Correct answers reload the gun, while wrong answers create risk and difficulty.
                  </p>
                </div>

                <div className={styles.feature}>
                  <h3>🐱 Story Concept</h3>
                  <p>
                    The player&apos;s goal is to protect a dancing cat from attacking zombies, which creates
                    a fun and emotional objective instead of just shooting targets.
                  </p>
                </div>

                <div className={styles.feature}>
                  <h3>🧠 Learning + Entertainment</h3>
                  <p>
                    The game combines action gameplay, memory testing, and focus improvement - making
                    it both fun and mentally engaging.
                  </p>
                </div>

                <div className={styles.feature}>
                  <h3>⚡ Simple but Addictive Design</h3>
                  <p>
                    Easy to learn, quick to play, and challenging to master - making it suitable for players
                    of all ages.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className={styles.infoBlock}>
              <h2>Vision of Our Team – SmartBrainCreations</h2>
              <p>
                Our vision at SmartBrainCreations is to create simple yet innovative games that
                combine fun gameplay with smart thinking challenges. We aim to design
                experiences that are easy for anyone to play but still engage the player&apos;s focus,
                memory, and creativity.
              </p>
              <ul>
                <li>To build unique and meaningful game ideas</li>
                <li>To mix entertainment with brain-engaging gameplay</li>
                <li>To create games that players remember and enjoy emotionally</li>
                <li>To keep improving and move toward creating bigger and more immersive game experiences in the future</li>
              </ul>
            </div>

            {/* Tech Stack */}
            <div className={styles.infoBlock}>
              <h2>Technology & Innovation</h2>
              <p>
                Zorun was developed using modern game development tools and interactive gameplay systems:
              </p>
              <ul>
                <li><strong>Unity Game Engine</strong> – For gameplay mechanics, animations, and UI systems</li>
                <li><strong>C# Programming Language</strong> – For core gameplay logic and interactions</li>
                <li><strong>Mobile Touch Input System</strong> – For responsive tap-based gameplay</li>
                <li><strong>Dynamic Ammo Slider System</strong> – Creating suspense and player engagement</li>
                <li><strong>Sound Feedback System</strong> – Adding realism with gunshot and empty-ammo sounds</li>
              </ul>
            </div>

            {/* Future */}
            <div className={styles.infoBlock}>
              <h2>Future Roadmap</h2>
              <p>
                We&apos;re committed to continuous improvement and expansion of Zorun:
              </p>
              <ul>
                <li>Optimizing performance for smoother gameplay on different devices</li>
                <li>Enhancing sound effects and visual feedback</li>
                <li>Adding new gameplay modes (time-challenge, survival mode)</li>
                <li>Introducing more memory-based question variations</li>
                <li>Building a thriving community around the game</li>
              </ul>
            </div>

            {/* CTA */}
            <div className={styles.ctaSection}>
              <h2>Ready to Play Zorun?</h2>
              <p>Download Zorun today and experience the ultimate action + memory challenge!</p>
              <button className={styles.downloadBtn}>Download Zorun</button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
