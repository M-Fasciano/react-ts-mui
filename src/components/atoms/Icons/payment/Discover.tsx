import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgDiscover = (props: SvgIconProps) => {
  const { ...other } = props;
  return (
    <SvgIcon
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <path
        d="M22.283 4H1.717C.77 4 0 4.86 0 5.92v12.16C0 19.14.769 20 1.717 20h20.566C23.23 20 24 19.14 24 18.08V5.92C24 4.86 23.231 4 22.283 4Z"
        fill="#fff"
      />
      <path
        d="M9.75 19.607 23.681 15.5v2.44c0 .921-.746 1.667-1.666 1.667H9.75Z"
        fill="#FD6020"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.105 10.08c.767 0 1.188.345 1.188.997a.931.931 0 0 1-.766.998l1.034 1.42h-.804l-.882-1.382H20.8v1.382h-.652v-3.416h.958Zm-.307 1.573h.192c.421 0 .613-.192.613-.537 0-.307-.192-.5-.613-.5h-.192v1.037Zm-2.913 1.842h1.84v-.576h-1.189V12h1.15v-.577h-1.15v-.767h1.188v-.576h-1.84v3.416Zm-1.916-1.113-.881-2.303h-.69l1.418 3.493h.344l1.418-3.493h-.69l-.92 2.303Zm-7.78-.576c0 .96.767 1.766 1.725 1.766.307 0 .575-.077.843-.192v-.768c-.191.23-.46.384-.766.384-.613 0-1.111-.46-1.111-1.075v-.076c-.039-.614.46-1.152 1.073-1.19.306 0 .613.154.804.384v-.768c-.23-.153-.536-.192-.804-.192-.997-.076-1.763.73-1.763 1.727Zm-1.187-.422c-.383-.153-.498-.23-.498-.422.038-.23.23-.422.46-.384.191 0 .383.115.536.269l.345-.46c-.268-.23-.613-.384-.958-.384-.537-.039-.997.383-1.035.92v.039c0 .46.192.73.805.921.153.038.307.115.46.192a.403.403 0 0 1 .191.345c0 .269-.23.5-.46.5H6.81a.757.757 0 0 1-.69-.461l-.421.422c.23.422.69.652 1.15.652.613.039 1.11-.422 1.15-1.036v-.115c-.04-.46-.23-.69-.997-.998Zm-2.224 2.11h.652V10.08h-.652v3.416ZM1.75 10.08H2.9c.92.038 1.648.806 1.61 1.726 0 .5-.23.96-.614 1.305-.345.269-.766.422-1.188.384H1.75V10.08Zm.843 2.84c.307.038.652-.077.882-.27.23-.23.345-.537.345-.882 0-.307-.115-.614-.345-.844a1.212 1.212 0 0 0-.882-.269h-.191v2.264h.191Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.964 10a1.76 1.76 0 0 0-1.763 1.765c0 .96.766 1.766 1.763 1.804.996.038 1.763-.768 1.8-1.765-.037-.998-.804-1.804-1.8-1.804Z"
        fill="#FD6020"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.283 4.5H1.717C1.096 4.5.5 5.082.5 5.92v12.16c0 .838.596 1.42 1.217 1.42h20.566c.621 0 1.217-.582 1.217-1.42V5.92c0-.838-.596-1.42-1.217-1.42ZM1.717 4h20.566C23.23 4 24 4.86 24 5.92v12.16c0 1.06-.769 1.92-1.717 1.92H1.717C.77 20 0 19.14 0 18.08V5.92C0 4.86.769 4 1.717 4Z"
        fill="#CCCFD9"
      />
    </SvgIcon>
  );
};
export default SvgDiscover;
