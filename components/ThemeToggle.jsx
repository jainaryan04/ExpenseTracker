import useDarkMode from '../hooks/useDarkMode';

const ThemeToggle = () => {
  const [theme, setTheme, mounted] = useDarkMode();

  if (!mounted) return null;

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? '🌞 Light Mode' : '🌙 Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
