module.exports = {
  "extends": ["standard"],
  "env": {
    "node": true,
  },
  "rules": {
    "no-unused-expressions": ["error", {
      "allowShortCircuit": false,
      "allowTernary": false,
      "allowTaggedTemplates": false,
    }],
    "max-len": ["error", {
      "code": 80,
      "comments": 80,
      "ignoreTemplateLiterals": true,
    }],
    "semi": ["error", "always"],
    "semi-style": ["error", "last"],
    "space-before-function-paren": ["error", "never"],
    "no-var": "error",
    "prefer-const": "error",
    "comma-dangle": ["error", "always-multiline"],
    "curly": ["error", "all"],
    "no-shadow": ["error", {"builtinGlobals": true, "hoist": "all", "allow": []}],
    "no-redeclare": ["error", { "builtinGlobals": true }],
    "no-param-reassign": "error",
    "operator-linebreak": ["error", "before"],
    "no-console": "error",
    "standard/no-callback-literal": 0,
    "import/prefer-default-export": 0,
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: ["const", "let", "var"], next: "*"},
      { blankLine: "always", prev: "*", next: ["return", "block-like", "multiline-expression"]},
      { blankLine: "always", prev: "*", next: ["const", "let", "var"]},
      { blankLine: "any", prev: ["const", "let", "var"], next: ["const", "let", "var"]},
    ],
    "brace-style": ["error", "1tbs"],
    "object-curly-newline": [2, {
      "ObjectExpression": {
        "consistent": true,
        "minProperties": 4,
      },
    }],
    "no-prototype-builtins": 0,
    "function-paren-newline": ["error", "consistent"],
    "comma-dangle": ['error', {
      arrays: "always-multiline",
      objects: "always-multiline",
      imports: "always-multiline",
      exports: "always-multiline",
      functions: "always-multiline",
    }],
    indent: ["error", {
      "SwitchCase": 1,
      "VariableDeclarator": 1,
      "outerIIFEBody": 1,
      // MemberExpression: null,
      "FunctionDeclaration": {
        parameters: 1,
        body: 1
      },
      "FunctionExpression": {
        parameters: 1,
        body: 1,
      },
      "CallExpression": {
        arguments: 1,
      },
      "ArrayExpression": 1,
      "ObjectExpression": 1,
      "ImportDeclaration": 1,
      "flatTernaryExpressions": false,
      "ignoredNodes": ['JSXElement', 'JSXElement > *', 'JSXAttribute', 'JSXIdentifier', 'JSXNamespacedName', 'JSXMemberExpression', 'JSXSpreadAttribute', 'JSXExpressionContainer', 'JSXOpeningElement', 'JSXClosingElement', 'JSXFragment', 'JSXOpeningFragment', 'JSXClosingFragment', 'JSXText', 'JSXEmptyExpression', 'JSXSpreadChild'],
      "ignoreComments": false,
    }]
  },
  "parser": "@babel/eslint-parser",
  "parserOptions": {
    "requireConfigFile": false,
    "sourceType": "module",
  },
};
