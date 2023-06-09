import common from '@/styles/common.module.css'

import { RustLogo } from '@/components/icons/rust';
import { BevyLogo } from '@/components/icons/bevy';
import { GoLogo } from '@/components/icons/go';
import { FirebaseLogo } from '@/components/icons/firebase';
import { MySqlLogo } from '@/components/icons/mysql';
import { NodeJsLogo } from '@/components/icons/node';
import { IcedLogo } from '@/components/icons/iced';
import { NextLogo } from '@/components/icons/next';

import { inter } from './inter';
import { TypescriptLogo } from '@/components/icons/typescript';

const  Context = () => { }
export default Context

export const RustedAttractorsCard = () => {
  return (
    <a 
      href="https://github.com/joseph-beck/rusted-attractors"
      className={`group ${common.box}`} 
      id="rusted-attractors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 
        className={`${inter.className} ${common.boxTitleText}`}>
        Rusted Attractors
        <span className="flex items-center gap-5">
          {RustLogo()}
          {BevyLogo()}
        </span>
      </h2>

      <p 
        className={common.boxText}>
        Chaotic attractors written in Rust using Bevy.
      </p>
    </a>
  );
}
  
export const BUSRBotCard = () => {
  return (
    <a 
      href="https://github.com/joseph-beck/busr-bot"
      className={`group ${common.box}`} 
      id="rusted-attractors"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 
        className={`${inter.className} ${common.boxTitleText}`}>
        BUSR Statistics Bot
        <span className="flex items-center gap-4 my-1">
          {GoLogo()}
          {MySqlLogo()}
        </span>
      </h2>

      <p 
        className={common.boxText}>
        Discord Bot for displaying statistics of Drivers and Races.
      </p>
    </a>
  );
}
  
export const DordleBotCard = () => {
  return (
    <a 
      href="https://github.com/joseph-beck/hackaway-v6"
      className={`group ${common.box}`} 
      id="dordle-bot"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 
        className={`${inter.className} ${common.boxTitleText}`}>
        Hackaway v6 Cordle Bot
        <span className="flex items-center gap-3 my-2">
          {NodeJsLogo()}
          {FirebaseLogo()}
        </span>
      </h2>

      <p 
        className={common.boxText}>
        Discord Competitive Wordle bot written in Javascript using a DiscordJs and a Firebase backend.
      </p>
    </a>
  );
}
  
export const CordleBotCard = () => {
  return (
    <a 
      href="https://github.com/joseph-beck/hackaway-v6"
      className={`group ${common.box}`} 
      id="dordle-bot"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 
        className={`${inter.className} ${common.boxTitleText}`}>
        Cordle Bot v2
        <span className="flex items-center gap-3 my-0">
          {GoLogo()}
          {MySqlLogo()}
        </span>
      </h2>

      <p 
        className={common.boxText}>
        An improved version of Cordle written in Go using a MySQL backend.
      </p>
    </a>
  );
}
  
export const RestAPICard = () => {
  return (
    <a 
      href="https://github.com/joseph-beck/go-rest"
      className={`group ${common.box}`} 
      id="dordle-bot"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 
        className={`${inter.className} ${common.boxTitleText}`}>
        Rest API
        <span className="flex items-center gap-3 my-0">
          {GoLogo()}
          {FirebaseLogo()}
        </span>
      </h2>

      <p 
        className={common.boxText}>
        Rest API written using Gin, using a Firebase backend.
      </p>
    </a>
  );
}

export const RoboticsProjectCard = () => {
  return (
    <a 
      href="https://github.com/joseph-beck/hangman-robot"
      className={`group ${common.box}`} 
      id="dordle-bot"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 
        className={`${inter.className} ${common.boxTitleText}`}>
        Hangman Robot
        <span className="flex items-center gap-3 my-0">
          {GoLogo()}
          {FirebaseLogo()}
        </span>
      </h2>

      <p 
        className={common.boxText}>
        LeJOS robot written in Java that plays hangman, using a Java server and Ruby client.
      </p>
    </a>
  );
}

export const LorenzAttractorCard = () => {
  return (
    <a 
      href="https://github.com/joseph-beck/lorenz-attractor"
      className={`group ${common.box}`} 
      id="dordle-bot"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 
        className={`${inter.className} ${common.boxTitleText}`}>
        Lorenz Attractor
        <span className="flex items-center gap-3 my-0">
          {GoLogo()}
          {FirebaseLogo()}
        </span>
      </h2>

      <p 
        className={common.boxText}>
        Chaotic attractor made using Three.js
      </p>
    </a>
  );
}

export const ThisWebsiteCard = () => {
  return (
    <a 
      href="https://github.com/joseph-beck/joseph-beck.vercel.app"
      className={`group ${common.box}`} 
      id="dordle-bot"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 
        className={`${inter.className} ${common.boxTitleText}`}>
        My website
        <span className="flex items-center gap-3 my-0">
          {TypescriptLogo()}
          {NextLogo()}
        </span>
      </h2>

      <p 
        className={common.boxText}>
        My portfolio website.
      </p>
    </a>
  );
}

export const RainCard = () => {
  return (
    <a 
      href="https://github.com/joseph-beck/rain"
      className={`group ${common.box}`} 
      id="dordle-bot"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 
        className={`${inter.className} ${common.boxTitleText}`}>
        Rain
        <span className="flex items-center gap-3 my-0">
          {RustLogo()}
          {IcedLogo()}
        </span>
      </h2>

      <p 
        className={common.boxText}>
        A desktop app for playing a variety of ambient sounds.
      </p>
    </a>
  );
}
