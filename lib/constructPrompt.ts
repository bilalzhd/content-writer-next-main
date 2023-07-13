export const constructPrompt = (option: string, input: string) => {
    let prompt = "";

    if (option === "blog") {
        prompt = `Generate a Blog using primary keyword as ${input}`;
    } else if (option === "brand") {
        prompt = `Generate a brand name using this as my brand description, ${input}`;
    } else if (option === "business") {
        prompt = `Generate a business idea pitch using this as the business idea ${input}`;
    } else if (option === 'cta') {
        prompt = `Generate a call to action for my ad, product or landing page using this as the description ${input}`
    } else if (option === 'job') {
        prompt = `Generate a job description based on the role ${input}`;
    } else if (option === 'seo') {
        prompt = `Generate SEO friendly meta title using these as my target keywords ${input}`;
    } else if (option === 'song') {
        prompt = `Generate short lyrics based on a song idea that is ${input}`;
    } else if (option === 'video') {
        prompt = `Generate video ideas based on keywords & topics that are ${input}`;
    }

    return prompt;
};