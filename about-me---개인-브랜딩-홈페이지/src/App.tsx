/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { initialBrandingData, PersonalBrandingData, ProjectItem, ArchiveItem } from './data/brandingData';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectSection } from './components/ProjectSection';
import { ArchiveSection } from './components/ArchiveSection';
import { FaithSection } from './components/FaithSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/Modals/LightboxModal';
import { ProjectDetailModal } from './components/Modals/ProjectDetailModal';
import { DataCustomizerModal } from './components/Modals/DataCustomizerModal';

const LOCAL_STORAGE_KEY = 'about_me_branding_data_v1';

export default function App() {
  // Load stored data or use initial template
  const [data, setData] = useState<PersonalBrandingData>(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch {
      // Fallback
    }
    return initialBrandingData;
  });

  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState<boolean>(false);

  // Lightbox state
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
    caption: string;
  }>({
    isOpen: false,
    imageUrl: '',
    title: '',
    caption: '',
  });

  // Save to localStorage when data changes
  const updateData = (newData: PersonalBrandingData) => {
    setData(newData);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newData));
    } catch {
      // ignore storage errors
    }
  };

  // Scroll spy to update active section in navigation
  useEffect(() => {
    const sectionIds = ['home', 'about', 'experience', 'projects', 'archive', 'faith', 'contact'];
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = 180;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - offset;
          if (scrollY >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handlers
  const handleUpdateExperiencePeriod = (id: string, newPeriod: string) => {
    const updated = {
      ...data,
      experiences: data.experiences.map((exp) =>
        exp.id === id ? { ...exp, period: newPeriod } : exp
      ),
    };
    updateData(updated);
  };

  const handleAddArchiveItem = (item: ArchiveItem) => {
    const updated = {
      ...data,
      archive: [item, ...data.archive],
    };
    updateData(updated);
  };

  const handleOpenLightbox = (imageUrl: string, title: string, caption: string) => {
    setLightbox({
      isOpen: true,
      imageUrl,
      title,
      caption,
    });
  };

  const handleCloseLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const handleResetData = () => {
    if (window.confirm('초기 설정 데이터로 되돌리시겠습니까? 입력하신 변경사항이 초기화됩니다.')) {
      setData(initialBrandingData);
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      setIsCustomizerOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#2D2926] selection:bg-[#E2D9CC] flex flex-col font-korean antialiased">
      {/* Top Fixed Navigation */}
      <Navbar
        activeSection={activeSection}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* PAGE 01. HOME */}
        <HeroSection data={data} />

        {/* PAGE 02. ABOUT ME */}
        <AboutSection data={data} />

        {/* PAGE 03. EXPERIENCE */}
        <ExperienceSection
          data={data}
          onUpdatePeriod={handleUpdateExperiencePeriod}
          onOpenImageLightbox={handleOpenLightbox}
        />

        {/* PAGE 04. MY PROJECT */}
        <ProjectSection
          data={data}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* PAGE 05. MY ARCHIVE */}
        <ArchiveSection
          data={data}
          onOpenImageLightbox={handleOpenLightbox}
          onAddArchiveItem={handleAddArchiveItem}
        />

        {/* PAGE 06. MY FAITH */}
        <FaithSection
          data={data}
          onOpenImageLightbox={handleOpenLightbox}
        />

        {/* PAGE 07. CONTACT */}
        <ContactSection
          data={data}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer data={data} />

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightbox.isOpen}
        imageUrl={lightbox.imageUrl}
        title={lightbox.title}
        caption={lightbox.caption}
        onClose={handleCloseLightbox}
      />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenImage={handleOpenLightbox}
      />

      {/* Data Customizer Slide-over Drawer */}
      <DataCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        data={data}
        onSaveData={updateData}
        onResetData={handleResetData}
      />
    </div>
  );
}
