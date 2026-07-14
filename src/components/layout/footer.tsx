export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-6 animate-up sm:flex-row">
        <p className="text-sm text-white/60 text-center sm:text-left">
          &copy; {new Date().getFullYear()} Alpha Car Service. Todos os direitos reservados.
        </p>
        <p className="text-sm text-white/60 text-center sm:text-right">
          Feito com <span className="text-red-500">♥</span> por{' '}
          <a
            href="https://topmarketingbh.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white hover:underline"
          >
            TOP MARKETING BH
          </a>
        </p>
      </div>
    </footer>
  );
}
