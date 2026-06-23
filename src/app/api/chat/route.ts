import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

// Define interface for message history items
interface HistoryItem {
  sender: "bot" | "user";
  text: string;
}

export async function POST(request: Request) {
  try {
    const { question, history } = (await request.json()) as {
      question: string;
      history: HistoryItem[];
    };

    if (!question) {
      return NextResponse.json(
        { error: "A pergunta (question) é obrigatória." },
        { status: 400 }
      );
    }

    // 1. Read the ABOUTLOGOS.md file for context
    let contextData = "";
    try {
      const filePath = path.join(process.cwd(), "ABOUTLOGOS.md");
      contextData = await fs.readFile(filePath, "utf-8");
    } catch (err) {
      console.error("Erro ao ler o arquivo ABOUTLOGOS.md:", err);
      // Fallback in case the file is deleted or not found
      contextData = "Grupo LOGOS é focado em palestras de alta performance lideradas por Deryk Rodrigues.";
    }

    // 2. Check if GEMINI_API_KEY is configured
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Friendly message explaining how to configure the API key
      const demoResponse = `[BRIDGE_OFFLINE // AVISO DO SISTEMA]

Olá! A ponte de comunicação com o cérebro da IA está desativada porque a variável de ambiente **\`GEMINI_API_KEY\`** não foi configurada.

### Como ativar:
1. Crie um arquivo chamado \`.env.local\` na raiz do projeto.
2. Adicione a sua chave do Gemini da seguinte forma:
   \`\`\`env
   GEMINI_API_KEY=sua_chave_aqui
   \`\`\`
3. Reinicie o servidor de desenvolvimento.

---

### Demonstração de Resposta (Modo offline):
Eu sou o assistente virtual do **Deryk Rodrigues**. Como a chave está ausente, aqui estão alguns fatos sobre nós baseados no arquivo \`ABOUTLOGOS.md\`:
- O **Grupo LOGOS** baseia-se na razão e na lógica estruturada, simbolizado pela coruja da sabedoria.
- Evitamos coachings motivacionais e focamos em **métodos práticos** e consistência estoica.
- Deryk ministra palestras em 6 temas principais, incluindo *Mudança de Mentalidade Racional* e *Liderança de Alta Performance*.
- Alunos pós-palestras podem acessar o portal exclusivo em [https://academylogos.com.br/login](https://academylogos.com.br/login).

*O que você gostaria de saber? Assim que a chave for inserida, estarei 100% online!*`;

      return NextResponse.json({ response: demoResponse });
    }

    // 3. Prepare the conversation history for Gemini API
    // Gemini API requires alternating user/model contents, starting with user.
    const contents = [];
    let firstUserFound = false;

    if (history && Array.isArray(history)) {
      for (const msg of history) {
        if (msg.sender === "user") {
          firstUserFound = true;
          contents.push({
            role: "user",
            parts: [{ text: msg.text }],
          });
        } else if (msg.sender === "bot") {
          // Only include model turns if they follow a user turn (Gemini requirement)
          if (firstUserFound) {
            contents.push({
              role: "model",
              parts: [{ text: msg.text }],
            });
          }
        }
      }
    }

    // Append the current question
    contents.push({
      role: "user",
      parts: [{ text: question }],
    });

    // 4. Construct system instruction
    const systemInstruction = `Você é o Deryk AI Bridge, o assistente virtual oficial e altamente inteligente do palestrante e idealizador Deryk Rodrigues e do Grupo LOGOS.
Seu objetivo é apresentar o trabalho do Deryk e do Grupo LOGOS de maneira elegante, racional, assertiva e profissional, alinhado com a filosofia de tomada de decisões baseada na razão, lógica e fatos (estoicismo, neurociência, ciência comportamental).

Regras de comportamento:
1. **Tom e Voz**: Use um tom profissional, direto, elegante e levemente intelectual/técnico (estilo terminal premium). Seja cordial, mas evite sentimentalismo exagerado ou jargões vazios de autoajuda.
2. **Base de Conhecimento**: Responda às perguntas utilizando o contexto institucional fornecido abaixo. Se a pergunta não puder ser respondida com base no contexto, responda de forma honesta, dizendo que não possui essa informação específica, mas direcione o usuário para preencher o formulário de proposta ou entrar em contato.
3. **Formatação**: Use formatação Markdown rica (títulos H2, listas, tabelas, links). Quando mencionar links, garanta que estejam no formato padrão do Markdown.
4. **Portal do Aluno**: Se o usuário for um aluno ou perguntar sobre material de apoio, slides ou aulas complementares pós-palestra, sempre oriente-o a acessar o Portal do Aluno no link: https://academylogos.com.br/login usando as credenciais recebidas.
5. **Propostas**: Se o usuário demonstrar interesse em contratar, solicitar orçamento ou agendar palestras, oriente-o a clicar no botão "Solicitar Proposta" para abrir o modal de proposta no site.

Contexto Institucional (ABOUTLOGOS.md):
${contextData}`;

    // 5. Query the Gemini API using native fetch
    const modelName = "gemini-2.5-flash"; // Standard high-speed model
    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

    const payload = {
      contents,
      systemInstruction: {
        parts: [{ text: systemInstruction }],
      },
      generationConfig: {
        temperature: 0.3,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 2048,
      },
    };

    const response = await fetch(geminiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errText = await response.text();
      console.error("Gemini API Error:", errText);
      throw new Error(`Erro na API do Gemini: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "Desculpe, não consegui processar sua resposta no momento.";

    return NextResponse.json({ response: botResponse });
  } catch (error: any) {
    console.error("Erro na API Route /api/chat:", error);
    return NextResponse.json(
      { error: "Erro interno no servidor de chat.", details: error.message },
      { status: 500 }
    );
  }
}
