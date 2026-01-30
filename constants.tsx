
import { TranslationDictionary, Match, NewsItem } from './types';

export const TRANSLATIONS: TranslationDictionary = {
  home: { en: 'Home', no: 'Hjem' },
  about: { en: 'About', no: 'Om' },
  membership: { en: 'Membership', no: 'Medlemskap' },
  schedule: { en: 'Matches', no: 'Kamper' },
  news: { en: 'News', no: 'Nyheter' },
  contact: { en: 'Contact', no: 'Kontakt' },
  joinUs: { en: 'Join Club', no: 'Bli Med' },
  upcomingMatches: { en: 'Fixtures', no: 'Kommende' },
  welcome: { 
    en: 'Sandvika Cricket Klubb', 
    no: 'Sandvika Cricket Klubb' 
  },
  heroSub: {
    en: 'Play Cricket. Play Sandvika.',
    no: 'Spill Cricket. Spill Sandvika.'
  },
  history: { en: 'History', no: 'Historie' },
  mission: { en: 'Mission', no: 'Mål' },
  signUp: { en: 'Apply', no: 'Søk' },
  name: { en: 'Full Name', no: 'Navn' },
  email: { en: 'Email', no: 'E-post' },
  submit: { en: 'Submit', no: 'Send' },
  liveNow: { en: 'LIVE', no: 'LIVE' },
};

export const MOCK_MATCHES: Match[] = [
  {
    id: '1',
    date: '2024-05-15',
    time: '14:00',
    teamA: 'Sandvika CC',
    teamB: 'Oslo Kings',
    scoreA: 145,
    scoreB: 120,
    venue: 'Sandvika Ground',
    status: 'live',
    eventType: 'League'
  },
  {
    id: '2',
    date: '2024-05-20',
    time: '11:00',
    teamA: 'Sandvika CC',
    teamB: 'Stavanger Stars',
    venue: 'Kadettangen Ground',
    status: 'upcoming',
    eventType: 'League'
  },
  {
    id: '3',
    date: '2024-05-22',
    time: '10:00',
    teamA: 'Bergen XI',
    teamB: 'Sandvika CC',
    venue: 'Bergen Field',
    status: 'upcoming',
    eventType: 'Friendly'
  }
];

export const LEAGUE_TABLE = [
  { pos: 1, team: 'Oslo Kings', p: 5, w: 4, l: 1, pts: 80 },
  { pos: 2, team: 'Sandvika CC', p: 5, w: 3, l: 2, pts: 65 },
  { pos: 3, team: 'Stavanger Stars', p: 4, w: 2, l: 2, pts: 40 },
  { pos: 4, team: 'Bergen XI', p: 5, w: 1, l: 4, pts: 20 },
];

export const MOCK_NEWS: NewsItem[] = [
  {
    id: '1',
    title: { en: 'Sandvika CC Academy Trials', no: 'Opptak til Sandvika CC Akademi' },
    excerpt: { en: 'Registration for the 2024 Junior Academy is now open.', no: 'Registrering for Juniorakademiet 2024 er nå åpen.' },
    date: '10 MAY 2024',
    image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: { en: 'New Pitch Covers Arrive', no: 'Nye banedekker har ankommet' },
    excerpt: { en: 'Club investment ensures matches play on despite the weather.', no: 'Klubbinvestering sikrer kampgjennomføring tross været.' },
    date: '08 MAY 2024',
    image: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&q=80&w=800'
  }
];
