import styled from 'styled-components'

const Button = styled.button`
  background: ${props => props.backgroundColor};
  color: ${props => props.color};
  border-radius: 3px;
  padding: 10px 15px;
  border: none;
  margin: 5px;
  font-size: 18px;
  outline: none;
  cursor: pointer;
`

Button.defaultProps = {
  color: 'black',
  backgroundColor: 'white'
}

export default Button
