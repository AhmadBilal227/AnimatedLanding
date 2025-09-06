import React from 'react';
import BubbleMenu from './BubbleMenu';

const BubbleMenuHeader: React.FC = () => {
  const items = [
    {
      label: 'home',
      href: '/',
      ariaLabel: 'Home',
      rotation: -8,
      hoverStyles: { bgColor: '#5227FF', textColor: '#ffffff' }
    },
    {
      label: 'work',
      href: '/work',
      ariaLabel: 'Work',
      rotation: 8,
      hoverStyles: { bgColor: '#FF9FFC', textColor: '#ffffff' }
    },
    {
      label: 'about',
      href: '/about',
      ariaLabel: 'About',
      rotation: -8,
      hoverStyles: { bgColor: '#B19EEF', textColor: '#ffffff' }
    },
    {
      label: 'blog',
      href: '/blog',
      ariaLabel: 'Blog',
      rotation: 8,
      hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
    },
    {
      label: 'contact',
      href: '/contact',
      ariaLabel: 'Contact',
      rotation: -8,
      hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
    }
  ];

  return (
    <BubbleMenu
      logo={<span style={{ fontWeight: 700, fontSize: '18px', color: '#111' }}>Greater</span>}
      items={items}
      menuAriaLabel="Toggle navigation"
      menuBg="#ffffff"
      menuContentColor="#111111"
      useFixedPosition={false}
      animationEase="back.out(1.5)"
      animationDuration={0.5}
      staggerDelay={0.12}
    />
  );
};

export default BubbleMenuHeader;
