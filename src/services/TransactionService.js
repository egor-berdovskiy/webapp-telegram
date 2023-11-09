import config from "./config";


const headers = {
    'Bypass-Tunnel-Reminder': 'bla-bla',
    'ngrok-skip-browser-warning': 'bla-bla',
}

class TransactionService {
    static async fetchAllTransactions(bank_id) {
        const url = `${config.API_URL}${config.API_VERSION}/transactions/filter/${bank_id}/`;
        try {
            const response = await fetch(url, { headers })
            if (response.ok) {
                return response.json();
            } else if (response.status === 404) {
                throw new Error('Not Found!');
            } else {
                throw new Error('Network Error!');
            }
        } catch (error) {
            throw error;
        }
    }

    static async fetchTransactionDetail(transaction_id) {
        const url = `${config.API_URL}${config.API_VERSION}/transactions/filter/detail/${transaction_id}/`;
    }
};

export default TransactionService;
