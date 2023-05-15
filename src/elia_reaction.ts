import araAraAudio from './media/audio/ara_ara.mp3';
import chickenBurgerAudio from './media/audio/chicken_burger.mp3';
import daisukiDayo1Audio from './media/audio/daisuki_dayo1.mp3';
import daisukiDayo2Audio from './media/audio/daisuki_dayo2.mp3';
import deezNutsAudio from './media/audio/deez_nuts.mp3';
import goodMorbinAudio from './media/audio/good_morbin.mp3';
import headPatsOnegaiAudio from './media/audio/head_pats_onegai.mp3';
import imSweatyAudio from './media/audio/im_sweaty.mp3';
import matteDayoAudio from './media/audio/matte_dayo.mp3';
import meInBinAudio from './media/audio/me_in_bin.mp3';
import meowAudio from './media/audio/meow.mp3';
import mwahAudio from './media/audio/mwah.mp3';
import notFreeAudio from './media/audio/not_free.mp3';
import noUAudio from './media/audio/no_u.mp3';
import oniichanDaisukiAudio from './media/audio/oniichan_daisuki.mp3';
import poutNoisesAudio from './media/audio/pout_noises.mp3';
import putInBinAudio from './media/audio/put_in_bin.mp3';
import sneezeAudio from './media/audio/sneeze.mp3';
import starlingDaisukiAudio from './media/audio/starling_daisuki.mp3';
import stomachGrowlAudio from './media/audio/stomach_growl.mp3';
import yaPunksAudio from './media/audio/ya_punks.mp3';

import angry1Chibi from './media/image/angry1.png';
import angry1ChibiPat from './media/image/angry1_pat.gif';
import blush2Chibi from './media/image/blush2.png';
import blush2ChibiPat from './media/image/blush2_pat.gif';
import normal2Chibi from './media/image/normal2.png';
import normal2ChibiPat from './media/image/normal2_pat.gif';
import panic1Chibi from './media/image/panic1.png';
import panic1ChibiPat from './media/image/panic1_pat.gif';
import shine1Chibi from './media/image/shine1.png'
import shine1ChibiPat from './media/image/shine1_pat.gif'
import smileClose2Chibi from './media/image/smileclose2.png'
import smileClose2ChibiPat from './media/image/smileclose2_pat.gif'
import squeel2Chibi from './media/image/squeel2.png';
import squeel2ChibiPat from './media/image/squeel2_pat.gif';

export type EliaReaction = Readonly<{
    id: string;
    audioPath: string;
    chibiPath: string;
    chibiPatPath: string;
}>;

export const ELIA_REACTIONS: EliaReaction[] = [
    {
        id: 'ara_ara',
        audioPath: araAraAudio,
        chibiPath: shine1Chibi,
        chibiPatPath: shine1ChibiPat,
    },
    {
        id: 'chicken_burger',
        audioPath: chickenBurgerAudio,
        chibiPath: normal2Chibi,
        chibiPatPath: normal2ChibiPat,
    },
    {
        id: 'daisuki_dayo1',
        audioPath: daisukiDayo1Audio,
        chibiPath: squeel2Chibi,
        chibiPatPath: squeel2ChibiPat,
    },
    {
        id: 'daisuki_dayo2',
        audioPath: daisukiDayo2Audio,
        chibiPath: squeel2Chibi,
        chibiPatPath: squeel2ChibiPat,
    },
    {
        id: 'deez_nuts',
        audioPath: deezNutsAudio,
        chibiPath: shine1Chibi,
        chibiPatPath: shine1ChibiPat,
    },
    {
        id: 'good_morbin',
        audioPath: goodMorbinAudio,
        chibiPath: smileClose2Chibi,
        chibiPatPath: smileClose2ChibiPat,
    },
    {
        id: 'head_pats_onegai',
        audioPath: headPatsOnegaiAudio,
        chibiPath: smileClose2Chibi,
        chibiPatPath: smileClose2ChibiPat,
    },
    {
        id: 'im_sweaty',
        audioPath: imSweatyAudio,
        chibiPath: panic1Chibi,
        chibiPatPath: panic1ChibiPat,
    },
    {
        id: 'matte_dayo',
        audioPath: matteDayoAudio,
        chibiPath: normal2Chibi,
        chibiPatPath: normal2ChibiPat,
    },
    {
        id: 'me_in_bin',
        audioPath: meInBinAudio,
        chibiPath: smileClose2Chibi,
        chibiPatPath: smileClose2ChibiPat,
    },
    {
        id: 'meow',
        audioPath: meowAudio,
        chibiPath: normal2Chibi,
        chibiPatPath: normal2ChibiPat,
    },
    {
        id: 'mwah',
        audioPath: mwahAudio,
        chibiPath: squeel2Chibi,
        chibiPatPath: squeel2ChibiPat,
    },
    {
        id: 'not_free',
        audioPath: notFreeAudio,
        chibiPath: angry1Chibi,
        chibiPatPath: angry1ChibiPat,
    },
    {
        id: 'no_u',
        audioPath: noUAudio,
        chibiPath: shine1Chibi,
        chibiPatPath: shine1ChibiPat,
    },
    {
        id: 'oniichan_daisuki',
        audioPath: oniichanDaisukiAudio,
        chibiPath: squeel2Chibi,
        chibiPatPath: squeel2ChibiPat,
    },
    {
        id: 'pout_noises',
        audioPath: poutNoisesAudio,
        chibiPath: angry1Chibi,
        chibiPatPath: angry1ChibiPat,
    },
    {
        id: 'put_in_bin',
        audioPath: putInBinAudio,
        chibiPath: angry1Chibi,
        chibiPatPath: angry1ChibiPat,
    },
    {
        id: 'sneeze',
        audioPath: sneezeAudio,
        chibiPath: blush2Chibi,
        chibiPatPath: blush2ChibiPat,
    },
    {
        id: 'starling_daisuki',
        audioPath: starlingDaisukiAudio,
        chibiPath: squeel2Chibi,
        chibiPatPath: squeel2ChibiPat,
    },
    {
        id: 'stomach_growl',
        audioPath: stomachGrowlAudio,
        chibiPath: panic1Chibi,
        chibiPatPath: panic1ChibiPat,
    },
    {
        id: 'ya_punks',
        audioPath: yaPunksAudio,
        chibiPath: angry1Chibi,
        chibiPatPath: angry1ChibiPat,
    },
];