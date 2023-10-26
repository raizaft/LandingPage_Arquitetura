import React from "react";

const callouts = [
  {
    name: "Projeto Arquitônico",
    description: "Projetos residenciais e comerciais",
    imageSrc: "img/casa02.png",
    imageAlt: "casa com área de lazer e piscina",
  },
  {
    name: "Design de Interiores",
    description: "Melhor aproveitamento de espaço",
    imageSrc: "img/int01.png",
    imageAlt: "quarto, cama de casal e pia",
  },
  {
    name: "Consultoria de Projeto",
    description: "Dicas, referências e melhoramentos",
    imageSrc: "img/int02.png",
    imageAlt: "sala com sofá, poltrona e mesa de centro",
  },
];

function Cards() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Serviços</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
