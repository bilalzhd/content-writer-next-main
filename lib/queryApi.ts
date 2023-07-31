import openai from "./chatgpt";

export async function newQuery(prompt: string, model: string) {
    try {
        const res = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [
                {role: 'system', content: "You are a helpful assistant"},
                {role: 'user', content: prompt},
            ],
            temperature: 0.9,
            // top_p: 1,
            // max_tokens: 1000,
            // frequency_penalty: 0,
            // presence_penalty: 0,
        })
        const tokensUsed = res.data.usage?.total_tokens
        const text = res.data.choices[0].message
        return {
            tokensUsed, 
            text: text?.content
        }
    } catch (err: any) {
        console.error(err);
        return;
    }
}
