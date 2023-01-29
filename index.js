import config from './config/index.js';
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: config.ORG,
  apiKey: config.SK,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();
console.log(response.data);