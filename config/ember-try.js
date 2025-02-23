'use strict';

const getChannelURL = require('ember-source-channel-url');

module.exports = function () {
  return Promise.all([
    getChannelURL('release'),
    getChannelURL('beta'),
    getChannelURL('canary')
  ]).then(urls => {
    return {
      usePnpm: true,
      scenarios: [
        {
          name: 'ember-3.15', // First Octane release
          npm: {
            devDependencies: {
              'ember-source': '~3.15.0'
            }
          }
        },
        {
          name: 'ember-3.16',
          npm: {
            devDependencies: {
              'ember-source': '~3.16.0'
            }
          }
        },
        {
          name: 'ember-3.20',
          npm: {
            devDependencies: {
              'ember-source': '~3.20.0'
            }
          }
        },
        {
          name: 'ember-3.24',
          npm: {
            devDependencies: {
              'ember-source': '~3.24.0'
            }
          }
        },
        {
          name: 'ember-release',
          npm: {
            devDependencies: {
              'ember-source': urls[0]
            }
          }
        },
        {
          name: 'ember-beta',
          npm: {
            devDependencies: {
              'ember-source': urls[1]
            }
          }
        },
        {
          name: 'ember-canary',
          npm: {
            devDependencies: {
              'ember-source': urls[2]
            }
          }
        },
        {
          name: 'ember-default',
          npm: {
            devDependencies: {}
          }
        }
      ]
    };
  });
};
