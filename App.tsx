
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Quote } from './components/Quote';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative max-w-[1440px] mx-auto px-4 md:px-20 lg:px-40 pb-10">
      <Sidebar />
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <Quote />
        <section id="works" className="pt-24">
          <Projects />
        </section>
        <section id="skills" className="pt-24">
          <Skills />
        </section>
        <section id="about-me" className="pt-24">
          <About />
        </section>
        <section id="contacts" className="pt-24">
          <Contacts />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
