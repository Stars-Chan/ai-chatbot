export const DEFAULT_CHAT_MODEL: string = "chat-model";

export type ChatModel = {
  id: string;
  name: string;
  description: string;
};

export const chatModels: ChatModel[] = [
  {
    id: "chat-model",
    name: "DeepSeek Chat",
    description: "Advanced AI model with powerful reasoning capabilities",
  },
  {
    id: "chat-model-reasoning",
    name: "DeepSeek Reasoner",
    description:
      "Uses advanced chain-of-thought reasoning for complex problems",
  },
];
