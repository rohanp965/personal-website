import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const experiences = [
  {
    company: 'Wolters Kluwer',
    title: 'Data Scientist',
    period: 'Feb 2019 - Present',
    description:
      'Lead development of machine learning models and data pipelines. Implemented new features, improved performance, and mentored junior developers.',
    achievements: [
      'Increased prescreening efficiency 60% by deploying a classification model which predicts whether a given sentence is relevant or not with business context using BERT, PyTorch, Transformers(Hugging Face), Docker and FastAPI.',
      'Increased prescreening efficiency a further 15% by deploying a text similarity searching model which helps in finding relevant sentences in prescreened texts using Word Embeddings (sentence transformers), Docker and FastAPI.',
      'Deployed an end-to-end pipeline on AWS using S3, Textract, DynamoDB, Lambda Functions and Open Search to parse millions of PDF documents helping in classifying , searching and extracting key information to generate business insights and revenue.',
      'Formulated a POC in collaboration with a new client which included reusing tagging capabilities and resulted in doubling the transactional volume in an existing product and increase in revenue.',
      'Collaborated in the innovation journey for AI/ML in action by deploying enterprise level generic ML/NLP capabilities which enabled reusability of code and a reduced time to market.',
      'Mentored 2 batches of Data Science - Summer Interns by helping create a project roadmap, provide technical and non-technical assistance and oversaw their recruitment and interview process.'
    ],
  },
  {
    company: 'Wolters Kluwer',
    title: 'Data Scientist Intern',
    period: 'Jun 2018 - Dec 2018',
    description:
      'Assisted in the development of machine learning models and data pipelines. Collaborated with senior data scientists to implement new features and improve existing ones.',
    achievements: [
      'Reduced 45% of implied labor for an internal product by deploying a production grade Clustering API which clusters similar meaning sentences to act as a client deliverable using Word Embeddings (sentence_transformers), Scikit-learn, Docker and FastAPI.',
      'Accelerated authoring efficiency by 15% for each requirement by highlighting key information needed by authors using a production grade Clause Extraction API built on NLP methodologies such as named entity recognition, sentence splitting, dependency parsing and constituency parsing which extracts relevant entities, dollar amounts, percentages and action verbs and uses Spacy, Stanford CoreNLP, Allen NLP, Docker and FastAPI.'
    ],
  },
  {
    company: 'Dun & Bradstreet',
    title: 'Part-time Student Consultant',
    period: 'Jan 2018 - Apr 2018',
    description:
      'Collaborated on a NLP project with other Columbia University graduate students to classify behavior of topics in news articles by using topic modeling algorithms like LDA.',
    achievements: [
      'Investigated the life cycle of these topics, their time based dependencies to analyze highs and lows in the future and analyze their impact on events and small businesses by matching with their relevant D-U-N-S number.'
    ],
  }
  // Add more experiences here
]

export default function WorkPage() {
  return (
    <div className="container max-w-4xl space-y-8 mx-auto flex flex-col items-center text-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Work Experience</h1>
        <p className="text-xl text-muted-foreground">
          A summary of my professional journey and key achievements.
        </p>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="space-y-1">
                <CardTitle className="text-2xl">{exp.company}</CardTitle>
                <CardDescription className="text-base">
                  {exp.title} • {exp.period}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>{exp.description}</p>
              <div>
                <h4 className="font-semibold">Key Achievements:</h4>
                <ul className="list-inside list-disc space-y-1 pt-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted-foreground">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}