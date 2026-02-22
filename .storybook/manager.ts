import { addons } from 'storybook/manager-api';
import { GLOBALS_UPDATED, SET_GLOBALS } from 'storybook/internal/core-events';
import { themes } from 'storybook/theming';

type ThemeMode = 'light' | 'dark';

const DEFAULT_THEME: ThemeMode = 'dark';

function isDarkTheme(theme: unknown): boolean {
  if (theme === 'light') return false;
  if (theme === 'dark') return true;
  return DEFAULT_THEME === 'dark';
}

function applyManagerTheme(theme: unknown) {
  const dark = isDarkTheme(theme);

  addons.setConfig({
    theme: dark ? themes.dark : themes.light,
    sidebar: {
      showRoots: true,
    },
  });

  // Keep the manager DOM in sync too (useful for any CSS that relies on `.dark`).
  document.documentElement.classList.toggle('dark', dark);
  document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
}

// Initialize with the default so the first paint matches our preview default.
applyManagerTheme(DEFAULT_THEME);

const channel = addons.getChannel();
channel.on(GLOBALS_UPDATED, ({ globals }) => applyManagerTheme(globals?.theme));
channel.on(SET_GLOBALS, ({ globals }) => applyManagerTheme(globals?.theme));
