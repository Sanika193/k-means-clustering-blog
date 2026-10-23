
import { useState } from "react";
import "./App.css";

const questions = [
  {
    q: "1. What is the main purpose of K-Means Clustering?",
    options: [
      "Predicting continuous values",
      "Grouping similar data points",
      "Classifying labelled data",
      "Removing missing values",
    ],
    answer: 1,
    explanation: "K-Means groups similar data points into clusters.",
  },
  {
    q: "2. What does K represent in K-Means?",
    options: [
      "Number of features",
      "Number of records",
      "Number of clusters",
      "Number of iterations",
    ],
    answer: 2,
    explanation: "K is the number of clusters we want to create.",
  },
  {
    q: "3. What is a centroid?",
    options: [
      "The centre of a cluster",
      "The largest data point",
      "A missing value",
      "The final prediction",
    ],
    answer: 0,
    explanation: "A centroid represents the centre of its cluster.",
  },
  {
    q: "4. Is K-Means a supervised learning algorithm?",
    options: ["Yes, always", "Only for images", "Only for text", "No, it is unsupervised"],
    answer: 3,
    explanation: "K-Means learns patterns without labelled target values.",
  },
  {
    q: "5. Which method is commonly used to measure closeness?",
    options: ["Accuracy", "Euclidean distance", "Precision", "Recall"],
    answer: 1,
    explanation: "Euclidean distance measures the straight-line distance between points.",
  },
  {
    q: "6. Which is a common application of K-Means?",
    options: [
      "Customer segmentation",
      "Writing program syntax",
      "Fixing hardware",
      "Translating code",
    ],
    answer: 0,
    explanation: "Businesses use K-Means to group customers with similar behaviour.",
  },
];

const sections = [
  ["introduction", "Introduction"],
  ["working", "Working Principle"],
  ["distance", "Distance and Centroids"],
  ["choosing-k", "Choosing K"],
  ["example", "Example"],
  ["applications", "Applications"],
  ["advantages", "Advantages"],
  ["limitations", "Limitations"],
  ["evaluation", "Evaluation"],
  ["quiz", "Knowledge Check"],
];

