// Copyright (c) Meta Platforms, Inc. and affiliates.

// The ferill theme. `astryx experimental theme editor` wrote this file once and never changes it again.
// The checked settings live in ferill.settings.json and the generated ferill.settings.ts;
// change them with `astryx experimental theme editor set ferill ...`. Add your own changes below: they win over the settings.
import {defineTheme} from '@astryxdesign/core/theme';
import {ferillSettings} from './ferill.settings';

export const ferillTheme = defineTheme({
  extends: ferillSettings,
  name: 'ferill',
  tokens: {
    '--color-background-body': ['#f7faf6', '#101a18'],
    '--color-background-surface': ['#fffdf7', '#172421'],
    '--color-background-card': ['#f0f6ef', '#1b2b26'],
    '--color-background-muted': ['#e8f3ec', '#20312a'],
    '--color-text-primary': ['#173b3d', '#f0f5ef'],
    '--color-text-secondary': ['#49655c', '#b9c8bf'],
    '--color-border': ['#d4e2d8', '#3b4f47'],
    '--color-border-emphasized': ['#b9d0c2', '#526c5f'],
  },
});
