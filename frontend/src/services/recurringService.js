export const generateRecurringTransactions = (userId) => {
  fetch(`/api/recurring/generate/${userId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => console.log('Recurring transactions added:', data))
    .catch(err => console.error('Error generating recurring transactions:', err));
};
