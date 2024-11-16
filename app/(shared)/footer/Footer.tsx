export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto p-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} E-Commerce. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
