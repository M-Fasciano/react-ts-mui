import React, { useEffect, useState } from "react";
import TextField from "../../atoms/TextField";
import {
  IconAmex,
  IconVisa,
  IconMastercard,
  IconDiscover,
  IconMaestro,
} from "../../atoms/Icons/payment";
import { TextFieldProps } from "../../atoms/TextField/TextField";
import { StyledIconPlaceholder } from "./PaymentInput.style";

interface CardType {
  type: string;
  regex: RegExp;
  icon: React.ReactNode;
}

const cardTypesMap: CardType[] = [
  {
    type: "visa",
    regex: /^4/,
    icon: <IconVisa />,
  },
  {
    type: "mastercard",
    regex: /^(5[1-5]|677189)|^(222[1-9]|2[3-6]\d{2}|27[0-1]\d|2720)/,
    icon: <IconMastercard />,
  },
  {
    type: "amex",
    regex: /^3[47]/,
    icon: <IconAmex />,
  },
  {
    type: "maestro",
    regex: /^(50|5[6-8]|6013|6[2-3]|67)/,
    icon: <IconMaestro />,
  },
  {
    type: "discover",
    regex: /^(6011|65|64[4-9]|622)/,
    icon: <IconDiscover />,
  },
];

export interface PaymentInputProps {
  onChange?: TextFieldProps["onChange"];
  value?: TextFieldProps["value"];
  defaultValue?: TextFieldProps["defaultValue"];
  placeholder?: TextFieldProps["placeholder"];
  disabled?: TextFieldProps["disabled"];
  error?: TextFieldProps["error"];
  helperText?: TextFieldProps["helperText"];
  name?: TextFieldProps["name"];
  ref?: TextFieldProps["ref"];
  id?: TextFieldProps["id"];
}

function PaymentInput(props: PaymentInputProps) {
  const { onChange, value, defaultValue, ...rest } = props;
  const [cardNumber, setCardNumber] = useState("");
  const [detectedCardType, setDetectedCardType] =
    useState<CardType["type"] | null>("");

  const getCardTypeByValue = (value: string) => {
    const formattedValue = value.replace(/\s/g, "");
    const type = cardTypesMap.find((cardType) =>
      cardType.regex.test(formattedValue)
    );

    if (type) {
      return type.type;
    }

    return null;
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const formattedNumber = input
      .replace(/\D/g, "")
      .match(/.{1,4}/g)
      ?.join(" ");
    setCardNumber(formattedNumber || "");
    setDetectedCardType(getCardTypeByValue(e.target.value));
    onChange && onChange(e);
  };

  const renderCardIcon = () => {
    const type = cardTypesMap.find(
      (cardType) => cardType.type === detectedCardType
    );
    return (
      <StyledIconPlaceholder>{type ? type.icon : null}</StyledIconPlaceholder>
    );
  };

  useEffect(() => {
    if (value || defaultValue) {
      const inputValue = value || defaultValue;
      setDetectedCardType(getCardTypeByValue(inputValue as string));
    }
  }, [value, defaultValue]);

  const paymentInputProps = {
    ...rest,
    value: cardNumber,
    defaultValue,
    onChange: handleOnChange,
    icon: renderCardIcon(),
  };

  return (
    <TextField
      iconPosition="right"
      {...paymentInputProps}
      inputProps={{
        maxLength: 19,
      }}
    />
  );
}

export default PaymentInput;
