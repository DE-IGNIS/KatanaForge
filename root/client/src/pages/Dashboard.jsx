import { useState } from "react";
import axios from "axios";

const fields = [
  { label: "Product Name", name: "name", type: "text", span: 2 },
  { label: "Price (₹)", name: "price", type: "number", span: 1 },
  { label: "Quantity", name: "quantity", type: "number", span: 1 },
  { label: "Category", name: "category", type: "text", span: 1 },
  { label: "Collections", name: "collections", type: "text", span: 1 },
  { label: "Rating (0–5)", name: "rating", type: "number", span: 1 },
  { label: "Return / Replace", name: "return_allowed", type: "text", span: 1 },
  { label: "Image URLs", name: "images", type: "text", span: 2 },
  {
    label: "Description",
    name: "description",
    type: "text",
    span: 2,
    big: true,
  },
];

function Dashboard() {
  const [productObject, setProductObject] = useState({
    id: "",
    name: "",
    price: 0,
    quantity: 0,
    category: "",
    collections: "",
    description: "",
    rating: 0,
    return_allowed: "",
    image_url: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  function handleChange(e) {
    const { name, value, type } = e.target;
    setProductObject((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
    if (submitted) setSubmitted(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newProduct = { ...productObject, id: crypto.randomUUID() };
    setProductObject(newProduct);
    setSubmitted(true);

    axios
      .post("http://localhost:8144/api/data", newProduct)
      .then((response) => {
        console.log("Post created successfully!");
      })
      .catch((err) => {
        console.error("Error creating post");
      });

    console.log(newProduct);
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500;600;700;800&display=swap');
        .dash-root { font-family: 'Nunito', sans-serif; }
        .field-input {
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .field-input:focus {
          outline: none;
          border-color: #e2231a;
          box-shadow: 0 0 0 3px rgba(226,35,26,0.12);
        }
        .submit-btn {
          background: #e2231a;
          transition: background 0.15s, box-shadow 0.15s, transform 0.1s;
          box-shadow: 0 2px 8px rgba(226,35,26,0.28);
        }
        .submit-btn:hover {
          background: #c41d15;
          box-shadow: 0 4px 14px rgba(226,35,26,0.38);
          transform: translateY(-1px);
        }
        .submit-btn:active { transform: translateY(0); }
        .badge-success {
          animation: popIn 0.25s cubic-bezier(.34,1.56,.64,1) forwards;
        }
        @keyframes popIn {
          from { opacity:0; transform: scale(0.85); }
          to   { opacity:1; transform: scale(1); }
        }
      `}</style>

      <div className="dash-root flex flex-col bg-[#f7f7f8] min-h-[calc(100vh-62px)]">
        <div
          className="bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between"
          style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#e2231a] flex items-center justify-center shadow-sm">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <div>
              <h1
                className="text-[15px] font-800 text-gray-800 leading-tight"
                style={{ fontWeight: 800 }}
              >
                Add New Product
              </h1>
              <p className="text-[11px] text-gray-400 leading-none mt-0.5">
                Fill in the details below and submit
              </p>
            </div>
          </div>

          {submitted && (
            <span
              className="badge-success inline-flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-700 px-3 py-1.5 rounded-full border border-green-200"
              style={{ fontWeight: 700 }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Product saved
            </span>
          )}
        </div>

        <div className="flex-1 flex items-start justify-center px-4 py-5">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-3xl bg-white rounded-2xl border border-gray-100 overflow-hidden"
            style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.07)" }}
          >
            <div className="px-6 pt-5 pb-4 border-b border-gray-50">
              <p
                className="text-xs font-700 text-[#e2231a] uppercase tracking-widest"
                style={{ fontWeight: 700 }}
              >
                Product Details
              </p>
            </div>

            <div className="px-6 pt-4 pb-2 grid grid-cols-2 gap-x-5 gap-y-3">
              {fields.map(({ label, name, type, span, big }) => (
                <div
                  key={name}
                  className={span === 2 ? "col-span-2" : "col-span-1"}
                >
                  <label
                    htmlFor={name}
                    className="block text-[11px] font-700 text-gray-500 uppercase tracking-wider mb-1"
                    style={{ fontWeight: 700 }}
                  >
                    {label}
                  </label>
                  {big ? (
                    <textarea
                      id={name}
                      name={name}
                      value={productObject[name]}
                      onChange={handleChange}
                      rows={2}
                      className="field-input w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-800 resize-none"
                      style={{ fontFamily: "'Nunito', sans-serif" }}
                    />
                  ) : (
                    <input
                      id={name}
                      type={type}
                      name={name}
                      value={productObject[name]}
                      onChange={handleChange}
                      className="field-input w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-800"
                      style={{ fontFamily: "'Nunito', sans-serif" }}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="px-6 py-4 border-t border-gray-50 flex items-center justify-between bg-gray-50/60">
              <p className="text-[11px] text-gray-400">
                All fields are saved locally on submit
              </p>
              <button
                type="submit"
                className="submit-btn text-white text-sm font-700 px-6 py-2.5 rounded-lg"
                style={{ fontWeight: 700 }}
              >
                Save Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
