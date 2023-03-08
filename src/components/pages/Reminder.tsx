import { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import Reminder from "../molecules/Reminder/Reminder";
import { useYupValidationResolver } from "../../utils/validationResolver";
import {
  IFormInputs,
  validationSchemaReminder,
} from "../../constant/formsValidation";

const StyledWrapper = styled("div")`
  margin: 2rem;
`;

const ReminderPage = () => {
  const resolver = useYupValidationResolver(validationSchemaReminder);
  const [checked, setChecked] = useState({ off: true, on: false });
  const [isVisible, setIsVisible] = useState<Boolean>(false);
  const [date, setDate] = useState<Dayjs | null>(dayjs(new Date()));
  const [hasPhone, setHasPhone] = useState<Boolean>(true);
  const [hasEmail, setHasEmail] = useState<Boolean>(true);
  const [countryCallingCode, setCountryCallingCode] = useState<string>("");
  const currentUserPhone = "7879 111111";
  const curentUserEmail = "test@test.com";

  const defaultValues = {
    phone: `${countryCallingCode} ${currentUserPhone}`,
    email: curentUserEmail,
    date: dayjs(date).format("DD/MM/YYYY"),
  };

  const {
    control,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>({
    mode: "onBlur",
    defaultValues,
    resolver,
  });

  const handleResetRadio = (e: any) => {
    setIsVisible(!isVisible);
    setChecked(() => {
      return {
        off: false,
        on: false,
        [e.target.value]: true,
      };
    });
  };

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    console.log({ data });
  };

  const handlePhoneCheckbox = (e: any) => {
    setValue("phone", "");
    setHasPhone(e.target.checked);
  };

  const handleEmailCheckbox = (e: any) => {
    setValue("email", "");
    setHasEmail(e.target.checked);
  };

  const resetForm = () => {
    reset(defaultValues);
  };

  useEffect(() => {
    if (!hasPhone && !hasEmail) {
      resetForm();
      setIsVisible(false);
      setChecked(() => ({ off: true, on: false }));
      setHasPhone(true);
      setHasEmail(true);
    }
  }, [hasEmail, hasPhone]);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((response) => {
        setValue(
          "phone",
          `${response.country_calling_code} ${currentUserPhone}`
        );
        setCountryCallingCode(response.country_calling_code);
      });
  }, [currentUserPhone, setValue]);

  return (
    <StyledWrapper>
      <Reminder
        control={control}
        handleSubmit={handleSubmit}
        getValues={getValues}
        errors={errors}
        handleResetRadio={handleResetRadio}
        onSubmit={onSubmit}
        handlePhoneCheckbox={handlePhoneCheckbox}
        handleEmailCheckbox={handleEmailCheckbox}
        checked={checked}
        setDate={setDate}
        date={date}
        isVisible={isVisible}
        setValue={setValue}
      />
    </StyledWrapper>
  );
};

export default ReminderPage;
