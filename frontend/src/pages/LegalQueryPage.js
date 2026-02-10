import { useState } from "react";
import Header from "../components/Header";
import { askLegalQuestion } from "../services/legalApi";

function LegalQueryPage() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const submitQuery = async () => {
    setLoading(true);
    const data = await askLegalQuestion(question);
    setResponse(data);
    setLoading(false);
  };

  return (
    <>
      <Header />
      <div className="container">
        <h2>Ask a Legal Question</h2>

        <textarea
          rows="4"
          placeholder="Describe your legal issue..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <button onClick={submitQuery}>Submit</button>

        {loading && <p>Loading...</p>}

        {response && (
          <div className="response">
            <h3>Summary</h3>
            <p>{response.summary}</p>

            <p className="disclaimer">
              {response.disclaimer}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default LegalQueryPage;
