export default function TextArea({ label, id, placeholder, required }) {
  return (
    <div>
        <label htmlFor={id} className="block mb-1 ml-2 text-white">
          {label}
        </label>
        <textarea
          required={required}
          placeholder={placeholder}
          id={id}
          name={id}
          className="block text-white w-full backdrop-blur-sm transition-all placeholder-[#6E6E6E]
          outline-none focus:ring-1 focus:ring-c-secondary
          invalid:border-red-500 invalid:text-red-600
          focus:invalid:border-red-500 focus:invalid:ring-red-500
          rounded-2xl min-h-[200px] -z-20 px-4 py-3 bgForm"
        />
    </div>
  );
}
