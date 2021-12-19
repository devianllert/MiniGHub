/**
 * Declare known environment variables.
 * Enables auto-completion when using "process.env.".
 * Makes it easier to find env vars, and helps avoid typo mistakes.
 *
 * Unlisted env vars will still be usable.
 *
 * @see https://stackoverflow.com/a/53981706/2391795
 */
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GRAPHQL_API_KEY: string;
      NODE_ENV: 'development' | 'production';
    }
  }
}

// Trick to make this a valid module:
// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
