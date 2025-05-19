declare module "react-simple-chatbot" {
  import * as React from "react";

  export interface StepFunctionProps {
    previousValue: string;
    steps: { [key: string]: { message?: string } };
    triggerNextStep: () => void;
  }

  export interface Step {
    id: string;
    message?: string | ((props: StepFunctionProps) => string);
    user?: boolean;
    trigger?: string | ((props: StepFunctionProps) => string);
    end?: boolean;
    component?: React.ReactNode;
    asMessage?: boolean;
    delay?: number;
    waitAction?: boolean;
  }

  export interface ChatBotProps {
    steps: Step[];
    floating?: boolean;
    headerTitle?: string;
    placeholder?: string;
    botAvatar?: string;
    userAvatar?: string;
    style?: React.CSSProperties;
    className?: string;
    hideSubmitButton?: boolean;
    recognitionEnable?: boolean;
  }

  export default class ChatBot extends React.Component<ChatBotProps> {}
}
