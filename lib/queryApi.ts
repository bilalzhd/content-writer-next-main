import openai from "./chatgpt";

export default async function query(prompt: string, model: string) {
    const res = await openai.createCompletion({
        model,
        prompt,
        temperature: 0.9,
        top_p: 1,
        max_tokens: 100,
        frequency_penalty: 0,
        presence_penalty: 0,
    }).then((res) => {
        return {
            text: res.data.choices[0].text,
            tokensUsed: res.data.usage?.total_tokens
    }}).catch((err) => `Content Writer could not write content for that because ${err.message}`);

    return res;
}

export async function newQuery(prompt: string, model: string) {
    try {
        const res = await openai.createCompletion({
            model,
            prompt,
            temperature: 0.9,
            top_p: 1,
            max_tokens: 100,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
        const tokensUsed = res.data.usage?.total_tokens
        const text = res.data.choices[0].text
        return {tokensUsed, text}
    } catch (err) {
        console.log(err)
    }
}