import openai from "./chatgpt";

export default async function query(prompt: string, model: string){
    const res = await openai.createCompletion({
        model,
        prompt,
        temperature: 0.9,
        top_p: 1,
        max_tokens: 100,
        frequency_penalty: 0,
        presence_penalty: 0,
    }).then((res) => res.data.choices[0].text).catch((err) => `Content Writer could not write content for that because ${err.message}`);

    return res;
}