import { Configuration, OpenAIApi } from 'openai';
import invariant from 'tiny-invariant';
invariant(process.env.OPEN_AI_API_SECRET_KEY, 'OpenAI OPEN_AI_API_SECRET_KEY must be set');

export async function getResponse (prompt: string): Promise<string> {
  const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_API_SECRET_KEY
  });
  const openai = new OpenAIApi(configuration);
  const promptMode = process.env.PROMPT_MODE !== null ? process.env.PROMPT_MODE : 'development';

  if (promptMode === 'live') {
    const completion = await openai.createCompletion({
      max_tokens: 40,
      model: 'text-davinci-003',
      prompt
    });

    return String(completion.data.choices[0].text);
  } else {
    return 'You are in ' + process.env.PROMPT_MODE + ' mode';
  }
}
