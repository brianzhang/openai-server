import config from './config/index.js';
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: config.ORG,
  apiKey: config.SK,
});
const openai = new OpenAIApi(configuration);
const completion = await openai.createCompletion({
  model: "text-davinci-002",
  prompt: "Hello world",
});

console.log(completion.data.choices[0].text);