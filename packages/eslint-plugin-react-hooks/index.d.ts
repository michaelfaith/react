import {ESLint, Linter, Rule} from 'eslint';

declare const plugin: ESLint.Plugin & {
  meta: {
    name: string;
    version: string;
  };
  configs: {
    'recommended-legacy': Linter.LegacyConfig;
    recommended: Linter.LegacyConfig;
    'recommended-latest': Linter.FlatConfig;
  };
  rules: {
    [key: string]: Rule.RuleModule;
  };
};

export default plugin;
