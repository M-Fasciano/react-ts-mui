import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
const SvgKlarna = (props: SvgIconProps) => {
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
        fill="#FFB3C7"
      />
      <path
        d="M20.697 12.92c-.286 0-.518.208-.518.464 0 .257.232.465.518.465.287 0 .52-.208.52-.465 0-.256-.233-.464-.52-.464Zm-1.706-.36c0-.35-.335-.636-.748-.636-.414 0-.749.285-.749.636 0 .352.335.637.749.637.413 0 .748-.285.748-.636Zm.003-1.236h.826v2.473h-.826v-.158a1.569 1.569 0 0 1-.819.226c-.804 0-1.456-.584-1.456-1.305 0-.72.652-1.304 1.456-1.304.304 0 .586.084.819.226v-.158Zm-6.612.322v-.322h-.846v2.473h.848v-1.155c0-.39.471-.598.798-.598h.01v-.72c-.336 0-.644.13-.81.322Zm-2.107.914c0-.35-.335-.636-.749-.636-.413 0-.748.285-.748.636 0 .352.335.637.748.637.414 0 .749-.285.749-.636Zm.003-1.236h.826v2.473h-.826v-.158a1.57 1.57 0 0 1-.82.226c-.804 0-1.456-.584-1.456-1.305 0-.72.652-1.304 1.457-1.304.303 0 .585.084.819.226v-.158Zm4.973-.066c-.33 0-.643.092-.852.345v-.279h-.822v2.473h.833v-1.3c0-.376.281-.56.62-.56.363 0 .572.195.572.555v1.305h.825v-1.573c0-.575-.51-.966-1.176-.966Zm-8.452 2.539h.865v-3.575h-.865v3.575Zm-3.799 0h.916v-3.575H3v3.576Zm3.203-3.575c0 .774-.337 1.494-.937 2.03l1.266 1.546H5.4l-1.376-1.68.355-.24c.59-.394.927-.998.927-1.656h.896Z"
        fill="#0A0B09"
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
export default SvgKlarna;
