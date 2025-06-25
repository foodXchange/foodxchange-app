import React, { useState } from 'react';

const DataImport = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage('');
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Please select a file first');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/api/import/simple', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      
      if (result.success) {
        setMessage(`Success! Imported ${result.count} products`);
      } else {
        setMessage(`Error: ${result.error}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Import Products from Excel</h1>
      
      <div style={{ 
        border: '2px dashed #ccc', 
        padding: '2rem', 
        textAlign: 'center',
        marginBottom: '1rem'
      }}>
        <input 
          type="file" 
          accept=".xlsx,.xls,.csv"
          onChange={handleFileChange}
          style={{ marginBottom: '1rem' }}
        />
        
        {file && (
          <p>Selected: {file.name}</p>
        )}
      </div>
      
      <button 
        onClick={handleUpload}
        disabled={!file || loading}
        style={{
          width: '100%',
          padding: '1rem',
          backgroundColor: loading ? '#ccc' : '#f97316',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontSize: '1rem'
        }}
      >
        {loading ? 'Importing...' : 'Import File'}
      </button>
      
      {message && (
        <div style={{
          marginTop: '1rem',
          padding: '1rem',
          backgroundColor: message.includes('Success') ? '#d4edda' : '#f8d7da',
          color: message.includes('Success') ? '#155724' : '#721c24',
          borderRadius: '4px'
        }}>
          {message}
        </div>
      )}
      
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0f0f0', borderRadius: '4px' }}>
        <h3>Excel File Format:</h3>
        <p>Your Excel file can have any columns. Common columns:</p>
        <ul style={{ textAlign: 'left' }}>
          <li>name (or Product Name)</li>
          <li>description</li>
          <li>price</li>
          <li>category</li>
          <li>Any other columns you want!</li>
        </ul>
      </div>
    </div>
  );
};

export default DataImport;
