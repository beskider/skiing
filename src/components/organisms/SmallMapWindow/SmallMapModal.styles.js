import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: -1.2rem;
`

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
` 

export const modalStyle = {
  overlay: {
    zIndex: 450,
  },
  content: {
    boxShadow: 'rgba(100, 100, 111, 0.3) 0px 7px 29px 0px',
    backgroundColor: 'white',
    border: '2px solid rgb(240, 240, 240)',
    borderRadius: '12px',
    position: 'absolute',
    width: '80%',
    height: '90%',
    margin: 'auto',
  }
}

export const mapStyle = {
  height: "70%",
  width: "100%",
  margin: '1rem auto',
  cursor: 'crosshair'
}