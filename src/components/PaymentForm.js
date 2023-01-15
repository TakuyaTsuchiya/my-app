import React, { useState } from 'react';

function PaymentForm() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // APIを使ってカード決済を実行する処理を書く
    console.log(cardNumber, expiryDate, cvv);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        カード番号:
        <input
          type="text"
          value={cardNumber}
          onChange={event => setCardNumber(event.target.value)}
        />
      </label>
      <br />
      <label>
        有効期限:
        <input
          type="text"
          value={expiryDate}
          onChange={event => setExpiryDate(event.target.value)}
        />
      </label>
      <br />
      <label>
        セキュリティコード:
        <input
          type="text"
          value={cvv}
          onChange={event => setCvv(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">決済を実行する</button>
    </form>
  );
}

export default PaymentForm;
