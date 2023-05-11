/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');

const args = process.argv.slice(2);
const parsedArgs = args.reduce((p, c) => {
  const [key, value] = c.split('=');
  Object.assign(p, {
    [key]: value,
  });
  return p;
}, {});

const { env } = parsedArgs;

const content = {
  production: 'https://cos.xx-pbc.cos.tg.unicom.local/622622992799:uiue',
  development: 'https://cos.gz-tst.cos.tg.unicom.local/622622992799:uiue',
};

const environmentSrc = `export default {
  url: '${content[env]}',
};
`;

fs.writeFileSync('src/utils/config.ts', environmentSrc);
