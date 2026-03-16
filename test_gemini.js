import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';

const apiKey = 'AIzaSyBxo42kaCUEibpXeY1kBjvVkjui1-5Qt4E';
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", systemInstruction: "Test prompt" });

async function run() {
  try {
    const chat = model.startChat({ history: [] });
    const result = await chat.sendMessage("Hello there!");
    fs.writeFileSync('out.txt', 'Success: ' + result.response.text());
  } catch (error) {
    fs.writeFileSync('out.txt', 'Error: ' + error.stack);
  }
}

run();
