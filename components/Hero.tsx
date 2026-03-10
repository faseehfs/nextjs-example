export default function Hero() {
  return (
    <header
      className="flex flex-col justify-center items-center p-5 h-80 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/csias-lighthouse.png')" }}
    >
      <h1 className="text-5xl text-center text-white mb-2">Welcome</h1>
      <p className="text-center text-white">to my website</p>
    </header>
  );
}
