import React from 'react';

const Slider = () => {
  return (
    <div 
      className="h-70 bg-black text-white relative overflow-hidden"
      style={{
        backgroundImage: 'url("/api/placeholder/1200/400")',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      <div className="absolute inset-0 bg-black/90"></div>
      <div className="container mx-auto">
        <div className="relative z-10 h-48 flex flex-col justify-center px-8">
          <h1 className="text-4xl font-bold flex mb-5 mt-10">Product Details</h1>
          <div className="text-gray-300 text-sm flex items-center gap-2">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <span className="text-gray-500">›</span>
            <span>cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;