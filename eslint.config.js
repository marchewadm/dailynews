import antfu from "@antfu/eslint-config";

export default antfu({
  stylistic: {
    indent: 2,
    quotes: "double",
    semi: true,
  },
  vue: {
    overrides: {
      "vue/max-attributes-per-line": ["error", {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      }],
      "vue/no-multi-spaces": ["error"],
    },
  },
  typescript: {
    overrides: {
      "ts/consistent-type-definitions": ["error", "type"],
    },
  },
});
