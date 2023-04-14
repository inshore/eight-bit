import { Configuration, OpenAIApi } from 'openai';

export async function getResponse (prompt: string): Promise<string> {
  console.log(prompt)
  try {
    const configuration = new Configuration({
      apiKey: process.env.OPEN_AI_API_SECRET_KEY
    });
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createCompletion({
      max_tokens: 40,
      model: 'text-davinci-003',
      prompt
    });

    return String(completion.data.choices[0].text);
  } catch (error) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
}
