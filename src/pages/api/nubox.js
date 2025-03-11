import openai from '@/utils/openai'
import data from './context.json'

export default async function handler(req, res) {

    if (!req.body.message) {
        return res.status(400).json({ error: 'Nenhuma mensagem foi enviada.' })
    }

    const messages = []
    data.contexts.forEach(content => {
        messages.push({role: "system", content: content})
    });

    messages.push({ role: "user", content: req.body.message })

    const completion = await openai.chat.completions.create({
        messages: messages,
        model: "deepseek-chat",
        store: true
    });

    const response = completion.choices[0].message.content;
    
    res.status(200).json({ message: response})
}