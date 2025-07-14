export default function TileCard({ text }: { text: string }) {
  return (
    <h3 className="border-dark border-4 rounded-xl p-3 hover:bg-secondLight transition ease-in duration-150 break-normal whitespace-normal">
      {text}
    </h3>
  );
}
