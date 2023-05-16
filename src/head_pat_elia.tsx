import React, {useState} from 'react';
import {EliaReaction, ELIA_REACTIONS} from './elia_reaction';
import chill2ChibiPath from './media/image/chill2.png';
import styles from './head_pat_elia.module.css';

// Duration needed to complete 3 head pat cylces
const HEAD_PAT_DURATION_MS = 1900;

const HeadPatElia: React.FC = () => {
  const [currentChibiPath, setCurrentChibiPath] = useState<string>(chill2ChibiPath);
  const [unusedReactions, setUnusedReactions] = useState<EliaReaction[]>(
    [...ELIA_REACTIONS]
  );
  const [nextReaction, setNextReaction] = useState<EliaReaction | null>(null);
  const [headPatPlaying, setHeadPatPlaying] = useState<boolean>(false);
  const [reactionPlaying, setReactionPlaying] = useState<boolean>(false);
  const [headPatsGiven, setHeadPatsGiven] = useState<number>(0);

  if (!nextReaction) {
    const {selectedReaction, nextUnusedReactions} = selectNextReaction(
      unusedReactions, currentChibiPath
    );
    preloadReaction(selectedReaction);
    setNextReaction(selectedReaction);
    setUnusedReactions(nextUnusedReactions);
  }

  const handleHeadPat = () => {
    if (headPatPlaying || reactionPlaying) {
      return;
    }
    setHeadPatsGiven((priorCount) => ++priorCount);

    const reaction = nextReaction!;
    const reactionAudio = new Audio(reaction!.audioPath);
    setHeadPatPlaying(true);
    setReactionPlaying(true);
    setCurrentChibiPath(reaction.chibiPatPath);
    reactionAudio.addEventListener('ended', () => setReactionPlaying(false));
    setTimeout(() => {
      setCurrentChibiPath(reaction.chibiPath);
      setHeadPatPlaying(false);
    }, HEAD_PAT_DURATION_MS);
    reactionAudio.play();

    const {selectedReaction, nextUnusedReactions} = selectNextReaction(
      unusedReactions, reaction.chibiPath
    );
    preloadReaction(selectedReaction);
    setNextReaction(selectedReaction);
    setUnusedReactions(nextUnusedReactions);
  };

  return (
    <div className={styles.appBody}>
      <div className={styles.headPatSection}>
        <img
          className={styles.chibi}
          src={currentChibiPath}
          role={'button'}
          alt={'Click to head pat Elia'}
          onClick={handleHeadPat}
        />
        <button
          className={styles.headPatButton}
          onClick={handleHeadPat}
          disabled={headPatPlaying || reactionPlaying}
        >
          {'Head pat Elia'}
        </button>
        <div className={styles.textContainer}>
          {`Head pats given: ${headPatsGiven.toLocaleString()}`}
        </div>
        <div className={styles.textContainer}>
          {'Elia makes sounds, so unmute your audio'}
        </div>
      </div>
      <div className={styles.creditsSection}>
        <div>
          {'Created by '}
          <a href={'https://twitter.com/Nick22Nick22'}>Nick22</a>
        </div>
        <div>
          {'Check out the project on '}
          <a href={'https://github.com/EliaStellariaFans/head-pat-elia'}>GitHub</a>
        </div>
      </div>
    </div>
  );
}

function selectNextReaction(unusedReactions: EliaReaction[], currentChibiPath: string): {
  selectedReaction: EliaReaction;
  nextUnusedReactions: EliaReaction[];
} {
  // Try to use a reaction with a different chibi than the last one
  let reactions = unusedReactions.filter(
    (r) => r.chibiPath !== currentChibiPath
  );
  if (reactions.length === 0) {
    reactions = unusedReactions;
  }
  const selectedReactionIndex = Math.floor(Math.random() * reactions.length);
  const selectedReaction = reactions[selectedReactionIndex];

  // Reset unused reactions if all have been used
  let nextUnusedReactions: EliaReaction[];
  if (unusedReactions.length === 1) {
    nextUnusedReactions = ELIA_REACTIONS.filter((r) => r.id !== selectedReaction.id);
  } else {
    nextUnusedReactions = unusedReactions.filter((r) => r.id !== selectedReaction.id);
  }

  return {selectedReaction, nextUnusedReactions};
}

function preloadReaction(reaction: EliaReaction): void {
  const linkElements = Array.from(document.getElementsByTagName('link'));
  const preloadElements = linkElements.filter((e) => e.rel === 'preload');
  const preloadedPaths = preloadElements.map((e) => e.href);

  if (!preloadedPaths.find((p) => p.endsWith(reaction.chibiPath))) {
    preloadImage(reaction.chibiPath);
  }
  if (!preloadedPaths.find((p) => p.endsWith(reaction.chibiPath))) {
    preloadImage(reaction.chibiPatPath);
  }

  const audio = new Audio(reaction.audioPath);
  audio.preload = 'auto';
}

function preloadImage(imagePath: string): void {
  const link = document.createElement('link');
  link.href = imagePath;
  link.rel = 'preload';
  link.as = 'image';
  document.head.appendChild(link);
}

export default HeadPatElia;