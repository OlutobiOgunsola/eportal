import React, { Component } from 'react';

import aos from 'aos';
import 'aos/dist/aos.css';
import { LandingPageWrapper } from './styles';
import { Grid } from 'semantic-ui-react';
import RevealChildren from '../../../components/widgets/revealingChildren/revealingChildren';
import LandingPageLayout from '../../layouts/landing';
import PageBase from '..';

import IntroSound from '@/assets/audio/effects/REGIC_Intro.wav';


export default function LandingPage ({}) {

    

  let introSound = new Audio(IntroSound);

  React.useLayoutEffect(()=>{
    const introPlayer = async () => {
      introSound.load();

    await introSound.play().then((arg)=>{
        console.log('arguments', arg);
    }).catch(e => (console.error(e)));
    }

    introPlayer();

    return undefined;
  }, []);

    
    return (
            <LandingPageLayout />
    )
}