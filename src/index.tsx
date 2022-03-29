import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import { App } from 'App';
import { Web3WalletProvider } from 'web3/wallets/provider';

ReactDOM.render(
	<Web3WalletProvider>
		<App />
	</Web3WalletProvider>,

	document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
