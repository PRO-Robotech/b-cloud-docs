import React, { useState } from 'react';
import { default as MonacoEditor } from '@monaco-editor/react'; // Ensure correct import

interface YamlModalProps {
  yamlContent: string;
  onCloseOtherModals?: () => void; // Callback to close other modals
}

const YamlModal: React.FC<YamlModalProps> = ({ yamlContent, onCloseOtherModals }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleOpen = () => {
    if (onCloseOtherModals) {
      onCloseOtherModals(); // Close other modals before opening this one
    }
    setIsOpen(true);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(yamlContent).then(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 2000); // Hide notification after 2 seconds
    });
  };

  return (
    <>
      <button
        onClick={handleOpen}
        style={{
          whiteSpace: 'nowrap',
          padding: '0.35rem 0.75rem',
          backgroundColor: '#2b2b2b',
          color: '#fff',
          border: '1px solid #555',
          borderRadius: '6px',
          fontSize: '0.85rem',
          fontWeight: 500,
          cursor: 'pointer',
        }}
      >
        Открыть пример
      </button>
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <dialog
            open
            style={{
              border: 'none',
              padding: '0',
              background: '#1e1e1e',
              borderRadius: '8px',
              maxWidth: '960px',
              width: '90vw',
              height: 'auto',
              maxHeight: '90vh',
              overflow: 'hidden',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ padding: '1rem', fontWeight: 'bold', color: '#ccc' }}>
                Пример политики
              </div>
              <div style={{ flex: 1, overflow: 'auto' }}>
                <MonacoEditor
                  height="300px" // Set a fixed height for the editor
                  defaultLanguage="yaml"
                  defaultValue={yamlContent}
                  theme="vs-dark" // Explicitly set the theme here
                  options={{
                    readOnly: true, // Allow editing and copying
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    fontFamily: '"Fira Code", "Courier New", monospace', // Set a font suitable for code
                    fontSize: 16, // Adjust font size for better readability
                  }}
                />
              </div>
              <form method="dialog" style={{ textAlign: 'right', padding: '0.5rem 1rem' }}>
                <button
                  type="button"
                  onClick={handleCopyToClipboard}
                  style={{
                    marginRight: '0.5rem',
                    padding: '0.4rem 0.8rem',
                    background: '#007acc',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                  }}
                >
                  Скопировать
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  style={{
                    padding: '0.4rem 0.8rem',
                    background: '#444',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    fontSize: '0.85rem',
                  }}
                >
                  Закрыть
                </button>
              </form>
            </div>
          </dialog>
        </div>
      )}
      {showNotification && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#007acc',
            color: '#fff',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            fontSize: '0.85rem',
            zIndex: 1100,
          }}
        >
          Сохранено в буфер обмена
        </div>
      )}
    </>
  );
};

export default YamlModal;
