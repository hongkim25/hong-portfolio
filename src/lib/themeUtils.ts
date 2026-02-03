export type Theme = 'onyx' | 'paper' | 'midnight' | 'cream';

export function getPageTheme(pathname: string): Theme {
  // 1. HOME & TLTP -> "Onyx" (Deep Black)
  if (pathname === '/' || pathname === '/tltp') return 'onyx';
  
  // 2. THE BAKER -> "Midnight" (Navy/Engineering Blue)
  if (pathname === '/the-baker') return 'midnight';
  
  // 3. ABOUT -> "Paper" (Clean White)
  if (pathname === '/about') return 'paper';
  
  // 4. FALLBACK (404, etc) -> "Onyx"
  return 'onyx';
}

export function getThemeClasses(theme: Theme) {
  switch (theme) {
    case 'onyx': // Deep Black
      return {
        bg: 'bg-[#050505]',
        text: 'text-white',
        border: 'border-white/10',
        subtext: 'text-gray-500',
        hover: 'hover:bg-white/10'
      };
    case 'paper': // Bright White
      return {
        bg: 'bg-white',
        text: 'text-black',
        border: 'border-black/10',
        subtext: 'text-gray-500',
        hover: 'hover:bg-gray-100'
      };
    case 'midnight': // The Baker Blue
      return {
        bg: 'bg-[#0f172a]', // Slate 900
        text: 'text-blue-50',
        border: 'border-blue-500/20',
        subtext: 'text-blue-300/60',
        hover: 'hover:bg-blue-500/10'
      };
    case 'cream': // Soft Editorial (Optional 4th)
      return {
        bg: 'bg-[#F5F5F0]',
        text: 'text-[#1a1a1a]',
        border: 'border-[#1a1a1a]/10',
        subtext: 'text-[#1a1a1a]/60',
        hover: 'hover:bg-[#e0e0e0]'
      };
    default:
      return { bg: 'bg-black', text: 'text-white', border: 'border-white', subtext: 'text-gray-500', hover: '' };
  }
}