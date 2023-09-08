export default function InputField({ label, id, placeholder, required, type }) {
  return (
    <div>
      <label htmlFor={id} className="block mb-1 ml-2 text-white">
        {label}
      </label>
      <input
        required={required}
        className="text-white text-sm md:text-base w-full backdrop-blur-sm transition-all placeholder-[#6E6E6E]
          outline-none focus:ring-1 focus:ring-c-secondary
          invalid:border-red-500 invalid:text-red-600
          focus:invalid:border-red-500 focus:invalid:ring-red-500
          rounded-full px-4 py-3 bgForm"
        placeholder={placeholder}
        type={type}
        name={id}
        id={id}
      />
    </div>
  );
}
