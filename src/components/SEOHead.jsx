import { useEffect } from 'react';

function setMetaTag(name, content, attr = 'name') {
  let tag = document.querySelector(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

export default function SEOHead() {
  useEffect(() => {
    const title = 'Never Settle – Family Fitness Studio | Bengaluru\'s Most Energetic Fitness Community';
    document.title = title;

    setMetaTag('description', 'Join Never Settle, Bengaluru\'s trusted family fitness studio. Group classes, personal training, kids sessions, and senior-friendly programs. Book a free trial today!');
    setMetaTag('keywords', 'Never Settle, fitness studio Bengaluru, family fitness, gym in Bangalore, group classes, personal training, kids fitness, senior fitness, yoga, HIIT');

    // Open Graph
    setMetaTag('og:title', title, 'property');
    setMetaTag('og:description', 'Bengaluru\'s most energetic and trusted fitness community. Train together, grow together.');
    setMetaTag('og:type', 'website', 'property');
    setMetaTag('og:url', window.location.href, 'property');

    // Twitter
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', 'Join the community. Feel the energy. Never Settle.');
  }, []);

  return null;
}
