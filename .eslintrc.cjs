module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "plugins": ["react", "react-hooks"],
    "rules": {
        "react/prop-types": "off",
        "no-console": 1,
        "react/sort-comp": [1, {
            "order": [
                "type-annotations",
                "static-methods",
                "lifecycle",
                "everything-else",
                "render"
            ]
        }],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "no-mixed-spaces-and-tabs": 0,
        "react/react-in-jsx-scope": "off"
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    }
}

