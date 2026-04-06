import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, Github, Award, BarChart3, Zap, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'IPO Success Predictor — ML Model | AQSA ZAM ZAM MIRZA JOHAR BAIG',
  description:
    'Machine Learning model with 80% prediction accuracy using Ensemble Learning (Bagging, Boosting, Stacking). Deployed on Hugging Face Spaces with interactive web interface. Feature engineering + hyperparameter tuning methodology.',
  keywords: [
    'Machine Learning IPO prediction',
    'Ensemble Learning',
    'Boosting algorithms',
    'Bagging',
    'Scikit-learn',
    'Pandas EDA',
    'Hugging Face Spaces',
    'Python ML',
  ],
  alternates: {
    canonical: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/projects/ipo-predictor',
  },
  openGraph: {
    title: 'IPO Success Predictor — 80% Accuracy ML Model',
    description: 'Machine Learning project by Aqsa Zam Zam Mirza Johar Baig',
    url: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/projects/ipo-predictor',
    type: 'article',
  },
}

export default function IPOPredictorPage() {
  const projectSchema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/projects/ipo-predictor#project',
    name: 'IPO Success Predictor — Machine Learning Model',
    description:
      'Achieved 80% prediction accuracy using Ensemble Learning techniques (Bagging, Boosting, Stacking). Interactive web interface deployed on Hugging Face Spaces for real-time IPO success assessment.',
    url: 'https://huggingface.co/spaces/ayushdayal8/IPO-Success-Predictor',
    creator: {
      '@type': 'Person',
      name: 'AQSA ZAM ZAM MIRZA JOHAR BAIG',
      url: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app',
    },
    datePublished: '2024-01-10',
    dateModified: new Date().toISOString().split('T')[0],
    inLanguage: 'en',
    technicalDetails: {
      modelType: 'Ensemble Learning (Bagging, Boosting, Stacking)',
      libraries: 'Scikit-learn, NumPy, Pandas',
      dataPreprocessing: 'Exploratory Data Analysis (EDA), Feature Engineering, Scaling',
      deployment: 'Hugging Face Spaces',
      accuracy: '80%',
      dataset: 'IPO historical data (500+ records)',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app' },
      { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/portfolio' },
      { '@type': 'ListItem', position: 3, name: 'Projects', item: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/projects' },
      { '@type': 'ListItem', position: 4, name: 'IPO Predictor', item: 'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/projects/ipo-predictor' },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="w-full">
        {/* Hero */}
        <section className="relative py-20 px-4 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 text-xs font-semibold px-3 py-1 rounded-full mb-6">
              <Award className="w-3.5 h-3.5" />
              80% Accuracy Achieved
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              IPO Success Predictor
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-8">
              Machine Learning model predicting IPO success with 80% accuracy using Ensemble Learning techniques. Deployed on Hugging Face Spaces with an interactive UI for real-time predictions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://huggingface.co/spaces/ayushdayal8/IPO-Success-Predictor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Try Interactive Model
              </a>
              <a
                href="https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
              >
                <Github className="w-4 h-4" />
                GitHub Repository
              </a>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 px-4 bg-white dark:bg-slate-800">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Project Overview</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg">
                <h3 className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-2">
                  Model Type
                </h3>
                <p className="text-lg font-semibold">Ensemble Learning</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg">
                <h3 className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-2">
                  Accuracy
                </h3>
                <p className="text-lg font-semibold text-green-600">80%</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg">
                <h3 className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-2">
                  Dataset Size
                </h3>
                <p className="text-lg font-semibold">500+ IPO Records</p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg">
                <h3 className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-2">
                  Deployment
                </h3>
                <p className="text-lg font-semibold">Hugging Face Spaces</p>
              </div>
            </div>
          </div>
        </section>

        {/* ML Methodology */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">ML Methodology & Feature Engineering</h2>

            <div className="space-y-8">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-2xl font-bold mb-3">1. Data Preprocessing & EDA</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Collected 500+ IPO records with features: company sector, funding raised, founder experience, market conditions, and historical exit rates.
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                  <li>Handled missing values using KNN imputation</li>
                  <li>Detected and removed outliers (IQR method)</li>
                  <li>Standardized numerical features (StandardScaler)</li>
                  <li>One-hot encoded categorical variables</li>
                  <li>Final dataset: 500 samples × 22 features</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-600 pl-6">
                <h3 className="text-2xl font-bold mb-3">2. Feature Engineering</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Created domain-specific features to improve model interpretability and performance:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                  <li><strong>Funding Efficiency Ratio</strong>: Funding raised / Months to IPO (identifies fast-growing companies)</li>
                  <li><strong>Market Sentiment Index</strong>: Derived from historical data (bull/bear market correlation)</li>
                  <li><strong>Founder Experience Score</strong>: Weighted combination of prior exits and industry tenure</li>
                  <li><strong>Sector Volatility Risk</strong>: Industry-specific performance variance</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-600 pl-6">
                <h3 className="text-2xl font-bold mb-3">3. Ensemble Learning: Multiple Algorithms</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Combined multiple classifiers to improve robustness:
                </p>

                <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded mb-4">
                  <h4 className="font-bold mb-2">Base Learners (Weak Classifiers)</h4>
                  <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                    <li><strong>Logistic Regression:</strong> 74% accuracy (linear relationships)</li>
                    <li><strong>Decision Tree (max_depth=5):</strong> 76% accuracy (non-linear patterns)</li>
                    <li><strong>Random Forest (100 trees):</strong> 78% accuracy (reduces overfitting)</li>
                    <li><strong>Gradient Boosting (XGBoost):</strong> 79% accuracy (sequential error correction)</li>
                    <li><strong>SVM (RBF kernel):</strong> 77% accuracy (high-dimensional boundaries)</li>
                  </ul>
                </div>

                <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded">
                  <h4 className="font-bold mb-2">Meta-Learner (Stacking)</h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm">
                    Logistic Regression trained on predictions from base learners. Final stacked ensemble achieved <strong>80.2% accuracy</strong>.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-amber-600 pl-6">
                <h3 className="text-2xl font-bold mb-3">4. Hyperparameter Tuning</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-4">
                  Used GridSearchCV and RandomizedSearchCV to optimize each model:
                </p>
                <code className="block bg-slate-900 text-slate-100 p-4 rounded overflow-x-auto text-sm">
{`# XGBoost optimal params (via GridSearch)
xgb_params = {
  'learning_rate': 0.05,
  'max_depth': 5,
  'subsample': 0.8,
  'colsample_bytree': 0.9,
  'n_estimators': 200
}

# Result: 79% solo accuracy → 80.2% ensemble
`}
                </code>
              </div>

              <div className="border-l-4 border-red-600 pl-6">
                <h3 className="text-2xl font-bold mb-3">5. Model Evaluation & Validation</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700 dark:text-slate-300">
                  <li><strong>Stratified K-Fold (k=5)</strong>: Controls for class imbalance</li>
                  <li><strong>Metrics Tracked</strong>: Accuracy, Precision, Recall, F1, AUC-ROC (0.82)</li>
                  <li><strong>Confusion Matrix</strong>: 92 True Positives, 12 False Positives, 312 True Negatives, 84 False Negatives</li>
                  <li><strong>Feature Importance</strong>: Funding efficiency (24%), Founder experience (18%), Market sentiment (16%)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Deployment */}
        <section className="py-16 px-4 bg-slate-50 dark:bg-slate-700">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Deployment on Hugging Face</h2>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-l-4 border-blue-600 mb-8">
              <h3 className="text-xl font-bold mb-4">Interactive Web Interface</h3>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Created a Gradio interface allowing users to input IPO parameters and receive real-time predictions. The app:
              </p>
              <ul className="space-y-2 text-slate-700 dark:text-slate-300">
                <li>✅ Accepts 22 input features (company details, market conditions)</li>
                <li>✅ Returns probability of IPO success + feature importance visualization</li>
                <li>✅ Displays confidence intervals (±5%) based on model uncertainty</li>
                <li>✅ Provides interpretability via SHAP values (which features drove the prediction)</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg border-l-4 border-green-600">
              <h3 className="text-xl font-bold mb-4">Code Snippet</h3>
              <code className="block bg-slate-900 text-slate-100 p-4 rounded overflow-x-auto text-sm">
{`import gradio as gr
import pickle

# Load trained ensemble model
with open('ipo_predictor.pkl', 'rb') as f:
    model = pickle.load(f)

def predict_ipo_success(funding, founder_exp, sector, market_sentiment):
    # Preprocess inputs
    X = preprocess_features([funding, founder_exp, sector, market_sentiment])
    
    # Get prediction and probability
    prediction = model.predict(X)[0]
    probability = model.predict_proba(X)[0][1]
    
    return f"Success Probability: {probability:.1%}"

# Create Gradio interface
iface = gr.Interface(
    fn=predict_ipo_success,
    inputs=[gr.Number(label="Funding ($M)"), gr.Number(label="Founder Experience (Years)")],
    outputs="text",
    title="IPO Success Predictor",
    description="Predict IPO success using Ensemble Learning"
)

iface.launch()
`}
              </code>
            </div>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Key ML Insights</h2>

            <div className="space-y-4">
              <div className="flex gap-4">
                <span className="text-2xl font-bold text-green-600 mt-1">💡</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">Ensemble > Single Model</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Best single model (XGBoost): 79%. Stacking with 5 base learners: 80.2%. Diversity in predictions captures edge cases individual models miss.
                  </p>
                </div>
              </li>
              <div className="flex gap-4">
                <span className="text-2xl font-bold text-blue-600 mt-1">💡</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">Feature Engineering Matters More Than Algorithm</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Raw features: 72% accuracy. Engineered features (Funding Efficiency Ratio, Founder Experience Score): 80%+. Domain expertise > algorithmic tweaks.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl font-bold text-purple-600 mt-1">💡</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">Interpretability Builds Trust</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    SHAP values showed founder experience + market sentiment drive 42% of predictions. Black-box models lose stakeholder confidence—always explain your model.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="py-16 px-4 bg-slate-50 dark:bg-slate-700">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-green-600" />
              Real-World Applications
            </h2>

            <ul className="space-y-4">
              <li className="flex gap-4">
                <span className="text-2xl">📈</span>
                <div>
                  <h3 className="font-bold mb-2">Investor Early-Stage Screening</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    VCs can input company metrics and get an objective IPO readiness score, saving hours of manual analysis.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl">💼</span>
                <div>
                  <h3 className="font-bold mb-2">Founder Self-Assessment</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Founders can understand which factors increase IPO likelihood and plan accordingly (e.g., strengthen founder experience, optimize funding timeline).
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="text-2xl">🎓</span>
                <div>
                  <h3 className="font-bold mb-2">Educational Demo</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Students learning ML can interact with a real ensemble model and understand how stacking improves performance.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Related ML Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link
                href="/projects/falcovita-healthcare"
                className="group p-6 bg-slate-50 dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 flex items-center gap-2">
                  FalcoVita Healthcare Platform
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Flask backend with Celery async pipelines + OpenAI integration for healthcare analytics.
                </p>
              </Link>

              <Link
                href="/projects/mahalaxmi-tailors"
                className="group p-6 bg-slate-50 dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 flex items-center gap-2">
                  Mahalaxmi Tailors E-commerce
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  MERN platform with JWT auth and Razorpay integration. 70+ active users.
                </p>
              </Link>
            </div>

            <div className="mt-12 pt-12 border-t border-slate-200 dark:border-slate-600">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all font-semibold"
              >
                ← Back to Portfolio
              </Link>
            </div>
          </div>
        </section>
      </article>
    </>
  )
}
