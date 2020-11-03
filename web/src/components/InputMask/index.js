import React from "react";
import IntlCurrencyInput from "react-intl-currency-input";

const currencyConfig = {
  locale: "pt-BR",
  formats: {
    number: {
      BRL: {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      },
    },
  },
};

function InputMask({ onChange, maxValue }) {
  const handleChange = (event, value, maskedValue) => {
    event.preventDefault();
    console.log(value);
  };

  return (
    <IntlCurrencyInput
      currency="BRL"
      config={currencyConfig}
      onBlur={handleChange}
      max={maxValue}
    />
  );
}

export default InputMask;
