import React, {useEffect, useState} from 'react';
import {EliaReaction, ELIA_REACTIONS} from './elia_reaction';
import chill2ChibiPath from './media/image/chill2.png';
import stomachGrowlAudio from './media/audio/stomach_growl.mp3';
import styles from './head_pat_elia.module.css';

// Duration needed to complete 3 head pat cylces
const HEAD_PAT_DURATION_MS = 1900;

const HeadPatElia: React.FC = () => {
  const [currentChibiPath, setCurrentChibiPath] = useState<string>(chill2ChibiPath);
  const [unusedReactions, setUnusedReactions] = useState<EliaReaction[]>(
    [...ELIA_REACTIONS]
  );
  const [headPatPlaying, setHeadPatPlaying] = useState<boolean>(false);
  const [reactionPlaying, setReactionPlaying] = useState<boolean>(false);
  const [headPatsGiven, setHeadPatsGiven] = useState<number>(0);

  // Make an audio load immediately on mount to avoid play delay on first
  // audio play later
  useEffect(() => {
    new Audio(stomachGrowlAudio);
  }, []);

  const handleHeadPat = () => {
    if (headPatPlaying || reactionPlaying) {
      return;
    }

    setHeadPatsGiven((priorCount) => ++priorCount);

    const reactionIndex = Math.floor(Math.random() * unusedReactions.length);
    const reaction = unusedReactions[reactionIndex];
    if (unusedReactions.length === 1) {
      setUnusedReactions(ELIA_REACTIONS.filter((r) => r.id !== reaction.id));
    } else {
      setUnusedReactions(unusedReactions.filter((r) => r.id !== reaction.id));
    }

    const reactionAudio = new Audio(reaction.audioPath);
    setHeadPatPlaying(true);
    setReactionPlaying(true);
    setCurrentChibiPath(reaction.chibiPatPath);
    reactionAudio.addEventListener('ended', () => setReactionPlaying(false));
    setTimeout(() => {
      setCurrentChibiPath(reaction.chibiPath);
      setHeadPatPlaying(false);
    }, HEAD_PAT_DURATION_MS);
    reactionAudio.play();
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
          Head pat Elia
        </button>
        <div className={styles.headPatCount}>
          {`Head pats given: ${headPatsGiven.toLocaleString()}`}
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

export default HeadPatElia;