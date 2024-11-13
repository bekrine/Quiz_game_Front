export interface Question{
    difficulty:number,
    question_id?:number
}

export interface QuestionTopic{
    id:number,
    questions?:Question[],
    topic_name:string
}
export interface Topic{
    id:number,
    topic_name:string
}

export interface Answer {
    answer_text: string,
    id: number,
}

export interface IsCorrect{
    is_correct:boolean,
    answer_id:number
}