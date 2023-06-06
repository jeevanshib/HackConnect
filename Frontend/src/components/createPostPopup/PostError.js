export default function PostError({ error, setError }) {
    return (
      <div className="postError">
        <div className="postError_error">{error}</div>
        <button className="blue-btn" onClick={() => {setError("")}}>Try Again</button>
      </div>
    )
  }