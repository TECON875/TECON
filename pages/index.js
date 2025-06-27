import React from "react";
import Card from "../components/ui/card";
import Button from "../components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function Home() {
  const affiliateLinks = [
    {
      title: "Fone Bluetooth Xiaomi",
      image: "https://m.media-amazon.com/images/I/61TQKZLTTXL._AC_SL1500_.jpg",
      description: "Fone de ouvido sem fio com cancelamento de ruído.",
      link: "https://amzn.to/link-afiliado1"
    },
    {
      title: "Smartwatch Amazfit",
      image: "https://m.media-amazon.com/images/I/71D9ImsvEtL._AC_SL1500_.jpg",
      description: "Relógio inteligente com monitor de saúde e GPS integrado.",
      link: "https://amzn.to/link-afiliado2"
    },
    {
      title: "Câmera de Segurança Wi-Fi",
      image: "https://m.media-amazon.com/images/I/61ZTzMEvZ5L._AC_SL1500_.jpg",
      description: "Câmera IP com visão noturna e controle via app.",
      link: "https://amzn.to/link-afiliado3"
    }
  ];

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
        TEC ON - Ofertas com Link de Afiliados
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {affiliateLinks.map((item, index) => (
          <Card key={index}>
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-2xl" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{item.description}</p>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <Button className="w-full gap-2">
                  <ShoppingCart size={18} /> Comprar Agora
                </Button>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
