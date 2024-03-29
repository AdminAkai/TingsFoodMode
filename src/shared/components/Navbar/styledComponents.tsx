import styled from 'styled-components'
import { motion } from 'framer-motion'

export const NavbarContainer = styled(motion.nav)`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 0;
  background-color: inherit;
  padding: var(--spacing-large) calc(8px + 12.5vw);
  z-index: 3;
`
export const NavbarOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-extra-large);
`

export const NavbarSocials = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-extra-large);
`

export const FacebookIconContainer = styled.div`
  svg {
    fill: ${({ theme }) => theme.logo};
  }
`

export const InstagramIconContainer = styled.div`
  path {
    fill: ${({ theme }) => theme.logo};
  }
`
