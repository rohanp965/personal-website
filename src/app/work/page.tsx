import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'

interface Product {
  name: string
  url?: string
  bullets: string[]
}

interface Experience {
  company: string
  title: string
  period: string
  description?: string
  products?: Product[]
  achievements?: string[]
}

const experiences: Experience[] = [
  {
    company: 'Wolters Kluwer',
    title: 'Data Scientist',
    period: 'Feb 2019 - Present',
    products: [
      {
        name: 'NILs AI Assist',
        url: 'https://www.wolterskluwer.com/en/solutions/onesumx-for-compliance-program-management/nils-ai-assist',
        bullets: [
          'Designed a production-scale RAG system for 600K+ documents, engineering semantic search with full provenance tracking and stateful conversation management accelerating regulatory compliance workflows by 70%.',
          'Established comprehensive RAG evaluation framework by curating gold-standard Q&A datasets, implementing user feedback loops, and driving iterative model refinement which achieved 80%+ accuracy across retrieval precision and answer quality metrics.',
        ],
      },
      {
        name: 'iLien Borrower Analytics',
        url: 'https://www.wolterskluwer.com/en/solutions/lien-solutions/ucc-filing-and-public-records-search/ilien-borrower-analytics',
        bullets: [
          'Architected an AWS pipeline (S3, Textract, DynamoDB, Lambda, OpenSearch) to parse millions of PDFs. Automated classification, search and extraction to generate business insights, reducing staff workload by 50%.',
          'Engineered multi-tiered search algorithm combining heuristics, priority scoring, and business rules for document retrieval, outperforming baseline keyword search and cutting manual review cycles by 40%.',
        ],
      },
      {
        name: 'OneSumX for Regulatory Change Management',
        url: 'https://www.wolterskluwer.com/en/solutions/onesumx-for-compliance-program-management/onesumx-for-regulatory-change-management',
        bullets: [
          'Led an NLP-based content pre-screening pipeline using NER, dependency and constituency parsing to extract actionable regulatory language. Filtered law citations by 48%, significantly reducing manual review burdens.',
          'Engineered a cross-jurisdictional clustering pipeline, reducing manual consolidation effort by 44% (125 to 70 hours) and enabling scalable reuse of regulatory requirements across multiple jurisdictions.',
        ],
      },
    ],
    achievements: [
      'Designed and executed 10+ POCs across 3 business units in collaboration with cross-functional stakeholders and product managers, deploying enterprise-level ML/NLP capabilities that enabled code reusability and reduced average time to market.',
      'Mentored 2 batches of Data Science - Summer Interns by defining a project roadmap, providing technical and non-technical assistance and also oversaw their recruitment and interview process.',
    ],
  },
  {
    company: 'Wolters Kluwer',
    title: 'Data Scientist Intern',
    period: 'Jun 2018 - Dec 2018',
    description:
      'Assisted in development of machine learning models and data pipelines. Collaborated with senior data scientists to implement new features and improve existing ones.',
    achievements: [
      'Reduced 45% of implied labor for an internal product by deploying a production grade Clustering API which clusters similar meaning sentences to act as a client deliverable using Word Embeddings (sentence_transformers), Scikit-learn, Docker and FastAPI.',
      'Accelerated authoring efficiency by 15% for each requirement by highlighting key information needed by authors using a production grade Clause Extraction API built on NLP methodologies such as named entity recognition, sentence splitting, dependency parsing and constituency parsing which extracts relevant entities, dollar amounts, percentages and action verbs and uses Spacy, Stanford CoreNLP, Allen NLP, Docker and FastAPI.',
    ],
  },
  {
    company: 'Dun & Bradstreet',
    title: 'Part-Time Student - Analytics Consultant',
    period: 'Jan 2018 - Apr 2018',
    description:
      'Led NLP-based student research project to classify and model topic behavior in 50k+ news articles using topic modeling algorithm (LDA), analyzing lifecycle patterns and time-based dependencies to forecast trend trajectories.',
    achievements: [
      'Delivered actionable business intelligence by mapping identified topical trends to 10k+ D&B\'s proprietary D-U-N-S numbers across 8 industries, quantifying impact on small businesses with the resulting methodology formally adopted into D&B\'s internal analysis pipeline.',
    ],
  },
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
            <CardContent className="space-y-4 text-left">
              {exp.description && <p>{exp.description}</p>}
              {exp.products && (
                <div className="space-y-4">
                  {exp.products.map((product, pi) => (
                    <div key={pi}>
                      <h4 className="font-semibold">
                        {product.url ? (
                          <Link
                            href={product.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-4 hover:text-primary"
                          >
                            {product.name}
                          </Link>
                        ) : (
                          product.name
                        )}
                      </h4>
                      <ul className="list-inside list-disc space-y-1 pt-1">
                        {product.bullets.map((bullet, bi) => (
                          <li key={bi} className="text-muted-foreground">
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
              {exp.achievements && (
                <div>
                  {exp.products && <h4 className="font-semibold">General</h4>}
                  {!exp.products && <h4 className="font-semibold">Key Achievements:</h4>}
                  <ul className="list-inside list-disc space-y-1 pt-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted-foreground">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}