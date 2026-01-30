
export type Language = 'en' | 'no';

export interface Match {
  id: string;
  date: string;
  time: string;
  teamA: string;
  teamB: string;
  scoreA?: number;
  scoreB?: number;
  venue: string;
  status: 'upcoming' | 'live' | 'completed';
  eventType: 'League' | 'Friendly' | 'Tournament';
}

export interface NewsItem {
  id: string;
  title: Record<Language, string>;
  excerpt: Record<Language, string>;
  date: string;
  image: string;
}

export interface TranslationDictionary {
  [key: string]: Record<Language, string>;
}
