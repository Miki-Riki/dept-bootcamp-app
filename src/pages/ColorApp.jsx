import { useState, useEffect } from 'react';
import client from '../api/client';
import { savePalette, loadPalette } from '../utils/storage';

export default function ColorApp() {
  const [colors, setColors] = useState([]);
  const [palette, setPalette] = useState(() => loadPalette());
  const [error, setError] = useState('');

  const fetchColors = async () => {
    try {
      const response = await client.get('/api/colors?limit=10');

      // Convert hex strings to objects for consistency
      const colorObjects = response.data.data.map(hex => ({ hex }));

      setColors(colorObjects);
      setError('');
    } catch (err) {
      setError('Failed to fetch colors. Are you logged in?');
      console.error(err);
    }
  };

  useEffect(() => {
    savePalette(palette);
  }, [palette]);

  const saveColor = (color) => {
    if (!palette.some(c => c.hex === color.hex)) {
      setPalette([...palette, color]);
    }
  };

  const removeColor = (hex) => {
    setPalette(palette.filter(c => c.hex !== hex));
  };

  return (
    <div className='palette-container'
      style={{
        padding: 20,
        margin: 15,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        boxSizing: 'border-box',
      }}
    >
      <button className='fetch-btn'
        onClick={fetchColors}
        style={{ padding: '10px 20px', marginBottom: 20 }}
      >
        Fetch Colors
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 10,
          marginBottom: 30,
          justifyContent: 'center',
        }}
      >
        {colors.map((color) => (
          <div
            key={color.id}
            style={{
              backgroundColor: color.hex,
              width: 100,
              height: 100,
              borderRadius: 8,
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: '0 0 5px rgba(0,0,0,0.3)',
            }}
          >
            <p>{color.name}</p>
            <p>{color.hex}</p>
            <button className='save-btn' onClick={() => saveColor(color)} style={{ marginTop: 10 }}>
              Save
            </button>
          </div>
        ))}
      </div>

      <h3>Your Palette</h3>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 10,
          justifyContent: 'center',
        }}
      >
        {palette.map((color, index) => {
          const hex = color.hex || '#000000';
          return (
            <div
              key={`${hex}-${index}`}
              style={{
                backgroundColor: hex,
                width: 100,
                height: 100,
                borderRadius: 8,
                color: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                boxShadow: '0 0 5px rgba(0,0,0,0.3)',
              }}
            >
              <p>{hex}</p>
              <button
                onClick={() => removeColor(hex)}
                style={{
                  position: 'absolute',
                  top: 5,
                  right: 5,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  border: 'none',
                  color: 'white',
                  borderRadius: '50%',
                  width: 20,
                  height: 20,
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
                aria-label={`Remove color ${hex}`}
              >
                ×
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );

}
