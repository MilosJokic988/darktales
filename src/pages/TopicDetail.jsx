import React from 'react';
import { useParams } from 'react-router-dom';
import './TopicDetail.css';

const topicDetails = {
  alchemy: {
    title: 'Alchemy',
    content: `
      Alchemy is an ancient practice that dates back to Egypt and Greece. It was originally developed as a spiritual and philosophical discipline.
      Alchemists sought to transform base metals into gold, a process symbolizing the purification of the soul. 
      The most famous alchemical pursuit was the discovery of the Philosopher's Stone, which was believed to grant eternal life and turn any metal into gold.
      In modern times, alchemy is considered a precursor to chemistry, but its mystical roots still intrigue many who seek knowledge in hidden practices.
    `
  },
  kabbalah: {
    title: 'Kabbalah',
    content: `
      Kabbalah is a mystical and esoteric interpretation of the Hebrew Bible. Originating from Jewish traditions, Kabbalah teaches that there is a hidden dimension 
      within sacred texts that can only be unlocked through spiritual insight and divine guidance. 
      Kabbalists believe that the universe was created through a series of divine emanations known as the 'Sefirot.'
      The teachings of Kabbalah have influenced a variety of mystics and thinkers throughout history, and its ideas continue to be explored today by spiritual seekers and scholars alike.
    `
  },
  theosophy: {
    title: 'Theosophy',
    content: `
      Theosophy is a philosophical and spiritual movement that emerged in the late 19th century. Founded by Helena Blavatsky, Theosophy combines elements from Eastern religions, Western mysticism, and philosophy. 
      It emphasizes the idea that all religions share a core truth and that humanity can gain divine wisdom through meditation, spiritual development, and understanding of the universe’s hidden laws.
      Theosophy's influence can be seen in a number of modern spiritual movements and continues to inspire individuals who seek a deeper understanding of reality and the divine.
    `
  },
  hermeticism: {
    title: 'Hermeticism',
    content: `
      Hermeticism is a philosophical and spiritual system based on the teachings attributed to Hermes Trismegistus, a legendary figure said to embody the synthesis of the Greek god Hermes and the Egyptian god Thoth.
      It focuses on the pursuit of wisdom and understanding of the cosmos through sacred knowledge. The core tenets of Hermeticism include the law of correspondence ('As above, so below'), the concept of spiritual enlightenment, 
      and the idea of transmutation of the soul.
      Hermeticism has deeply influenced Western occultism, alchemy, and even modern science, with its emphasis on the connection between the physical and the divine.
    `
  }
};

const TopicDetail = () => {
  const { topicId } = useParams();
  const topic = topicDetails[topicId];

  if (!topic) return <div className="text-light text-center mt-5">Topic not found</div>;

  return (
     <div className="topic-detail-background">
    <div className="container text-light mt-5">
      <h1>{topic.title}</h1>
      <p className="mt-4 fs-5">{topic.content}</p>
    </div>
    </div>
  );
};

export default TopicDetail;
