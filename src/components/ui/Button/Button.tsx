export default function Button({ click }: { click: () => void }) {
  return (
    <button
      onClick={click}
      className="bg-[#9E78CF] flex justify-center rounded-xl text-3xl size-10 text-white"
    >
      +
    </button>
  );
}