function App() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  const score = questions.filter(
    (question, index) => answers[index] === question.answer
  ).length;

  function submitQuiz() {
    if (Object.keys(answers).length !== questions.length) {
      setMessage("Please answer all 6 questions before submitting.");
      return;
    }
    setMessage("");
    setSubmitted(true);
  }

  function resetQuiz() {
    setAnswers({});
    setSubmitted(false);
    setMessage("");
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-inner">
          <p className="eyebrow">MACHINE LEARNING • LEARNING BLOG</p>
          <h1>K-Means Clustering</h1>
          <p>A simple guide to understanding unsupervised learning</p>
        </div>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <p className="sidebar-label">ON THIS PAGE</p>
          <h2>Contents</h2>
          <nav>
            {sections.map(([id, label]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
            <a href="#conclusion">Conclusion</a>
          </nav>
        </aside>

        <main className="content">
          <section className="section" id="introduction">
            <span className="section-tag">01 • BASICS</span>
            <h2>Introduction to K-Means Clustering</h2>
            <p>
              K-Means Clustering is an unsupervised machine learning algorithm
              used to divide data into groups called clusters. Data points in
              the same cluster are more similar to one another than to points
              in other clusters.
            </p>
            <p>
              Unlike supervised learning, K-Means does not require labelled
              output data. It discovers patterns and structures directly from
              the available data.
            </p>
            <div className="highlight">
              <strong>Key idea:</strong> K-Means groups similar observations
              by assigning them to the nearest cluster centre.
            </div>
          </section>

          <section className="section" id="working">
            <span className="section-tag">02 • PROCESS</span>
            <h2>Working Principle</h2>
            <p>K-Means follows an iterative process:</p>
            <div className="step-list">
              <div className="step">
                <span>1</span>
                <div><h3>Choose K</h3><p>Decide how many clusters are needed.</p></div>
              </div>
              <div className="step">
                <span>2</span>
                <div><h3>Initialize centroids</h3><p>Select initial cluster centres.</p></div>
              </div>
              <div className="step">
                <span>3</span>
                <div><h3>Assign data points</h3><p>Assign each point to its nearest centroid.</p></div>
              </div>
              <div className="step">
                <span>4</span>
                <div><h3>Update centroids</h3><p>Calculate the mean of points in each cluster.</p></div>
              </div>
              <div className="step">
                <span>5</span>
                <div><h3>Repeat</h3><p>Repeat assignment and updating until the clusters stabilize.</p></div>
              </div>
            </div>
          </section>

          <section className="section" id="distance">
            <span className="section-tag">03 • MATHEMATICS</span>
            <h2>Distance and Centroids</h2>
            <p>
              K-Means commonly uses Euclidean distance to determine how close
              a data point is to a centroid.
            </p>
            <div className="formula">
              d = √[(x₂ − x₁)² + (y₂ − y₁)²]
            </div>
            <p>
              The centroid is the mean position of all points assigned to a
              cluster. After each assignment step, the algorithm recalculates
              the centroids to improve the grouping.
            </p>
            <div className="info-grid">
              <article className="info-card">
                <h3>Distance</h3>
                <p>Measures how far a point is from a cluster centre.</p>
              </article>
              <article className="info-card">
                <h3>Centroid</h3>
                <p>Represents the average location of the cluster's points.</p>
              </article>
            </div>
          </section>

          <section className="section" id="choosing-k">
            <span className="section-tag">04 • MODEL SELECTION</span>
            <h2>Choosing the Value of K</h2>
            <p>
              Selecting K is important because it determines the number of
              groups created. A common approach is the Elbow Method.
            </p>
            <ol>
              <li>Run K-Means using several possible values of K.</li>
              <li>Calculate the within-cluster sum of squared distances.</li>
              <li>Plot the error against the number of clusters.</li>
              <li>Look for the bend where improvements begin to slow down.</li>
            </ol>
            <div className="highlight">
              The elbow gives a useful estimate, but the best K also depends
              on the data and the purpose of the analysis.
            </div>
          </section>

          <section className="section" id="example">
            <span className="section-tag">05 • EXAMPLE</span>
            <h2>Simple Example</h2>
            <p>
              Imagine a shop wants to group customers using their annual
              spending and number of visits.
            </p>
            <div className="info-grid">
              <article className="info-card">
                <span className="mini-label">CLUSTER 1</span>
                <h3>Frequent shoppers</h3>
                <p>Customers who visit often and spend regularly.</p>
              </article>
              <article className="info-card">
                <span className="mini-label">CLUSTER 2</span>
                <h3>Occasional shoppers</h3>
                <p>Customers who visit less frequently.</p>
              </article>
              <article className="info-card">
                <span className="mini-label">CLUSTER 3</span>
                <h3>High spenders</h3>
                <p>Customers with comparatively high spending.</p>
              </article>
            </div>
            <p>
              These groups can help a business understand customer behaviour
              and plan relevant marketing strategies. Actual groups depend on
              the data and the chosen value of K.
            </p>
          </section>

          <section className="section" id="applications">
            <span className="section-tag">06 • REAL-WORLD USE</span>
            <h2>Applications of K-Means</h2>
            <ul>
              <li><strong>Customer segmentation:</strong> Group customers by purchasing behaviour.</li>
              <li><strong>Image compression:</strong> Group similar colours to reduce the number of colours used.</li>
              <li><strong>Document grouping:</strong> Organize documents with similar features.</li>
              <li><strong>Anomaly exploration:</strong> Identify points far from cluster centres for further investigation.</li>
              <li><strong>Retail analysis:</strong> Discover patterns in sales and customer activity.</li>
            </ul>
          </section>

          <section className="section" id="advantages">
            <span className="section-tag">07 • BENEFITS</span>
            <h2>Advantages</h2>
            <ul>
              <li>Simple to understand and implement.</li>
              <li>Efficient for many datasets with numerical features.</li>
              <li>Can process relatively large datasets efficiently.</li>
              <li>Helps reveal patterns when labels are unavailable.</li>
              <li>Results are easy to interpret when clusters are well separated.</li>
            </ul>
          </section>

          <section className="section" id="limitations">
            <span className="section-tag">08 • CHALLENGES</span>
            <h2>Limitations</h2>
            <ul>
              <li>The number of clusters must usually be selected in advance.</li>
              <li>Different initial centroids can produce different results.</li>
              <li>Outliers can affect the calculated centroids.</li>
              <li>It works poorly for some irregularly shaped clusters.</li>
              <li>Features with larger scales can dominate distance calculations.</li>
            </ul>
            <div className="highlight">
              <strong>Tip:</strong> Standardizing numerical features and using
              multiple initializations can improve results.
            </div>
          </section>

          <section className="section" id="evaluation">
            <span className="section-tag">09 • ASSESSMENT</span>
            <h2>Evaluating Clusters</h2>
            <p>
              Clustering quality can be assessed using measures such as the
              Silhouette Score and within-cluster sum of squares.
            </p>
            <div className="info-grid">
              <article className="info-card">
                <h3>Within-cluster sum of squares</h3>
                <p>Measures the squared distances between points and their assigned centroids. Lower values indicate more compact clusters.</p>
              </article>
              <article className="info-card">
                <h3>Silhouette Score</h3>
                <p>Measures how well each point fits its own cluster compared with nearby clusters. Higher scores generally indicate better separation.</p>
              </article>
            </div>
            <p>
              No single metric determines the best model in every situation.
              Results should also be checked for usefulness and interpretability.
            </p>
          </section>

          <section className="section" id="quiz">
            <span className="section-tag">10 • TEST YOURSELF</span>
            <h2>Knowledge Check</h2>
            <p>Answer all six questions to test your understanding.</p>

            {questions.map((question, index) => (
              <article className="quiz-question" key={index}>
                <h3>{question.q}</h3>
                {question.options.map((option, optionIndex) => (
                  <label className="quiz-option" key={option}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      checked={answers[index] === optionIndex}
                      disabled={submitted}
                      onChange={() => {
                        setAnswers({ ...answers, [index]: optionIndex });
                        setMessage("");
                      }}
                    />
                    <span>{option}</span>
                  </label>
                ))}
                {submitted && (
                  <div className={`quiz-feedback ${answers[index] === question.answer ? "correct" : "incorrect"}`}>
                    <strong>{answers[index] === question.answer ? "Correct" : "Incorrect"}.</strong>{" "}
                    {question.explanation}
                  </div>
                )}
              </article>
            ))}

            {message && <p className="quiz-message">{message}</p>}

            {!submitted ? (
              <button className="primary-button" onClick={submitQuiz}>
                Submit Answers
              </button>
            ) : (
              <div className="quiz-result">
                <h3>Your Score: {score} / {questions.length}</h3>
                <p>
                  {score === 6
                    ? "Excellent! You answered every question correctly."
                    : "Review the explanations above and try again to improve your score."}
                </p>
                <button className="primary-button" onClick={resetQuiz}>
                  Try Again
                </button>
              </div>
            )}
          </section>

          <section className="section" id="conclusion">
            <span className="section-tag">SUMMARY</span>
            <h2>Conclusion</h2>
            <p>
              K-Means Clustering is a useful unsupervised learning algorithm
              for discovering groups in numerical data. It repeatedly assigns
              observations to nearby centroids and updates the centres until
              the groups stabilize.
            </p>
            <p>
              Understanding the choice of K, feature scaling, initialization,
              and evaluation helps us apply K-Means more effectively to
              real-world problems.
            </p>
          </section>
        </main>
      </div>

      <footer className="footer">
        <p>K-Means Clustering | Machine Learning Blog</p>
        <p>Learn • Explore • Practice</p>
      </footer>
    </div>
  );
}

export default App;
