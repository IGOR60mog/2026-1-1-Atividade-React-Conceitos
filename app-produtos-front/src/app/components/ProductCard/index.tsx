interface ProductCardProps {
  produto: any;
}

export function ProductCard({ produto }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl p-5 shadow-soft hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      {/* Container da Imagem com fundo leve */}
      <div className="w-full h-48 bg-gray-50/50 rounded-xl flex items-center justify-center mb-5 overflow-hidden">
        <img 
          src={produto.images[0]} 
          alt={produto.title} 
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500" 
        />
      </div>

      {/* Conteúdo Texto */}
      <div className="flex-1 px-1">
        <h3 className="font-semibold text-gray-800 text-base leading-tight">
          {produto.title}
        </h3>
        <p className="text-gray-400 text-xs mt-2 line-clamp-2 font-light">
          {produto.description}
        </p>
      </div>

      {/* Preço e Rating mais discretos */}
      <div className="flex justify-between items-end mt-4 px-1">
        <span className="text-gray-900 font-bold text-lg">
          ${produto.price}
        </span>
        <div className="flex items-center text-[11px] text-gray-400 bg-gray-50 px-2 py-1 rounded-full italic">
          <span className="text-yellow-400 mr-1">★</span> {produto.rating}
        </div>
      </div>

      {/* Tags Minimalistas */}
      <div className="flex flex-wrap gap-1 mt-4">
        {produto.tags?.map((tag: string) => (
          <span 
            key={tag} 
            className="text-[9px] text-gray-400 border border-gray-100 px-2 py-0.5 rounded-full uppercase tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}