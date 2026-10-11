// Emoji flags don't render on Windows desktop, so convert the emoji to an image.
const toCode = (emoji: string) =>
  Array.from(emoji)
    .map((c) => String.fromCharCode((c.codePointAt(0) ?? 0) - 0x1f1e6 + 97))
    .join("");

const Flag = ({ emoji, className = "w-5 h-auto" }: { emoji: string; className?: string }) => {
  const code = toCode(emoji);
  if (!/^[a-z]{2}$/.test(code)) return <span>{emoji}</span>;
  return (
    <img
      src={`https://flagcdn.com/${code}.svg`}
      alt=""
      className={`inline-block rounded-[2px] align-middle ${className}`}
      loading="lazy"
    />
  );
};

export default Flag;
