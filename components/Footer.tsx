type FooterProps = {
  text: string;
};

export default function Footer({ text }: FooterProps) {
  return (
    <footer className="flex flex-col items-center border-t border-gray-300 mx-5 p-3">
      <p className="text-gray-500 text-xs">{text}</p>
    </footer>
  );
}
