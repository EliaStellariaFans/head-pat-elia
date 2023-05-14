import React, {useEffect, useState} from 'react';
import {EliaReaction, ELIA_REACTIONS} from './elia_reaction';
import chill2Chibi from './media/image/chill2.png';
import daisukiDayoShortAudio from './media/audio/daisuki_dayo_short.mp3';
import './head_pat_elia.css';

const App: React.FC = () => {
  const [headPatDisabled, setHeadPatDisabled] = useState<boolean>(false);
  const [currentChibiPath, setCurrentChibiPath] = useState<string>(chill2Chibi);
  const [unusedReactions, setUnusedReactions] = useState<EliaReaction[]>(
    [...ELIA_REACTIONS]
  );

  // Make an audio load immediately on mount to avoid play delay on first
  // audio play later
  useEffect(() => {
    new Audio(daisukiDayoShortAudio);
  }, []);

  const handleHeadPat = () => {
    const reactionIndex = Math.floor(Math.random() * unusedReactions.length);
    const reaction = unusedReactions[reactionIndex];
    if (unusedReactions.length === 1) {
      setUnusedReactions(ELIA_REACTIONS.filter((r) => r.id !== reaction.id));
    } else {
      setUnusedReactions(unusedReactions.filter((r) => r.id !== reaction.id));
    }

    const reactionAudio = new Audio(reaction.audioPath);
    setCurrentChibiPath(reaction.chibiPath);
    setHeadPatDisabled(true);
    reactionAudio.addEventListener('ended', () => setHeadPatDisabled(false));
    reactionAudio.play();
  };

  return (
    <div className="app-body">
      <img src={currentChibiPath} className="chibi" alt="Elia Chibi" />
      <button
        onClick={handleHeadPat}
        disabled={headPatDisabled}
      >Head pat Elia</button>
    </div>
  );
}

export default App;
