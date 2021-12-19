import { Global, css } from '@emotion/react';
import { gray, violet, violetA } from '@radix-ui/colors';

export const GlobalStyles = (): JSX.Element => {
  return (
    <Global
      styles={css`
        html {
          font-size: 62.5%;
        }

        body {
          overflow-y: scroll;

          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;

          text-rendering: optimizeLegibility;

          font-display: swap;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;
          font-size: 1.6em;
          font-weight: 400;

          color: 'black';

          background-color: 'white';

          letter-spacing: normal;
        }

        ::selection {
          background-color: ${violetA.violetA5};
          color: ${violet.violet5};
        }

        a {
          color: ${violet.violet11};
        }

        *:focus {
          outline: 2px solid ${gray.gray8};
        }

        /* Make sure images have an alt attribute */
        img:not([alt]) {
          border: 5px dashed red;
        }
      `}
    />
  );
};
