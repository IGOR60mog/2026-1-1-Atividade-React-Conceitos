"use client";

interface HeaderProps {
  setTermo: (valor: string) => void;
}

export function Header({ setTermo }: HeaderProps) {
  return (
    <header className="w-full border-hot-pink p-8 flex flex-col items-center bg-white">
    <h1 className="text-6xl neon-text mb-6">ANALY MODEL</h1>
    <input 
        className="input-vibrante w-full max-w-xl px-6 py-4 text-2xl border" 
        placeholder="Busque nossos produtos fashion" 
        onChange={(e) => setTermo(e.target.value)}
    />
    </header>
  );
}