import type { Preview } from "@storybook/react";
import React from 'react';
import {ThemeProvider} from "@mui/material/styles";
import {globalThemePalette} from "../src/muiDefaults";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
        <ThemeProvider theme={globalThemePalette}>
          <Story />
        </ThemeProvider>
    ),
  ],
};

export default preview;
