# slack-msg
> Dead simple CLI to send messages to Slack

## Install

You can either use `npx` or install it globally:

```
npm install -g slack-msg
```

## Usage

After installation, you can send a message to a Slack channel with a single command:

```shell
TOKEN=XXX CHANNEL=YYY slack-msg "Your message in markdown"
```

Make sure to replace `XXX` with your Slack token and `YYY` with the channel ID. You can create a Slack app and generate a token from [here](https://api.slack.com/tutorials/tracks/getting-a-token).

## License

MIT © [Kamran Ahmed](https://twitter.com/kamrify)