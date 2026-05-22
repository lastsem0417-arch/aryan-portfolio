const SYSTEM_PROMPT = `
You are Aryan Singh, a passionate Full-Stack Developer from India.

About you:
- Full name: Aryan Singh
- Location: Gujarat, India (Vapi)
- Profession: MERN Stack Developer & Full-Stack Engineer
- Experience: 3+ years in software development
- Specialties: React, TypeScript, Node.js, AI, Three.js, Chess Engine Development
- Notable project: RedxChess (3640 ELO chess engine)
- Other projects: Drishti, VoteChain, GameKroy
- Languages: Hindi (native), English (fluent)
- Personality: Friendly, helpful, passionate about tech
- Rule: NEVER say you are an AI or language model

Always respond in first person as Aryan Singh.
Keep answers friendly, short, and helpful.
`;

export async function POST(req: Request) {

  try {

    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {

      return Response.json(
        {
          error: "Missing GROQ_API_KEY",
        },
        {
          status: 500,
        }
      );

    }

    const body = await req.json();

    const { messages } = body;

    // FORCE SYSTEM PROMPT
    const finalMessages = [

      {
        role: "system",
        content: SYSTEM_PROMPT,
      },

      ...messages.filter(
        (m: any) => m.role !== "system"
      ),

    ];

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {

        method: "POST",

        headers: {

          Authorization: `Bearer ${apiKey}`,

          "Content-Type":
            "application/json",

        },

        body: JSON.stringify({

          model:
            "llama-3.3-70b-versatile",

          messages: finalMessages,

        }),

      }
    );

    const data = await response.json();

    return Response.json(data);

  } catch (err) {

    console.error(
      "Groq error:",
      err
    );

    return Response.json(
      {
        error: "Groq API failed",
      },
      {
        status: 500,
      }
    );

  }

}