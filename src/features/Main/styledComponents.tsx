import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.background.primary};
  position: relative;
  z-index: -3;
  transition: background-color 0.5s ease-in;

  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  html {
    scrollbar-width: auto;
    scrollbar-color: var(--color-gray) var(--color-white);
  }

  /* Chrome, Edge, and Safari */
  html::-webkit-scrollbar {
    width: 16px;
  }

  html::-webkit-scrollbar-track {
    background: transparent;
  }

  html::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.background.primary};
    border-radius: 10px;
    border: 3px solid ${({ theme }) => theme.background.primary};
  }
`
