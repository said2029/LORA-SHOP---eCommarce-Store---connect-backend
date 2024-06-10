
export default function ButtonSend({ name = "sign Up" }: { name?: string }) {
  return (
    <button
      className="rounded-lg w-full bg-base-color-500 py-3 font-bold text-white mt-6"
    >
      {name}
    </button>
  );
}
