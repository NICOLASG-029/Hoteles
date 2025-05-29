export default function Lista({ nombre, calificacion, text }) {
  // Renderiza las estrellas basadas en la calificación
  const renderStars = (score) => {
    const fullStars = Math.floor(score);
    const halfStar = score % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`} className="text-yellow-500">★</span>
        ))}
        {halfStar > 0 && <span className="text-yellow-500">½</span>}
        {[...Array(emptyStars)].map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300">★</span>
        ))}
      </div>
    );
  };

  return (
    <div className="flex items-start p-4 space-x-4 border rounded-lg shadow-sm mb-4">
      <div className="w-16 h-16 overflow-hidden rounded-full flex-shrink-0">
        <img 
          src="https://w7.pngwing.com/pngs/932/836/png-transparent-person-miscellaneous-face-head-thumbnail.png" 
          alt={nombre} 
          className="object-cover w-full h-full" 
        />
      </div>
      <div className="flex-grow">
        <div className="flex justify-between items-center">
          <h1 className="text-lg font-bold">{nombre}</h1>
          <div className="flex items-center">
            {renderStars(calificacion)}
            <span className="ml-2 text-sm text-gray-600">({calificacion}/5)</span>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-2">{text}</p>
      </div>
    </div>
  );
}