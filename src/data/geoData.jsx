import React from 'react'

const geoData = () => {
    const geoData = [
        {
          type: 'Feature',
          id: 'AFG',
          properties: { name: 'Afghanistan' },
          geometry: {
            type: 'Polygon',
            coordinates: [
              // Coordenadas del polígono de Afganistán
            ],
          },
        },
        {
          type: 'Feature',
          id: 'USA',
          properties: { name: 'United States' },
          geometry: {
            type: 'Polygon',
            coordinates: [
              // Coordenadas del polígono de Estados Unidos
            ],
          },
        },
        // Agregar más objetos Feature para más países si es necesario
      ];
      
  return (
    <div>
      
    </div>
  )
}

export default geoData
