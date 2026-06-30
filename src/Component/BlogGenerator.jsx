import { useState, useEffect } from "react";
import "./BlogGenerator.css";
import { GoogleGenAI } from "@google/genai";


const ai = new GoogleGenAI({
  apiKey: "YOUR_GEMINI_API_KEY",
});


function BlogGenerator() {

  const [topic,setTopic] = useState("");
  const [keyword,setKeyword] = useState("");
  const [tone,setTone] = useState("");

  const handleGenerate = () => {

    alert(`
Topic : ${topic}
Keyword : ${keyword}
Tone : ${tone}
`);



    
    if (!topic || !keyword || !tone) {

      alert("Please fill all fields.");

      return;

    }

    setLoading(true);

    setResult("");

    try {

      const prompt = `
You are an Expert AI Blog Writer.

Generate a ${tone} SEO Friendly Blog.

Topic : ${topic}

Keyword : ${keyword}

Requirements:

1. Catchy Title

2. Introduction

3. Minimum 5 Headings

4. Bullet Points

5. Conclusion

6. Around 600 words

7. SEO Optimized

`;

      // const response = await ai.models.generateContent({

      //   model: "gemini-2.5-flash",

      //   contents: prompt,

      // });

      const generateBlog = async () => {  // <-- Add 'async' right here
  // ... line 67
  
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
  });
}

      const generatedBlog = response.text;

      setResult(generatedBlog);

      const blogData = {

        id: Date.now(),

        topic,

        keyword,

        tone,

        content: generatedBlog,

        date: new Date().toLocaleString(),

      };

      setHistory((prevHistory) => [

        blogData,

        ...prevHistory,

      ]);

    }

    catch (error) {

      console.log(error);

      alert("Error while generating blog.");

    }

    finally {

      setLoading(false);

    }
  };


 // implementation logic...


  // ===========================
  // AI Response
  // ===========================

  const [result, setResult] = useState("");

  // ===========================
  // Loading
  // ===========================

  const [loading, setLoading] = useState(false);

  // ===========================
  // History
  // ===========================

  const [history, setHistory] = useState([]);

  // ===========================
  // Load History from Browser
  // ===========================

  useEffect(() => {

    const savedHistory =
      JSON.parse(
        localStorage.getItem("history")
      ) || [];

    setHistory(savedHistory);

  }, []);

  // ===========================
  // Save History
  // ===========================

  useEffect(() => {

    localStorage.setItem(

      "history",

      JSON.stringify(history)

    );

  }, [history]);



  // ===========================
  // Generate AI Blog
  // ===========================

  // const handleGenerate = async () => {


  // };



  // ===========================
  // Copy Blog
  // ===========================

  const handleCopy = () => {

    navigator.clipboard.writeText(result);

    alert("Copied Successfully");

  };



  // ===========================
  // Download Blog
  // ===========================

  const handleDownload = () => {

    const blob = new Blob(

      [result],

      {

        type: "text/plain",

      }

    );

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = `${topic}.txt`;

    link.click();

  };



  // ===========================
  // Clear Form
  // ===========================

  const handleClear = () => {

    setTopic("");

    setKeyword("");

    setTone("");

    setResult("");

  };



  // ===========================
  // View Old Blog
  // ===========================

  const viewBlog = (blog) => {

    setResult(blog.content);

    setTopic(blog.topic);

    setKeyword(blog.keyword);

    setTone(blog.tone);

  };



  // ===========================
  // Delete One Blog
  // ===========================

  const deleteHistory = (id) => {

    const updatedHistory = history.filter(

      (item) => item.id !== id

    );

    setHistory(updatedHistory);

  };



  // ===========================
  // Clear Complete History
  // ===========================

  const clearHistory = () => {

    const confirmDelete = window.confirm(

      "Are you sure you want to clear all history?"

    );

    if (confirmDelete) {

      setHistory([]);

      localStorage.removeItem("history");

    }

  };







  return (
    <div className="blog-generator">

      <h2>AI Blog Generator</h2>

      <input
        type="text"
        placeholder="Enter Topic"
        value={topic}
        onChange={(e)=>setTopic(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Keyword"
        value={keyword}
        onChange={(e)=>setKeyword(e.target.value)}
      />

      <select
        value={tone}
        onChange={(e)=>setTone(e.target.value)}
      >
        <option value="">
          Select Tone
        </option>

        <option>
          Professional
        </option>

        <option>
          Friendly
        </option>

        <option>
          Marketing
        </option>

      </select>

      <button onClick={handleGenerate}>
        Generate
      </button>

      <div className="preview">

        <h3>Preview</h3>

        <p>
          Topic : {topic}
        </p>

        <p>
          Keyword : {keyword}
        </p>

        <p>
          Tone : {tone}
        </p>

      </div>

      {/* ================= Loading ================= */}

    {

      loading &&

      <div className="loading">

        <h3>

          Generating Blog...

        </h3>

        <p>

          Please wait while Gemini AI writes your blog.

        </p>

      </div>

    }

    {/* ================= Generated Blog ================= */}

    {

      result &&

      <div className="result">

        <h2>

          Generated Blog

        </h2>

        <textarea

          rows="18"

          value={result}

          readOnly

        />

        <div className="action-buttons">

          <button

            onClick={handleCopy}

          >

            Copy

          </button>

          <button

            onClick={handleDownload}

          >

            Download

          </button>

          <button

            onClick={handleClear}

          >

            Clear

          </button>

        </div>

      </div>

    }

    <hr />

    {/* ================= History ================= */}

    <div className="history">

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >

        <h2>

          History

        </h2>

        {

          history.length > 0 &&

          <button

            onClick={clearHistory}

          >

            Clear All

          </button>

        }

      </div>

      {

        history.length === 0 ?

        (

          <p>

            No Blog Generated Yet.

          </p>

        )

        :

        (

          history.map((item) => (

            <div

              key={item.id}

              className="history-card"

            >

              <h3>

                {item.topic}

              </h3>

              <p>

                <strong>Keyword :</strong>

                {item.keyword}

              </p>

              <p>

                <strong>Tone :</strong>

                {item.tone}

              </p>

              <small>

                {item.date}

              </small>

              <br />

              <div
                style={{
                  marginTop: "15px",
                  display: "flex",
                  gap: "10px",
                }}
              >

                <button

                  onClick={() =>

                    viewBlog(item)

                  }

                >

                  View

                </button>

                <button

                  onClick={() =>

                    deleteHistory(item.id)

                  }

                >

                  Delete

                </button>

              </div>

            </div>

          ))

        )

      }

    </div>

    </div>
  );
}

export default BlogGenerator;