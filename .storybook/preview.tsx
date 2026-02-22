import type { Preview } from "@storybook/react-vite";
import React from "react";

import "../src/index.css";

const preview: Preview = {
  globalTypes: {
    theme: {
      description: "Theme",
      defaultValue: "dark",
      toolbar: {
        title: "Theme",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
      },
    },
  },

  decorators: [
    (Story, context) => {
      const root = document.documentElement;
      const theme = context.globals.theme as string;

      root.classList.toggle("dark", theme === "dark");
      root.style.colorScheme = theme === "dark" ? "dark" : "light";
      root.style.backgroundColor = "hsl(var(--background))";
      document.body.style.backgroundColor = "hsl(var(--background))";

      return (
        <div
          className={`${theme} bg-background text-foreground antialiased p-8 flex items-center justify-center`}
          style={{ backgroundColor: "hsl(var(--background))" }}
        >
          <div className="w-full max-w-[800px]">
            <Story />
          </div>
        </div>
      );
    },
  ],

  parameters: {
    options: {
      storySort: {
        order: [
          "Getting Started",
          ["Welcome", "Installation"],
          "Foundations",
          ["Colors", "Typography", "Border Radius", "Shadows", "Spacing"],
          "Components",
          "Patterns",
          "Guidelines",
        ],
      },
    },

    viewport: {
      options: {
        mobile: { name: "Mobile", styles: { width: "375px", height: "667px" } },
        tablet: { name: "Tablet", styles: { width: "768px", height: "1024px" } },
        desktop: { name: "Desktop", styles: { width: "1440px", height: "900px" } },
      }
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },

  initialGlobals: {
    viewport: {
      value: "desktop",
      isRotated: false
    }
  }
};

export default preview;
