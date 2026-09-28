export interface Tour {
  id: number;
  title: string;
  category: 'historical' | 'cultural' | 'adventure' | 'festival' | 'daytour' | 'fullday' | 'halfday';
  duration: '1' | '3-5' | '7+';
  durationLabel: string;
  destination: string;
  price: string;
  image: string;
  description: string;
}

export interface Attraction {
  title: string;
  tag: string;
  image: string;
  description: string;
  link: string;
  fullOverview?: string;
  highlights?: string[];
  bestTimeToVisit?: string;
  location?: string;
}
