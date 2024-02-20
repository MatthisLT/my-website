module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  rules: {
    // Specify percentage or number notation for alpha-values.
    'alpha-value-notation': 'number',
    // Specify a pattern for class selectors.
    'selector-class-pattern': null,
    // Specify a pattern for id selectors.
    'selector-id-pattern': null,
    // Disallow vendor prefixes for properties.
    'property-no-vendor-prefix': null,
    // Disallow vendor prefixes for selectors.
    'selector-no-vendor-prefix': null,
    // Disallow empty blocks.
    'block-no-empty': [
      true,
      {
        severity: 'warning',
      },
    ],
    'order/order': [
      { type: 'at-rule', name: 'import' },
      { type: 'at-rule', name: 'extend' },
      { type: 'at-rule', name: 'apply' },
      // { type: 'at-rule', name: 'include' },
      { type: 'at-rule', name: 'mixin' },
      { type: 'at-rule', name: 'add-mixin' },
      'dollar-variables',
      'at-variables',
      'custom-properties',
      'declarations',
      {
        type: 'rule',
        selector: /^&::[\w-]+/,
        hasBlock: true,
      },
      'rules',
      { type: 'at-rule', name: 'media', hasBlock: true },
    ],
  },
};
