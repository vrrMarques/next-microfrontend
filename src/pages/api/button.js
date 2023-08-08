import { renderToString } from 'react-dom/server';
import Button from '../../components/Button';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const buttonStyles = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 20px',
    borderRadius:'10px'
  };
  const { label } = req.query;
  const buttonWithStyles = renderToString(<Button style={buttonStyles} className="custom-button" label={label} />);

  res.status(200).send(buttonWithStyles);
}
