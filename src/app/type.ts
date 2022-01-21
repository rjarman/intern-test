export interface MultipleChoice {
  question: string;
  choices: string[];
}

export interface LinearScale {
  question: string;
  description: string;
  range: {
    lower: number;
    upper: number;
  };
  labels: {
    left: string;
    right: string;
  };
}

export interface Checkbox {
  question: string;
  answers: string[];
}

export interface ShortText {
  question: string;
}

export interface FileUpload {
  question: string;
  allowType: string;
  maxSize: string;
}

export interface Database<T> {
  id: string;
  title: string;
  description: string;
  date: string;
  updateDate?: string;
  question: T;
}
