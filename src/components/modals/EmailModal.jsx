import { useState } from "react";
import axios from "axios";

export default function EmailModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post(process.env.API_URL, { email });
      setSuccess(true);
      setEmail("");
      console.log("Email submitted:", response.data);
    } catch (err) {
      setError(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="bg-black fixed inset-0 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg w-11/12 max-w-lg">
        <button
          className="text-gray-500 text-6xl hover:text-gray-700 absolute top-4 right-4 "
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-black text-2xl font-bold mb-4 text-center">
          Join Our Newsletter
        </h2>
        <p className="text-gray-700 mb-6 text-center">
          Subscribe to our newsletter to get the latest updates.
        </p>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && (
          <p className="text-green-500 mb-4">Email submitted successfully!</p>
        )}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg mb-4"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Subscribe"}
          </button>
        </form>
      </div>
    </div>
  );
}
