#!usr/bin/env zx
const fs = require('fs');
const commandWrapper = require('./commandWrapper');

const zipRecord = {
  client: [
    'client/.next',
    'client/package.json',
    'client/package-lock.json',
    'client/public'
  ],
  server: [
    'server/',
  ]
};

const totalSteps = 5;
let currentStep = 0;

async function cwr(command, skip, message) {
  currentStep += 1;
  message = `[${currentStep}/${totalSteps}] ${message}`;
  await commandWrapper(command, skip, message);
}

async function zip() {
  const GITHUB_WORKSPACE = process.env.GITHUB_WORKSPACE;

  const filesToZip = [
    ...zipRecord.client,
    ...zipRecord.server
  ];

  fs.writeFileSync(
    `${GITHUB_WORKSPACE}/files_to_zip_web.txt`,
    filesToZip.join('\n'),
    'utf-8'
  );

  fs.mkdirSync(`${GITHUB_WORKSPACE}/zip`);

  await cwr(
    () =>
      $`cat ${GITHUB_WORKSPACE}/files_to_zip_web.txt | zip -Z bzip2 -r@ ${GITHUB_WORKSPACE}/zip/ticket-tracker.zip`,
    false,
    'zip code'
  );
}

zip();
