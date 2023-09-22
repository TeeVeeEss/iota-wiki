/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

    // But you can create a sidebar manually
    evmSidebar: [
        {
            type: 'doc',
            label: 'Introduction',
            id: 'introduction',
        },
        {
            type: 'category',
            label: 'Getting Started',
            items: [
                {
                    type: 'doc',
                    label: 'Quickstart',
                    id: 'getting-started/quickstart',
                },
                {
                    type: 'doc',
                    label: 'Compatible Tools',
                    id: 'getting-started/compatible-tools',
                },
                {
                    type: 'doc',
                    label: 'Compatibility & Limitations',
                    id: 'getting-started/compatibility',
                },
            ],
        },
        {
            type: 'category',
            label: 'How To',
            items: [
                {
                    type: 'doc',
                    label: 'Use EVM in ISC',
                    id: 'how-tos/using',
                },
                {
                    type: 'doc',
                    label: 'Create a Basic Contract',
                    id: 'how-tos/create-a-basic-contract',
                },
                {
                    type: 'doc',
                    label: 'Create Custom Tokens',
                    id: 'how-tos/ERC20',
                },
                {
                    type: 'doc',
                    label: 'Create NFTs',
                    id: 'how-tos/ERC721',
                },
                {
                    type: 'category',
                    label: 'Use the Magic Contract',
                    items: [
                        {
                            type: 'doc',
                            label: 'Introduction',
                            id: 'how-tos/magic-contract/magic',
                        },
                        {
                            type: 'doc',
                            label: 'Call a Function',
                            id: 'how-tos/magic-contract/call-a-function',
                        },
                        {
                            type: 'doc',
                            label: 'Call a Native Contract',
                            id: 'how-tos/magic-contract/call-a-native-contract',
                        },
                        {
                            type: 'doc',
                            label: 'Send Tokens to L1',
                            id: 'how-tos/magic-contract/send-tokens-to-l1',
                        },
                    ],
                },
            ],
        },
        {
            type: 'category',
            label: 'Reference',
            items: [
                'reference/magic-contract',
                {
                    type: 'category',
                    label: 'Core Contracts',
                    items: [
                        {
                            type: 'doc',
                            label: 'Overview',
                            id: 'reference/core-contracts/overview',
                        },
                        {
                            type: 'doc',
                            label: 'root',
                            id: 'reference/core-contracts/root',
                        },
                        {
                            type: 'doc',
                            label: 'accounts',
                            id: 'reference/core-contracts/accounts',
                        },
                        {
                            type: 'doc',
                            label: 'blob',
                            id: 'reference/core-contracts/blob',
                        },
                        {
                            type: 'doc',
                            label: 'blocklog',
                            id: 'reference/core-contracts/blocklog',
                        },
                        {
                            type: 'doc',
                            label: 'governance',
                            id: 'reference/core-contracts/governance',
                        },
                        {
                            type: 'doc',
                            label: 'errors',
                            id: 'reference/core-contracts/errors',
                        },
                        {
                            type: 'doc',
                            label: 'evm',
                            id: 'reference/core-contracts/evm',
                        },
                    ],
                },
            ],
        },
    ],
};

