export default function Footer() {
  return (
    <footer className="mt-auto bg-slate-900 p-6 text-center text-slate-200 shadow-md md:p-8">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Ferreira Books. Todos os direitos reservados.</p>
        <p>By Amitair Ferreira</p>
      </div>
    </footer>
  )
}