import { useState, useEffect } from 'react';
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
            <h1>Zorun - Smart Brain Creations</h1>

            {/* 1. Introduction / Story */}
            <div className={styles.infoBlock}>
              <h2>1. Introduction / Story</h2>
              <h3>The Story Behind Zorun</h3>
              <p>
                Zorun began with a simple idea at smartbraincreations to create a fun, fast-action game
                that feels exciting like classic arcade shooters but with a new emotional twist. Inspired
                by the classic Duck Hunt, we imagined: <em>What if instead of hunting targets, players had
                to protect someone important?</em>
              </p>
              <p><strong>That&apos;s when the idea of the dancing cat was born.</strong></p>
              <p>
                In Zorun, zombies suddenly appear and rush toward the cat. The player becomes the
                hero, tapping quickly to defeat them and save the cat. But we wanted more than just
                shooting—we added a smart challenge: when your ammo runs out, the game tests your
                memory by asking how many zombies you defeated. If you answer correctly, your gun
                reloads. If not, the silence of an empty gun makes the danger feel real—and the cat
                depends on your focus.
              </p>
            </div>

            {/* 2. Inspiration */}
            <div className={styles.infoBlock}>
              <h2>2. Inspiration Behind Creating the Game</h2>
              <p>
                The idea for this game came from classic arcade shooting games like <em>Duck Hunt</em>, where
                timing and accuracy were the key to success. At SmartBrainCreations, we wanted to
                take that simple concept and make it more engaging and meaningful.
              </p>
              <p>
                Instead of just shooting targets, we added a purpose—<strong>protecting a dancing cat from
                zombies</strong>. This made the gameplay more emotional and fun. But we didn&apos;t stop there.
                We introduced a unique twist: when the ammo runs out, the game tests the player&apos;s
                <strong>memory and attention</strong> by asking how many zombies they defeated. This turns a
                simple action game into a mix of <strong>action + brain challenge</strong>.
              </p>
              <p><strong>Our goal was to create a game that is:</strong></p>
              <ul>
                <li>Fast and exciting</li>
                <li>Easy to play but challenging</li>
                <li>Fun with a unique concept</li>
              </ul>
            </div>

            {/* 3. Vision */}
            <div className={styles.infoBlock}>
              <h2>3. Vision of Our Team – SmartBrainCreations</h2>
              <p>
                Our vision at SmartBrainCreations is to <strong>create simple yet innovative games that
                combine fun gameplay with smart thinking challenges</strong>. We aim to design
                experiences that are easy for anyone to play but still engage the player&apos;s focus,
                memory, and creativity.
              </p>
              <p><strong>As a growing game development team, our goal is:</strong></p>
              <ul>
                <li>To build unique and meaningful game ideas</li>
                <li>To mix entertainment with brain-engaging gameplay</li>
                <li>To create games that players remember and enjoy emotionally</li>
                <li>To keep improving and move toward creating bigger and more immersive game experiences in the future</li>
              </ul>
            </div>

            {/* 4. Mission & Vision */}
            <div className={styles.infoBlock}>
              <h2>4. Mission & Vision</h2>
              <h3>Mission - What we want to achieve right now</h3>
              <p>
                Our current mission at SmartBrainCreations is to <strong>design and publish creative, simple,
                and engaging mobile games that combine action with brain-based challenges</strong>. Right
                now, we are focused on building games that are easy to understand, enjoyable for all
                players, and help improve skills like attention and memory.
              </p>
              <h3>Vision - Where we see our game/company in the future</h3>
              <p>
                Our vision is to grow SmartBrainCreations into a <strong>recognized and trusted game
                development studio</strong> that creates unique, creative, and meaningful games for players
                around the world. In the future, we want to develop not only simple mobile games but
                also larger and more immersive experiences that combine entertainment with learning
                and innovation.
              </p>
              <p><strong>We see our company:</strong></p>
              <ul>
                <li>Publishing multiple successful games on global platforms</li>
                <li>Creating games that improve players&apos; thinking, memory, and creativity</li>
                <li>Expanding from small mobile games to advanced 2D and 3D game projects</li>
                <li>Building a strong reputation as a creative indie game studio</li>
                <li>Working as a professional team known for original ideas and engaging gameplay experiences</li>
              </ul>
            </div>

            {/* 5. About the Game(s) */}
            <div className={styles.infoBlock}>
              <h2>5. About the Game(s)</h2>
              <p><strong>Company:</strong> SmartBrainCreations</p>
              <p><strong>Game Name:</strong> Zorun</p>
              
              <h3>Genre, Style, and Unique Selling Points (USPs)</h3>
              <p><strong>Genre:</strong> Action, Arcade, Casual, Brain-Challenge Game</p>
              <p><strong>Style:</strong> Simple tap-based shooting gameplay with memory-based question mechanics and a
              fun animated environment featuring a dancing cat and attacking zombies.</p>
              
              <p><strong>Unique Selling Points (USPs):</strong></p>
              <ul>
                <li>Combination of action shooting + brain challenge gameplay</li>
                <li>Player must protect a dancing cat from zombies, creating emotional engagement</li>
                <li>Ammo slider system that randomly finishes, increasing tension</li>
                <li>Special question panel mechanic to reload ammo</li>
                <li>Mix of fast reflexes and memory skills in one game experience</li>
              </ul>

              <h3>What Makes the Game Different?</h3>
              <div className={styles.featuresList}>
                <div className={styles.feature}>
                  <h4>🎮 Gameplay Mechanics</h4>
                  <p>
                    Unlike traditional shooting games where players only shoot enemies, <strong>Zorun</strong> adds a
                    unique challenge: when ammo finishes, players must answer how many zombies they
                    defeated. Correct answers reload the gun, while wrong answers create risk and difficulty.
                  </p>
                </div>

                <div className={styles.feature}>
                  <h4>🐱 Story Concept</h4>
                  <p>
                    The player&apos;s goal is to <strong>protect a dancing cat from attacking zombies</strong>, which creates
                    a fun and emotional objective instead of just shooting targets.
                  </p>
                </div>

                <div className={styles.feature}>
                  <h4>🧠 Learning + Entertainment</h4>
                  <p>
                    The game combines action gameplay, memory testing, and focus improvement - making
                    it both fun and mentally engaging.
                  </p>
                </div>

                <div className={styles.feature}>
                  <h4>⚡ Inspired but Innovative</h4>
                  <p>
                    Inspired by the classic shooting style of <em>Duck Hunt</em>, the game introduces a modern twist
                    by adding interactive brain-based mechanics and character protection gameplay.
                  </p>
                </div>

                <div className={styles.feature}>
                  <h4>🎯 Simple but Addictive Design</h4>
                  <p>
                    The game is easy to learn, quick to play, and challenging to master - making it suitable for players
                    of all ages.
                  </p>
                </div>
              </div>
            </div>

            {/* 6. Game Development Journey */}
            <div className={styles.infoBlock}>
              <h2>6. Game Development Journey</h2>
              
              <h3>Early Concept Stage</h3>
              <p>
                The idea of Zorun started with inspiration from classic arcade shooting games like <em>Duck
                Hunt</em>. The goal was to create a simple tap-based action game where players protect a
                character instead of only shooting targets. The concept evolved into protecting a
                dancing cat from zombies, with an added memory-based ammo reload system to make
                gameplay unique.
              </p>

              <h3>Alpha Stage</h3>
              <ul>
                <li>Basic zombie spawning system was created</li>
                <li>Tap-to-kill shooting mechanic was implemented</li>
                <li>Ammo slider system was added</li>
                <li>Initial UI elements like score and ammo indicator were tested</li>
              </ul>
              <p><em>This stage focused on building the core gameplay mechanics.</em></p>

              <h3>Beta Stage</h3>
              <ul>
                <li>Question panel system (ammo reload challenge) was added</li>
                <li>Sound effects like gunshot and empty gun sound were implemented</li>
                <li>Gameplay balance and difficulty adjustments were made</li>
                <li>Testers played the game to check performance and bugs</li>
              </ul>
              <p><em>This stage improved the player experience and stability.</em></p>

              <h3>Launch Stage</h3>
              <ul>
                <li>Final gameplay polish was completed</li>
                <li>Bugs were fixed</li>
                <li>Game UI and performance were optimized</li>
                <li>Game prepared for publishing and testing on distribution platforms like Google Play</li>
              </ul>
              <p><em>The game became ready for players to experience.</em></p>
            </div>

            {/* 7. Challenges Faced and Milestones Achieved */}
            <div className={styles.infoBlock}>
              <h2>7. Challenges Faced and Milestones Achieved</h2>
              
              <h3>Challenges Faced</h3>
              <ul>
                <li>Designing a unique gameplay twist beyond normal shooting mechanics</li>
                <li>Implementing the ammo slider and question panel interaction system</li>
                <li>Balancing difficulty between action gameplay and memory challenge</li>
                <li>Testing gameplay performance on different devices</li>
                <li>Managing publishing steps and configuration for release platforms</li>
              </ul>

              <h3>Milestones Achieved</h3>
              <ul>
                <li>Successfully designed a working shooting + memory hybrid gameplay system</li>
                <li>Implemented zombie spawning and interaction mechanics</li>
                <li>Added UI elements like ammo slider and question panel</li>
                <li>Completed playable version ready for testing and publishing</li>
                <li>Released the game for tester access before public launch</li>
              </ul>
            </div>

            {/* 8. The Team */}
            <div className={styles.infoBlock}>
              <h2>8. The Team</h2>
              <p>
                Our team is a small but passionate group of creators who worked together to design
                and develop Zorun. Each member contributed their skills to make the game creative,
                engaging, and playable.
              </p>

              <h3>Core Team Members</h3>
              <div className={styles.teamMember}>
                <h4>1. Sachin – Game Designer</h4>
                <p>
                  Sachin Sir led the <strong>game design vision</strong> of Zorun. He helped shape the gameplay
                  concept, player experience, and core mechanics of protecting the dancing cat from
                  zombies. His guidance ensured the game stayed fun, simple, and meaningful while
                  maintaining a strong arcade-style feel.
                </p>
              </div>

              <div className={styles.teamMember}>
                <h4>2. Shubha Lakshmi MB – Level Designer</h4>
                <p>
                  Shubha Ma&apos;am designed the <strong>game flow and challenge structure</strong>. She helped
                  organize how zombies appear, how difficulty increases, and how players experience the
                  action step-by-step. Her work made the gameplay balanced and engaging for players.
                </p>
              </div>

              <div className={styles.teamMember}>
                <h4>3. Ayaan – Game Developer</h4>
                <p>
                  Ayaan implemented the <strong>game mechanics and technical systems</strong> in the project. He
                  worked on zombie interaction, ammo slider, question panel, and sound integration.
                </p>
              </div>

              <h3>Team Spirit</h3>
              <p>
                Even though the team is small, it combines <strong>creative design, structured level
                planning, and technical development skills</strong> to build unique indie game experiences
                under SmartBrainCreations.
              </p>
            </div>

            {/* 9. Community & Players */}
            <div className={styles.infoBlock}>
              <h2>9. Community & Players</h2>
              <h3>Importance of Players in Our Journey</h3>
              <p>
                At SmartBrainCreations, players are the most important part of our game development
                journey. Their feedback, testing support, and gameplay experience help us improve our
                ideas and make better games. Players are <strong>co-creators of better game experiences</strong> through
                their suggestions and reactions.
              </p>

              <h3>Community Interaction & Player Contributions</h3>
              <ul>
                <li>Testing gameplay during early versions</li>
                <li>Reporting bugs and improvements</li>
                <li>Suggesting difficulty adjustments</li>
                <li>Supporting the idea of combining action + memory challenge gameplay</li>
              </ul>
            </div>

            {/* 10. Technology & Innovation */}
            <div className={styles.infoBlock}>
              <h2>10. Technology & Innovation</h2>
              <h3>Technologies Used in the Game</h3>
              <ul>
                <li><strong>Unity Game Engine</strong> – For gameplay mechanics and UI systems</li>
                <li><strong>C# Programming Language</strong> – For core gameplay logic</li>
                <li><strong>Mobile Touch Input System</strong> – For responsive tap-based gameplay</li>
                <li><strong>UI Slider-Based Ammo System</strong> – For dynamic tension</li>
                <li><strong>Sound Feedback System</strong> – For immersive experience</li>
              </ul>

              <h3>Innovative Gameplay Features</h3>
              <ul>
                <li><strong>Memory-Based Reload Mechanic</strong> – Mixed reflex and thinking skills</li>
                <li><strong>Dynamic Ammo Slider System</strong> – Creates suspense and focus</li>
                <li><strong>Character Protection Objective</strong> – Emotional engagement</li>
                <li><strong>Hybrid Casual + Brain Training</strong> – Unique gameplay identity</li>
              </ul>
            </div>

            {/* 11. Future Roadmap */}
            <div className={styles.infoBlock}>
              <h2>11. Future Roadmap</h2>
              <h3>Upcoming Updates & Improvements</h3>
              <ul>
                <li>Optimizing the performance of the ammo slider system</li>
                <li>Enhancing sound effects and visual feedback</li>
                <li>Optimizing performance for different mobile devices</li>
                <li>Fixing bugs based on tester feedback</li>
              </ul>

              <h3>Expansion Plans</h3>
              <ul>
                <li>Adding new gameplay modes</li>
                <li>Introducing time-challenge mode or survival mode</li>
                <li>Improving UI design</li>
                <li>Adding more memory-based question variations</li>
              </ul>

              <h3>Community-Driven Plans</h3>
              <ul>
                <li>Collecting player feedback</li>
                <li>Adding features based on suggestions</li>
                <li>Creating score-based competitions</li>
                <li>Encouraging player engagement</li>
              </ul>
            </div>

            {/* 12. Culture & Values */}
            <div className={styles.infoBlock}>
              <h2>12. Culture & Values</h2>
              <h3>Core Principles Behind Our Game Development</h3>
              <div className={styles.valuesList}>
                <div className={styles.value}>
                  <h4>Creativity</h4>
                  <p>Building original gameplay ideas combining action with memory challenges.</p>
                </div>

                <div className={styles.value}>
                  <h4>Innovation</h4>
                  <p>Introducing simple but unique gameplay features that make our games different.</p>
                </div>

                <div className={styles.value}>
                  <h4>Fair Gameplay</h4>
                  <p>Success depends on player skill, attention, and quick thinking.</p>
                </div>

                <div className={styles.value}>
                  <h4>Accessibility</h4>
                  <p>Games that are easy to understand and playable by people of all ages.</p>
                </div>

                <div className={styles.value}>
                  <h4>Continuous Learning</h4>
                  <p>Improving our skills with every project and applying new ideas to future games.</p>
                </div>
              </div>

              <h3>Support for the Gaming Community</h3>
              <ul>
                <li>Encouraging learning through gameplay</li>
                <li>Supporting indie game creativity</li>
                <li>Designing games for a wide range of players</li>
                <li>Promoting respectful gaming experiences</li>
              </ul>
            </div>

            {/* 13. Development Timeline */}
            <div className={styles.infoBlock}>
              <h2>13. Development Timeline</h2>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <h4>Step 1 – Idea Stage</h4>
                  <p>The journey started with creating a simple shooting game inspired by Duck Hunt, with the goal of protecting a dancing cat from zombies.</p>
                </div>

                <div className={styles.timelineItem}>
                  <h4>Step 2 – Planning Stage</h4>
                  <p>The team planned core features: zombie tapping system, ammo slider mechanic, and memory-based reload question panel.</p>
                </div>

                <div className={styles.timelineItem}>
                  <h4>Step 3 – Development Stage</h4>
                  <p>Main gameplay systems were created using Unity: zombie spawning, tap-to-kill interaction, ammo slider UI, and basic sound effects.</p>
                </div>

                <div className={styles.timelineItem}>
                  <h4>Step 4 – Testing Stage</h4>
                  <p>Early players tested gameplay performance, difficulty balance, and UI responsiveness. Feedback improved stability.</p>
                </div>

                <div className={styles.timelineItem}>
                  <h4>Step 5 – Closed Testing Release</h4>
                  <p>The game was shared with testers through Google Play closed testing for real-device feedback.</p>
                </div>

                <div className={styles.timelineItem}>
                  <h4>Step 6 – Current Stage</h4>
                  <p>The game is now working successfully and continues to improve through player feedback and optimization.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className={styles.ctaSection}>
              <h2>Ready to Experience Zorun?</h2>
              <p>Join us on this exciting journey! Download Zorun today and experience the ultimate combination of action and brain challenge!</p>
              <a 
                href="https://play.google.com/store/apps/details?id=com.ZorunVersion" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.downloadBtn}
              >
                Download Zorun Now
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
