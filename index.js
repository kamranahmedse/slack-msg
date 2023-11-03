#!/usr/bin/env node

if (!process.env.TOKEN || !process.env.CHANNEL) {
  throw new Error('Please set the TOKEN and CHANNEL environment variables.');
}

const slackToken = process.env.TOKEN;
const slackChannel = process.env.CHANNEL;

async function sendMessage(token, channel, message) {
  return fetch('https://slack.com/api/chat.postMessage', {
    method: 'post',
    body: JSON.stringify({
      channel,
      blocks: [
        {
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: message,
          },
        },
      ],
    }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${token}`,
    },
  });
}

// Usage: Pass the message as a command line argument
if (process.argv.length < 3) {
  console.error('Usage: slack-msg "Your message here"');
}

const message = process.argv[2];
sendMessage(slackToken, slackChannel, message)
  .then(() => console.log('Message sent successfully'))
  .catch((error) => console.error(error));