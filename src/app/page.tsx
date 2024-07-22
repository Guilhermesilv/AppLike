"use client"

import { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { AiFillLike, AiFillDislike } from "react-icons/ai";

type ImageData = {
  url: string;
  likes: number;
  dislikes: number;
};

const Inicio: NextPage = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const pegaDadosApi = async () => {
      try {
        const promises = Array.from({ length: 5 }, (_, index) =>
          axios.get(`https://placehold.co/600x400?text=Image${index + 1}`)
        );

        const responses = await Promise.all(promises);
        const urls = responses.map(response => response.request.responseURL);
        const initialImages = urls.map(url => ({ url, likes: 0, dislikes: 0 }));

        setImages(initialImages);
      } catch (error) {
        console.error('Erro em pegar as imagens:', error);
      }
    };

    pegaDadosApi();
  }, []);

  const handleLike = () => {
    setImages(images.map((img, index) =>
      index === currentIndex ? { ...img, likes: img.likes + 1 } : img
    ));
  };

  const handleDislike = () => {
    setImages(images.map((img, index) =>
      index === currentIndex ? { ...img, dislikes: img.dislikes + 1 } : img
    ));
  };

  const handleIndexChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <main className="flex flex-col items-center justify-center flex-grow min-h-screen bg-gray-100 p-4 lg:p-8">
        <img src="logo.png" alt="Logo" className="h-[60px]"/>
        <h1 className="text-center mt-5 mb-4 text-3xl lg:text-4xl font-bold text-rose-600">Carrosel de Imagens</h1>
        <p className="text-base mb-3 text-gray-600 text-center">Clique nas setas para navegar pelas imagens e dê <strong>like</strong> nas imagens que gosta e <strong>dislike</strong> nas imagens que não gosta.</p>
        {images.length > 0 ? (
          <div className="w-full max-w-4xl">
            <Carousel
              showThumbs={false}
              infiniteLoop
              useKeyboardArrows
              autoPlay
              showIndicators={false}
              showStatus={false}
              onChange={handleIndexChange}
            >
              {images.map((img, index) => (
                <div key={index} className="relative flex flex-col items-center justify-center rounded-xl border-2 border-rose-500 p-4">
                  <img className="rounded-xl w-full h-auto max-h-[600px] object-contain" src={img.url} alt={`Placeholder ${index + 1}`} />
                  <div className="mt-4 flex space-x-4">
                    <button onClick={handleLike} className="bg-green-500 text-white px-4 py-2 rounded flex items-center space-x-2">
                      <AiFillLike /><span>Like</span>
                    </button>
                    <button onClick={handleDislike} className="bg-red-500 text-white px-4 py-2 rounded flex items-center space-x-2">
                      <AiFillDislike /><span>Dislike</span>
                    </button>
                  </div>
                </div>
              ))}
            </Carousel>
            <p className="text-xs text-gray-500 mt-4 text-center">* Desenvolvido por Guilherme Silveira.😁</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </main>
      <aside className="w-full lg:w-1/5 p-4 lg:p-5 bg-rose-600 border-t lg:border-t-0 lg:border-l border-gray-300 rounded-l-lg">
        <h2 className="text-xl font-semibold mb-4 text-white">Sumário</h2>
        {images.length > 0 ? (
          <ul>
            {images.map((img, index) => (
              <li key={index} className="mb-6 flex items-center text-white space-x-4">
                <img className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg border border-gray-300" src={img.url} alt={`Summary ${index + 1}`} />
                <div>
                  <div className="font-bold">Imagem {index + 1}</div>
                  <div>Likes: {img.likes}</div>
                  <div>Dislikes: {img.dislikes}</div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Sem imagens disponíveis :|</p>
        )}
      </aside>
    </div>
  );
};

export default Inicio;
