import daisukiDayoShortAudio from './media/audio/daisuki_dayo_short.mp3';
import goodMorbinAudio from './media/audio/good_morbin.mp3';
import stomachGrowlAudio from './media/audio/stomach_growl.mp3';
import panic1Chibi from './media/image/panic1.png';
import smileClose2Chibi from './media/image/smileclose2.png'
import squeel2Chibi from './media/image/squeel2.png';

export type EliaReaction = Readonly<{
    id: string;
    audioPath: string;
    chibiPath: string;
}>;

export const ELIA_REACTIONS: EliaReaction[] = [
    {
        id: 'daisuki_dayo',
        audioPath: daisukiDayoShortAudio,
        chibiPath: squeel2Chibi,
    },
    {
        id: 'good_morbin',
        audioPath: goodMorbinAudio,
        chibiPath: smileClose2Chibi,
    },
    {
        id: 'stomach_growl',
        audioPath: stomachGrowlAudio,
        chibiPath: panic1Chibi,
    },
];